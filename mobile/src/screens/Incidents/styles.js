import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 20
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  textSpan:{
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    marginTop: 48,
    marginBottom: 16,
    color: '#13131A',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32
  },
  incident: {
    padding: 24,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 15,
    color: '#41414D',
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 14,
    marginBottom: 24,
    color: '#737380'
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  },

  loading: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
  }
});