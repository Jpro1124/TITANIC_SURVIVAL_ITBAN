# Titanic Passenger Survival Analytics Documentation

## Title Page

Project Title: Descriptive and Diagnostic Analytics on Titanic Passenger Survival  
Course/Activity: ITBAN 3 Documentation and ITBAN 4 Implementation  
Dataset: Titanic Passenger Survival Dataset  
Tools Used: Python, pandas, NumPy, matplotlib, seaborn, Jupyter Notebook  
Notebook Files: `cleandata.ipynb`, `titanic.ipynb`  
Data Files: `Titanic-Dataset.csv`, `titanic_cleaned.csv`

## 1. Executive Summary

This project analyzes the Titanic passenger survival dataset using descriptive and diagnostic analytics in Python. The objective is to understand what happened to passengers in terms of survival and to identify factors associated with survival outcomes.

The raw dataset contains 891 passenger records and 12 columns. The data was cleaned by handling missing values, removing unnecessary identifier columns, and creating new analytical features such as `FamilySize`, `IsAlone`, `AgeGroup`, `FareGroup`, `HasCabin`, and `Deck`.

After cleaning, the final dataset contains 891 rows and 14 columns with zero missing values. The analysis found that 342 passengers survived and 549 did not survive, producing an overall survival rate of 38.38 percent. Survival was strongly associated with sex, passenger class, fare group, cabin record availability, age group, and family size.

## 2. Introduction

The Titanic disaster is one of the most widely studied historical events in data analytics. Passenger records provide useful information for understanding how demographic and travel-related factors were associated with survival.

This project applies Python-based analytics to answer two main types of questions:

- Descriptive analytics: What happened in the dataset?
- Diagnostic analytics: What factors may help explain differences in survival?

The project follows a typical data analytics workflow: data collection, data inspection, data cleaning, feature engineering, visualization, analysis, and interpretation.

## 3. Project Objectives

The objectives of this project are:

1. Use a real-world dataset with at least 500 rows and 6 columns.
2. Clean and prepare the dataset using Python.
3. Apply descriptive analytics to summarize passenger survival patterns.
4. Apply diagnostic analytics to compare survival rates across passenger groups.
5. Create visualizations using matplotlib and seaborn.
6. Interpret the results in a clear analyst-style report.
7. Prepare a notebook and final video walkthrough where all members participate.

### 3.1 Project Timeline

| Date | Task |
|---|---|
| May 19 | Choose dataset, download, and create notebook. |
| May 20 | Finish data cleaning and descriptive analytics. |
| May 21 | Finish diagnostic analytics and charts. |
| May 22 | Complete documentation and rehearse video. |
| May 23 | Record demo, review files, and submit before 11:59 PM. |

## 4. Dataset Description

The dataset used in this project is the Titanic passenger survival dataset. It contains information about passengers aboard the Titanic, including whether they survived.

Raw dataset file: `Titanic-Dataset.csv`  
Cleaned dataset file: `titanic_cleaned.csv`

### 4.1 Raw Dataset Size

| Item | Value |
|---|---:|
| Rows | 891 |
| Columns | 12 |
| Fully duplicated records | 0 |

### 4.2 Raw Dataset Columns

| Column | Description |
|---|---|
| PassengerId | Unique passenger identifier |
| Survived | Survival outcome, where 0 = did not survive and 1 = survived |
| Pclass | Passenger class: 1st, 2nd, or 3rd |
| Name | Passenger name |
| Sex | Passenger sex |
| Age | Passenger age |
| SibSp | Number of siblings or spouses aboard |
| Parch | Number of parents or children aboard |
| Ticket | Ticket number |
| Fare | Passenger fare |
| Cabin | Cabin number |
| Embarked | Port of embarkation |

### 4.3 Missing Values in Raw Dataset

| Column | Missing Values |
|---|---:|
| Cabin | 687 |
| Age | 177 |
| Embarked | 2 |

The other columns had no missing values.

## 5. Tools and Libraries

The implementation used the following tools:

| Tool or Library | Purpose |
|---|---|
| Python | Main programming language |
| pandas | Data loading, cleaning, grouping, and analysis |
| NumPy | Numerical operations and feature creation |
| matplotlib | Chart creation |
| seaborn | Statistical visualizations |
| Jupyter Notebook | Interactive analysis and presentation |

