---
layout: post
title: "Ubuntu Dialogue Corpus"
excerpt: "此ubuntu语料既有Dialog State Tracking Challenge数据集的多次序对话特性，也有类似Twitter微博服务上的人类自然对话特点。"
category: research
tags: [corpus]
disqus: true
---

# Corpus Features

> https://github.com/rkadlec/ubuntu-ranking-dataset-creator

此ubuntu语料既有Dialog State Tracking Challenge数据集的多次序对话特性，也有类似Twitter微博服务上的人类自然对话特点.但是它比Dialog State Tracking Challenge数据集大几个数量级。另外，相对于用于机器问答和分析的同等数量级Twitter数据集，ubunntu数据是基于特定领域的(ubuntu社区关于寻求ubuntu相关技术支持的语料)，可以较好地制定目标。

此ubuntu数据量大，大约有一百万个对话。这对利用神经网络来建chatbot模型很有优势，能够充分发挥神经网络非线性学习能力。另外，语料中对次序对答的特点，可以不用人工标注标签来训练神经网络模型。
# 语料介绍
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/11/Screenshot-from-2016-11-11-14-19-14.png)
图中上面的表个是ubuntu channel中的对话语料，下表是经过dialogue extraction algorithm处理后得到的语料格式。

上下文（context）指的是从对话开始，截止到当前的内容，回答指的是对这段内容的回应。换而言之，上下文可以是若干句对话，而回答则是对这若干句对话的回应。正样本指的是该样本的上下文和回答是匹配的，对应地，负样本指的是二者是不匹配的——回答是从语料库的某个地方随机抽取的。下图是训练数据集的部分展示：
![](http://d3kbpzbmcynnmx.cloudfront.net/wp-content/uploads/2016/04/Screen-Shot-2016-04-20-at-12.29.42-PM.png)
产生数据集的脚本使用NLTK为我们做了一系列的数据预处理工作——分词（tokenized）、英文单词取词根（stemmed）、英文单词变形的归类（lemmatized）（例如单复数归类）等。此外，例如人名、地名、组织名、URL链接、系统路径等专有名词，NLTK也做了替代。这些预处理工作也不是非做不可，不过它们似乎让结果精度他)
### 语料处理
1. 去除语料中没有任何回答的问题;
2. 去除一个用户超过大于5个utterance的部分，因为这种情况不能代表  真正的聊天情况;
3. 只保留大于三个问答(对答)次序的对话，以建立长次序依赖的模型;
4. 接收者识别方法: 将用户姓名存为一个库，如果在语句中能够匹配到库中姓名;
5. 对于没有明显提到recipient姓名的对话，如果该sender没有在此过程中和他人对话，那么就会把对话归为和第一个人对话的语料中;
6. 一个问题会有多人回答的情况:根据提问者和回答者分别分为多个对话，虽然有一个问题会在多个对话中出现的情况，但是这个多出的数据量相对于整个数据集来说还是很小的比例.

# 数据处理
### Predefined parameters
```bash
# The maximum number of words to consider for the contexts
MAX_CONTEXT_LENGTH = 80
# The maximum number of words to consider for the utterances
MAX_UTTERANCE_LENGTH = 30
# Word embedding dimensionality
EMBEDDING_SIZE = 300
# LSTM Cell dimensionality
LSTM_CELL_SIZE = 256
```

限制上下文和回答句子的长度是为了使得模型训练得更快，并且这能够包含大部分语句信息.词向量的维数为300，因为预先训练（pre-trained）好的无论是word2vec还是GloVe都是300维的，这样设定方便我们直接使用它们.(此论文研究中使用的是预先训练好的word2vec或者glove，后期我们可以尝试使用自己的语料来训练word2vec或者glove模型，并根据语料大小设置相应的向量维度.[《How to Generate a Good Word Embedding?》导读](http://licstar.net/archives/620)
