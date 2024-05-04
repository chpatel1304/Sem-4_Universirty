import matplotlib.pyplot as plt
import pandas as pd
df=pd.read_csv("Datasets\\auto-mpg.csv")
plt.boxplot(df['acceleration'],widths=0.75,notch=True)
print(df.describe())
plt.show()