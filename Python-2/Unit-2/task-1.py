# Boxplot of movie_csv get IMDB rating
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
csv=pd.read_csv("C:\\Sem 4\\Sem-4_Universirty\\Python-2\\Unit-2\\movies.csv") 
print(csv)
plt.boxplot(csv['imdb_rating'],widths=0.75,notch=True)
plt.show()