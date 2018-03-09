webpackJsonp([50,57],{307:function(n,t){n.exports={rawContent:'\nTo run a tensorflow app, you define the input, lost fn, model and EvaluationMonitor in a main function in your module.\n\nLike this.\n\n```python\nimport tensorflow as tf\ndef main(unused_argv):\n  hparams = ...\n  model_fn = ...\n  estimator = ...\n  input_fn_train = ...\n  input_fn_eval = ...\n  eval_metrics = ...\n  eval_monitor = ...\n  # Start to train\n  estimator.fit\n\nif __name__ == "__main__":\n  tf.app.run()\n```\n\nNote, the last line, you need to fire **tf.app.run**. All the job are done in main. How does the main function is invoked?\n\n## tf.app.run lays out the thing\nIt\'s just a very quick wrapper that handles flag parsing and then dispatches to your own main.\n```python\nhttps://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/app.py\n```\n\n[Explanation code snippets](http://stackoverflow.com/questions/33703624/how-does-tf-app-run-work)\n\n',metaData:{layout:"post",title:"Tensorflow tf.app.run的工作方式",excerpt:"To run a tensorflow app, you define the input, lost fn, model and EvaluationMonitor in a main function in your module like this.",category:"development",tags:["tensorflow"],disqus:!0}}}});