---
layout: design-mow
title: "Research"
date:   2024-05-05
---

### Selected projects
----
# Adaptive experiments

## Conversations with a concern-addressing chatbot increase COVID-19 vaccination intentions among social media users in Kenya and Nigeria 

*Joint work with [Leah Rosenzweig](https://leahrrosenzweig.com/){:target="_blank"}.* 
Forthcoming at *Journal of Politics*. 

During mass vaccination campaigns, social media platforms can facilitate the dissemination of public health information but may also contribute to vaccine hesitancy by serving as avehicle for the spread of false and misleading information. 
Although talking with health professionals is an important avenue to address individuals’ concerns, one-on-one conversationswith healthcare providers are challenging to scale. 
Can automated, personalized messaging delivered by a chatbot address individuals’ concerns and increase vaccine acceptance? 
To answer this question, we designed and deployed a Facebook Messenger chatbot to address questions and concerns social media users in Kenya and Nigeria had about the COVID-19 vaccine. 
After optimizing messaging using an adaptive experimental design on 3,905 respondents, we compare the interactive concern-addressing chatbot to a chatbot that delivers a non-interactive public service announcement (PSA), as well as to a control, no information, chatbot condition. 
We find that the concern-addressing chatbot increases COVID-19 vaccine intentions and willingness by 4-5% compared to the control condition, and by 3-4% compared to the PSA intervention. 
Among the 22,052 respondents in our evaluation sample, who at the time of the survey in early 2022 had not yet received a single COVID-19 vaccine, we observe the largest treatment effects among those most hesitant at baseline. 
With advertising costs as low as $0.21 per person engaged and $4.33 per person influenced, policymakers may want to consider using personalized messaging on digital platforms to quickly and cheaply reach many people to encourage compliance with public health programs during disease outbreaks. 

[paper](https://osf.io/preprints/osf/mgyxu){:target="_blank"}
[preanalysis plan](https://osf.io/mxr8n){:target="_blank"}

----
## Battling the coronavirus ‘infodemic’ among social media users in Kenya and Nigeria 

*Joint work with [Leah Rosenzweig](https://leahrrosenzweig.com/){:target="_blank"} and [Susan Athey](https://athey.people.stanford.edu/){:target="_blank"}.*
Published in *Nature Human Behaviour*. 

How can we induce social media users to be discerning when sharing information during a pandemic? 
An experiment on Facebook Messenger with users from Kenya (n = 7,498) and Nigeria (n = 7,794) tested interventions designed to decrease intentions to share COVID-19 misinformation without decreasing intentions to share factual posts. 
The initial stage of the study incorporated: (1) a factorial design with 40 intervention combinations; and (2) a contextual adaptive design, increasing the probability of assignment to treatments that worked better for previous subjects with similar characteristics. 
The second stage evaluated the best-performing treatments and a targeted treatment assignment policy estimated from the data. 
We precisely estimate null effects from warning flags and related article suggestions, tactics used by social media platforms. 
However, nudges to consider the accuracy of information reduced misinformation sharing relative to control by 4.9% (estimate = −2.3 percentage points, 95% CI = [−4.2, −0.35]). 
Such low-cost scalable interventions may improve the quality of information circulating online.

[paper](https://doi.org/10.1038/s41562-023-01810-7){:target="_blank"}
[preanalysis plan](https://osf.io/cqu4w/){:target="_blank"}

----
## Adaptive experimental design: Prospects and applications in political science
*Joint work with [Alexander Coppock](https://alexandercoppock.com/){:target="_blank"} and [Donald P. Green](https://sites.google.com/site/donaldpgreen/){:target="_blank"}.*
Published in the *American Journal of Political Science.*

Experimental researchers in political science frequently face the problem of inferring which of several treatment arms is most effective. 
They may also seek to estimate mean outcomes under that arm, construct confidence intervals, and test hypotheses. 
Ordinarily, multi-arm trials conducted using static designs assign participants to each arm with fixed probabilities. 
However, a growing statistical literature suggests that adaptive experimental designs that dynamically allocate larger assignment probabilities to more promising treatments are better equipped to discover the best-performing arm. 
Using simulations and empirical applications, we explore the conditions under which such designs hasten the discovery of superior treatments and improve the precision with which their effects are estimated. 
Recognizing that many scholars seek to assess performance relative to a control condition, we also develop and implement a novel adaptive algorithm that seeks to maximize the precision with which the largest treatment effect is estimated.

[paper](https://doi.org/10.1111/ajps.12597){:target="_blank"}

----

# Estimands and identification

## On the Foundations of the Design-Based Approach. 
*Joint work with [Austin Jang](https://austinjang.github.io/){:target="_blank"} and [P.M. Aronow](https://pmaronow.github.io/){:target="_blank"}*. 

The design-based paradigm may be adopted in causal inference and survey sampling when we assume Rubin's stable unit treatment value assumption (SUTVA) or impose similar frameworks.
While often taken for granted, such assumptions entail strong claims about the data generating process. 
We develop an alternative design-based approach: 
we first invoke a generalized, non-parametric model that allows for unrestricted forms of interference, such as spillover. 
We define a new set of inferential targets and discuss their interpretation under SUTVA and a weaker assumption that we call the No Unmodeled Revealable Variation Assumption (NURVA). 
We then reconstruct the standard paradigm, reconsidering SUTVA at the end rather than assuming it at the beginning. 
Despite its similarity to SUTVA, we demonstrate the practical insufficiency of NURVA for identifying substantively interesting quantities. 
In so doing, we provide clarity on the nature and importance of SUTVA for applied research.

[paper](https://arxiv.org/abs/2505.10519){:target="_blank"}

----
## Gnostic notes on temporal validity. 
*Joint work with [Austin Jang](https://austinjang.github.io/){:target="_blank"}, [Serena Wang](https://serenalwang.com/){:target="_blank"}, and [P.M. Aronow](https://pmaronow.github.io/){:target="_blank"}*. 
Published in **Research & Politics**. 

Kevin Munger argues that, when an agnostic approach is applied to social scientific inquiry, the goal of prediction to new settings is generically impossible. We aim to situate Munger’s critique in a broader scientific and philosophical literature and to point to ways in which *gnosis* can and, in some circumstances, must be used to facilitate the accumulation of knowledge. We question some of the premises of Munger’s arguments, such as the definition of statistical agnosticism and the characterization of knowledge. We further emphasize the important role of microfoundations and particularism in the social sciences. We assert that Munger’s conclusions may be overly pessimistic as they relate to practice in the field.

[paper](https://doi.org/10.1177/20531680241307942){:target="_blank"}

----

## Experimentation for homogeneous policy change

*Joint work with [Drew Dimmery](https://ddimmery.com/){:target="_blank"}.*

[paper](https://arxiv.org/abs/2101.12318){:target="_blank"}

When the Stable Unit Treatment Value Assumption (SUTVA) is violated and there is interference among units, there is not a uniquely defined Average Treatment Effect (ATE), and alternative estimands may be of interest, among them average unit-level differences in outcomes under different homogeneous treatment policies. We term this target the {Homogeneous Assignment Average Treatment Effect} (HAATE). We consider approaches to experimental design with multiple treatment conditions under partial interference and, given the estimand of interest, we show that difference-in-means estimators may perform better than correctly specified regression models in finite samples on root mean squared error (RMSE). With errors correlated at the cluster level, we demonstrate that two-stage randomization procedures with intra-cluster correlation of treatment strictly between zero and one may dominate one-stage randomization designs on the same metric. Simulations demonstrate performance of this approach; an application to online experiments at Facebook is discussed. 

----

## Understanding Ding's apparent paradox

* Joint work with [P.M. Aronow](https://pmaronow.github.io/){:target="_blank"}*. 
Published in *Statistical Science*. 

[paper](https://www.jstor.org/stable/26408292){:target="_blank"}

(1) Rao type tests may be sub-optimal under nonlocal alternatives (Engle, 1984), and as Ding (2017) shows, the FRT is asymptotically equivalent to a Rao-type test
assuming constant effects. 
Rather than the FRT, a Wald-type analogue to the FRT using the difference in means exists (considered by Freedman, 2008, Samii
and Aronow, 2012, Gerber and Green, 2012, and Lin, 2013) is a valid test of Fisher's null, and does not suffer from the potential pathology of Rao-type tests. 
Furthermore, this Wald-type test—equivalent to a pooled variance two-sample z-test—is asymptotically equivalent to the FRT under local alternatives. 
Reichardt and Gollob (1999) discuss this point, with reference to Mosteller and Rourke (1973). 
(ii) As highlighted by Pratt (1964), Romano (1990) and Freedman (2008), the behavior of tests under incorrect working assumptions may depend on the joint distribution of the data. Analogous to the Behrens-Fisher problem, a test of the null of no average effect that assumes there is no effect on the variance may be more or less powerful than a test of no average effect that makes no such additional assumption. 
We illustrate this by comparing the Wald type analogue to the FRT to the standard Wald-type test of Neyman's null. 
Combining (i) and (ii), we see that Ding's (2017) apparent paradox follows from the use of a suboptimal test under nonlocal alternatives and the well-known behavior of tests of joint hypotheses when one of the constituent hypotheses is false, 
(iii) We also note an error in Ding's (2017) Theorem 7 and suggest a refinement that is correct at full generality. 

----
# Other messaging experiments

## Does Asking Questions Boost Engagement? Three Health Messaging Experiments in the US and Ghana.

*Joint work with [Erika Kirgios](https://www.erikakirgios.com/){:target="_blank"}, [Susan Athey](https://athey.people.stanford.edu/){:target="_blank"}, [Angela L. Duckworth](https://angeladuckworth.com/){:target="_blank"}, [Dean Karlan](https://deankarlan.com/){:target="_blank"}, [Michael Luca](https://carey.jhu.edu/faculty/michael-luca-phd){:target="_blank"}, [Katherine Milkman](https://www.katymilkman.com/){:target="_blank"}.*
Forthcoming at *Management Science*. 

[paper](https://www.nber.org/system/files/working_papers/w33294/w33294.pdf){:target="_blank"}
[Ghana component project page](https://www.poverty-action.org/study/impact-quiz-style-information-campaign-covid-19-prevention-ghana){:target="_blank"}
[preanalysis plan (1)](https://aspredicted.org/xp8c-v66w.pdf){:target="_blank"}
[preanalysis plan (2)](https://aspredicted.org/zrpp-9hqp.pdf){:target="_blank"}

Effective information sharing is critical for the success of organizations and governments. Because
information that is easy to access is more likely to be adopted, leaders often minimize friction in
information delivery. However, one type of friction may increase engagement: piquing curiosity by
posing relevant questions prior to sharing information. To test this, we shared identical information
about COVID-19 in either question-and-answer format or via direct statements across two
preregistered field experiments in Ghana and Michigan (total N=49,395). Q&A-style
communication increased information seeking about directly related topics (e.g., how to wear a
mask properly) by 1.0 percentage-point (216%) in Ghana and by 1.1 percentage-points (19%) in
Michigan (p’s<0.001), and increased self-reported behavior change by 1.3 percentage-points (4%)
in Michigan (p=0.002). However, sharing information in Q&A format did not increase interest in
general COVID-19 information in either setting, suggesting that the impact of Q&A-style
messaging on information seeking may be issue-specific. In Michigan, both Q&A-style and direct
statement messaging produced less information-seeking than sending no informational messages,
likely due to differential attrition: the more texts participants received, the more likely they were to
opt out of receiving messages, which made it impossible for them to seek more information via text.
In a follow-up implementation experiment with social media ads (a messaging strategy without
attrition challenges) Q&A-style ads generated 9-11% more unique clicks to the CDC website per
dollar spent than ads that directly stated information about vaccines (p<0.001). We speculate that
Q&A-style information delivery may stimulate curiosity, driving its benefits.

----

## Which frame fits? Policy learning with framing for climate change policy attitudes. 

*Joint work with Will Gruen, Carter Herron, Kaden Hyatt; Max Buford, Kevin Davis, Diego Fonseca,  Mushkie Gurevich, Tiffanie Huang,  Rocio Jerez, Quinn Liu, Obi Obetta, Miguel Orellana, James Passmore, Jack Qiu, Julian Rapaport, Iñigo Sanchez-Asiain Domenech, Fernando Sandoval, Jose A. Tandoc, and Ravi Yalamanchili.* 

How should climate policy be framed to maximize public support? We evaluate the effects of five distinct message frames—scientific, religious, moral, and two economic (efficiency and equity)—on support for climate change policy using a randomized experiment with over 2,300 U.S. respondents. Moving beyond pairwise frame comparisons, we adopt a policy learning approach that identifies the most effective frame using cross-validated sample splitting, thereby avoiding selective inference. We find that the economic efficiency frame consistently yields the largest gains in policy support, outperforming both the control condition and all alternative frames. While the effects of personalized frame assignment were modest and not significantly different from assigning the best overall frame, we find consistent positive effects of the efficiency frame across partisan subgroups. Our findings offer methodological and substantive contributions: we provide a design for learning and validating optimal treatments in experimental framing studies, and we offer practical guidance for advocates seeking to increase support for climate action. 


----

## Deep canvassing with automated conversational agents: personalized messaging to change attitudes

*Joint work with [Jiehan Liu](https://github.com/jiehanL){:target="_blank"},
[Nick Feamster](https://people.cs.uchicago.edu/~feamster/){:target="_blank"},
[Kartik Garg](https://www.linkedin.com/in/kartik-garg/){:target="_blank"},
[Nguyên Phong Hoàng](https://homepage.np-tokumei.net/){:target="_blank"}, and
[Sudhamshu Hosamane](https://www.sudhamshu.info/){:target="_blank"}.*

[pre-analysis plan](osf.io/dtm4g){:target="_blank"}
[project page](https://datascience.uchicago.edu/research/facebook-messenger-chatbot-for-surveys-and-intervention-testing/){:target="_blank"}

This study tests use of a social media conversational agent for canvassing on the topic of anti-transgender prejudice, replicating and benchmarking treatment effects to a door-to-door canvassing effort conducted by \cite{broockman2016durably}. 
In-person deep canvassing is the gold standard for durably changing attitudes on polarizing topics. However, door-to-door canvassing is costly and time-consuming, and there are many populations may not be feasibly reached in this manner. 
Campaigns are already conducting outreach using digital tools, including text messages and social media accounts.  
If appropriately trained agents messaging over social media can achieve a fraction of the effect of in-person canvassing, canvassing may be scaled up to achieve large overall impacts at lower costs. 
Scripts used in this application are based on those used by transgender allies in the original study. 
To personalize messaging, the conversational agent uses natural language processing to detect conversational topics, and shares relevant pre-scripted messages of information and third-person experiences, encouraging respondents to engage in perspective-taking with respect to an outgroup. 
This study demonstrates the potential of automated social media messaging for deep canvassing, with possible applications by governments, public health agencies, and political organizations. 


## Opportunities to govern: How to increase the supply of moderate and competent candidates. 

*Joint work with [Andy Eggers](https://andy.egge.rs/){:target="_blank"}, 
[Anthony Fowler](https://voices.uchicago.edu/fowler/){:target="_blank"}, and
[William Howell](https://politicalscience.jhu.edu/directory/william-howell/){:target="_blank"}.* 

[preanalysis plan (1)](https://osf.io/ft8pq){:target="_blank"}

The state of American politics would be generally improved, many argue, if more
moderate and more qualified people served in government. In this paper, we investigate what
draws such individuals to run for elected office, focusing on a dimension of politics that has
received scant attention within the candidate-entry literature—namely, the ability of candidates,
once elected, to exercise meaningful influence and change public policy. In a ratings-based
conjoint survey experiment, we find that the opportunity to wield greater authority increases
moderates’ interest in seeking public office, whereas extremists appear indifferent; and that more
qualified people express more interest in running for office when greater authority is vested in an
office, the threshold needed to pass legislation is lower, and staff support is higher. These
findings have broad implications for our understanding of political representation, government
effectiveness, and the relationship between institutional reform and mass politics.

----
# Tutorials and code

## `banditsCI`

*Developed with [Yinghui Zhou](https://polisci.columbia.edu/content/yinghui-zhou){:target="_blank"} and [Ruohan Zhan](https://ruohanzhan.github.io/){:target="_blank"}. 

This `R` statistical software package provides functions for conducting frequentist inference on adaptively generated data. 
These functions produce point estimates and confidence intervals, using the methods proposed in [Zhan, Ruohan, et al. (2021)](https://arxiv.org/abs/2106.02029){:target="_blank"} and [Hadad, Vitor, et al. (2021)](https://arxiv.org/abs/1911.02768){:target="_blank"}. 
The code in this package is directly adapted from the original python code for those publications, documented at 
 - [github.com/gsbDBI/adaptive-confidence-intervals](https://github.com/gsbDBI/adaptive-confidence-intervals){:target="_blank"} and 
 - [github.com/gsbDBI/contextual_bandits_evaluation](https://github.com/gsbDBI/contextual_bandits_evaluation){:target="_blank"}. 

For illustration, several functions for simulating non-contextual and contextual adaptive experiments using Thompson sampling are also supplied. 

[site](https://uchicago-pol-methods.github.io/banditsCI/){:target="_blank"}
[CRAN](https://cloud.r-project.org/web/packages/banditsCI/index.html){:target="_blank"} 
[source code](https://github.com/UChicago-pol-methods/banditsCI/){:target="_blank"}


## Adaptive experimentation tutorial

*Developed with [Vitor Hadad](https://scholar.google.com/citations?user=lTmDo34AAAAJ&hl=en){:target="_blank"} and [Susan Athey](https://athey.people.stanford.edu/){:target="_blank"}.*

Much of my recent work has been on developing tools for designing and analyzing data from adaptive experiments. This tutorial provides an overview of adaptive experimental design, descibes some basic algorithms for treatment assignment, and discusses considerations for inference. 

[shiny tutorial](https://mollyow.shinyapps.io/adaptive){:target="_blank"}

----

## Hierarchical ridge regression tutorial

Suppose we have a factorial experiment, where we want to account for
two-way and higher-order interactions. We may think that interaction
effects will be small but not exactly equal to zero, and higher-order
interactions will tend to be associated with smaller effects relative to
lower order interactions.

Accounting for all interactions in a standard linear model may be costly
in terms of variance, so we want to use some form of regularization.

*Hierarchical ridge regression* facilitates penalization that is increasing with
degree of complexity of interactions.

[tutorial](https://github.com/mollyow/shrinkage-tutorial/blob/master/tutorial.md){:target="_blank"}

---


