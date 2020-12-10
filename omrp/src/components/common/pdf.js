import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#f5f4f0",
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 0,
  },
});

// Create Document Component
const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
          <Text>Sksdkjsndnjsidsknkjskjnjkjdnkjskjnkjsndkjfnkjdssnksd</Text>
          <Text>Sksdkjsndnjsidsknkjskjnjkjdnkjskjnkjsndkjfnkjdssnksd</Text>
          <Text>Sksdkjsndnjsidsknkjskjnjkjdnkjskjnkjsndkjfnkjdssnksd</Text>
          <Text>Sksdkjsndnjsidsknkjskjnjkjdnkjskjnkjsndkjfnkjdssnksd</Text>

          <Text>Sksdkjsndnjsidsknkjskjnjkjdnkjskjnkjsndkjfnkjdssnksd</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};
export default MyDocument;
