import { StyleSheet } from 'react-native';
import {colors} from '../../styles/color';


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  priority: {
    fontSize: 12,
    color: '#f00',
    marginTop: 8,
  },
});

export default styles;
