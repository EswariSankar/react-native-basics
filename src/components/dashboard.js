import React, { useState, useEffect } from "react";
import {
  StyleSheet, View, Text, FlatList,
  Image, ActivityIndicator, SafeAreaView
} from "react-native";
import api from "../api/api";

export default function Dashboard({ navigation, token }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // ✅ using api.js — token auto-attached by interceptor
      const res = await api.get("/products?limit=20");
      console.log("PRODUCTS RESPONSE:", res.data.products.length);
      setProducts(res.data.products);
    } catch (err) {
      const message =
        err?.response?.data?.message || "Failed to load products.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="rgb(129, 53, 190)" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
}

function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <ProductInfo product={product} />
    </View>
  );
}

function ProductInfo({ product }) {
  return (
    <View style={styles.info}>
      <Text style={styles.productTitle} numberOfLines={1}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: {
    fontSize: 22, fontWeight: "700", margin: 16, color: "rgb(129, 53, 190)"
  },
  loadingText: { marginTop: 10, color: "#666" },
  errorText: { color: "red", fontSize: 16 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 10, justifyContent: "center" },
  productTitle: { fontSize: 15, fontWeight: "600", color: "#222" },
  category: { fontSize: 12, color: "#888", marginTop: 2, textTransform: "capitalize" },
  price: { fontSize: 16, fontWeight: "700", color: "rgb(129, 53, 190)", marginTop: 4 },
  rating: { fontSize: 13, color: "#555", marginTop: 2 },
});
