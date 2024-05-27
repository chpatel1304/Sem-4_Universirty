import pandas as pd
import numpy as np
# Data from the table, with NaN values for missing entries
data = [["Emma", "North", 50000.0, np.nan, np.nan, 0.0],
["Sofia", "East", 420.0, 380.0, np.nan, np.nan],
["Marku", "West", 72.0, 3.0, np.nan, np.nan],
["Edward", "West", 49.0, 42.0, np.nan, np.nan],
["Thomas", "South", np.nan, np.nan, np.nan, np.nan],
["Ethan", np.nan, np.nan, np.nan, np.nan, np.nan],
["Arun", "West", 67000.0, 39000.0, np.nan, np.nan],
["Anika", "East", 65000.0, 45000.0, np.nan, np.nan],
["Paulo", "South", 67000.0, np.nan, np.nan, np.nan]]
# Create DataFrame, including column names
df = pd.DataFrame(data, columns=["name", "region", "50000.0", "0.0", "expe", "0.0"])
# Drop rows with all NaN values
df = df.dropna()
print(df)