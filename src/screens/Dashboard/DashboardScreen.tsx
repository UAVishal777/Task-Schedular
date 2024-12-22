import React from 'react';
import { View, FlatList, Text } from 'react-native';
import {TaskCardProps} from '../../components/TaskCard/TaskCardTypes';
import styles from './DashboardStyle';
import TaskCard from '../../components/TaskCard/TaskCard'
import { DashboardScreenProps } from './DashboardType';

const DashboardScreen = () => {
  
  const tasks: TaskCardProps[] = [
    { title: 'Buy Groceries', description: 'Milk, Eggs, Bread', priority: 'High' },
    { title: 'Pay Bills', description: 'Electricity and Water', priority: 'Medium' },
    { title: 'Clean Room', description: 'Vacuum and dusting', priority: 'Low' },
  ];
  const renderTaskCard = ({ item }: { item: TaskCardProps }) => (
    <TaskCard title={item.title} description={item.description} priority={item.priority} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={renderTaskCard}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyMessage}>No tasks available</Text>
      )}
    </View>
  );
};

export default DashboardScreen;

