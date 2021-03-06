---
layout: post
title: "CoNLL Shared Task data format"
excerpt: "依存关系和词性标注器训练语料格式"
category: development
tags: [nlp]
disqus: true
---

Intro:

http://ufal.mff.cuni.cz/conll2009-st/task-description.html


From: https://github.com/taolei87/RBGParser/wiki/Data-Format

Specify input format
The RBGParser currently supports two versions of file formats used in the CoNLL shared tasks:

CoNLL-2006 (a.k.a CoNLL-X) format
CoNLL-2009 format
The default one is CoNLL-2006, but one can specify the format via the options "format:conll09" or "format:conll-09" during training and testing.

#### CoNLL-2006 format specification Each line of the CoNLL-2006 format describes one token of an input sentence. The sentences are separated by a blank line. Each token is specified by the following fields, separated by a tab "\t" character: 1. ID: token counter, starting at 1 for each new sentence 2. FORM: word form or punctuation symbol 3. LEMMA: lemma or stem of word form 4. CPOSTAG: coarse-grained part-of-speech tag 5. POSTAG: fine-grained part-of-speech tag 6. FEATS: unordered set of syntactic and/or morphological features, separated by a vertical bar "|", or an underscore "_" if not available 7. HEAD: head ID of the current token 8. DEPREL: dependency relation to the HEAD
Here is an example (extracted from the CoNLL-X website):

```
1   Cathy             Cathy             N     N     eigen|ev|neut                    2   su      _  _
2   zag               zie               V     V     trans|ovt|1of2of3|ev             0   ROOT    _  _
3   hen               hen               Pron  Pron  per|3|mv|datofacc                2   obj1    _  _
4   wild              wild              Adj   Adj   attr|stell|onverv                5   mod     _  _
5   zwaaien           zwaai             N     N     soort|mv|neut                    2   vc      _  _
6   .                 .                 Punc  Punc  punt                             5   punct   _  _

1   Ze                ze                Pron  Pron  per|3|evofmv|nom                 2   su      _  _
2   had               heb               V     V     trans|ovt|1of2of3|ev             0   ROOT    _  _
3   met               met               Prep  Prep  voor                             8   mod     _  _
4   haar              haar              Pron  Pron  bez|3|ev|neut|attr               5   det     _  _
5   moeder            moeder            N     N     soort|ev|neut                    3   obj1    _  _
6   kunnen            kan               V     V     hulp|ott|1of2of3|mv              2   vc      _  _
7   gaan              ga                V     V     hulp|inf                         6   vc      _  _
8   winkelen          winkel            V     V     intrans|inf                      11  cnj     _  _
9   ,                 ,                 Punc  Punc  komma                            8   punct   _  _
10  zwemmen           zwem              V     V     intrans|inf                      11  cnj     _  _
11  of                of                Conj  Conj  neven                            7   vc      _  _
12  terrassen         terras            N     N     soort|mv|neut                    11  cnj     _  _
13  .                 .                 Punc  Punc  punt                             12  punct   _  _
```

#### CoNLL-2009 format specification The CoNLL-2009 format provides separate columns for both *gold* and *predicted* information, including lemmas, POS tags, morphological features. It also contains predicted dependency heads, predicted dependency labels and necessary information for semantic role labeling (SRL) task. These columns are given in the following order:
ID FORM LEMMA PLEMMA POS PPOS FEAT PFEAT HEAD PHEAD DEPREL PDEPREL FILLPRED PRED APREDs

where the "P-" columns are the corresponding predicted versions of the previous column. For example, "LEMMA" column specifies the gold word lemma and the next column "PLEMMA" is the predicted word lemma.

Note: We ignore the columns used for SRL task and the gold columns of lemmas, POS tags and morphological features. That is, we use ID, FORM, PLEMMA, PPOS, PFEAT, HEAD and DEPREL columns to train and test our dependency parser.

Here is an example of CoNLL-2009 format:

```
1 W.  w.  w.  NNP NNP _ _ 3 3 NAME  NAME  _ _ _ _ _ _ _ _
2 Ed  ed  ed  NNP NNP _ _ 3 3 NAME  NAME  _ _ _ _ _ _ _ _
3 Tyler tyler tyler NNP NNP _ _ 18  18  SBJ SBJ _ _ _ _ A1  _ _ _
4 , , , , , _ _ 3 3 P P _ _ _ _ _ _ _ _
5 37  37  37  CD  CD  _ _ 6 6 NMOD  NMOD  _ _ _ _ _ _ _ _
6 years year  year  NNS NNS _ _ 7 7 AMOD  AMOD  _ _ _ _ _ _ _ _
7 old old old JJ  JJ  _ _ 3 3 NMOD  NMOD  _ _ _ _ _ _ _ _
8 , , , , , _ _ 3 3 P P _ _ _ _ _ _ _ _
9 a a a DT  DT  _ _ 12  12  NMOD  NMOD  _ _ _ _ _ _ _ _
10  senior  senior  senior  JJ  JJ  _ _ 12  12  NMOD  NMOD  _ _ A3  _ _ _ _ _
11  vice  vice  vice  NN  NN  _ _ 12  12  NMOD  NMOD  _ _ A3  _ _ _ _ _
12  president president president NN  NN  _ _ 3 3 APPO  APPO  Y president.01  A0  _ _ _ _ _
13  at  at  at  IN  IN  _ _ 12  12  LOC LOC _ _ A2  _ _ _ _ _
14  this  this  this  DT  DT  _ _ 16  16  NMOD  NMOD  _ _ _ _ _ _ _ _
15  printing  print print VBG VBG _ _ 16  16  NMOD  NMOD  _ _ _ A1  _ _ _ _
16  concern concern concern NN  NN  _ _ 13  13  PMOD  PMOD  Y concern.02  _ A0  _ _ _ _
17  , , , , , _ _ 3 3 P P _ _ _ _ _ _ _ _
18  was be  be  VBD VBD _ _ 0 0 ROOT  ROOT  _ _ _ _ _ _ _ _
19  elected elect elect VBN VBN _ _ 18  18  VC  VC  Y elect.01  _ _ _ _ _ _
20  president president president NN  NN  _ _ 19  19  OPRD  OPRD  Y president.01  _ _ A2  A0  _ _
21  of  of  of  IN  IN  _ _ 20  20  NMOD  NMOD  _ _ _ _ _ A2  _ _
22  its its its PRP$  PRP$  _ _ 24  24  NMOD  NMOD  _ _ _ _ _ _ A2  _
23  technology  technology  technology  NN  NN  _ _ 24  24  NMOD  NMOD  _ _ _ _ _ _ A1  _
24  group group group NN  NN  _ _ 21  21  PMOD  PMOD  Y group.01  _ _ _ _ _ _
25  , , , , , _ _ 20  20  P P _ _ _ _ _ _ _ _
26  a a a DT  DT  _ _ 28  28  NMOD  NMOD  _ _ _ _ _ _ _ _
27  new new new JJ  JJ  _ _ 28  28  NMOD  NMOD  _ _ _ _ _ _ _ AM-TMP
28  position  position  position  NN  NN  _ _ 20  20  APPO  APPO  Y position.02 _ _ _ _ _ A1-REF
29  . . . . . _ _ 18  18  P
```
