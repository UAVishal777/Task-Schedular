import React from 'react';
import { View, Text } from 'react-native';
import styles from './TaskCardStyle';
import { TaskCardProps } from './TaskCardTypes';

const TaskCard = ({ title, description, priority }: TaskCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.priority}>Priority: {priority}</Text>
    </View>
  );
};

export default TaskCard;
