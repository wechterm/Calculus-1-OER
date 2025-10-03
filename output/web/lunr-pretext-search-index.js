var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_Ch2Sec2",
  "level": "1",
  "url": "sec_Ch2Sec2.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Limit of a Function",
  "body": " The Limit of a Function   Learning Objectives   Using correct notation, describe the limit of a function.  Use a table of values to estimate the limit of a function or to identify when the limit does not exist.  Use a graph to estimate the limit of a function or to identify when the limit does not exist.  Define one-sided limits and provide examples.  Explain the relationship between one-sided and two-sided limits.  Using correct notation, describe an infinite limit.    The concept of a limit or limiting process, essential to the understanding of calculus, has been around for thousands of years. In fact, early mathematicians used a limiting process to obtain better and better approximations of areas of circles. Yet, the formal definition of a limit—as we know and understand it today—did not appear until the late 19th century. We therefore begin our quest to understand limits, as our mathematical ancestors did, by using an intuitive approach. In the next section, armed with a conceptual understanding of limits, we examine the formal definition of a limit.  We begin our exploration of limits by taking a look at the graphs of the functions   which are shown in . In particular, let’s focus our attention on the behavior of each graph at and around    \"Three graphs of functions. The first is f(s) = (x^2 – 4) \/ (x-2), which is a line of slope, x intercept (-2,0), and open circle at (2,4). The second is g(x) = |x – 2 | \/ (x-2), which contains two lines: x=1 for x\\gt 2 and x= -1 for x \\lt 2. There are open circles at both endpoints (2, 1) and (-2, 1). The third is h(x) = 1 \/ (x-2)^2, in which the function curves asymptotically towards y=0 and x=2 in quadrants one and two.\"  These graphs show the behavior of three different functions around   Each of the three functions is undefined at but if we make this statement and no other, we give a very incomplete picture of how each function behaves in the vicinity of To express the behavior of each graph in the vicinity of 2 more completely, we need to introduce the concept of a limit.    Intuitive Definition of a Limit  Let’s first take a closer look at how the function behaves around in . As the values of approach 2 from either side of 2, the values of approach 4. Mathematically, we say that the limit of as approaches 2 is 4. Symbolically, we express this limit as   From this very brief informal look at one limit, let’s start to develop an intuitive definition of the limit . We can think of the limit of a function at a number as being the one real number that the functional values approach as the -values approach provided such a real number exists. Stated more carefully, we have the following definition:   Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. If all values of the function approach the real number as the values of approach the number , then we say that the limit of as approaches is . (More succinct, as gets closer to , gets closer and stays close to .) Symbolically, we express this idea as     In this section, we'll focus on finding a table of values and the graph of a function. As an example, consider . Notice that is undefined at , but we are not interested in the function value at , only in the value the function is approaching as the values approach .THIS IS JJJUST A TEST   Evaluating a Limit Using a Table of Functional Values 1   Evaluate using a table of functional values.    We have calculated the values of for the values of listed in .   Table of Functional Values for           -0.1  0.998334166468   0.1  0.998334166468    -0.01  0.999983333417   0.01  0.999983333417    -0.001  0.999999833333   0.001  0.999999833333    -0.0001  0.999999998333   0.0001  0.999999998333     Note : The values in this table were obtained using a calculator and using all the places given in the calculator output. As we read down each column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that A calculator-or computer-generated graph of would be similar to that shown in , and it confirms our estimate.    \"A graph of f(x) = sin(x)\/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.\"  The graph of confirms the estimate from .      Evaluating a Limit Using a Table of Functional Values 2   Evaluate using a table of functional values.    As before, we use a table—in this case, —to list the values of the function for the given values of .   Table of Functional Values for           3.9  0.251582341869   4.1  0.248456731317    3.99  0.25015644562  4.01  0.24984394501    3.999  0.250015627  4.001  0.249984377    3.9999  0.250001563  4.0001  0.249998438    3.99999  0.25000016  4.00001  0.24999984     After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward 0.25 whereas the functional values greater than 4 appear to be increasing toward 0.25. We conclude that We confirm this estimate using the graph of shown in .    \"A graph of the function f(x) = (sqrt(x) – 2 ) \/ (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.\"  The graph of confirms the estimate from .       Estimate using a table of functional values. Use a graph to confirm your estimate.       Use 0.9, 0.99, 0.999, 0.9999, 0.99999 and 1.1, 1.01, 1.001, 1.0001, 1.00001 as your table values.    At this point, we see from and that it may be just as easy, if not easier, to estimate a limit of a function by inspecting its graph as it is to estimate the limit by using a table of functional values. In , we evaluate a limit exclusively by looking at a graph rather than by using a table of functional values.   Evaluating a Limit Using a Graph   For shown in , evaluate    \"The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1, 4).\"  The graph of includes one value not on a smooth curve.     Despite the fact that as the -values approach -1 from either side, the values approach 3. Therefore, Note that we can determine this limit without even knowing the algebraic expression of the function.    Based on , we make the following observation: It is possible for the limit of a function to exist at a point, and for the function to be defined at this point, but the limit of the function and the value of the function at the point may be different.   Use the graph of in to evaluate if possible.    \"A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).\"         What y -value does the function approach as the -values approach 2?    Looking at a table of functional values or looking at the graph of a function provides us with useful insight into the value of the limit of a function at a given point. However, these techniques rely too much on guesswork. We eventually need to develop alternative methods of evaluating limits. These new methods are more algebraic in nature and we explore them in the next section; however, at this point we introduce two special limits that are foundational to the techniques to come.   Two Important Limits  Let be a real number and c be a constant.       We can make the following observations about these two limits.   For the first limit, observe that as approaches , so does because Consequently,  For the second limit, consider .    Table of Functional Values for            c    c     c    c     c    c     c    c     Observe that for all values of (regardless of whether they are approaching ), the values remain constant at c . We have no choice but to conclude    The Existence of a Limit  As we consider the limit in the next example, keep in mind that for the limit of a function to exist at a point, the functional values must approach a single real-number value at that point. If the functional values do not approach a single value, then the limit does not exist.   Evaluating a Limit That Fails to Exist   Evaluate using a table of values.    lists values for the function for the given values of .   Table of Functional Values for           -0.1  0.544021110889   0.1  -0.544021110889    -0.01  0.50636564111   0.01  -0.50636564111    -0.001  -0.8268795405312   0.001  0.826879540532    -0.0001  0.305614388888   0.0001  -0.305614388888    -0.00001  -0.035748797987   0.00001  0.035748797987    -0.000001  0.349993504187   0.000001  -0.349993504187     After examining the table of functional values, we can see that the y -values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of -values approaching 0:   The corresponding y -values are   At this point we can indeed conclude that does not exist. (Mathematicians frequently abbreviate “does not exist” as DNE. Thus, we would write DNE.) The graph of is shown in and it gives a clearer picture of the behavior of as approaches 0. You can see that oscillates ever more wildly between -1 and 1 as approaches 0.    \"The graph of the function f(x) = sin(1\/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.\"  The graph of oscillates rapidly between -1 and 1 as approaches 0.       Use a table of functional values to evaluate if possible.    does not exist.    Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 and 2.1, 2.01, 2.001, 2.0001, 2.00001 in your table.      One-Sided Limits  Sometimes indicating that the limit of a function fails to exist at a point does not provide us with enough information about the behavior of the function at that particular point. To see this, we now revisit the function introduced at the beginning of the section (see (b)). As we pick values of close to 2, does not approach a single value, so the limit as approaches 2 does not exist—that is, DNE. However, this statement alone does not give us a complete picture of the behavior of the function around the -value 2. To provide a more accurate description, we introduce the idea of a one-sided limit . For all values to the left of 2 (or the negative side of 2), Thus, as approaches 2 from the left, approaches -1. Mathematically, we say that the limit as approaches 2 from the left is -1. Symbolically, we express this idea as   Similarly, as approaches 2 from the right (or from the positive side ), approaches 1. Symbolically, we express this idea as   We can now present an informal definition of one-sided limits.    We define two types of one-sided limits .  Limit from the left: Let be a function defined at all values in an open interval of the form ), and let be a real number. If the values of the function approach the real number as the values of (where approach the number , then we say that is the limit of as approaches a from the left. Symbolically, we express this idea as  Limit from the right: Let be a function defined at all values in an open interval of the form and let be a real number. If the values of the function approach the real number L as the values of (where ) approach the number , then we say that is the limit of as approaches from the right. Symbolically, we express this idea as     Evaluating One-Sided Limits   For the function evaluate each of the following limits.        We can use tables of functional values again . Observe that for values of less than 2, we use and for values of greater than 2, we use   Table of Functional Values for           1.9  2.9   2.1  0.41    1.99  2.99  2.01  0.0401    1.999  2.999  2.001  0.004001    1.9999  2.9999  2.0001  0.00040001    1.99999  2.99999  2.00001  0.0000400001     Based on this table, we can conclude that a. and b. Therefore, the (two-sided) limit of does not exist at  shows a graph of and reinforces our conclusion about these limits.    \"The graph of the given piecewise function. The first piece is f(x) = x+1 if x \\lt 2. The second piece is x^2 – 4 if x \\gt = 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.\"  The graph of has a break at      Use a table of functional values to estimate the following limits, if possible.        a. b.     Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate  Use -values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate (These tables are available from a previous Checkpoint problem.)     Let us now consider the relationship between the limit of a function at a point and the limits from the right and left at that point. It seems clear that if the limit from the right and the limit from the left have a common value, then that common value is the limit of the function at that point. Similarly, if the limit from the left and the limit from the right take on different values, the limit of the function does not exist. These conclusions are summarized in .   Relating One-Sided and Two-Sided Limits  Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. Then,      Infinite Limits  Evaluating the limit of a function at a point or evaluating the limit of a function from the right and left at a point helps us to characterize the behavior of a function around a given value. As we shall see, we can also describe the behavior of functions that do not have finite limits.  We now turn our attention to the third and final function introduced at the beginning of this section (see (c)). From its graph we see that as the values of approach 2, the values of become larger and larger and, in fact, become infinite. Mathematically, we say that the limit of as approaches 2 is positive infinity. Symbolically, we express this idea as   More generally, we define infinite limits as follows:   We define three types of infinite limits .  Infinite limits from the left: Let be a function defined at all values in an open interval of the form   If the values of increase without bound as the values of (where ). approach the number , then we say that the limit as approaches from the left is positive infinity and we write   If the values of decrease without bound as the values of (where ). approach the number , then we say that the limit as approaches from the left is negative infinity and we write    Infinite limits from the right : Let be a function defined at all values in an open interval of the form   If the values of increase without bound as the values of (where ). approach the number , then we say that the limit as approaches from the right is positive infinity and we write   If the values of decrease without bound as the values of (where ). approach the number , then we say that the limit as approaches from the right is negative infinity and we write    Two-sided infinite limit: Let be defined for all in an open interval containing .   If the values of increase without bound as the values of (where ). approach the number , then we say that the limit as approaches is positive infinity and we write   If the values of decrease without bound as the values of (where ). approach the number , then we say that the limit as approaches is negative infinity and we write     It is important to understand that when we write statements such as or we are describing the behavior of the function, as we have just defined it. We are not asserting that a limit exists. For the limit of a function to exist at , it must approach a real number as approaches . That said, if, for example, we always write rather than DNE.   Recognizing an Infinite Limit   Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         Begin by constructing a table of functional values.   Table of Functional Values for  >         -0.1  -10   0.1  10    -0.01  -100   0.01  100    -0.001  -1000   0.001  1000    -0.0001  -10,000   0.0001  10,000    -0.00001  -100,000   0.00001  100,000    -0.000001  -1,000,000   0.000001  1,000,000   >   The values of decrease without bound as approaches 0 from the left. We conclude that   The values of increase without bound as approaches 0 from the right. We conclude that   Since and have different values, we conclude that    The graph of in confirms these conclusions.    \"The graph of the function f(x) = 1\/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.\"  The graph of confirms that the limit as approaches 0 does not exist.       Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         a. b. c.    Follow the procedures from .    It is useful to point out that functions of the form where is a positive integer, have infinite limits as approaches from either the left or right ( ). These limits are summarized in .    \"Two graphs side by side of f(x) = 1 \/ (x-a)^n. The first graph shows the case where n is an odd positive integer, and the second shows the case where n is an even positive integer. In the first, the graph has two segments. Each curve asymptotically towards the x axis, also known as y=0, and x=a. The segment to the left of x=a is below the x axis, and the segment to the right of x=a is above the x axis. In the second graph, both segments are above the x axis.\"  The function has infinite limits at .    Infinite Limits from Positive Integers  If is a positive even integer, then   If is a positive odd integer, then   and    We should also point out that in the graphs of points on the graph having -coordinates very near to are very close to the vertical line That is, as approaches , the points on the graph of are closer to the line The line is called a vertical asymptote of the graph. We formally define a vertical asymptote as follows:   Let be a function. If any of the following conditions hold, then the line is a vertical asymptote of     Finding a Vertical Asymptote   Evaluate each of the following limits using . Identify any vertical asymptotes of the function         We can use directly.       The function has a vertical asymptote of      Evaluate each of the following limits. Identify any vertical asymptotes of the function         a. b. c. DNE. The line is the vertical asymptote of    Use .    In the next example we put our knowledge of various types of limits to use to analyze the behavior of a function at several different points.   Behavior of a Function at Different Points   Use the graph of in to determine each of the following values:          \"The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.\"  The graph shows     Using and the graph for reference, we arrive at the following values:    is undefined  DNE;  is undefined       Evaluate for shown here:   \"A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.\"     Does not exist.    Compare the limit from the right with the limit from the left.     Chapter Opener: Einstein’s Equation     \"A picture of a futuristic spaceship speeding through deep space.\"  (credit: NASA)   In the chapter opener we mentioned briefly how Albert Einstein showed that a limit exists to how fast any object can travel. Given Einstein’s equation for the mass of a moving object, what is the value of this bound?    Our starting point is Einstein’s equation for the mass of a moving object,   where is the object’s mass at rest, v is its speed, and c is the speed of light. To see how the mass changes at high speeds, we can graph the ratio of masses as a function of the ratio of speeds, ( ).    \"A graph showing the ratio of masses as a function of the ratio of speed in Einstein’s equation for the mass of a moving object. The x axis is the ratio of the speeds, v\/c. The y axis is the ratio of the masses, m\/m0. The equation of the function is m = m0 \/ sqrt(1 – v2 \/ c2 ). The graph is only in quadrant 1. It starts at (0,1) and curves up gently until about 0.8, where it increases seemingly exponentially; there is a vertical asymptote at v\/c (or x) = 1.\"  This graph shows the ratio of masses as a function of the ratio of speeds in Einstein’s equation for the mass of a moving object.   We can see that as the ratio of speeds approaches 1—that is, as the speed of the object approaches the speed of light—the ratio of masses increases without bound. In other words, the function has a vertical asymptote at We can try a few values of this ratio to test this idea.   Ratio of Masses and Speeds for a Moving Object         0.99  0.1411  7.089    0.999  0.0447  22.37    0.9999  0.0141  70.71     Thus, according to , if an object with mass 100 kg is traveling at 0.9999 c , its mass becomes 7071 kg. Since no object can have an infinite mass, we conclude that no object can travel at or more than the speed of light.      Key Concepts   A table of values or graph may be used to estimate a limit.  If the limit of a function at a point does not exist, it is still possible that the limits from the left and right at that point may exist.  If the limits of a function from the left and right exist and are equal, then the limit of the function is that common value.  We may use limits to describe infinite behavior of a function at a point.     Key Equations   Intuitive Definition of the Limit   Two Important Limits   One-Sided Limits   Infinite Limits from the Left   Infinite Limits from the Right   Two-Sided Infinite Limits  and  and    "
},
{
  "id": "CNX_Calc_Figure_02_02_001",
  "level": "2",
  "url": "sec_Ch2Sec2.html#CNX_Calc_Figure_02_02_001",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  \"Three graphs of functions. The first is f(s) = (x^2 – 4) \/ (x-2), which is a line of slope, x intercept (-2,0), and open circle at (2,4). The second is g(x) = |x – 2 | \/ (x-2), which contains two lines: x=1 for x\\gt 2 and x= -1 for x \\lt 2. There are open circles at both endpoints (2, 1) and (-2, 1). The third is h(x) = 1 \/ (x-2)^2, in which the function curves asymptotically towards y=0 and x=2 in quadrants one and two.\"  These graphs show the behavior of three different functions around  "
},
{
  "id": "sec_Ch2Sec2-3-4",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intuitive definition of the limit "
},
{
  "id": "sec_Ch2Sec2-3-5",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-3-5",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": " Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. If all values of the function approach the real number as the values of approach the number , then we say that the limit of as approaches is . (More succinct, as gets closer to , gets closer and stays close to .) Symbolically, we express this idea as   "
},
{
  "id": "fs-id1170572561451",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170572561451",
  "type": "Example",
  "number": "1.1.3",
  "title": "Evaluating a Limit Using a Table of Functional Values 1.",
  "body": " Evaluating a Limit Using a Table of Functional Values 1   Evaluate using a table of functional values.    We have calculated the values of for the values of listed in .   Table of Functional Values for           -0.1  0.998334166468   0.1  0.998334166468    -0.01  0.999983333417   0.01  0.999983333417    -0.001  0.999999833333   0.001  0.999999833333    -0.0001  0.999999998333   0.0001  0.999999998333     Note : The values in this table were obtained using a calculator and using all the places given in the calculator output. As we read down each column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that A calculator-or computer-generated graph of would be similar to that shown in , and it confirms our estimate.    \"A graph of f(x) = sin(x)\/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.\"  The graph of confirms the estimate from .    "
},
{
  "id": "fs-id1170571656691",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170571656691",
  "type": "Example",
  "number": "1.1.6",
  "title": "Evaluating a Limit Using a Table of Functional Values 2.",
  "body": " Evaluating a Limit Using a Table of Functional Values 2   Evaluate using a table of functional values.    As before, we use a table—in this case, —to list the values of the function for the given values of .   Table of Functional Values for           3.9  0.251582341869   4.1  0.248456731317    3.99  0.25015644562  4.01  0.24984394501    3.999  0.250015627  4.001  0.249984377    3.9999  0.250001563  4.0001  0.249998438    3.99999  0.25000016  4.00001  0.24999984     After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward 0.25 whereas the functional values greater than 4 appear to be increasing toward 0.25. We conclude that We confirm this estimate using the graph of shown in .    \"A graph of the function f(x) = (sqrt(x) – 2 ) \/ (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.\"  The graph of confirms the estimate from .    "
},
{
  "id": "sec_Ch2Sec2-3-9",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-3-9",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Estimate using a table of functional values. Use a graph to confirm your estimate.       Use 0.9, 0.99, 0.999, 0.9999, 0.99999 and 1.1, 1.01, 1.001, 1.0001, 1.00001 as your table values.   "
},
{
  "id": "fs-id1170572337207",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170572337207",
  "type": "Example",
  "number": "1.1.10",
  "title": "Evaluating a Limit Using a Graph.",
  "body": " Evaluating a Limit Using a Graph   For shown in , evaluate    \"The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1, 4).\"  The graph of includes one value not on a smooth curve.     Despite the fact that as the -values approach -1 from either side, the values approach 3. Therefore, Note that we can determine this limit without even knowing the algebraic expression of the function.   "
},
{
  "id": "sec_Ch2Sec2-3-13",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-3-13",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "",
  "body": " Use the graph of in to evaluate if possible.    \"A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).\"         What y -value does the function approach as the -values approach 2?   "
},
{
  "id": "fs-id1170572086324",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170572086324",
  "type": "Theorem",
  "number": "1.1.14",
  "title": "Two Important Limits.",
  "body": " Two Important Limits  Let be a real number and c be a constant.      "
},
{
  "id": "fs-id1170571613026",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170571613026",
  "type": "Table",
  "number": "1.1.15",
  "title": "Table of Functional Values for <span class=\"process-math\">\\(\\lim_{x \\to a} c=c\\)<\/span>",
  "body": " Table of Functional Values for            c    c     c    c     c    c     c    c    "
},
{
  "id": "sec_Ch2Sec2-4-3",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-4-3",
  "type": "Example",
  "number": "1.1.16",
  "title": "Evaluating a Limit That Fails to Exist.",
  "body": " Evaluating a Limit That Fails to Exist   Evaluate using a table of values.    lists values for the function for the given values of .   Table of Functional Values for           -0.1  0.544021110889   0.1  -0.544021110889    -0.01  0.50636564111   0.01  -0.50636564111    -0.001  -0.8268795405312   0.001  0.826879540532    -0.0001  0.305614388888   0.0001  -0.305614388888    -0.00001  -0.035748797987   0.00001  0.035748797987    -0.000001  0.349993504187   0.000001  -0.349993504187     After examining the table of functional values, we can see that the y -values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of -values approaching 0:   The corresponding y -values are   At this point we can indeed conclude that does not exist. (Mathematicians frequently abbreviate “does not exist” as DNE. Thus, we would write DNE.) The graph of is shown in and it gives a clearer picture of the behavior of as approaches 0. You can see that oscillates ever more wildly between -1 and 1 as approaches 0.    \"The graph of the function f(x) = sin(1\/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.\"  The graph of oscillates rapidly between -1 and 1 as approaches 0.    "
},
{
  "id": "sec_Ch2Sec2-4-4",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-4-4",
  "type": "Checkpoint",
  "number": "1.1.19",
  "title": "",
  "body": "  Use a table of functional values to evaluate if possible.    does not exist.    Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 and 2.1, 2.01, 2.001, 2.0001, 2.00001 in your table.   "
},
{
  "id": "sec_Ch2Sec2-5-2",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-sided limit "
},
{
  "id": "sec_Ch2Sec2-5-7",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-5-7",
  "type": "Definition",
  "number": "1.1.20",
  "title": "",
  "body": "  We define two types of one-sided limits .  Limit from the left: Let be a function defined at all values in an open interval of the form ), and let be a real number. If the values of the function approach the real number as the values of (where approach the number , then we say that is the limit of as approaches a from the left. Symbolically, we express this idea as  Limit from the right: Let be a function defined at all values in an open interval of the form and let be a real number. If the values of the function approach the real number L as the values of (where ) approach the number , then we say that is the limit of as approaches from the right. Symbolically, we express this idea as   "
},
{
  "id": "sec_Ch2Sec2-5-8",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-5-8",
  "type": "Example",
  "number": "1.1.21",
  "title": "Evaluating One-Sided Limits.",
  "body": " Evaluating One-Sided Limits   For the function evaluate each of the following limits.        We can use tables of functional values again . Observe that for values of less than 2, we use and for values of greater than 2, we use   Table of Functional Values for           1.9  2.9   2.1  0.41    1.99  2.99  2.01  0.0401    1.999  2.999  2.001  0.004001    1.9999  2.9999  2.0001  0.00040001    1.99999  2.99999  2.00001  0.0000400001     Based on this table, we can conclude that a. and b. Therefore, the (two-sided) limit of does not exist at  shows a graph of and reinforces our conclusion about these limits.    \"The graph of the given piecewise function. The first piece is f(x) = x+1 if x \\lt 2. The second piece is x^2 – 4 if x \\gt = 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.\"  The graph of has a break at    "
},
{
  "id": "sec_Ch2Sec2-5-9",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-5-9",
  "type": "Checkpoint",
  "number": "1.1.24",
  "title": "",
  "body": " Use a table of functional values to estimate the following limits, if possible.        a. b.     Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate  Use -values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate (These tables are available from a previous Checkpoint problem.)    "
},
{
  "id": "fs-id1170571598073",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170571598073",
  "type": "Theorem",
  "number": "1.1.25",
  "title": "Relating One-Sided and Two-Sided Limits.",
  "body": " Relating One-Sided and Two-Sided Limits  Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. Then,   "
},
{
  "id": "sec_Ch2Sec2-6-5",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite limits "
},
{
  "id": "sec_Ch2Sec2-6-6",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-6",
  "type": "Definition",
  "number": "1.1.26",
  "title": "",
  "body": " We define three types of infinite limits .  Infinite limits from the left: Let be a function defined at all values in an open interval of the form   If the values of increase without bound as the values of (where ). approach the number , then we say that the limit as approaches from the left is positive infinity and we write   If the values of decrease without bound as the values of (where ). approach the number , then we say that the limit as approaches from the left is negative infinity and we write    Infinite limits from the right : Let be a function defined at all values in an open interval of the form   If the values of increase without bound as the values of (where ). approach the number , then we say that the limit as approaches from the right is positive infinity and we write   If the values of decrease without bound as the values of (where ). approach the number , then we say that the limit as approaches from the right is negative infinity and we write    Two-sided infinite limit: Let be defined for all in an open interval containing .   If the values of increase without bound as the values of (where ). approach the number , then we say that the limit as approaches is positive infinity and we write   If the values of decrease without bound as the values of (where ). approach the number , then we say that the limit as approaches is negative infinity and we write    "
},
{
  "id": "fs-id1170571611150",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170571611150",
  "type": "Example",
  "number": "1.1.27",
  "title": "Recognizing an Infinite Limit.",
  "body": " Recognizing an Infinite Limit   Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         Begin by constructing a table of functional values.   Table of Functional Values for  >         -0.1  -10   0.1  10    -0.01  -100   0.01  100    -0.001  -1000   0.001  1000    -0.0001  -10,000   0.0001  10,000    -0.00001  -100,000   0.00001  100,000    -0.000001  -1,000,000   0.000001  1,000,000   >   The values of decrease without bound as approaches 0 from the left. We conclude that   The values of increase without bound as approaches 0 from the right. We conclude that   Since and have different values, we conclude that    The graph of in confirms these conclusions.    \"The graph of the function f(x) = 1\/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.\"  The graph of confirms that the limit as approaches 0 does not exist.    "
},
{
  "id": "sec_Ch2Sec2-6-9",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-9",
  "type": "Checkpoint",
  "number": "1.1.30",
  "title": "",
  "body": "  Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         a. b. c.    Follow the procedures from .   "
},
{
  "id": "CNX_Calc_Figure_02_02_014",
  "level": "2",
  "url": "sec_Ch2Sec2.html#CNX_Calc_Figure_02_02_014",
  "type": "Figure",
  "number": "1.1.31",
  "title": "",
  "body": "  \"Two graphs side by side of f(x) = 1 \/ (x-a)^n. The first graph shows the case where n is an odd positive integer, and the second shows the case where n is an even positive integer. In the first, the graph has two segments. Each curve asymptotically towards the x axis, also known as y=0, and x=a. The segment to the left of x=a is below the x axis, and the segment to the right of x=a is above the x axis. In the second graph, both segments are above the x axis.\"  The function has infinite limits at .  "
},
{
  "id": "fs-id1170571654206",
  "level": "2",
  "url": "sec_Ch2Sec2.html#fs-id1170571654206",
  "type": "Theorem",
  "number": "1.1.32",
  "title": "Infinite Limits from Positive Integers.",
  "body": " Infinite Limits from Positive Integers  If is a positive even integer, then   If is a positive odd integer, then   and   "
},
{
  "id": "sec_Ch2Sec2-6-13",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertical asymptote "
},
{
  "id": "sec_Ch2Sec2-6-14",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-14",
  "type": "Definition",
  "number": "1.1.33",
  "title": "",
  "body": " Let be a function. If any of the following conditions hold, then the line is a vertical asymptote of   "
},
{
  "id": "sec_Ch2Sec2-6-15",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-15",
  "type": "Example",
  "number": "1.1.34",
  "title": "Finding a Vertical Asymptote.",
  "body": " Finding a Vertical Asymptote   Evaluate each of the following limits using . Identify any vertical asymptotes of the function         We can use directly.       The function has a vertical asymptote of   "
},
{
  "id": "sec_Ch2Sec2-6-16",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-16",
  "type": "Checkpoint",
  "number": "1.1.35",
  "title": "",
  "body": "  Evaluate each of the following limits. Identify any vertical asymptotes of the function         a. b. c. DNE. The line is the vertical asymptote of    Use .   "
},
{
  "id": "sec_Ch2Sec2-6-18",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-18",
  "type": "Example",
  "number": "1.1.36",
  "title": "Behavior of a Function at Different Points.",
  "body": " Behavior of a Function at Different Points   Use the graph of in to determine each of the following values:          \"The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.\"  The graph shows     Using and the graph for reference, we arrive at the following values:    is undefined  DNE;  is undefined    "
},
{
  "id": "sec_Ch2Sec2-6-19",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-19",
  "type": "Checkpoint",
  "number": "1.1.38",
  "title": "",
  "body": "  Evaluate for shown here:   \"A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.\"     Does not exist.    Compare the limit from the right with the limit from the left.   "
},
{
  "id": "sec_Ch2Sec2-6-20",
  "level": "2",
  "url": "sec_Ch2Sec2.html#sec_Ch2Sec2-6-20",
  "type": "Example",
  "number": "1.1.39",
  "title": "Chapter Opener: Einstein’s Equation.",
  "body": " Chapter Opener: Einstein’s Equation     \"A picture of a futuristic spaceship speeding through deep space.\"  (credit: NASA)   In the chapter opener we mentioned briefly how Albert Einstein showed that a limit exists to how fast any object can travel. Given Einstein’s equation for the mass of a moving object, what is the value of this bound?    Our starting point is Einstein’s equation for the mass of a moving object,   where is the object’s mass at rest, v is its speed, and c is the speed of light. To see how the mass changes at high speeds, we can graph the ratio of masses as a function of the ratio of speeds, ( ).    \"A graph showing the ratio of masses as a function of the ratio of speed in Einstein’s equation for the mass of a moving object. The x axis is the ratio of the speeds, v\/c. The y axis is the ratio of the masses, m\/m0. The equation of the function is m = m0 \/ sqrt(1 – v2 \/ c2 ). The graph is only in quadrant 1. It starts at (0,1) and curves up gently until about 0.8, where it increases seemingly exponentially; there is a vertical asymptote at v\/c (or x) = 1.\"  This graph shows the ratio of masses as a function of the ratio of speeds in Einstein’s equation for the mass of a moving object.   We can see that as the ratio of speeds approaches 1—that is, as the speed of the object approaches the speed of light—the ratio of masses increases without bound. In other words, the function has a vertical asymptote at We can try a few values of this ratio to test this idea.   Ratio of Masses and Speeds for a Moving Object         0.99  0.1411  7.089    0.999  0.0447  22.37    0.9999  0.0141  70.71     Thus, according to , if an object with mass 100 kg is traveling at 0.9999 c , its mass becomes 7071 kg. Since no object can have an infinite mass, we conclude that no object can travel at or more than the speed of light.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