## 6. Methodology

The workflow followed these steps:

1. Load the raw Titanic dataset.
2. Inspect dataset shape, columns, data types, missing values, and duplicates.
3. Handle missing values in `Age`, `Embarked`, and `Cabin`.
4. Create new features for analysis.
5. Save the cleaned dataset.
6. Perform descriptive analytics using counts, distributions, and charts.
7. Perform diagnostic analytics using survival rates by group.
8. Run correlation analysis to identify variables associated with survival.
9. Summarize findings and limitations.

## 7. Data Cleaning Process

### 7.1 Duplicate Check

The raw dataset had 0 fully duplicated passenger records. Duplicate-looking rows may appear after removing identifiers, but this does not mean the original raw passenger records were duplicates.

### 7.2 Missing Age Values

The `Age` column had 177 missing values. Missing ages were filled using the median age grouped by `Sex` and `Pclass`. This method is more context-aware than using a single overall age average because passenger age patterns may differ across sex and class.

### 7.3 Missing Embarked Values

The `Embarked` column had 2 missing values. These were filled using the mode, or most common embarkation value.

### 7.4 Cabin Feature Handling

The `Cabin` column had 687 missing values, so directly using the raw cabin number would not be effective. Instead, two features were created:

| New Feature | Purpose |
|---|---|
| HasCabin | Indicates whether cabin information was recorded |
| Deck | Extracts the first letter of the cabin as a deck category, with missing values labeled as `Unknown` |

After these features were created, the original `Cabin` column was removed.

### 7.5 Feature Engineering

The following new features were created:

| Feature | Formula or Description |
|---|---|
| FamilySize | `SibSp + Parch + 1` |
| IsAlone | 1 if `FamilySize` is 1, otherwise 0 |
| AgeGroup | Age categorized as Child, Teen, Young Adult, Adult, or Senior |
| FareGroup | Fare divided into four groups: Low Fare, Medium Fare, High Fare, Very High Fare |
| HasCabin | 1 if cabin information exists, otherwise 0 |
| Deck | Cabin deck letter or Unknown |

### 7.6 Removed Columns

The columns `PassengerId`, `Name`, and `Ticket` were removed from the cleaned dataset because they are identifiers and are not directly useful for the descriptive and diagnostic analytics performed in the notebook.

### 7.7 Final Cleaned Dataset

| Item | Value |
|---|---:|
| Rows | 891 |
| Columns | 14 |
| Missing values | 0 |

Final columns:

`Survived`, `Pclass`, `Sex`, `Age`, `SibSp`, `Parch`, `Fare`, `Embarked`, `HasCabin`, `Deck`, `FamilySize`, `IsAlone`, `AgeGroup`, `FareGroup`

## 8. Descriptive Analytics

Descriptive analytics was used to summarize what happened in the dataset.

### 8.1 Overall Survival

| Outcome | Count |
|---|---:|
| Did not survive | 549 |
| Survived | 342 |

Overall survival rate: 38.38 percent

This shows that most passengers in the dataset did not survive.

### 8.2 Passenger Sex

| Sex | Passenger Count | Survival Rate |
|---|---:|---:|
| Female | 314 | 74.20% |
| Male | 577 | 18.89% |

The dataset had more male passengers than female passengers, but female passengers had a much higher survival rate.

### 8.3 Passenger Class

| Passenger Class | Passenger Count | Survival Rate |
|---|---:|---:|
| 1st class | 216 | 62.96% |
| 2nd class | 184 | 47.28% |
| 3rd class | 491 | 24.24% |

First-class passengers had the highest survival rate, while third-class passengers had the lowest.

### 8.4 Age Group

| Age Group | Passenger Count | Survival Rate |
|---|---:|---:|
| Child | 69 | 57.97% |
| Teen | 70 | 42.86% |
| Young Adult | 514 | 35.80% |
| Adult | 216 | 38.43% |
| Senior | 22 | 22.73% |

Children had the highest survival rate among the age groups, while seniors had the lowest.

## 9. Diagnostic Analytics

Diagnostic analytics was used to compare survival rates across groups and identify possible factors associated with survival.

### 9.1 Survival by Sex

Female passengers had a survival rate of 74.20 percent, compared with 18.89 percent for male passengers. This suggests that sex was strongly associated with survival.

