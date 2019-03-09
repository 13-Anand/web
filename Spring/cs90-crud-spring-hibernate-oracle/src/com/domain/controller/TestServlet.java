package com.domain.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//@WebServlet("/testController")
public class TestServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter printWriter = response.getWriter();
		printWriter.println("<h1>This is a Test Controller</h1>");
		System.out.println("get method");
		printWriter.println("get method");
		printWriter.println(request.getParameter("firstname"));
		printWriter.println(request.getParameter("lastname"));
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter printWriter = response.getWriter();
		printWriter.println("<h1>This is a Test Controller</h1>");
		System.out.println("post method");
		printWriter.println("post method");
		printWriter.println(request.getParameter("firstname"));
		printWriter.println(request.getParameter("lastname"));
	}
}
