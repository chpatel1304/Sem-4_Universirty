import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.preprocessing import PolynomialFeatures
import matplotlib.pyplot as plt
df=pd.read_csv("C:\\Sem 4\\Sem-4_Universirty\\Python-2\\Unit-4\\data_poly.csv")
x=df.iloc[:,1:2]
y=df.iloc[:,2]
poly=PolynomialFeatures(degree=3)
model_poly=poly.fit_transform(x)
lr=LinearRegression()
lr.fit(model_poly,y)
plt.scatter(x,y)
plt.plot(x,lr.predict(model_poly))
plt.show()
pred=lr.predict(poly.fit_transform([[70]]))
print(pred)
