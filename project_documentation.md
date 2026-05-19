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
