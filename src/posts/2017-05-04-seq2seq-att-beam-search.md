---
layout: post
title: "Attention based Seq2seq Neural Conversation Models"
excerpt: "This implementation contains an extension of seq2seq tutorial for conversation models in Tensorflow: Option to use Beam Search and Beam Size for decoding, Simple seq2seq models, Attention based seq2seq models."
category: research
tags: [seq2seq, dialogue, tensorflow]
disqus: true
---

# Paper
<!-- 论文地址，说明论文要解决的问题 -->
Examples of basic model can be found in this paper.

https://arxiv.org/abs/1702.05512

# Implementation
<!-- 对应论文的实现：开源码地址，数据等 -->

* Python2, TensorFlow 0.12.1
https://github.com/pbhatia243/Neural_Conversation_Models

* Python3, TensorFlow 0.12.1
https://github.com/Samurais/Neural_Conversation_Models

This implementation contains an extension of seq2seq tutorial for conversation models in Tensorflow:

> Option to use Beam Search and Beam Size for decoding

Currently, it supports

    - Simple seq2seq models
    - Attention based seq2seq models

To get better results use beam search during decoding / inference.



