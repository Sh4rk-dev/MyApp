import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  dateEvent: {
    color: "#ccc",
    fontSize: 15,
    fontWeight: "200",
  },
  input: {
    flex: 1,
    color: "#fdfcfe",
    marginRight: 12,
    height: 56,
    padding: 16,
    borderRadius: 7,
    fontSize: 16,
    backgroundColor: "#1f1e25",
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
    flexDirection: "row",
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }
});
