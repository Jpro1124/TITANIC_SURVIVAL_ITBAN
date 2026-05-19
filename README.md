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