### 9.2 Survival by Passenger Class

Survival rate decreased from first class to third class. First-class passengers had a 62.96 percent survival rate, while third-class passengers had only 24.24 percent. This suggests that passenger class was an important factor related to survival.

### 9.3 Survival by Fare Group

| Fare Group | Passenger Count | Survival Rate |
|---|---:|---:|
| Low Fare | 223 | 19.73% |
| Medium Fare | 224 | 30.36% |
| High Fare | 222 | 45.50% |
| Very High Fare | 222 | 58.11% |

Passengers who paid higher fares generally had higher survival rates. This may be connected to passenger class and cabin location.

### 9.4 Survival by Family Size

| Family Size | Passenger Count | Survival Rate |
|---|---:|---:|
| 1 | 537 | 30.35% |
| 2 | 161 | 55.28% |
| 3 | 102 | 57.84% |
| 4 | 29 | 72.41% |
| 5 | 15 | 20.00% |
| 6 | 22 | 13.64% |
| 7 | 12 | 33.33% |
| 8 | 6 | 0.00% |
| 11 | 7 | 0.00% |

Passengers traveling alone had lower survival rates than passengers with small family groups. Very large family groups had low survival rates, possibly because evacuation was more difficult for large groups.

### 9.5 Survival by Cabin Record Availability

| Has Cabin Record | Passenger Count | Survival Rate |
|---|---:|---:|
| No | 687 | 29.99% |
| Yes | 204 | 66.67% |

Passengers with recorded cabin information had a higher survival rate. However, this should not be interpreted as direct causation because cabin information is also related to class and fare.

## 10. Correlation Analysis

The correlation analysis converted categorical variables into numeric or dummy variables where needed. The strongest positive and negative relationships with `Survived` were reviewed.

### 10.1 Stronger Positive Correlations with Survival

| Variable | Correlation |
|---|---:|
| Sex | 0.543 |
| HasCabin | 0.317 |
| Fare | 0.257 |
| FareGroup_Very High Fare | 0.234 |
| Deck_B | 0.175 |
| Deck_D | 0.151 |
| Deck_E | 0.145 |

### 10.2 Stronger Negative Correlations with Survival

| Variable | Correlation |
|---|---:|
| Pclass | -0.338 |
| Deck_Unknown | -0.317 |
| FareGroup_Low Fare | -0.222 |
| IsAlone | -0.203 |
| Embarked_S | -0.150 |

The strongest positive relationship with survival was sex, where female passengers had much higher survival rates. The strongest negative relationship was passenger class because higher numeric class values represent lower passenger classes.

## 11. Key Findings

The major findings are:

1. The overall survival rate was 38.38 percent.
2. Female passengers had a much higher survival rate than male passengers.
3. First-class passengers had the highest survival rate, while third-class passengers had the lowest.
4. Children had a higher survival rate than most older age groups.
5. Higher fare groups had higher survival rates.
6. Passengers with recorded cabin information had higher survival rates, but this is likely connected to class and fare.
7. Passengers traveling with small family groups had better survival rates than passengers traveling alone.

## 12. Limitations

This analysis has several limitations:

1. The analysis identifies associations, not direct causes.
2. Some data was missing in the raw dataset, especially cabin and age.
3. Age values were imputed, so age-based analysis partly depends on estimated values.
4. Cabin availability may represent passenger class or fare level rather than cabin record itself.
5. The dataset may not include every possible factor that affected survival, such as exact ship location during evacuation or lifeboat access.

## 13. Conclusion

The Titanic passenger survival analysis shows that survival was not evenly distributed across passengers. Sex, passenger class, fare group, cabin record availability, age group, and family size were all associated with survival.

Female passengers and first-class passengers had much higher survival rates. Children also had a relatively high survival rate. Passengers who paid higher fares and those with cabin records tended to survive at higher rates, although these results may be connected to class privilege and cabin location.

Overall, this project demonstrates how Python can be used to clean a real-world dataset, create meaningful features, visualize patterns, and produce descriptive and diagnostic analytics that support data-driven interpretation.

## 14. Implementation Files

