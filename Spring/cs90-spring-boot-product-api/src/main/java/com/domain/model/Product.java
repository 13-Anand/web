package com.domain.model;

public class Product {
	private String productId;
	private String productName;
	private float price;
	private float starRating;
	public float getStarRating() {
		return starRating;
	}
	public void setStarRating(float starRating) {
		this.starRating = starRating;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	private String image;
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getProductId() {
		return productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName="
				+ productName + "]";
	}
}