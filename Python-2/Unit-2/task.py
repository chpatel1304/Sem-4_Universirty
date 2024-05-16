import pandas as pd
import numpy as np
import matplotlib.pyplot as plt 
import seaborn as sb
train=pd.read_csv("C:\\Sem 4\\Sem-4_Universirty\\Python-2\\Unit-2\\train.csv")
print("Task 1 :")
print(train.head(5))
print("Task 2 :")
print(train.tail(5))
print("Task 3 :")
print(train.info())
print("Task 4 :")
print(train.shape)
print("Task 5 :")
print(train.isna())
print("Task 6:")
print(train.dropna(inplace=True))
print("Task 7:")
print(train.describe())
print("Task 8 :")
print(train.describe(include="object"))
print("Task 9 :")
print(train.corr(numeric_only=True))
print("Task 10 :")
print(sb.heatmap(train.corr(numeric_only=True)))
plt.show()
print("Task 11 :")
print(plt.scatter(train['Fare'],train['Survived']))
plt.show()
print("Task 12 :")
print(pd.crosstab(train['Survived'],train['Sex']))
print("Task 13 :")
age_group=[]
for i in train['Age']:
    if i<=18:
        age_group.append('child')
    elif i >18 and i<=30:
        age_group.append("adult")
    elif i >30 and i <=50:
        age_group.append("young")
    else:
        age_group.append("senior")
train['age_group']=age_group
# print(train["age_group"])
print(pd.crosstab(train["age_group"],train["Survived"]))
print("Task 14 :")
print(pd.plotting.parallel_coordinates(train,'Survived',cols=['Pclass','Fare','Age']))
plt.show()
print("Task 15 :")
print(sb.regplot(x='Age',y='Fare',data=train,scatter_kws={'s':200}))
print("Task 16 :")
print(pd.plotting.scatter_matrix(train[["Age",'Survived','Fare']],marker='o'))
plt.show()
print("Task 17 :")
male=len(train[(train["Survived"]==1) & (train["Sex"]=='male')])
print(male)
female=len(train[(train["Survived"]==1) & (train["Sex"]=='female')])
print(female)
survival_rate=male/female
print(survival_rate*100)
