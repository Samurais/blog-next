webpackJsonp([20,57],{337:function(n,t){n.exports={rawContent:'\n# Longest Common Substring\n最长最大字串问题\n\n## 算法\n\n* [数组](http://www.sourcetricks.com/2012/07/longest-common-substring-problem.html#.WUPNsROGOCQ)\n\n* [前缀树](http://www.talkativeman.com/longest-common-substring-algorithm/)\n\n## 字符编码\n\n* [多字节编码与 Unicode 码](http://wiki.jikexueyuan.com/project/visual-studio/14.html)\n\n## ASCII编码\n\n* [char to ascii int value](https://stackoverflow.com/questions/15999272/how-to-convert-an-ascii-char-to-its-ascii-int-value)\n\n* [Scanning ASCII value of each character of a string](https://stackoverflow.com/questions/13412206/scanning-ascii-value-of-each-character-of-a-string)\n\n* [ascii对照表](http://www.learncpp.com/cpp-tutorial/27-chars/)\n\n* [ascii为负数的情况](https://stackoverflow.com/questions/4690415/negative-ascii-value)\n\n### Usage\n\n```\nstd::string input1 = "收益 费用";\nstd::string input2 = "快速 费用 赎回办理";\nstd::cout << "---- strings ---" << endl;\nstd::cout << "input1:" << input1 << " length:" << input1.size() << endl;\nstd::cout << "input2:" << input2 << " length:" << input2.size() << endl;\nstd::string result;\nstd::cout << "---- result ----" << endl;\nif(longestCommonSubstring(input1, input2, result)){\n  std::cout << "longest common string: " << result << endl;\n  std::cout << "length:" << result.size() << endl;\n} else {\n  std::cout << "can not find longest common string." << endl;\n}\n```\n\n> longestCommonSubstring支持中英，过滤unprintable chars。如果存在最大字串，返回**true**，否则**false**.\n\n\n## C++ Impl\n```\nusing namespace std;\nbool longestCommonSubstring(const string& str1, const string& str2, string& result)\n{\n  if(str1.empty() || str2.empty())\n  {\n    return false;\n  }\n  int *curr = new int [str2.size()];\n  int *prev = new int [str2.size()];\n  int *swap = NULL;\n  int maxSubstr = 0;\n   string longest;\n  for(unsigned int i = 0; i < str1.size(); ++i)\n  {\n    for(unsigned int j = 0; j < str2.size(); ++j)\n    {\n      // std::cout << "compare str1[" << i << "]:" << str1[i] << ", str2["<<j<<"]:" << str2[j] << endl;\n      if(str1[i] != str2[j])\n      {\n        curr[j] = 0;\n      }\n      else\n      {\n        if(i == 0 || j == 0)\n        {\n          curr[j] = 1;\n        }\n        else\n        {\n          curr[j] = 1 + prev[j-1];\n        }\n          if(maxSubstr < curr[j])\n        {\n          maxSubstr = curr[j];\n             longest.clear();\n        }\n          if (maxSubstr == curr[j])\n          {\n            longest += str1.substr(i - maxSubstr + 1, i + 1);\n          }\n      }\n    }\n    swap=curr;\n    curr=prev;\n    prev=swap;\n  }\n\n  delete [] curr;\n  delete [] prev;\n  result = longest.substr(0, maxSubstr);\n\n  if(result.size() == 0){\n    return false;\n  } else if(result.size() == 1 && (int(*result.c_str()) < 32)){ /* escape unprintable chars */\n    return false;\n  }\n  return true;\n}\n``` ',metaData:{layout:"post",title:"最大字串问题",excerpt:"寻找两个字符串中的最大字串问题，是算法中的经典问题，出现在面试和实际应用中，屡见不鲜。本文给出了C++中的实现。",category:"development",tags:["program"],disqus:!0}}}});