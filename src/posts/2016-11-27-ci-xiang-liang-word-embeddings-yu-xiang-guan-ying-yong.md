---
layout: post
title: "word embeddings与相关应用"
excerpt: "词向量是讲文字数学化的方法。"
category: research
tags: [nlp]
disqus: true
---

## 自然语言处理中文本数值化表方法

词向量是什么，自然语言理解的问题要转化为[机器学习](http://lib.csdn.net/base/machinelearning)的问题，第一步肯定是要找一种方法把这些符号数学化，NLP中大多是将文本表示为空间向量后再进行处理。
## 离散表示： One-hot

比如，语料库：
*John likes to watch movies. Mary likes too. John also likes to watch football games.*

由语料库得到字典：
```javascript
{
  "John": 1，
  "likes": 2，
  "to": 3，
  "watch": 4，
  "movies": 5，
  "also": 6，
  "football": 7，
  "game": 8，
  "Mary": 9，
  "too": 10
}
```

One-Hot 表示：
```
John:  [1，0，0，0，0，0，0，0，0，0]
Mary: [0，0，0，0，0，0，0，0，1，0]
also:  [0，0，0，0，0，1，0，0，0，0]
```

词典中包含10个单词，每个单词有唯一索引，值的表示在词典中的顺序和在句子中的顺序没有关联。由上可知one-hot表示当前词的索引位置为1，其他值为0，表示非常稀疏。

## 离散表示：Bag of Words(词袋表示)
* 根据one-hot的思想，文档的空间向量表示可以之间将各词的词向量表示相加。这样

*John likes to watch movies. Mary likes too.* -> *[1，2，1，1，1，0，0，0，1，1]*

*John also likes to watch football games.* -> *[1，1，1，1，0，1，1，1，0，0]*

* 由one-hot表示出的模型为基础，也可以根据词的权重来进行词向量的表示。 

*  TF-IDF(Term Frequency-Inverse Document Frequency)
tf = n，n表示某词在当前文档中出现的次数。IDF权重是*log(1 + N/Nt)*，N指所有的文档数，Nt指含有词t的文档数 。

*John likes to watch movies. Mary likes too.* 就可以表示为 *[0.693，1.386，0.693，0.693，1.099，0，0，0，0.693，0.693]*

> 虽然FT-IDF能够体现出各个词在文档中的重要程度（一般用于关键词提取，主题分类），但是基于one-hot的模型的基础，它是没有考虑文档中词之间的顺序问题，句子中词之间没有联系，会丢失很重要的信息。（用以上方法，I will help you 和 You will help me，两个句子的空间向量表示是相同的）

## 离散表示： Bi-gram和N-gram

语言模型： 通常在NLP中，人们基于一定的语料库，可以利用语言模型[N-Gram](http://blog.csdn.net/baimafujinji/article/details/51281816)来预计或者评估一个句子是否合理。

N-gram是基于这样一种假设，第n个词的出现只与前面N-1个词相关，而与其它任何词都不相关. Bi-gram就是假设第n个词只与它前面的一个词有关。

和one-hot表示方法相似，这里为Bi-gram建立索引：

```javascript
{
  "John likes": 1，
  "likes to": 2，
  "to watch": 3，
  "watch movies": 4，
  "Mary likes": 5，
  "likes too": 6，
  "John also": 7，
  "also likes": 8，
  "watch football": 9，
  "football games": 10
}
```

*John likes to watch movies. Mary likes too.* -> *[1，1，1，1，1，1，0，0，0，0]*
*John also likes to watch football games.* -> *[0，1，1，0，0，0，1，1，1，1]*

缺点: 随着字典size的增大，参数数量会非常大。
以后文本表示方法属于离散表示，即各个词之间是相互独立的，并没有表现出关联关系。另外，利用以上方法我们也无法衡量向量之间的关系.比如由"酒店"，"宾馆"的向量:
```
酒店 [0，1，0，0，0，0，0，0，0，0]
宾馆 [0，0，0，0，1，0，0，0，0，0]
```

按常识来讲，我们是认为"酒店"和"宾馆"是有相似含义的，但是由于向量表示的稀疏性我们很难捕捉到两者之间的关系。而且词表的长度会随着语料库的增长而膨胀，n-gram序列随着语料库膨胀更快，因为是组合词的词典。

## 分布式表示

![分布式表示思想解析](http://upload-images.jianshu.io/upload_images/2332367-feaca97a7bc56a59.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如上图所示，如果我们利用离散文本表示方法对本文进行表示时，"红色的大型卡车"，"黄色的中型SUV"，"紫色的小型电动车"无法表达任何相似的信息。那么考虑用颜色，型号，车型分布式对相应文本进行表示。那么对于"红色的大型卡车"和"红色的小型电动车"的表示就会有相同部分表示，基于此我们就可以来进行文本信息处理。

## 共现矩阵(Cocurrence matrix)

word-word共现矩阵可以挖掘语法和语义信息.对于以下含有三句话的语料库我们进行word-word共现矩阵表示.
I like deep learning.
I like NLP.
I enjoy flying.
为了理解，这里window length设为1 (一般为5~10)
使用对称的窗函数(左右window length都为1)

![word-word共现矩阵](http://upload-images.jianshu.io/upload_images/2332367-cae5e1eb8b14506e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 正如上图，对于"I"， 左右窗口中出现"I"的次数为0，"like"出现为2次，"enjoy"出现次数为1，"deep"，"learning"，"NLP"，"flying"，"."都为0。

以此类推，得到一个对称矩阵。这样，也同时得到了每个word的分布式表示，如'I' [0，2，1，0，0，0，0，0]。
但由共现矩阵得到的词向量存在一下问题:
* 向量维数随着字典大小线性增长
* 存储整个字典的空间消耗会非常大
* 一些模型如文本分类模型会面临稀疏性问题
* 模型会欠稳定.

## NNML(Neural Network Language Model)

词向量通过神经网络语言模型得到，一定程度上解决数据稀疏性。
![NNML](http://upload-images.jianshu.io/upload_images/2332367-99801fae704aff99.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如上图所示，神经网络模型包括投影层，隐藏层和输出层。假如有语料"我爱北京天安门"，经过分词得到"我" "爱" "北京" "天安门"。模型的训练过程如下:

1. 将"我" "爱" "北京" "天安门"分别用one-hot embedding 的形式表示出来(各向量维数和字典大小相同).
"我" [1，0，0，0]
"爱" [0，1，0，0]
"北京" [0，0，1，0]
"天安门" [0，0，0，1]
2. "我" "爱" "北京" 三个空间向量作为输入，通过语言模型"我爱北京"之后的词，每个输入是1x4的矩阵Ai，经过投影层和200x4的矩阵Ci相乘，即Ci*Ai'，投影出200x1的向量(这也是此层叫投影层的原因) 然后对这三个向量进行拼接(concate)，得到一个800维的向量
3. 隐藏层将一个800的向量经过激活函数tanh处理
4. 输出层输出的是维数是4的概率向量，每一维表示字典中每个词是要预测的那个词的概率
5. 输出层经过softmax分类函数，得到一个概率向量和已知正确的向量即"天安门" [0，0，0，1]求KL(Kullback Leibler)距离，然后利用BP(Backpropagation algorithm 反向传播算法)和SGD(Stochastic Gradient Descent 随机梯度下降)对模型进行调优。
根据训练好的模型就可以得到文本内容的词向量。
备注: 投影矩阵C和w，b 相似，模型训练时被初始化，然后经过逐渐学习和调优而确定。

## word2vec CBOW(Continuous Bag-of-Words 连续词袋)

![CBOW模型](http://upload-images.jianshu.io/upload_images/2332367-1dc4687c83fbffa0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
CBOW模型是利用前后的词来预测当前的词。比如"我爱中华人民共和国"，假如窗口为2，即利用"我" "爱"和"中华" "共和国"来预测"中华"这个词，此模型相对NNML计算量要小很多，该模型没有隐藏层并且直接使用低维稠密的向量来进行表示。 投影层是进行了求和处理。 假如我们的输入都是200维的向量，字典size大小为40000，那么输出就是一个40000维的向量，而且中间从映射层到输出层的参数w是200x40000，这是很不好处理的。 所以CBOW最后一层采用了霍夫曼压缩编码(huffman tree)。输出为一个200维的向量。

## word2vec Skip-gram模型

![Skip-gram模型](http://upload-images.jianshu.io/upload_images/2332367-b608abd8abc108f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Skip-gram和CBOW模型相反，是由当前词来预测context，该模型同样也没要隐藏层，投影层也可以忽略。 最后也是进行霍夫曼编码.关于word2vec的详细讲解可参考[word2vec的数学原理详解](http://www.open-open.com/lib/view/open1420687569468.html)。
 
### wor2vec存在的问题

* 对同一个词使用了唯一的词向量的表示，无法表达一词多义的情况。
* 对每个local context window 单独训练，没有利用包含在Global co-currence矩阵中的统计信息。

## Further Reading
[word2vec](http://radimrehurek.com/gensim/models/word2vec.html)

[keras Word Embedding](http://keras-cn.readthedocs.io/en/latest/blog/word_embedding/)

[NLTK](http://www.nltk.org/)



