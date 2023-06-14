---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "The Home Loan Model"
description: "For most of us, our home is our biggest financial investment, and as such, it requires considerable planning and consideration."
keywords:
- "home loan model"
- "home loan"
- "home loan calculation"
date: 2023-06-11
publishDate: 2023-06-11
lastmod: 2023-06-13
slug: the-home-loan-model
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series_1
# -  series_2
tags:
- "Money"
- "Economics"
- "Home Loan"
draft: false
# Template specific - Minimo Theme
toc: true
cover:
  image: /images/covers/cover-home-sweet-home.png
  caption: "Home Sweet Home"
  style: full
---

For most of us, our home is our biggest financial investment, and as such, it requires considerable planning and consideration. Small changes to our mortgage can significantly impact our lifestyles and financial position into the future. To better understand these factors, I created a home loan model with a sensitivity and two-dimensional matrix of monthly instalments as interest rates and property values change.

I am sharing this model with the world to help others better how interest, duration, and value impact their home loan over time.

> Download Home Loan Model (Rev 00.00): {{< download url="home_loan_model_0000.ods" />}}

The model has six parts to it:

1. Repayments: How much can I put towards the loan each month
2. Purchase Costs: How much does it cost to buy a house
3. Base Case: Based on the value of the property, my deposit and loan details, and what does the loan look like
4. Ledger: Interest and principal payments over time
5. Sensitivity: How does the duration, price and interest affect repayments
6. Matrix: Two-dimensional comparison of interest and property value on monthly instalments

## 1. Available Repayment Calculation

This tab calculates the available repayment by adding up your income and expenses to determine what you have left for loan repayments. It feeds into the variance (over/under) against required instalments in the base case, sensitivity and matrix tabs.

## 2. Home Purchase Costs

This tab adds up the purchase costs for a property. It feeds into the loan value by adding to the loan value. A helpful website to review purchase costs, and what I based this on, is [My Future Home](https://myfuturehome.com.au/).

## 3. Base Case - Scenario

This tab calculates the base case loan scenario. It requires you to input, in grey, the following:

1. Deposit: How much have you saved up
2. Property Value: How much is the property you are looking to purchase
3. Interest: What is the base case interest per year
4. Period: Over how many years are you going to pay off the loan
5. Start: When does the loan start
6. Frequency: How many times a year will you be making instalments

The model will then calculate the following:

1. Loan Value: How much will I have to borrow for the base case;
2. LVR: What is the Loan to Value Ratio (LVR) of the loan;
3. Total Loan: What is the accumulated interest plus loan value;
4. Instalment: What is the required instalment required for the loan;
5. Variance: Based on the available repayment, what is the over/under against required instalments;
6. Serviceability: What will the bank be evaluating my loan at;
7. Stress Test: Based on 40% of my income, what is the variance against required instalments;

## 4. Base Case - Ledger

This tab lists each instalment, including the following:

1. Loan balance before the instalment;
2. Total instalment paid;
3. Interest paid within the instalment;
4. Principal paid down within the instalment;
5. Ending balance after principal paid;
6. Cumulative interest up to that instalment

## 5. Base Case - Sensitivity

This tab takes the base case scenario and aims to give you an understanding of how monthly instalments, accumulative interest and total instalments are affected by the following:

1. Duration of the loan
2. Interests on the loan
3. Property value of the loan

## 6. Interest Matrix

This tab takes the base case and provides two-dimensional matrices of monthly instalments and monthly variance based on the property value and annual interest.
