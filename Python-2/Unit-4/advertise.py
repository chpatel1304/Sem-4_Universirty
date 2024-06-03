import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
df=pd.read_csv("C:\\Sem 4\\Sem-4_Universirty\\Python-2\\Unit-4\\advertising.csv")
print(df.head())
x=df[['TV','Radio','Newspaper']]
y=df['Sales']
x=pd.get_dummies(x)
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=3)
print(x_train,x_train.shape)
lr=LinearRegression()
lr.fit(x_train,y_train)
y_pr=lr.predict(x_test)
print(y_test)
print()
print(y_pr)
print(lr.coef_)
print(lr.intercept_)
print("MAE",metrics.mean_absolute_error(y_test,y_pr))
print("MSE",metrics.mean_squared_error(y_test,y_pr))
print("R2Score",metrics.r2_score(y_test,y_pr))
y_p=lr.predict([[195.4,47.7,52.9]])
print(y_p)