| File | Description |
|---|---|
| `Titanic-Dataset.csv` | Original raw dataset |
| `cleandata.ipynb` | Data cleaning notebook |
| `titanic_cleaned.csv` | Final cleaned dataset |
| `titanic.ipynb` | Descriptive and diagnostic analytics notebook |
| `final_demo_script_5_members.md` | Final video walkthrough script |
| `project_documentation.md` | Written project documentation |

## 15. References

Titanic passenger survival dataset, commonly distributed as a public learning dataset for data analytics and machine learning practice.

Python Software Foundation. Python programming language.

pandas development team. pandas data analysis library.

NumPy developers. NumPy numerical computing library.

matplotlib development team. matplotlib visualization library.

seaborn development team. seaborn statistical data visualization library.



-------------------------------------------------------------------------------------------------------------------------------------------------------------------



# Final Demo Script: Titanic Passenger Survival Analytics

Project title: Descriptive and Diagnostic Analytics on Titanic Passenger Survival  
Recommended video length: 10 minutes  
Speakers: 5 members, about 2 minutes each  
Notebook: `titanic.ipynb`  
Dataset files: `Titanic-Dataset.csv`, `titanic_cleaned.csv`

Note: The project brief mentions groups of 3, but this script is divided for 5 speakers as requested. Replace the member labels with your actual names.

## Video Flow

| Time | Speaker | Main Focus |
|---|---|---|
| 0:00-2:00 | Member 1 | Introduction, mission, dataset overview |
| 2:00-4:00 | Member 2 | Data cleaning and preparation |
| 4:00-6:00 | Member 3 | Descriptive analytics |
| 6:00-8:00 | Member 4 | Diagnostic analytics and correlation |
| 8:00-10:00 | Member 5 | Findings, limitations, conclusion |

## Member 1: Introduction and Dataset Overview

Good day everyone. We are presenting our project titled "Descriptive and Diagnostic Analytics on Titanic Passenger Survival."

The mission of this project is to use a real-world dataset, process it in Python, and apply descriptive and diagnostic analytics. Descriptive analytics helps us answer what happened, while diagnostic analytics helps us understand why certain patterns may have happened.

For our dataset, we used the Titanic passenger survival dataset. It contains passenger information such as survival outcome, passenger class, sex, age, siblings or spouses aboard, parents or children aboard, fare, cabin, ticket, and embarkation port.

The original dataset has 891 rows and 12 columns, which satisfies the project requirement of at least 500 rows and 6 columns. Our target variable is `Survived`, where 0 means the passenger did not survive and 1 means the passenger survived.

For our tools, we used Python with pandas and NumPy for data handling, and matplotlib and seaborn for visualization. Our work is shown in two notebooks. First, `cleandata.ipynb` prepares the dataset. Second, `titanic.ipynb` performs the descriptive and diagnostic analytics.

In this walkthrough, we will explain how we cleaned the data, what visualizations we created, and what insights we found about passenger survival.

Transition: I will now pass the discussion to Member 2, who will explain the data cleaning process.

## Member 2: Data Cleaning and Preparation

For the cleaning stage, we started with the raw file named `Titanic-Dataset.csv`.

The first step was checking the dataset shape, data types, missing values, and duplicate rows. The original dataset had 891 rows and 12 columns. It had no fully duplicated records, but it had missing values in three columns: `Cabin`, `Age`, and `Embarked`.

The `Age` column had 177 missing values. Instead of using one overall average, we filled missing ages using the median age grouped by `Sex` and `Pclass`. This is better because age patterns can differ between male and female passengers and across passenger classes.

The `Embarked` column had 2 missing values, so we filled them using the most common embarkation port. The `Fare` column had no missing values in our dataset, but the notebook also includes a safe cleaning step that fills missing fare values by passenger class median if needed.

For `Cabin`, most values were missing, with 687 missing records. Instead of deleting the column without using it, we created two new features. `HasCabin` shows whether a passenger had recorded cabin information, and `Deck` takes the first letter of the cabin as the deck category. Missing cabin values were labeled as `Unknown`.

We also created new features for analysis: `FamilySize`, `IsAlone`, `AgeGroup`, and `FareGroup`. After cleaning, unnecessary identifier columns such as `PassengerId`, `Name`, and `Ticket` were removed because they do not directly help our analysis.

The cleaned dataset was saved as `titanic_cleaned.csv`. It has 891 rows, 14 columns, and zero missing values.

