import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
df=pd.read_csv("C:\\Sem 4\\Sem-4_Universirty\\Python-2\\Unit-4\\Book1.csv")
print(df.head())
sns.regplot(data=df,x='cgpa',y='package')
plt.show()
