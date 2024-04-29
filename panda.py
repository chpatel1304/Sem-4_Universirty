import pandas as pd
# marks=[20,30,40,50]
# ds=pd.Series(marks)
# print(ds)
# print(type(ds))
# df=pd.DataFrame(marks)
# print(df)
# print(type(df))
# print(df.shape)
# dict={'a':1,'b':2,'c':3,'d':4}
# df=pd.DataFrame(dict.values(),index=dict.keys()) 
# print(df)
d={'A':[1,2,3,4],'B':[5,6,7,8],'C':[11,12,13,14]}
ds=pd.Series(d)
df=pd.DataFrame(d)
print(df)
print()
print(ds)