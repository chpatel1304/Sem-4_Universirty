import requests
from wordcloud import WordCloud,STOPWORDS
import matplotlib.pyplot as plt
url="https://gutenberg.org/files/11/11-0.txt"
response=requests.get(url)
text=response.text
wc=WordCloud(background_color='white',max_words=2000).generate(text)
plt.imshow(wc)
plt.axis('off')
plt.show()