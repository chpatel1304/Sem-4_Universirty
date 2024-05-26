import pandas as pd
#finding outliers in 'mpg'
def find_outliers(ds, col):
    quart1 = ds[col].quantile(0.25)
    quart3 = ds[col].quantile(0.75)
    IQR = quart3 - quart1 #Inter-quartile range
    low_val = quart1 - 1.5*IQR
    high_val = quart3 + 1.5*IQR
    ds = ds.loc[(ds[col] < low_val) | (ds[col] > high_val)]
    return ds
dataset = pd.read_csv("Datasets\\auto-mpg.csv")
ans=find_outliers(dataset, 'acceleration')
print(ans)