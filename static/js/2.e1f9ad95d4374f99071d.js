webpackJsonp([2,46],{333:function(n,e){n.exports={rawContent:"\n## Download\n\n```\nwget https://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/core/hadoop-2.8.1/hadoop-2.8.1.tar.gz\n```\n\n## Github\nVersion / 2.8.1\n[hadoop-getstarted](https://github.com/Samurais/hadoop-getstarted)\n\n## Env\n\n```\nexport HADOOP_HOME=/opt/apache/hadoop\nexport PATH=$PATH:$HADOOP_HOME/bin\nexport HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop\n```\n\n\n## Config\n\n### Standalone\nhadoop/etc/hadoop/hadoop-env.sh\n```\nexport JAVA_HOME=/usr/lib/jvm/java-8-oracle\n```\n\nhadoop/etc/hadoop/mapred-site.xml\n```\n<configuration>\n</configuration>\n```\n\nhadoop/etc/hadoop/core-site.xml\n```\n<configuration>\n        <property>\n                <name>fs.default.name</name>\n                <value>hdfs://127.0.0.1:9000</value>\n        </property>\n</configuration>\n\n```\n\nhadoop/etc/hadoop/hdfs-site.xml\n```\n<configuration>\n</configuration>\n```\n\n## Start\n\n```\n$HADOOP_HOME/bin/hdfs namenode -format\n$HADOOP_HOME/bin/hdfs getconf -namenodes\n$HADOOP_HOME/sbin/start-all.sh\n```\n\nCheck status\n```\njps\n```\n\n## Example\n\n```\n# ~/opt/apache/hadoop\n## Usage\nbin/hadoop jar ./share/hadoop/mapreduce/hadoop-mapreduce-examples-2.8.1.jar wordcount\n\n## Put file for processing\nhadoop fs -put LICENSE.txt\n\n## schedule job\nbin/hadoop jar ./share/hadoop/mapreduce/hadoop-mapreduce-examples-2.8.1.jar  wordcount LICENSE.txt LICENSE.wc\nhadoop fs -get LICENSE.wc\ncat LICENSE.wc/part-r-00000\n```\n\n## Web Client\n```\n# Web UI\nhttp://desert:8088/cluster/cluster\n\n# Datanode\nhttp://desert:50070/dfshealth.html#tab-overview\n\n# Job history server\n# http://www.cnblogs.com/luogankun/p/4019303.html\n$HADOOP_HOME/sbin/mr-jobhistory-daemon.sh --config $HADOOP_CONF_DIR start historyserver\n```\n\n## Workflow\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/07/hadoop2.png)\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/07/hadoop3.png)\n\n## Streaming \n\nHadoop Stream允许我们使用任何可执行的脚本处理按行组织的数据流，数据取自Unix的标准输入STDIN，并输出到标准输出到STDOUT。\nhttps://hadoop.apache.org/docs/r2.7.3/hadoop-streaming/HadoopStreaming.html\n\n### Example\nhttp://www.cnblogs.com/dandingyy/archive/2013/03/01/2938442.html\n\nDownload data\n```\nwget http://www.nber.org/patents/Cite75_99.zip -O data/Cite75_99.zip\n```\n\nPython Streaming, RandomSample.py\n\n```python\n#!/usr/bin/env python\nimport sys, random\n\nfor line in sys.stdin:\n    if random.randint(1, 100) <= int(sys.argv[1]):\n        print line.strip()\n```\n\nSubmit Job\n\n```\nbin/hadoop jar share/hadoop/tools/lib/hadoop-streaming-2.8.1.jar \\\n        -input data/cite75_99.txt \\\n        -output cite75_99_sample \\\n        -mapper 'RandomSample.py 10' \\\n        -file RandomSample.py \\\n        -D mapred.reduce.tasks=1\n```\n\nBy default, using IdentityReducer, after job is finished, use ```getmerge``` to get final result.\n\n## Breaking changes\n\n### TaskTracker and JobTracker are replaced.\n\n```\nIn Hadoop 2.0, the JobTracker and TaskTracker no longer exist and have been replaced by three components:\n\nResourceManager: a scheduler that allocates available resources in the cluster amongst the competing applications.\n\nNodeManager: runs on each node in the cluster and takes direction from the ResourceManager. It is responsible for managing resources available on a single node.\n\nApplicationMaster: an instance of a framework-specific library, an ApplicationMaster runs a specific YARN job and is responsible for negotiating resources from the ResourceManager and also working with the NodeManager to execute and monitor Containers.\n\nSo as far as you are seeing ResourceManager(on NN) & NodeManager(on DN) processes you are good to go.\n```",metaData:{layout:"post",title:"Hadoop快速开始",excerpt:"Hadoop实现了一个分布式文件系统（Hadoop Distributed File System），简称HDFS。Hadoop的框架最核心的设计就是：HDFS和MapReduce。HDFS为海量的数据提供了存储，则MapReduce为海量的数据提供了计算。",category:"development",tags:["bigdata"],disqus:!0}}}});