from wordcloud import WordCloud,STOPWORDS
import matplotlib.pyplot as plt
text='Yasvi Orangutans , Gandi Mental Pagal ?'
wc=WordCloud().generate(text)
plt.imshow(wc)
plt.axis('off')
plt.show()
