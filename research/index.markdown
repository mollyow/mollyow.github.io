---
layout: design-mow
title: "Research"
date:   2024-05-05
---

### Selected projects

----
## Does Asking Questions Boost Engagement? Three Health Mes-
saging Experiments in the US and Ghana.
url: [NBER pre-print](https://www.nber.org/system/files/working_papers/w33294/w33294.pdf)
Overview of Ghana component: [www.poverty-action.org](https://www.poverty-action.org/study/impact-quiz-style-information-campaign-covid-19-prevention-ghana). \\
Pre-registrations: [1](https://aspredicted.org/xp8c-v66w.pdf); [2](https://aspredicted.org/zrpp-9hqp.pdf)

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

## Conversations with a concern-addressing chatbot increase COVID-19 vaccination intentions among social media users in Kenya and Nigeria 

*Joint work with [Leah Rosenzweig](https://leahrrosenzweig.com/){:target="_blank"}.*

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

Experimental researchers in political science frequently face the problem of inferring which of several treatment arms is most effective. 
They may also seek to estimate mean outcomes under that arm, construct confidence intervals, and test hypotheses. 
Ordinarily, multi-arm trials conducted using static designs assign participants to each arm with fixed probabilities. 
However, a growing statistical literature suggests that adaptive experimental designs that dynamically allocate larger assignment probabilities to more promising treatments are better equipped to discover the best-performing arm. 
Using simulations and empirical applications, we explore the conditions under which such designs hasten the discovery of superior treatments and improve the precision with which their effects are estimated. 
Recognizing that many scholars seek to assess performance relative to a control condition, we also develop and implement a novel adaptive algorithm that seeks to maximize the precision with which the largest treatment effect is estimated.

[paper](https://doi.org/10.1111/ajps.12597){:target="_blank"}

----

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

----

## Experimentation for homogeneous policy change

*Joint work with [Drew Dimmery](https://ddimmery.com/){:target="_blank"}.*

When the Stable Unit Treatment Value Assumption (SUTVA) is violated and there is interference among units, there is not a uniquely defined Average Treatment Effect (ATE), and alternative estimands may be of interest, among them average unit-level differences in outcomes under different homogeneous treatment policies. We term this target the {Homogeneous Assignment Average Treatment Effect} (HAATE). We consider approaches to experimental design with multiple treatment conditions under partial interference and, given the estimand of interest, we show that difference-in-means estimators may perform better than correctly specified regression models in finite samples on root mean squared error (RMSE). With errors correlated at the cluster level, we demonstrate that two-stage randomization procedures with intra-cluster correlation of treatment strictly between zero and one may dominate one-stage randomization designs on the same metric. Simulations demonstrate performance of this approach; an application to online experiments at Facebook is discussed. 






