import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.preprocessing import PolynomialFeatures
df=pd.read_csv("C:\\Sem 4\\Sem-4_Universirty\\Python-2\\Unit-4\\CAR DETAILS FROM CAR DEKHO.csv")
print(df.head())
df['Age']=2024-df['year']
x=df[['Age','km_driven','fuel','seller_type','transmission']]
y=df['selling_price']
x=pd.get_dummies(x)
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=7)
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
y_p=lr.predict([[30,30000,True,False,False,False,True,False,True,False,True,False]])
print(y_p)
poly=PolynomialFeatures(degree=3)
x_poly=poly.fit_transform(x)
print(x_poly.shape)