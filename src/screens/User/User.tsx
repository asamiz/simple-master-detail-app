import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { getActivities, getDeals } from 'api';
import { Section } from 'components';
import { RFValue } from 'src/utils/responsive';
import { COLORS } from 'theme';
import { ActivityData, DealData, UserScreenRouteProp } from 'types';

const User = () => {
  const { params } = useRoute<UserScreenRouteProp>();
  const { user } = params;

  const { data: activities } = useQuery<ActivityData[], Error>(
    ['activities', user.id],
    () => getActivities(user.id),
  );
  const { data: deals } = useQuery<DealData[], Error>(['deals', user.id], () =>
    getDeals(user.id),
  );

  const hasContactInfo = user.phone.some(item => item.label !== undefined);

  const onCallNumber = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topView}>
        {user.picture_id?.pictures[512] ? (
          <FastImage
            testID="user-image"
            source={{ uri: user.picture_id?.pictures[512] }}
            style={styles.imageContainer}
          />
        ) : (
          <View style={styles.imageContainer} testID="user-image-placeholder">
            <Text style={styles.imagePlaceHolderText}>
              {user.first_char.toUpperCase()}
            </Text>
          </View>
        )}
        <View style={styles.nameContainer}>
          <Text testID="user-name" style={styles.name}>
            {user.name}
          </Text>
          {user.email[0].value !== '' && (
            <View style={styles.emailContainer}>
              <Icon
                name="mail-outline"
                size={RFValue(16)}
                color={COLORS.text}
              />
              <Text testID="user-email" style={styles.email}>
                {user.email[0].value}
              </Text>
            </View>
          )}
        </View>
      </View>
      <Section title="Organization" iconName="corporate-fare">
        <Text style={styles.sectionKey}>{`Name: ${user.org_id.name}`}</Text>
        <Text
          style={[
            styles.sectionKey,
            user.org_id.active_flag
              ? { color: COLORS.primary }
              : { color: COLORS.critical },
          ]}
        >
          {`Active: ${user.org_id.active_flag ? 'Yes' : 'No'}`}
        </Text>
        <Text
          style={styles.sectionKey}
        >{`Email: ${user.org_id.cc_email}`}</Text>
      </Section>
      <Section testID="contact-info-section" title="Contact" iconName="phone">
        {hasContactInfo ? (
          <View>
            {user.phone.map(item => (
              <View style={styles.contactContainer} key={item.value}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => onCallNumber(item.value)}
                >
                  <Text style={styles.callText}>{'Call'}</Text>
                </TouchableOpacity>
                <Text style={styles.numberText}>
                  {`(${item.label}): ${item.value}`}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text testID="no-contact-info-text" style={styles.noInfoText}>
            {'This user has no contact information'}
          </Text>
        )}
      </Section>
      <Section
        testID="user-activities"
        title="Activities"
        iconName="calendar-today"
      >
        {!activities ? (
          <Text style={styles.noInfoText}>
            {'This user does not have any activities'}
          </Text>
        ) : (
          <View testID="user-activities-list">
            {activities.map(activity => (
              <View key={activity.id} style={styles.dealActivityContainer}>
                <View style={styles.topActivityView}>
                  <Text style={styles.activityTitle}>{activity.type}</Text>
                  <Text
                    style={[styles.activityDetailsText, styles.activityDate]}
                  >
                    {dayjs(activity.due_date).format('ddd')}
                  </Text>
                </View>
                <Text style={styles.activityDetailsText}>
                  {`With: ${activity.owner_name}`}
                </Text>
                <Text style={styles.activityDetailsText}>
                  {`organization: ${activity.org_name}`}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Section>
      <Section testID="user-deals" title="Deals" iconName="money">
        {!deals ? (
          <Text style={styles.noInfoText}>
            {'This user does not have any deals'}
          </Text>
        ) : (
          <View testID="user-deals-list">
            {deals.map(deal => (
              <View style={styles.dealActivityContainer} key={deal.id}>
                <Text style={styles.dealTitle}>{deal.title}</Text>
                <Text
                  style={styles.dealValue}
                >{`${deal.currency} ${deal.value}`}</Text>
              </View>
            ))}
          </View>
        )}
      </Section>
    </ScrollView>
  );
};

export default User;