Transition: Next, Member 3 will discuss the descriptive analytics part of our notebook.

## Member 3: Descriptive Analytics

In the descriptive analytics section, our goal was to summarize what happened in the dataset.

First, we checked the overall survival count. Out of 891 passengers, 342 survived and 549 did not survive. This gives an overall survival rate of 38.38 percent.

Next, we visualized survival by sex. The countplot shows a clear difference between male and female passengers. There were more male passengers overall, but female passengers had a much higher survival count compared with male passengers.

We also looked at survival by passenger class. The chart shows that passenger class is important. First-class passengers had better survival outcomes than second- and third-class passengers, while third-class passengers had the lowest survival outcome.

Then, we examined the age distribution of passengers using a histogram. This helped us understand the age profile of the passengers. Most passengers were young adults, which is also reflected in the age group count chart.

Finally, the passenger count by age group showed that the largest group was `Young Adult`, followed by `Adult`, `Teen`, `Child`, and `Senior`. This descriptive step helped us understand the composition of the passengers before comparing survival rates.

Overall, the descriptive analytics showed that the Titanic dataset was not evenly distributed across sex, class, and age groups. These differences are important for interpreting survival patterns.

Transition: Member 4 will now explain the diagnostic analytics and correlation results.

## Member 4: Diagnostic Analytics and Correlation

In diagnostic analytics, our goal was to understand which factors were associated with survival.

First, we calculated survival rate by sex. Female passengers had a survival rate of 74.20 percent, while male passengers had a survival rate of only 18.89 percent. This is one of the strongest patterns in the analysis.

Second, we calculated survival rate by passenger class. First-class passengers had a survival rate of 62.96 percent. Second-class passengers had 47.28 percent, and third-class passengers had only 24.24 percent. This suggests that passenger class was strongly related to survival.

Third, we checked survival rate by age group. Children had the highest survival rate among age groups at 57.97 percent. Seniors had the lowest survival rate at 22.73 percent. This supports the idea that age group was also connected to survival.

Fourth, we analyzed family size. Passengers traveling with small families generally had higher survival rates than passengers traveling alone. For example, passengers with a family size of 4 had a survival rate of 72.41 percent, while passengers traveling alone had 30.35 percent.

Fifth, we looked at cabin availability. Passengers with recorded cabin information had a survival rate of 66.67 percent, while passengers without cabin records had 29.99 percent. However, we should be careful with this result because cabin records are likely related to class and fare.

Finally, we used correlation analysis. The strongest positive correlation with survival was `Sex`, followed by `HasCabin` and `Fare`. The strongest negative correlation was `Pclass`, meaning that higher numeric class values, especially third class, were associated with lower survival.

Transition: Member 5 will now summarize our findings and conclusion.

## Member 5: Findings, Limitations, and Conclusion

Based on our analysis, the overall survival rate was 38.38 percent, meaning most passengers in the dataset did not survive.

The strongest finding is that sex was highly associated with survival. Female passengers had a much higher survival rate than male passengers. Passenger class was also important, with first-class passengers having the highest survival rate and third-class passengers having the lowest.

Fare level and cabin availability were also connected to survival. Passengers in the very high fare group had a survival rate of 58.11 percent, while passengers in the low fare group had only 19.73 percent. Passengers with cabin information also had higher survival rates, but this may reflect class privilege rather than cabin information itself.

Family size also mattered. Passengers traveling alone had a lower survival rate than passengers traveling with family. However, very large family sizes had lower survival rates, possibly because it was harder for larger groups to evacuate together.

One limitation of this analysis is that it shows association, not direct causation. For example, having a cabin record does not directly cause survival. It may be connected to other factors such as class, fare, and location on the ship. Also, some original values were missing, so the analysis depends partly on cleaned and estimated values.

In conclusion, our descriptive and diagnostic analytics suggest that survival on the Titanic was strongly associated with sex, passenger class, fare level, age group, and family travel status. This project shows how Python can be used to clean a real-world dataset, visualize patterns, and explain findings like a data analyst.

Thank you for watching our project walkthrough.

## Optional Closing Line for All Members

Together, we completed the data cleaning, descriptive analytics, diagnostic analytics, visualization, and documentation for the Titanic passenger survival dataset.
