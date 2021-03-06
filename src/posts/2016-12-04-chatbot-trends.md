---
layout: post
title: "聊天机器人：今天的趋势就是明天的优势"
excerpt: "作为一名程序员，我希望机器能做的事情就不要让人去做。我相信分享能促进创造，不断的创造会让人更加有智慧。"
category: thoughts
tags: [thoughts]
disqus: true
---
作为一名程序员，我希望机器能做的事情就不要让人去做。我相信分享能促进创造，不断的创造会让人更加有智慧。毕竟随着年龄的增长，不再具有年轻时的体魄，更要靠大脑做事。我总是希望自己的工作的内容是创新的，流程是自动的，效率是恐怖的。那要怎样才能实现这个目标呢？

马克思说：人的本质是社会关系的总和，科学技术是人体器官的延伸。我们可以将这句话分别理解一下：


## 人的本质是社会关系的总和

> Organizations which design systems are constrained to produce systems which are copies of the communication structures of these organizations. -- M.E. Conway

上面这句话是康威理论，它阐明了这样一个道理：任何软件公司生产的软件，都是该公司内部程序员沟通方式的映射。这个结论的依据是程序员之间沟通方式决定了软件接口的定义。这就是为什么很多成功的公司强调在项目开发之前，要大家“搞好关系”。这也可以说明，为什么成功的人，一般不是才华横溢的人，而是最能以亲切和蔼的态度给人以好感的人。

微信之父张小龙曾回答过“微信是什么”这个问题，他说一千个用户有一千个微信，在他自己眼里，微信就是一个I/O系统，里面有两张表：User, Message.


## 科学技术是人体器官的延伸
Gmail作为全世界最优秀的邮箱，一直长期使用Beta版本，不断尝试通过提供智能服务，提高用户处理邮件的效率。2015年，Gmail推出了Smart Reply功能。它能够自动生成回复消息，用户只需要Tap一下，完成邮件的快速回复，目前可以处理全部邮件的10%。

![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/1.png)

所以，作为一个技术型创业者，不应该从产品入手，而应该从释放人的自由和活力入手。Smart Reply使用了三层逻辑：

![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/2.png)

* 判断这个邮件是否可以使用Smart Reply -- 使用深度学习

* 查询出几项具备不同意向的候选回复方案 -- 使用知识图谱

* 将候选方案进行打分 -- 使用深度学习

所以，Gmail成功解决了如何整理历史知识，如何查询备选方案，如何给备选方案打分。那么这种技术就很有前途了。

传统的软件都是以同样的输入对应确定的输出为基础的，可是深度神经网络是处理不确定的输入，给出一个按概率分布的输出。

**神经元的sigmod激活函数：**
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/14.png)

 一个神经元网络:
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/3.png)

 深度神经网络可以模拟任何函数:
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/4.png)

 ## 重新思考聊天机器人

 * 什么能最大化的接触到人的关系?

社交网络，即时通讯工具。


* 什么能最高效的处理繁杂的，信息爆炸后的数据?

深度神经网络。


所以，作为一个程序员，我觉得做一个聊天机器人，是我能想到的，最好的工作。


在2016年7月份，我曾做过一个分享。Key Notes -
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/5.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/6.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/7.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/8.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/9.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/10.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/11.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/12.png)
![](https://static-public.chatopera.com/backlog/assets/images/2016/12-04-chatbot-trends/13.png)


时隔四个月，在构建聊天机器人的过程中，取得了一些收获，包括如何构建Bot Engine，如何训练Language Model，同时我有幸请到了另外几位朋友，再次探讨聊天机器人，以[node-party](https://github.com/rockq-org/node-party)的形式。对这个话题感兴趣的朋友，[报名](http://www.bagevent.com/event/291037)参加。

## 参考文献

[Conway's Law](http://wiki.c2.com/?ConwaysLaw)

[Gmail Smart Reply](https://arxiv.org/pdf/1606.04870v1.pdf)

[A visual proof that neural nets can compute any function](http://neuralnetworksanddeeplearning.com/chap4.html)

[交往与人的发展：基于马克思主义的视角](https://books.google.com.hk/books?id=ZhjZCQAAQBAJ&pg=PT154&lpg=PT154&dq=%E7%A7%91%E6%8A%80%E6%98%AF%E4%BA%BA%E4%BD%93%E5%99%A8%E5%AE%98%E7%9A%84%E5%BB%B6%E4%BC%B8&source=bl&ots=SZeM_E_Rus&sig=jVy1hCVXnILvW7OdIhBkFIzI-hk&hl=en&sa=X&ved=0ahUKEwjQr-DHndjQAhUFvI8KHddMCngQ6AEIMDAD#v=onepage&q=%E4%BA%BA%E4%BD%93&f=false)




