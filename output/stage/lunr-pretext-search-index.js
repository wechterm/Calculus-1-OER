var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_Ch1Sec2",
  "level": "1",
  "url": "sec_Ch1Sec2.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Classes of Functions",
  "body": " Basic Classes of Functions   Learning Objectives   Calculate the slope of a linear function and interpret its meaning.  Recognize the degree of a polynomial.  Find the roots of a quadratic polynomial.  Describe the graphs of basic odd and even polynomial functions.  Identify a rational function.  Describe the graphs of power and root functions.  Explain the difference between algebraic and transcendental functions.  Graph a piecewise-defined function.  Sketch the graph of a function that has been shifted, stretched, or reflected from its initial graph position.   We have studied the general characteristics of functions, so now let's examine some specific classes of functions. We begin by reviewing the basic properties of linear and quadratic functions, and then generalize to include higher-degree polynomials. By combining root functions with polynomials, we can define general algebraic functions and distinguish them from the transcendental functions we examine later in this chapter. We finish the section with examples of piecewise-defined functions and take a look at how to sketch the graph of a function that has been shifted, stretched, or reflected from its initial form.    Linear Functions and Slope  The easiest type of function to consider is a linear function . Linear functions have the form where and are constants. In , we see examples of linear functions when is positive, negative, and zero. Note that if the graph of the line rises as increases. In other words, is increasing on If the graph of the line falls as increases. In this case, is decreasing on If the line is horizontal.    \"An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the 3 functions. The first function is “f(x) = 3x + 1”, which is an increasing straight line with an x intercept at ((-1\/3), 0) and a y intercept at (0, 1). The second function is “g(x) = 2”, which is a horizontal line with a y intercept at (0, 2) and no x intercept. The third function is “h(x) = (-1\/2)x”, which is a decreasing straight line with an x intercept and y intercept both at the origin. The function f(x) is increasing at a higher rate than the function h(x) is decreasing.\"    These linear functions are increasing or decreasing on and one function is a horizontal line.   As suggested by , the graph of any linear function is a line. One of the distinguishing features of a line is its slope. The slope is the change in for each unit change in The slope measures both the steepness and the direction of a line. If the slope is positive, the line points upward when moving from left to right. If the slope is negative, the line points downward when moving from left to right. If the slope is zero, the line is horizontal. To calculate the slope of a line, we need to determine the ratio of the change in versus the change in To do so, we choose any two points and on the line and calculate In , we see this ratio is independent of the points chosen.    \"An image of a graph. The y axis runs from -1 to 10 and the x axis runs from -1 to 6. The graph is of a function that is an increasing straight line. There are four points labeled on the function at (1, 1), (2, 3), (3, 5), and (5, 9). There is a dotted horizontal line from the labeled function point (1, 1) to the unlabeled point (3, 1) which is not on the function, and then dotted vertical line from the unlabeled point (3, 1), which is not on the function, to the labeled function point (3, 5). These two dotted have the label “(y2 - y1)\/(x2 - x1) = (5 -1)\/(3 - 1) = 2”. There is a dotted horizontal line from the labeled function point (2, 3) to the unlabeled point (5, 3) which is not on the function, and then dotted vertical line from the unlabeled point (5, 3), which is not on the function, to the labeled function point (5, 9). These two dotted have the label “(y2 - y1)\/(x2 - x1) = (9 -3)\/(5 - 2) = 2”.\">    For any linear function, the slope is independent of the choice of points and on the line.     Consider line passing through points and Let and denote the changes in and respectively. The slope of the line is    We now examine the relationship between slope and the formula for a linear function. Consider the linear function given by the formula As discussed earlier, we know the graph of a linear function is given by a line. We can use our definition of slope to calculate the slope of this line. As shown, we can determine the slope by calculating for any points and on the line. Evaluating the function at we see that is a point on this line. Evaluating this function at we see that is also a point on this line. Therefore, the slope of this line is   We have shown that the coefficient is the slope of the line. We can conclude that the formula describes a line with slope Furthermore, because this line intersects the -axis at the point we see that the -intercept for this linear function is We conclude that the formula tells us the slope, and the -intercept, for this line. Since we often use the symbol to denote the slope of a line, we can write   to denote the slope-intercept form of a linear function.  Sometimes it is convenient to express a linear function in different ways. For example, suppose the graph of a linear function passes through the point and the slope of the line is Since any other point on the graph of must satisfy the equation   this linear function can be expressed by writing   We call this equation the point-slope equation for that linear function.  Since every nonvertical line is the graph of a linear function, the points on a nonvertical line can be described using the slope-intercept or point-slope equations. However, a vertical line does not represent the graph of a function and cannot be expressed in either of these forms. Instead, a vertical line is described by the equation for some constant Since neither the slope-intercept form nor the point-slope form allows for vertical lines, we use the notation   where are both not zero, to denote the standard form of a line .    Consider a line passing through the point with slope The equation   is the point-slope equation for that line.  Consider a line with slope and -intercept The equation   is an equation for that line in slope-intercept form .  The standard form of a line is given by the equation   where and are both not zero. This form is more general because it allows for a vertical line,    Finding the Slope and Equations of Lines   Consider the line passing through the points and as shown in .    \"An image of a graph. The x axis runs from -5 to 12 and the y axis runs from -5 to 6. The graph is of the function that is a decreasing straight line. The function has two points plotted, at (-4, 5) and (11, 4).\"   Finding the equation of a linear function with a graph that is a line between two given points.    Find the slope of the line.  Find an equation for this linear function in point-slope form.  Find an equation for this linear function in slope-intercept form.      The slope of the line is  To find an equation for the linear function in point-slope form, use the slope and choose any point on the line. If we choose the point we get the equation  To find an equation for the linear function in slope-intercept form, solve the equation in part b. for When we do this, we get the equation       Consider the line passing through points and Find the slope of the line.  Find an equation of that line in point-slope form. Find an equation of that line in slope-intercept form.    The point-slope form is   The slope-intercept form is     The slope     A Linear Distance Function   Jessica leaves her house at 5:50 a.m. and goes for a 9-mile run. She returns to her house at 7:08 a.m. Answer the following questions, assuming Jessica runs at a constant pace.   Describe the distance (in miles) Jessica runs as a linear function of her run time (in minutes).  Sketch a graph of  Interpret the meaning of the slope.      At time Jessica is at her house, so At time minutes, Jessica has finished running mi, so The slope of the linear function is The -intercept is so the equation for this linear function is  To graph use the fact that the graph passes through the origin and has slope   \"An image of a graph. The y axis is labeled “y, distance in miles”. The x axis is labeled “t, time in minutes”. The graph is of the function “D(t) = 3t\/26”, which is an increasing straight line that starts at the origin. The function ends at the plotted point (78, 9).\"    The slope describes the distance (in miles) Jessica runs per minute, or her average velocity.       Polynomials   A linear function is a special type of a more general class of functions: polynomials. A polynomial function is any function that can be written in the form   for some integer and constants where In the case when we allow for if the function is called the zero function . The value is called the degree of the polynomial; the constant is called the leading coefficient . A linear function of the form is a polynomial of degree 1 if and degree 0 if A polynomial of degree 0 is also called a constant function . A polynomial function of degree 2 is called a quadratic function . In particular, a quadratic function has the form where A polynomial function of degree is called a cubic function .    Power Functions  Some polynomial functions are power functions. A power function is any function of the form where and are any real numbers. The exponent in a power function can be any real number, but here we consider the case when the exponent is a positive integer. (We consider other cases later.) If the exponent is a positive integer, then is a polynomial. If is even, then is an even function because if is even. If is odd, then is an odd function because if is odd ( ).    \"An image of two graphs. Both graphs have an x axis that runs from -4 to 4 and a y axis that runs from -6 to 7. The first graph is labeled “a” and is of two functions. The first function is “f(x) = x to the 4th”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin, but increases and decreases at a slower rate than the first function. The second graph is labeled “b” and is of two functions. The first function is “f(x) = x to the 5th”, which is a curved function that increases until the origin, becomes even at the origin, and then increases again after the origin. The second function is “f(x) = x cubed”, which is a curved function that increases until the origin, becomes even at the origin, and then increases again after the origin, but increases at a slower rate than the first function.\"   (a) For any even integer is an even function. (b) For any odd integer is an odd function.     Behavior at Infinity  To determine the behavior of a function as the inputs approach infinity, we look at the values as the inputs, become larger. For some functions, the values of approach a finite number. For example, for the function the values become closer and closer to zero for all values of as they get larger and larger. For this function, we say approaches two as goes to infinity,” and we write as The line is a horizontal asymptote for the function because the graph of the function gets closer to the line as gets larger.  For other functions, the values may not approach a finite number but instead may become larger for all values of as they get larger. In that case, we say approaches infinity as approaches infinity,” and we write as For example, for the function the outputs become larger as the inputs get larger. We can conclude that the function approaches infinity as approaches infinity, and we write as The behavior as and the meaning of as or can be defined similarly. We can describe what happens to the values of as and as as the end behavior of the function.  To understand the end behavior for polynomial functions, we can focus on quadratic and cubic functions. The behavior for higher-degree polynomials can be analyzed similarly. Consider a quadratic function If the values as If the values as Since the graph of a quadratic function is a parabola, the parabola opens upward if the parabola opens downward if (See (a).)  Now consider a cubic function If then as and as If then as and as As we can see from both of these graphs, the leading term of the polynomial determines the end behavior. (See (b).)    \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 5 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x squared) - 4x -4”, which is a parabola. The function increasing until it hits the maximum at the point (-2, 0) and then begins decreasing. The x intercept is at (-2, 0) and the y intercept is at (0, -4). The second function is “f(x) = 2(x squared) -12x + 16”, which is a parabola. The function decreases until it hits the minimum point at (3, -2) and then begins increasing. The x intercepts are at (2, 0) and (4, 0) and the y intercept is not shown. The second graph is labeled “b” and has an x axis that runs from -4 to 3 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x cubed) - 3(x squared) + x + 3”. The graph decreases until the approximate point at (-2.2, -3.1), then increases until the approximate point at (0.2, 3.1), then begins decreasing again. The x intercepts are at (-3, 0), (-1, 0), and (1, 0). The y intercept is at (0, 3). The second function is “f(x) = (x cubed) -3(x squared) + 3x - 1”. It is a curved function that increases until the point (1, 0), where it levels out. After this point, the function begins increasing again. It has an x intercept at (1, 0) and a y intercept at (0, -1).\"   (a) For a quadratic function, if the leading coefficient the parabola opens upward. If the parabola opens downward. (b) For a cubic function if the leading coefficient the values as and the values as If the leading coefficient the opposite is true.     Zeros of Polynomial Functions  Another characteristic of the graph of a polynomial function is where it intersects the -axis. To determine where a function intersects the -axis, we need to solve the equation for the case of the linear function the -intercept is given by solving the equation In this case, we see that the -intercept is given by In the case of a quadratic function, finding the -intercept(s) requires finding the zeros of a quadratic equation: In some cases, it is easy to factor the polynomial to find the zeros. If not, we make use of the quadratic formula.   Rule: The Quadratic Formula  Consider the quadratic equation   where The solutions of this equation are given by the quadratic formula   If the discriminant this formula tells us there are two real numbers that satisfy the quadratic equation. If this formula tells us there is only one solution, and it is a real number. If no real numbers satisfy the quadratic equation.   In the case of higher-degree polynomials, it may be more complicated to determine where the graph intersects the -axis. In some instances, it is possible to find the -intercepts by factoring the polynomial to find its zeros. In other cases, it is impossible to calculate the exact values of the -intercepts. However, as we see later in the text, in cases such as this, we can use analytical tools to approximate (to a very high degree) where the -intercepts are located. Here we focus on the graphs of polynomials for which we can calculate their zeros explicitly.   Graphing Polynomial Functions   For the following functions a. and b., i. describe the behavior of as ii. find all zeros of and iii. sketch a graph of         The function is a quadratic function.   Because  To find the zeros of use the quadratic formula. The zeros are  To sketch the graph of use the information from your previous answers and combine it with the fact that the graph is a parabola opening downward.   \"An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -8 to 2. The graph is of the function “f(x) = -2(x squared) + 4x - 1”, which is a parabola. The function increases until the maximum point at (1, 1) and then decreases. Both x intercept points are plotted on the function, at approximately (0.2929, 0) and (1.7071, 0). The y intercept is at the point (0, -1).\"    The function is a cubic function.   Because As  To find the zeros of we need to factor the polynomial. First, when we factor out of all the terms, we find Then, when we factor the quadratic function we find Therefore, the zeros of are  Combining the results from parts i. and ii., draw a rough sketch of   \"An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -14 to 7. The graph is of the curved function “f(x) = (x cubed) - 3(x squared) - 4x”. The function increases until the approximate point at (-0.5, 1.1), then decreases until the approximate point (2.5, -13.1), then begins increasing again. The x intercept points are plotted on the function, at (-1, 0), (0, 0), and (4, 0). The y intercept is at the origin.\"         Consider the quadratic function Find the zeros of Does the parabola open upward or downward?    The zeros are The parabola opens upward.    Use the quadratic formula.      Mathematical Models  A large variety of real-world situations can be described using mathematical models . A mathematical model is a method of simulating real-life situations with mathematical equations. Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately. Models are useful because they help predict future outcomes. Examples of mathematical models include the study of population dynamics, investigations of weather patterns, and predictions of product sales.  As an example, let’s consider a mathematical model that a company could use to describe its revenue for the sale of a particular item. The amount of revenue a company receives for the sale of items sold at a price of dollars per item is described by the equation The company is interested in how the sales change as the price of the item changes. Suppose the data in show the number of units a company sells as a function of the price per item.   Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                     In , we see the graph the number of units sold (in thousands) as a function of price (in dollars). We note from the shape of the graph that the number of units sold is likely a linear function of price per item, and the data can be closely approximated by the linear function for where predicts the number of units sold in thousands. Using this linear function, the revenue (in thousands of dollars) can be estimated by the quadratic function   for In , we use this quadratic function to predict the amount of revenue the company receives depending on the price the company charges per item. Note that we cannot conclude definitively the actual number of units sold for values of for which no data are collected. However, given the other data values and the graph shown, it seems reasonable that the number of units sold (in thousands) if the price charged is dollars may be close to the values predicted by the linear function    \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.    Maximizing Revenue   A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from , the company arrives at the following quadratic function to model revenue (in thousands of dollars) as a function of price per item   for   Predict the revenue if the company sells the item at a price of and  Find the zeros of this function and interpret the meaning of the zeros.  Sketch a graph of  Use the graph to determine the value of that maximizes revenue. Find the maximum revenue.      Evaluating the revenue function at and we can conclude that  The zeros of this function can be found by solving the equation When we factor the quadratic expression, we get The solutions to this equation are given by For these values of the revenue is zero. When the revenue is zero because the company is giving away its merchandise for free. When the revenue is zero because the price is too high, and no one will buy any items.  Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at and the parabola must be symmetric about the line halfway between them, or   \"An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.\">    The function is a parabola with zeros at and and it is symmetric about the line so the maximum revenue occurs at a price of per item. At that price, the revenue is        Algebraic Functions  By allowing for quotients and fractional powers in polynomial functions, we create a larger class of functions. An algebraic function is one that involves addition, subtraction, multiplication, division, rational powers, and roots. Two types of algebraic functions are rational functions and root functions.  Just as rational numbers are quotients of integers, rational functions are quotients of polynomials. In particular, a rational function is any function of the form where and are polynomials. For example,   are rational functions. A root function is a power function of the form where is a positive integer greater than one. For example, is the square-root function and is the cube-root function. By allowing for compositions of root functions and rational functions, we can create other algebraic functions. For example, is an algebraic function.   Finding Domain and Range for Algebraic Functions   For each of the following functions, find the domain and range.    To find the domain of , we need . Or, Or , the solution to which is . Therefore, the domain is . If , then . Therefore, and the range of is .       It is not possible to divide by zero, so the domain is the set of real numbers such that To find the range, we need to find the values for which there exists a real number such that When we multiply both sides of this equation by we see that must satisfy the equation  From this equation, we can see that must satisfy  If this equation has no solution. On the other hand, as long as satisfies this equation. We can conclude that the range of is  To find the domain of we need When we factor, we write This inequality holds if and only if both terms are positive or both terms are negative. For both terms to be positive, we need to find such that These two inequalities reduce to and Therefore, the set must be part of the domain. For both terms to be negative, we need These two inequalities also reduce to and There are no values of that satisfy both of these inequalities. Thus, we can conclude the domain of this function is If then Therefore, and the range of is       Find the domain and range for the function    The domain is the set of real numbers such that The range is the set    The denominator cannot be zero. Solve the equation for to find the range.    The root functions have defining characteristics depending on whether is odd or even. For all even integers the domain of is the interval For all odd integers the domain of is the set of all real numbers. Since for odd integers is an odd function if is odd. See the graphs of root functions for different values of in .    \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -2 to 9 and a y axis that runs from -4 to 4. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = x to the 4th root”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function. The second graph is labeled “b” and has an x axis that runs from -8 to 8 and a y axis that runs from -4 to 4. The second graph is of two functions. The first function is “f(x) = cube root of x”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin. The second function is “f(x) = x to the 5th root”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin, but increases at a slower rate than the first function.\"   (a) If is even, the domain of is (b) If is odd, the domain of is and the function is an odd function.    Finding Domains for Algebraic Functions   For each of the following functions, determine the domain of the function.           You cannot divide by zero, so the domain is the set of values such that Therefore, the domain is  You need to determine the values of for which the denominator is zero. Since for all real numbers the denominator is never zero. Therefore, the domain is  Since the square root of a negative number is not a real number, the domain is the set of values for which Therefore, the domain is  The cube root is defined for all real numbers, so the domain is the interval       Find the domain for each of the following functions: and    The domain of is The domain of is    Determine the values of when the expression in the denominator of is nonzero, and find the values of when the expression inside the radical of is nonnegative.      Transcendental Functions  Thus far, we have discussed algebraic functions. Some functions, however, cannot be described by basic algebraic operations. These functions are known as transcendental functions because they are said to “transcend,” or go beyond, algebra. The most common transcendental functions are trigonometric, exponential, and logarithmic functions. A >trigonometric function relates the ratios of two sides of a right triangle. They are (We discuss trigonometric functions later in the chapter.) An exponential function is a function of the form where the base A logarithmic function is a function of the form for some constant where if and only if (We also discuss exponential and logarithmic functions later in the chapter.)   Classifying Algebraic and Transcendental Functions   Classify each of the following functions, a. through c., as algebraic or transcendental.          Since this function involves basic algebraic operations only, it is an algebraic function.  This function cannot be written as a formula that involves only basic algebraic operations, so it is transcendental. (Note that algebraic functions can only have powers that are rational numbers.)  As in part b., this function cannot be written using a formula involving basic algebraic operations only; therefore, this function is transcendental.       Is an algebraic or a transcendental function?    Algebraic      Piecewise-Defined Functions  Sometimes a function is defined by different formulas on different parts of its domain. A function with this property is known as a piecewise-defined function . The absolute value function is an example of a piecewise-defined function because the formula changes with the sign of :  . Other piecewise-defined functions may be represented by completely different formulas, depending on the part of the domain in which a point falls. To graph a piecewise-defined function, we graph each part of the function in its respective domain, on the same coordinate system. If the formula for a function is different for and we need to pay special attention to what happens at when we graph the function. Sometimes the graph needs to include an open or closed circle to indicate the value of the function at We examine this in the next example.   Graphing a Piecewise-Defined Function   Sketch a graph of the following piecewise-defined function:     Graph the linear function on the interval and graph the quadratic function on the interval Since the value of the function at is given by the formula we see that To indicate this on the graph, we draw a closed circle at the point The value of the function is given by for all but not at To indicate this on the graph, we draw an open circle at    \"An image of a graph. The x axis runs from -7 to 5 and the y axis runs from -4 to 6. The graph is of a function that has two pieces. The first piece is an increasing line that ends at the open circle point (1, 4) and has the label “f(x) = x + 3, for x \\lt 1”. The second piece is parabolic and begins at the closed circle point (1, 1). After the point (1, 1), the piece begins to decrease until the point (2, 0) then begins to increase. This piece has the label “f(x) = (x - 2) squared, for x \\gt = 1”.The function has x intercepts at (-3, 0) and (2, 0) and a y intercept at (0, 3).\"   This piecewise-defined function is linear for and quadratic for       Sketch a graph of the function       \"An image of a graph. The x axis runs from -6 to 5 and the y axis runs from -2 to 7. The graph is of a function that has two pieces. The first piece is a decreasing line that ends at the closed circle point (2, 0) and has the label “f(x) = 2 - x, for x \\lt = 2. The second piece is an increasing line and begins at the open circle point (2, 4) and has the label “f(x) = x + 2, for x \\gt 2.The function has an x intercept at (2, 0) and a y intercept at (0, 2)\"      Graph one linear function for and then graph a different linear function for     Parking Fees Described by a Piecewise-Defined Function   In a big city, drivers are charged variable rates for parking in a parking garage. They are charged $10 for the first hour or any part of the first hour and an additional $2 for each hour or part thereof up to a maximum of $30 for the day. The parking garage is open from 6 a.m. to 12 midnight.   Write a piecewise-defined function that describes the cost to park in the parking garage as a function of hours parked  Sketch a graph of this function      Since the parking garage is open 18 hours each day, the domain for this function is The cost to park a car at this parking garage can be described piecewise by the function  The graph of the function consists of several horizontal line segments.  \"An image of a graph. The x axis runs from 0 to 18 and is labeled “x, hours”. The y axis runs from 0 to 32 and is labeled “y, cost in dollars”. The function consists 11 pieces, all horizontal line segments that begin with an open circle and end with a closed circle. The first piece starts at x = 0 and ends at x = 1 and is at y = 10. The second piece starts at x = 1 and ends at x = 2 and is at y = 12. The third piece starts at x = 2 and ends at x = 3 and is at y = 14. The fourth piece starts at x = 3 and ends at x = 4 and is at y = 16. The fifth piece starts at x = 4 and ends at x = 5 and is at y = 18. The sixth piece starts at x = 5 and ends at x = 6 and is at y = 20. The seventh piece starts at x = 6 and ends at x = 7 and is at y = 22. The eighth piece starts at x = 7 and ends at x = 8 and is at y = 24. The ninth piece starts at x = 8 and ends at x = 9 and is at y = 26. The tenth piece starts at x = 9 and ends at x = 10 and is at y = 28. The eleventh piece starts at x = 10 and ends at x = 18 and is at y = 30.\"         The cost of mailing a letter is a function of the weight of the letter. Suppose the cost of mailing a letter is for the first ounce and for each additional ounce. Write a piecewise-defined function describing the cost as a function of the weight for where is measured in cents and is measured in ounces.       The piecewise-defined function is constant on the intervals      Transformations of Functions  We have seen several cases in which we have added, subtracted, or multiplied constants to form variations of simple functions. In the previous example, for instance, we subtracted 2 from the argument of the function to get the function This subtraction represents a shift of the function two units to the right. A shift, horizontally or vertically, is a type of transformation of a function . Other transformations include horizontal and vertical scalings, and reflections about the axes.  A vertical shift of a function occurs if we add or subtract the same constant to each output For the graph of is a shift of the graph of up units, whereas the graph of is a shift of the graph of down units. For example, the graph of the function is the graph of shifted up units; the graph of the function is the graph of shifted down units ( ).    \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 4 and a y axis that runs from -1 to 10. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) + 4”, which is a parabola that decreases until the point (0, 4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted up 4 units. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -5 to 6. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) - 4”, which is a parabola that decreases until the point (0, -4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted down 4 units.\"   (a) For the graph of is a vertical shift up units of the graph of (b) For the graph of is a vertical shift down units of the graph of   A horizontal shift of a function occurs if we add or subtract the same constant to each input For the graph of is a shift of the graph of to the left units; the graph of is a shift of the graph of to the right units. Why does the graph shift left when adding a constant and shift right when subtracting a constant? To answer this question, let’s look at an example.  Consider the function and evaluate this function at Since and the graph of is the graph of shifted left 3 units. Similarly, the graph of is the graph of shifted right units ( ).    \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -8 to 5 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 3)”, which decreases in a straight line until the point (-3, 0) and then increases in a straight line again after the point (-3, 0). The two functions are the same in shape, but the second function is shifted left 3 units. The second graph is labeled “b” and has an x axis that runs from -5 to 8 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x - 3)”, which decreases in a straight line until the point (3, 0) and then increases in a straight line again after the point (3, 0). The two functions are the same in shape, but the second function is shifted right 3 units.\"   (a) For the graph of is a horizontal shift left units of the graph of (b) For the graph of is a horizontal shift right units of the graph of   A vertical scaling of a graph occurs if we multiply all outputs of a function by the same positive constant. For the graph of the function is the graph of scaled vertically by a factor of If the values of the outputs for the function are larger than the values of the outputs for the function therefore, the graph has been stretched vertically. If then the outputs of the function are smaller, so the graph has been compressed. For example, the graph of the function is the graph of stretched vertically by a factor of 3, whereas the graph of is the graph of compressed vertically by a factor of ( ).    \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -3 to 3 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = 3(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically stretched and thus increases at a quicker rate than the first function. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (1\/3)(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically compressed and thus increases at a slower rate than the first function.\"   (a) If the graph of is a vertical stretch of the graph of (b) If the graph of is a vertical compression of the graph of   The horizontal scaling of a function occurs if we multiply the inputs by the same positive constant. For the graph of the function is the graph of scaled horizontally by a factor of If the graph of is the graph of compressed horizontally. If the graph of is the graph of stretched horizontally. For example, consider the function and evaluate at Since the graph of is the graph of compressed horizontally. The graph of is a horizontal stretch of the graph of ( ).    \"An image of two graphs. Both graphs have an x axis that runs from -2 to 4 and a y axis that runs from -2 to 5. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = square root of 2x”, which is a curved function that begins at the origin and increases, but increases at a faster rate than the first function. The second graph is labeled “b” and is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = square root of (x\/2)”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function.\"   (a) If the graph of is a horizontal compression of the graph of (b) If the graph of is a horizontal stretch of the graph of   We have explored what happens to the graph of a function when we multiply by a constant to get a new function We have also discussed what happens to the graph of a function when we multiply the independent variable by to get a new function However, we have not addressed what happens to the graph of the function if the constant is negative. If we have a constant we can write c as a positive number multiplied by but, what kind of transformation do we get when we multiply the function or its argument by When we multiply all the outputs by we get a reflection about the -axis. When we multiply all inputs by we get a reflection about the -axis. For example, the graph of is the graph of reflected about the -axis. The graph of is the graph of reflected about the -axis ( ).    \"An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -5 to 6. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = -(x cubed + 1)”, which is a curved decreasing function that has an x intercept at (-1, 0) and a y intercept at (0, -1). The second graph is labeled “b” and is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = (-x) cubed + 1”, which is a curved decreasing function that has an x intercept at (1, 0) and a y intercept at (0, 1). The first function increases at the same rate the second function decreases for the same values of x.\"   (a) The graph of is the graph of reflected about the -axis. (b) The graph of is the graph of reflected about the -axis.   If the graph of a function consists of more than one transformation of another graph, it is important to transform the graph in the correct order. Given a function the graph of the related function can be obtained from the graph of by performing the transformations in the following order.   Horizontal shift of the graph of If shift left. If shift right.  Horizontal scaling of the graph of by a factor of If reflect the graph about the -axis.  Vertical scaling of the graph of by a factor of If reflect the graph about the -axis.  Vertical shift of the graph of If shift up. If shift down.   We can summarize the different transformations and their related effects on the graph of a function in the following table.   Transformations of Functions    Transformation of  Effect on the graph of      Vertical shift up units     Vertical shift down units     Shift left by units     Shift right by units     Vertical stretch if vertical compression if     Horizontal stretch if horizontal compression if     Reflection about the -axis     Reflection about the -axis      Transforming a Function   For each of the following functions, a. and b., sketch a graph by using a sequence of transformations of a well-known function.         Starting with the graph of shift units to the left, reflect about the -axis, and then shift down 3 units.    \"An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -7 to 7. The graph contains four functions. The first function is “f(x) = absolute value of x” and is labeled starting function. It decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 2)”, which decreases in a straight line until the point (-2, 0) and then increases in a straight line again after the point (-2, 0). The second function is the same shape as the first function, but is shifted left 2 units. The third function is “f(x) = -(absolute value of (x + 2))”, which increases in a straight line until the point (-2, 0) and then decreases in a straight line again after the point (-2, 0). The third function is the second function reflected about the x axis. The fourth function is “f(x) = -(absolute value of (x + 2)) - 3” and is labeled “transformed function”. It increases in a straight line until the point (-2, -3) and then decreases in a straight line again after the point (-2, -3). The fourth function is the third function shifted down 3 units.\"   The function can be viewed as a sequence of three transformations of the function   Starting with the graph of reflect about the -axis, stretch the graph vertically by a factor of 3, and move up 1 unit.   \"An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -2 to 10. The graph contains four functions. The first function is “f(x) = square root of x” and is labeled starting function. It is a curved function that begins at the origin and increases. The second function is “f(x) = square root of -x”, which is a curved function that decreases until it reaches the origin, where it stops. The second function is the first function reflected about the y axis. The third function is “f(x) = 3(square root of -x)”, which is a curved function that decreases until it reaches the origin, where it stops. The third function decreases at a quicker rate than the second function. The fourth function is “f(x) = 3(square root of -x) + 1” and is labeled “transformed function”. Itis a curved function that decreases until it reaches the point (0, 1), where it stops. The fourth function is the third function shifted up 1 unit.\"   The function can be viewed as a sequence of three transformations of the function        Describe how the function can be graphed using the graph of and a sequence of transformations.    Shift the graph to the left 1 unit, reflect about the -axis, then shift down 4 units.    Use .      Key Concepts   The power function is an even function if is even and and it is an odd function if is odd.  The root function has the domain if is even and the domain if is odd. If is odd, then is an odd function.  The domain of the rational function where and are polynomial functions, is the set of such that  Functions that involve the basic operations of addition, subtraction, multiplication, division, and powers are algebraic functions. All other functions are transcendental. Trigonometric, exponential, and logarithmic functions are examples of transcendental functions.  A polynomial function with degree satisfies as The sign of the output as depends on the sign of the leading coefficient only and on whether is even or odd.  Vertical and horizontal shifts, vertical and horizontal scalings, and reflections about the - and -axes are examples of transformations of functions.     Key Equations   Point-slope equation of a line   Slope-intercept form of a line   Standard form of a line   Polynomial function     "
},
{
  "id": "sec_Ch1Sec2-3-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear function "
},
{
  "id": "CNX_Calc_Figure_01_02_001",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_001",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the 3 functions. The first function is “f(x) = 3x + 1”, which is an increasing straight line with an x intercept at ((-1\/3), 0) and a y intercept at (0, 1). The second function is “g(x) = 2”, which is a horizontal line with a y intercept at (0, 2) and no x intercept. The third function is “h(x) = (-1\/2)x”, which is a decreasing straight line with an x intercept and y intercept both at the origin. The function f(x) is increasing at a higher rate than the function h(x) is decreasing.\"    These linear functions are increasing or decreasing on and one function is a horizontal line.  "
},
{
  "id": "sec_Ch1Sec2-3-4",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope "
},
{
  "id": "CNX_Calc_Figure_01_02_002",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_002",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from -1 to 10 and the x axis runs from -1 to 6. The graph is of a function that is an increasing straight line. There are four points labeled on the function at (1, 1), (2, 3), (3, 5), and (5, 9). There is a dotted horizontal line from the labeled function point (1, 1) to the unlabeled point (3, 1) which is not on the function, and then dotted vertical line from the unlabeled point (3, 1), which is not on the function, to the labeled function point (3, 5). These two dotted have the label “(y2 - y1)\/(x2 - x1) = (5 -1)\/(3 - 1) = 2”. There is a dotted horizontal line from the labeled function point (2, 3) to the unlabeled point (5, 3) which is not on the function, and then dotted vertical line from the unlabeled point (5, 3), which is not on the function, to the labeled function point (5, 9). These two dotted have the label “(y2 - y1)\/(x2 - x1) = (9 -3)\/(5 - 2) = 2”.\">    For any linear function, the slope is independent of the choice of points and on the line.  "
},
{
  "id": "sec_Ch1Sec2-3-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-6",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  Consider line passing through points and Let and denote the changes in and respectively. The slope of the line is   "
},
{
  "id": "sec_Ch1Sec2-3-11",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope-intercept form "
},
{
  "id": "sec_Ch1Sec2-3-16",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point-slope equation "
},
{
  "id": "sec_Ch1Sec2-3-19",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard form of a line "
},
{
  "id": "sec_Ch1Sec2-3-20",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-20",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  Consider a line passing through the point with slope The equation   is the point-slope equation for that line.  Consider a line with slope and -intercept The equation   is an equation for that line in slope-intercept form .  The standard form of a line is given by the equation   where and are both not zero. This form is more general because it allows for a vertical line,  "
},
{
  "id": "sec_Ch1Sec2-3-21",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-21",
  "type": "Example",
  "number": "1.1.5",
  "title": "Finding the Slope and Equations of Lines.",
  "body": " Finding the Slope and Equations of Lines   Consider the line passing through the points and as shown in .    \"An image of a graph. The x axis runs from -5 to 12 and the y axis runs from -5 to 6. The graph is of the function that is a decreasing straight line. The function has two points plotted, at (-4, 5) and (11, 4).\"   Finding the equation of a linear function with a graph that is a line between two given points.    Find the slope of the line.  Find an equation for this linear function in point-slope form.  Find an equation for this linear function in slope-intercept form.      The slope of the line is  To find an equation for the linear function in point-slope form, use the slope and choose any point on the line. If we choose the point we get the equation  To find an equation for the linear function in slope-intercept form, solve the equation in part b. for When we do this, we get the equation    "
},
{
  "id": "sec_Ch1Sec2-3-22",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-22",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": "  Consider the line passing through points and Find the slope of the line.  Find an equation of that line in point-slope form. Find an equation of that line in slope-intercept form.    The point-slope form is   The slope-intercept form is     The slope   "
},
{
  "id": "sec_Ch1Sec2-3-23",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-23",
  "type": "Example",
  "number": "1.1.8",
  "title": "A Linear Distance Function.",
  "body": " A Linear Distance Function   Jessica leaves her house at 5:50 a.m. and goes for a 9-mile run. She returns to her house at 7:08 a.m. Answer the following questions, assuming Jessica runs at a constant pace.   Describe the distance (in miles) Jessica runs as a linear function of her run time (in minutes).  Sketch a graph of  Interpret the meaning of the slope.      At time Jessica is at her house, so At time minutes, Jessica has finished running mi, so The slope of the linear function is The -intercept is so the equation for this linear function is  To graph use the fact that the graph passes through the origin and has slope   \"An image of a graph. The y axis is labeled “y, distance in miles”. The x axis is labeled “t, time in minutes”. The graph is of the function “D(t) = 3t\/26”, which is an increasing straight line that starts at the origin. The function ends at the plotted point (78, 9).\"    The slope describes the distance (in miles) Jessica runs per minute, or her average velocity.    "
},
{
  "id": "sec_Ch1Sec2-4-2-1",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial function "
},
{
  "id": "sec_Ch1Sec2-4-2-3",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero function degree leading coefficient constant function quadratic function cubic function "
},
{
  "id": "sec_Ch1Sec2-4-3-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power function "
},
{
  "id": "CNX_Calc_Figure_01_02_004",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_004",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": "  \"An image of two graphs. Both graphs have an x axis that runs from -4 to 4 and a y axis that runs from -6 to 7. The first graph is labeled “a” and is of two functions. The first function is “f(x) = x to the 4th”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin, but increases and decreases at a slower rate than the first function. The second graph is labeled “b” and is of two functions. The first function is “f(x) = x to the 5th”, which is a curved function that increases until the origin, becomes even at the origin, and then increases again after the origin. The second function is “f(x) = x cubed”, which is a curved function that increases until the origin, becomes even at the origin, and then increases again after the origin, but increases at a slower rate than the first function.\"   (a) For any even integer is an even function. (b) For any odd integer is an odd function.  "
},
{
  "id": "sec_Ch1Sec2-4-4-3",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "end behavior "
},
{
  "id": "CNX_Calc_Figure_01_02_005",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_005",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 5 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x squared) - 4x -4”, which is a parabola. The function increasing until it hits the maximum at the point (-2, 0) and then begins decreasing. The x intercept is at (-2, 0) and the y intercept is at (0, -4). The second function is “f(x) = 2(x squared) -12x + 16”, which is a parabola. The function decreases until it hits the minimum point at (3, -2) and then begins increasing. The x intercepts are at (2, 0) and (4, 0) and the y intercept is not shown. The second graph is labeled “b” and has an x axis that runs from -4 to 3 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x cubed) - 3(x squared) + x + 3”. The graph decreases until the approximate point at (-2.2, -3.1), then increases until the approximate point at (0.2, 3.1), then begins decreasing again. The x intercepts are at (-3, 0), (-1, 0), and (1, 0). The y intercept is at (0, 3). The second function is “f(x) = (x cubed) -3(x squared) + 3x - 1”. It is a curved function that increases until the point (1, 0), where it levels out. After this point, the function begins increasing again. It has an x intercept at (1, 0) and a y intercept at (0, -1).\"   (a) For a quadratic function, if the leading coefficient the parabola opens upward. If the parabola opens downward. (b) For a cubic function if the leading coefficient the values as and the values as If the leading coefficient the opposite is true.  "
},
{
  "id": "sec_Ch1Sec2-4-5-3",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-5-3",
  "type": "Note",
  "number": "1.1.11",
  "title": "Rule: The Quadratic Formula.",
  "body": " Rule: The Quadratic Formula  Consider the quadratic equation   where The solutions of this equation are given by the quadratic formula   If the discriminant this formula tells us there are two real numbers that satisfy the quadratic equation. If this formula tells us there is only one solution, and it is a real number. If no real numbers satisfy the quadratic equation.  "
},
{
  "id": "sec_Ch1Sec2-4-5-5",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-5-5",
  "type": "Example",
  "number": "1.1.12",
  "title": "Graphing Polynomial Functions.",
  "body": " Graphing Polynomial Functions   For the following functions a. and b., i. describe the behavior of as ii. find all zeros of and iii. sketch a graph of         The function is a quadratic function.   Because  To find the zeros of use the quadratic formula. The zeros are  To sketch the graph of use the information from your previous answers and combine it with the fact that the graph is a parabola opening downward.   \"An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -8 to 2. The graph is of the function “f(x) = -2(x squared) + 4x - 1”, which is a parabola. The function increases until the maximum point at (1, 1) and then decreases. Both x intercept points are plotted on the function, at approximately (0.2929, 0) and (1.7071, 0). The y intercept is at the point (0, -1).\"    The function is a cubic function.   Because As  To find the zeros of we need to factor the polynomial. First, when we factor out of all the terms, we find Then, when we factor the quadratic function we find Therefore, the zeros of are  Combining the results from parts i. and ii., draw a rough sketch of   \"An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -14 to 7. The graph is of the curved function “f(x) = (x cubed) - 3(x squared) - 4x”. The function increases until the approximate point at (-0.5, 1.1), then decreases until the approximate point (2.5, -13.1), then begins increasing again. The x intercept points are plotted on the function, at (-1, 0), (0, 0), and (4, 0). The y intercept is at the origin.\"      "
},
{
  "id": "sec_Ch1Sec2-4-5-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-5-6",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "",
  "body": "  Consider the quadratic function Find the zeros of Does the parabola open upward or downward?    The zeros are The parabola opens upward.    Use the quadratic formula.   "
},
{
  "id": "sec_Ch1Sec2-4-6-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical models "
},
{
  "id": "sec_Ch1Sec2-4-6-4",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-6-4",
  "type": "Table",
  "number": "1.1.14",
  "title": "Number of Units Sold <span class=\"process-math\">\\(n\\)<\/span> (in Thousands) as a Function of Price per Unit <span class=\"process-math\">\\(p\\)<\/span> (in Dollars)",
  "body": " Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                    "
},
{
  "id": "sec_Ch1Sec2-4-6-8",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-6-8",
  "type": "Figure",
  "number": "1.1.15",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.  "
},
{
  "id": "sec_Ch1Sec2-4-6-9",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-6-9",
  "type": "Example",
  "number": "1.1.16",
  "title": "Maximizing Revenue.",
  "body": " Maximizing Revenue   A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from , the company arrives at the following quadratic function to model revenue (in thousands of dollars) as a function of price per item   for   Predict the revenue if the company sells the item at a price of and  Find the zeros of this function and interpret the meaning of the zeros.  Sketch a graph of  Use the graph to determine the value of that maximizes revenue. Find the maximum revenue.      Evaluating the revenue function at and we can conclude that  The zeros of this function can be found by solving the equation When we factor the quadratic expression, we get The solutions to this equation are given by For these values of the revenue is zero. When the revenue is zero because the company is giving away its merchandise for free. When the revenue is zero because the price is too high, and no one will buy any items.  Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at and the parabola must be symmetric about the line halfway between them, or   \"An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.\">    The function is a parabola with zeros at and and it is symmetric about the line so the maximum revenue occurs at a price of per item. At that price, the revenue is    "
},
{
  "id": "sec_Ch1Sec2-5-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraic function "
},
{
  "id": "sec_Ch1Sec2-5-3",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational function "
},
{
  "id": "sec_Ch1Sec2-5-5",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "root function "
},
{
  "id": "sec_Ch1Sec2-5-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-6",
  "type": "Example",
  "number": "1.1.17",
  "title": "Finding Domain and Range for Algebraic Functions.",
  "body": " Finding Domain and Range for Algebraic Functions   For each of the following functions, find the domain and range.    To find the domain of , we need . Or, Or , the solution to which is . Therefore, the domain is . If , then . Therefore, and the range of is .       It is not possible to divide by zero, so the domain is the set of real numbers such that To find the range, we need to find the values for which there exists a real number such that When we multiply both sides of this equation by we see that must satisfy the equation  From this equation, we can see that must satisfy  If this equation has no solution. On the other hand, as long as satisfies this equation. We can conclude that the range of is  To find the domain of we need When we factor, we write This inequality holds if and only if both terms are positive or both terms are negative. For both terms to be positive, we need to find such that These two inequalities reduce to and Therefore, the set must be part of the domain. For both terms to be negative, we need These two inequalities also reduce to and There are no values of that satisfy both of these inequalities. Thus, we can conclude the domain of this function is If then Therefore, and the range of is    "
},
{
  "id": "sec_Ch1Sec2-5-7",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-7",
  "type": "Checkpoint",
  "number": "1.1.18",
  "title": "",
  "body": "  Find the domain and range for the function    The domain is the set of real numbers such that The range is the set    The denominator cannot be zero. Solve the equation for to find the range.   "
},
{
  "id": "CNX_Calc_Figure_01_02_022",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_022",
  "type": "Figure",
  "number": "1.1.19",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -2 to 9 and a y axis that runs from -4 to 4. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = x to the 4th root”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function. The second graph is labeled “b” and has an x axis that runs from -8 to 8 and a y axis that runs from -4 to 4. The second graph is of two functions. The first function is “f(x) = cube root of x”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin. The second function is “f(x) = x to the 5th root”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin, but increases at a slower rate than the first function.\"   (a) If is even, the domain of is (b) If is odd, the domain of is and the function is an odd function.  "
},
{
  "id": "sec_Ch1Sec2-5-10",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-10",
  "type": "Example",
  "number": "1.1.20",
  "title": "Finding Domains for Algebraic Functions.",
  "body": " Finding Domains for Algebraic Functions   For each of the following functions, determine the domain of the function.           You cannot divide by zero, so the domain is the set of values such that Therefore, the domain is  You need to determine the values of for which the denominator is zero. Since for all real numbers the denominator is never zero. Therefore, the domain is  Since the square root of a negative number is not a real number, the domain is the set of values for which Therefore, the domain is  The cube root is defined for all real numbers, so the domain is the interval    "
},
{
  "id": "sec_Ch1Sec2-5-11",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-11",
  "type": "Checkpoint",
  "number": "1.1.21",
  "title": "",
  "body": "  Find the domain for each of the following functions: and    The domain of is The domain of is    Determine the values of when the expression in the denominator of is nonzero, and find the values of when the expression inside the radical of is nonnegative.   "
},
{
  "id": "sec_Ch1Sec2-6-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transcendental functions >trigonometric function logarithmic function "
},
{
  "id": "sec_Ch1Sec2-6-3",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-6-3",
  "type": "Example",
  "number": "1.1.22",
  "title": "Classifying Algebraic and Transcendental Functions.",
  "body": " Classifying Algebraic and Transcendental Functions   Classify each of the following functions, a. through c., as algebraic or transcendental.          Since this function involves basic algebraic operations only, it is an algebraic function.  This function cannot be written as a formula that involves only basic algebraic operations, so it is transcendental. (Note that algebraic functions can only have powers that are rational numbers.)  As in part b., this function cannot be written using a formula involving basic algebraic operations only; therefore, this function is transcendental.    "
},
{
  "id": "sec_Ch1Sec2-6-4",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-6-4",
  "type": "Checkpoint",
  "number": "1.1.23",
  "title": "",
  "body": "  Is an algebraic or a transcendental function?    Algebraic   "
},
{
  "id": "sec_Ch1Sec2-7-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "piecewise-defined function "
},
{
  "id": "sec_Ch1Sec2-7-5",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-5",
  "type": "Example",
  "number": "1.1.24",
  "title": "Graphing a Piecewise-Defined Function.",
  "body": " Graphing a Piecewise-Defined Function   Sketch a graph of the following piecewise-defined function:     Graph the linear function on the interval and graph the quadratic function on the interval Since the value of the function at is given by the formula we see that To indicate this on the graph, we draw a closed circle at the point The value of the function is given by for all but not at To indicate this on the graph, we draw an open circle at    \"An image of a graph. The x axis runs from -7 to 5 and the y axis runs from -4 to 6. The graph is of a function that has two pieces. The first piece is an increasing line that ends at the open circle point (1, 4) and has the label “f(x) = x + 3, for x \\lt 1”. The second piece is parabolic and begins at the closed circle point (1, 1). After the point (1, 1), the piece begins to decrease until the point (2, 0) then begins to increase. This piece has the label “f(x) = (x - 2) squared, for x \\gt = 1”.The function has x intercepts at (-3, 0) and (2, 0) and a y intercept at (0, 3).\"   This piecewise-defined function is linear for and quadratic for    "
},
{
  "id": "sec_Ch1Sec2-7-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-6",
  "type": "Checkpoint",
  "number": "1.1.26",
  "title": "",
  "body": "  Sketch a graph of the function       \"An image of a graph. The x axis runs from -6 to 5 and the y axis runs from -2 to 7. The graph is of a function that has two pieces. The first piece is a decreasing line that ends at the closed circle point (2, 0) and has the label “f(x) = 2 - x, for x \\lt = 2. The second piece is an increasing line and begins at the open circle point (2, 4) and has the label “f(x) = x + 2, for x \\gt 2.The function has an x intercept at (2, 0) and a y intercept at (0, 2)\"      Graph one linear function for and then graph a different linear function for   "
},
{
  "id": "sec_Ch1Sec2-7-7",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-7",
  "type": "Example",
  "number": "1.1.27",
  "title": "Parking Fees Described by a Piecewise-Defined Function.",
  "body": " Parking Fees Described by a Piecewise-Defined Function   In a big city, drivers are charged variable rates for parking in a parking garage. They are charged $10 for the first hour or any part of the first hour and an additional $2 for each hour or part thereof up to a maximum of $30 for the day. The parking garage is open from 6 a.m. to 12 midnight.   Write a piecewise-defined function that describes the cost to park in the parking garage as a function of hours parked  Sketch a graph of this function      Since the parking garage is open 18 hours each day, the domain for this function is The cost to park a car at this parking garage can be described piecewise by the function  The graph of the function consists of several horizontal line segments.  \"An image of a graph. The x axis runs from 0 to 18 and is labeled “x, hours”. The y axis runs from 0 to 32 and is labeled “y, cost in dollars”. The function consists 11 pieces, all horizontal line segments that begin with an open circle and end with a closed circle. The first piece starts at x = 0 and ends at x = 1 and is at y = 10. The second piece starts at x = 1 and ends at x = 2 and is at y = 12. The third piece starts at x = 2 and ends at x = 3 and is at y = 14. The fourth piece starts at x = 3 and ends at x = 4 and is at y = 16. The fifth piece starts at x = 4 and ends at x = 5 and is at y = 18. The sixth piece starts at x = 5 and ends at x = 6 and is at y = 20. The seventh piece starts at x = 6 and ends at x = 7 and is at y = 22. The eighth piece starts at x = 7 and ends at x = 8 and is at y = 24. The ninth piece starts at x = 8 and ends at x = 9 and is at y = 26. The tenth piece starts at x = 9 and ends at x = 10 and is at y = 28. The eleventh piece starts at x = 10 and ends at x = 18 and is at y = 30.\"      "
},
{
  "id": "sec_Ch1Sec2-7-8",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-8",
  "type": "Checkpoint",
  "number": "1.1.28",
  "title": "",
  "body": "  The cost of mailing a letter is a function of the weight of the letter. Suppose the cost of mailing a letter is for the first ounce and for each additional ounce. Write a piecewise-defined function describing the cost as a function of the weight for where is measured in cents and is measured in ounces.       The piecewise-defined function is constant on the intervals   "
},
{
  "id": "sec_Ch1Sec2-8-2",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformation of a function "
},
{
  "id": "CNX_Calc_Figure_01_02_023",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_023",
  "type": "Figure",
  "number": "1.1.29",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 4 and a y axis that runs from -1 to 10. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) + 4”, which is a parabola that decreases until the point (0, 4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted up 4 units. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -5 to 6. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) - 4”, which is a parabola that decreases until the point (0, -4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted down 4 units.\"   (a) For the graph of is a vertical shift up units of the graph of (b) For the graph of is a vertical shift down units of the graph of  "
},
{
  "id": "CNX_Calc_Figure_01_02_015",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_015",
  "type": "Figure",
  "number": "1.1.30",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -8 to 5 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 3)”, which decreases in a straight line until the point (-3, 0) and then increases in a straight line again after the point (-3, 0). The two functions are the same in shape, but the second function is shifted left 3 units. The second graph is labeled “b” and has an x axis that runs from -5 to 8 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x - 3)”, which decreases in a straight line until the point (3, 0) and then increases in a straight line again after the point (3, 0). The two functions are the same in shape, but the second function is shifted right 3 units.\"   (a) For the graph of is a horizontal shift left units of the graph of (b) For the graph of is a horizontal shift right units of the graph of  "
},
{
  "id": "CNX_Calc_Figure_01_02_024",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_024",
  "type": "Figure",
  "number": "1.1.31",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -3 to 3 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = 3(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically stretched and thus increases at a quicker rate than the first function. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (1\/3)(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically compressed and thus increases at a slower rate than the first function.\"   (a) If the graph of is a vertical stretch of the graph of (b) If the graph of is a vertical compression of the graph of  "
},
{
  "id": "CNX_Calc_Figure_01_02_017",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_017",
  "type": "Figure",
  "number": "1.1.32",
  "title": "",
  "body": "  \"An image of two graphs. Both graphs have an x axis that runs from -2 to 4 and a y axis that runs from -2 to 5. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = square root of 2x”, which is a curved function that begins at the origin and increases, but increases at a faster rate than the first function. The second graph is labeled “b” and is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = square root of (x\/2)”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function.\"   (a) If the graph of is a horizontal compression of the graph of (b) If the graph of is a horizontal stretch of the graph of  "
},
{
  "id": "sec_Ch1Sec2-8-12",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-8-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "c "
},
{
  "id": "CNX_Calc_Figure_01_02_018",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_018",
  "type": "Figure",
  "number": "1.1.33",
  "title": "",
  "body": "  \"An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -5 to 6. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = -(x cubed + 1)”, which is a curved decreasing function that has an x intercept at (-1, 0) and a y intercept at (0, -1). The second graph is labeled “b” and is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = (-x) cubed + 1”, which is a curved decreasing function that has an x intercept at (1, 0) and a y intercept at (0, 1). The first function increases at the same rate the second function decreases for the same values of x.\"   (a) The graph of is the graph of reflected about the -axis. (b) The graph of is the graph of reflected about the -axis.  "
},
{
  "id": "fs-id1170573580486",
  "level": "2",
  "url": "sec_Ch1Sec2.html#fs-id1170573580486",
  "type": "Table",
  "number": "1.1.34",
  "title": "Transformations of Functions",
  "body": " Transformations of Functions    Transformation of  Effect on the graph of      Vertical shift up units     Vertical shift down units     Shift left by units     Shift right by units     Vertical stretch if vertical compression if     Horizontal stretch if horizontal compression if     Reflection about the -axis     Reflection about the -axis    "
},
{
  "id": "sec_Ch1Sec2-8-18",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-8-18",
  "type": "Example",
  "number": "1.1.35",
  "title": "Transforming a Function.",
  "body": " Transforming a Function   For each of the following functions, a. and b., sketch a graph by using a sequence of transformations of a well-known function.         Starting with the graph of shift units to the left, reflect about the -axis, and then shift down 3 units.    \"An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -7 to 7. The graph contains four functions. The first function is “f(x) = absolute value of x” and is labeled starting function. It decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 2)”, which decreases in a straight line until the point (-2, 0) and then increases in a straight line again after the point (-2, 0). The second function is the same shape as the first function, but is shifted left 2 units. The third function is “f(x) = -(absolute value of (x + 2))”, which increases in a straight line until the point (-2, 0) and then decreases in a straight line again after the point (-2, 0). The third function is the second function reflected about the x axis. The fourth function is “f(x) = -(absolute value of (x + 2)) - 3” and is labeled “transformed function”. It increases in a straight line until the point (-2, -3) and then decreases in a straight line again after the point (-2, -3). The fourth function is the third function shifted down 3 units.\"   The function can be viewed as a sequence of three transformations of the function   Starting with the graph of reflect about the -axis, stretch the graph vertically by a factor of 3, and move up 1 unit.   \"An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -2 to 10. The graph contains four functions. The first function is “f(x) = square root of x” and is labeled starting function. It is a curved function that begins at the origin and increases. The second function is “f(x) = square root of -x”, which is a curved function that decreases until it reaches the origin, where it stops. The second function is the first function reflected about the y axis. The third function is “f(x) = 3(square root of -x)”, which is a curved function that decreases until it reaches the origin, where it stops. The third function decreases at a quicker rate than the second function. The fourth function is “f(x) = 3(square root of -x) + 1” and is labeled “transformed function”. Itis a curved function that decreases until it reaches the point (0, 1), where it stops. The fourth function is the third function shifted up 1 unit.\"   The function can be viewed as a sequence of three transformations of the function     "
},
{
  "id": "sec_Ch1Sec2-8-19",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-8-19",
  "type": "Checkpoint",
  "number": "1.1.38",
  "title": "",
  "body": "  Describe how the function can be graphed using the graph of and a sequence of transformations.    Shift the graph to the left 1 unit, reflect about the -axis, then shift down 4 units.    Use .   "
},
{
  "id": "sec_Ch1Sec3",
  "level": "1",
  "url": "sec_Ch1Sec3.html",
  "type": "Section",
  "number": "1.2",
  "title": "Mathematical Modeling",
  "body": " Mathematical Modeling   Learning Objectives   Discuss linear mathematical models for cost, revenue, profit, supply, and demand functions.  Find and analyze the break-even quantity and equilibrium point.  Discuss quadratic mathematical models.  Find and analyze the vertex point of a quadratic function.  Optimize cost, revenue, and profit functions.   A large variety of real-world situations can be described using mathematical models . A mathematical model is a method of simulating real-life situations with mathematical equations. Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately. Models are useful because they help predict future outcomes. Examples of mathematical models include the study of population dynamics, investigations of weather patterns, and predictions of product sales.    Mathematical Models of Cost, Revenue, and Profit  Given the number of units produced, the cost function outputs the amount a business or company must pay in order to produce units. There are typicically two types of costs: fixed and variable. In a linear cost model, the cost function is expressed as   where is the cost per unit also referred to as the variable or marginal cost . Here, the variable cost term depends on the number of units produced. Some examples of variable\/marginal costs are labor, material, or manufacturing costs. Additionally, are the fixed costs which is the amount one must pay to operate a business. The fixed cost is independent of the number of units produced. It often represents the amount one must pay if 0 units are produced since is the -intercept of the cost function. That is, . Some examples of fixed costs are rent, utility bills, or operating costs.  The revenue function outputs the payment received from selling units. In a linear model, the revenue is   where is the selling price per unit which is also called the marginal revenue .  The profit function outputs the net proceeds after paying off the expenses\/costs. That is,  . Notice that the above definition for the profit function holds if either of our revenue or cost functions are non-linear.  If profits are negative, this is considered a and if profits are positive, this is considered a .   Break-even Analysis  Companies often look for the point at which there is no or . This gives you the minimum number of units a company must produce in order to make a profit.  The break-even quantity is the number of units needed so that cost and revenue are equal, meaning the total profit is zero. That is, or .  Observe that and will yield the same break-even quantity solution since if and only if .     Peter's ice cream stand has an operating cost of $200 per week. The cost to make an ice cream sundae is $2 and they sell for $6. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of ice cream sundaes sold.   Since our operating costs (fixed costs) are $200 per week and the marginal cost is $2 per ice cream sundae, then . Since the selling price is $6 per ice cream sundae, then . Using and , we can obtain the profit function.     To find the break-even quantity, we may proceed by using two different methods. Both yield the same solution.  Method 1:      Method 2:     Peter must sell at least 50 ice cream sundaes in one week in order to make a profit.     A suit department store has an operating cost of $1000 per week. The cost to supply a suit is $50 each and they sell for $150 each. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of suits sold.    The cost and revenue functions are Profit function:  Break-even quantity:   The department store must sell at least 10 suits in one week in order to make a profit.  Recall that and to find the break-even quantity, we can solve either or .      Mathematical Models of Supply and Demand  The demand equation  gives you the price of one unit if units are sold. The supply equation  gives you the price needed to make units available to the market. If we supply more units than the market demanded, this is considered a . If we supply less units than the market demanded, this is considered a .    Suppose that 500 units of a certain item are sold per day by the entire industry at a price of $20 per item and that 1500 units can be sold per day by the same industry at a price of $15 per unit. Assuming a linear model, find the demand equation where is the number of units sold per day.    Observe that 500 units are sold at a price of $20 per unit gives us the ordered pair . Moreover, we also have that 1500 units are sold at a price of $15 per unit. That is, .  Since the demand equation is linear, we can compute the slope of the line by using the above ordered pairs.  Using point-slope form,  Hence, our demand equation is .    Suppose that when 100 units of a certain item are supplied, they are sold at a price of $1.25 per unit. When 80 more units of a certain item are supplied, the price per unit increased by $1. Assuming a linear model, find the supply equation where is the number of units sold.   Using the ordered pairs and ,  Supply equation:  .  Use point-slope form to construct the linear supply equation.    Equilibrium  Companies often look for the amount of units needed to guarantee there is neither a or of units. Meaning, we want supply and demand to be equal which brings us to the following definition.  The equilibrium point  is the number of units needed at a selling price where supply and demand are equal. The -coordinate is the equilibrium quantity and the -coordinate is the equilibrium price .    Suppose the supply and demand equations for Peter's ice cream stand are and respectively. Find the equilibrium price and quantity. Suppose is the number of ice cream sundaes sold and the price per sundae is in dollars.  In order to find the equilibrium point we must set Peter's supply and demand equations equal to one another.    The equilibrium quantity is 20 ice cream sundaes.  Next, we can use either the supply or demand equation to solve for the equilibrium price. Notice that both equations will yield the same result.  Method 1: Using the supply equation.  Method 2: Using the demand equation. The equilibrium price is $7.    The supply and demand equations for Lola's smoothie shop are and respectively. Find the equilibrium point. Suppose is the number of smoothies sold in one day and the price per smoothie is in dollars.  Setting Lola's supply and demand equations equal to one another,   The equilibrium quantity is 20 smoothies. Using the supply equation: The equilibrium price is $5.  Recall that we must set the supply and demand equations equal to one another to find the equilibrium quantity.      Quadratic Mathematical Models  As we saw in the previous section, a quadratic polynomial is typically of the form where if the graph of opens upward and if the graph of opens downward. (See (a).) The quadratic polynomial can also be written in standard form . The point is called the vertex point . The -coordinate of the vertex point can be found using the vertex formula : The -coordinate of the vertex point can be found by evaluating the quadratic function at . That is, . Notice here that if the parabola opens upward, then the vertex is a . Conversely, if the parabola opens downward, the vertex is a .   As an example, let’s consider a mathematical model that a company could use to describe its revenue for the sale of a particular item. Recall the revenue equation The company is interested in how the sales change as the price of the item changes. Suppose the data in show the number of units a company sells as a function of the price per item.   Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                     In , we see the graph the number of units sold (in thousands) as a function of price (in dollars). We note from the shape of the graph that the number of units sold is likely a linear function of price per item, and the data can be closely approximated by the linear function for where predicts the number of units sold in thousands. Using this linear function, the revenue (in thousands of dollars) can be estimated by the quadratic function   for In , we use this quadratic function to predict the amount of revenue the company receives depending on the price the company charges per item. Note that we cannot conclude definitively the actual number of units sold for values of for which no data are collected. However, given the other data values and the graph shown, it seems reasonable that the number of units sold (in thousands) if the price charged is dollars may be close to the values predicted by the linear function    \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “x = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.    Maximizing Revenue   A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from , the company arrives at the following quadratic function to model revenue (in thousands of dollars) as a function of price per item   for   Predict the revenue if the company sells the item at a price of and  Find the zeros of this function and interpret the meaning of the zeros.  Sketch a graph of  Use the graph to determine the value of that maximizes revenue. Find the maximum revenue.      Evaluating the revenue function at and we can conclude that  The zeros of this function can be found by solving the equation When we factor the quadratic expression, we get The solutions to this equation are given by For these values of the revenue is zero. When the revenue is zero because the company is giving away its merchandise for free. When the revenue is zero because the price is too high, and no one will buy any items.  Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at and the parabola must be symmetric about the line halfway between them, or   \"An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.\">    The function is a parabola with zeros at and and it is symmetric about the line so the maximum revenue occurs at a price of per item. At that price, the revenue is     Recall that both the supply and demand equations give the price per unit given the number of units sold. This means that using either the supply or demand equation and that we can find the revenue equation:    Maximizing Profit and Minimizing Cost   A clothing store determines that its supply equation for dresses sold is and the cost for producing dresses is .   Find the revenue function .  Find the profit function .  How many dresses must be sold in order to maximize profits?  What is the maximum profit?  How many dresses must be sold in order to minimize costs?      We can find the revenue equation using the supply equation. Recall that, . . .           The demand equation for diamond rings sold at a jewelry store in one month is where is the number of diamond rings sold in one month and the price of each diamond ring is in hundreds of dollars.   Find the revenue function .  How many diamond rings must be sold in order to maximize revenue?  What is the maximum revenue?  What is the price per diamond ring that will maximize revenue?       Using we obtain    Since the graph of our revenue function opens downward, the vertex point will give us maximum revenue. Using the vertex formula, Furthermore, selling 32 diamond rings in one month will maximize revenue.    Since revenue is maximized when 32 diamond rings are sold, evaluating will give us the maximum revenue. Recalling that the price is in hundreds of dollars, revenue will also be in hundreds of dollars. As a result, the maximum revenue is .    In order to find the price per diamond ring that will maximize revenue we must evaluate the demand equation at . Again, since the price is in hundreds of dollars, the price per diamond ring that will maximize revenue is .          "
},
{
  "id": "sec_Ch1Sec3-2-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical models "
},
{
  "id": "sec_Ch1Sec3-3-2",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cost function "
},
{
  "id": "sec_Ch1Sec3-3-4",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable marginal cost fixed costs "
},
{
  "id": "sec_Ch1Sec3-3-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "revenue function "
},
{
  "id": "sec_Ch1Sec3-3-7",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "marginal revenue "
},
{
  "id": "sec_Ch1Sec3-3-8",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "profit function "
},
{
  "id": "sec_Ch1Sec3-3-12-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-12-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "The break-even quantity is the number of units needed so that cost and revenue are equal, meaning the total profit is zero. That is, or . "
},
{
  "id": "sec_Ch1Sec3-3-12-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-12-5",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Peter's ice cream stand has an operating cost of $200 per week. The cost to make an ice cream sundae is $2 and they sell for $6. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of ice cream sundaes sold.   Since our operating costs (fixed costs) are $200 per week and the marginal cost is $2 per ice cream sundae, then . Since the selling price is $6 per ice cream sundae, then . Using and , we can obtain the profit function.     To find the break-even quantity, we may proceed by using two different methods. Both yield the same solution.  Method 1:      Method 2:     Peter must sell at least 50 ice cream sundaes in one week in order to make a profit.  "
},
{
  "id": "sec_Ch1Sec3-3-12-6",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-12-6",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": "  A suit department store has an operating cost of $1000 per week. The cost to supply a suit is $50 each and they sell for $150 each. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of suits sold.    The cost and revenue functions are Profit function:  Break-even quantity:   The department store must sell at least 10 suits in one week in order to make a profit.  Recall that and to find the break-even quantity, we can solve either or .  "
},
{
  "id": "sec_Ch1Sec3-4-2",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "demand equation supply equation "
},
{
  "id": "sec_Ch1Sec3-4-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-3",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  Suppose that 500 units of a certain item are sold per day by the entire industry at a price of $20 per item and that 1500 units can be sold per day by the same industry at a price of $15 per unit. Assuming a linear model, find the demand equation where is the number of units sold per day.    Observe that 500 units are sold at a price of $20 per unit gives us the ordered pair . Moreover, we also have that 1500 units are sold at a price of $15 per unit. That is, .  Since the demand equation is linear, we can compute the slope of the line by using the above ordered pairs.  Using point-slope form,  Hence, our demand equation is .  "
},
{
  "id": "sec_Ch1Sec3-4-4",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-4",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " Suppose that when 100 units of a certain item are supplied, they are sold at a price of $1.25 per unit. When 80 more units of a certain item are supplied, the price per unit increased by $1. Assuming a linear model, find the supply equation where is the number of units sold.   Using the ordered pairs and ,  Supply equation:  .  Use point-slope form to construct the linear supply equation.  "
},
{
  "id": "sec_Ch1Sec3-4-5-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5-3",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "The equilibrium point  is the number of units needed at a selling price where supply and demand are equal. The -coordinate is the equilibrium quantity and the -coordinate is the equilibrium price . "
},
{
  "id": "sec_Ch1Sec3-4-5-4",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5-4",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " Suppose the supply and demand equations for Peter's ice cream stand are and respectively. Find the equilibrium price and quantity. Suppose is the number of ice cream sundaes sold and the price per sundae is in dollars.  In order to find the equilibrium point we must set Peter's supply and demand equations equal to one another.    The equilibrium quantity is 20 ice cream sundaes.  Next, we can use either the supply or demand equation to solve for the equilibrium price. Notice that both equations will yield the same result.  Method 1: Using the supply equation.  Method 2: Using the demand equation. The equilibrium price is $7.  "
},
{
  "id": "sec_Ch1Sec3-4-5-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5-5",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " The supply and demand equations for Lola's smoothie shop are and respectively. Find the equilibrium point. Suppose is the number of smoothies sold in one day and the price per smoothie is in dollars.  Setting Lola's supply and demand equations equal to one another,   The equilibrium quantity is 20 smoothies. Using the supply equation: The equilibrium price is $5.  Recall that we must set the supply and demand equations equal to one another to find the equilibrium quantity.  "
},
{
  "id": "sec_Ch1Sec3-5-2",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertex point vertex formula "
},
{
  "id": "fs-id1170573493744",
  "level": "2",
  "url": "sec_Ch1Sec3.html#fs-id1170573493744",
  "type": "Table",
  "number": "1.2.9",
  "title": "Number of Units Sold <span class=\"process-math\">\\(x\\)<\/span> (in Thousands) as a Function of Price per Unit <span class=\"process-math\">\\(p\\)<\/span> (in Dollars)",
  "body": " Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                    "
},
{
  "id": "CNX_Calc_Figure_01_02_008",
  "level": "2",
  "url": "sec_Ch1Sec3.html#CNX_Calc_Figure_01_02_008",
  "type": "Figure",
  "number": "1.2.10",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “x = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.  "
},
{
  "id": "fs-id1170573569241",
  "level": "2",
  "url": "sec_Ch1Sec3.html#fs-id1170573569241",
  "type": "Example",
  "number": "1.2.11",
  "title": "Maximizing Revenue.",
  "body": " Maximizing Revenue   A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from , the company arrives at the following quadratic function to model revenue (in thousands of dollars) as a function of price per item   for   Predict the revenue if the company sells the item at a price of and  Find the zeros of this function and interpret the meaning of the zeros.  Sketch a graph of  Use the graph to determine the value of that maximizes revenue. Find the maximum revenue.      Evaluating the revenue function at and we can conclude that  The zeros of this function can be found by solving the equation When we factor the quadratic expression, we get The solutions to this equation are given by For these values of the revenue is zero. When the revenue is zero because the company is giving away its merchandise for free. When the revenue is zero because the price is too high, and no one will buy any items.  Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at and the parabola must be symmetric about the line halfway between them, or   \"An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.\">    The function is a parabola with zeros at and and it is symmetric about the line so the maximum revenue occurs at a price of per item. At that price, the revenue is    "
},
{
  "id": "sec_Ch1Sec3-5-11",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-5-11",
  "type": "Example",
  "number": "1.2.12",
  "title": "Maximizing Profit and Minimizing Cost.",
  "body": " Maximizing Profit and Minimizing Cost   A clothing store determines that its supply equation for dresses sold is and the cost for producing dresses is .   Find the revenue function .  Find the profit function .  How many dresses must be sold in order to maximize profits?  What is the maximum profit?  How many dresses must be sold in order to minimize costs?      We can find the revenue equation using the supply equation. Recall that, . . .        "
},
{
  "id": "sec_Ch1Sec3-5-12",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-5-12",
  "type": "Checkpoint",
  "number": "1.2.13",
  "title": "",
  "body": "  The demand equation for diamond rings sold at a jewelry store in one month is where is the number of diamond rings sold in one month and the price of each diamond ring is in hundreds of dollars.   Find the revenue function .  How many diamond rings must be sold in order to maximize revenue?  What is the maximum revenue?  What is the price per diamond ring that will maximize revenue?       Using we obtain    Since the graph of our revenue function opens downward, the vertex point will give us maximum revenue. Using the vertex formula, Furthermore, selling 32 diamond rings in one month will maximize revenue.    Since revenue is maximized when 32 diamond rings are sold, evaluating will give us the maximum revenue. Recalling that the price is in hundreds of dollars, revenue will also be in hundreds of dollars. As a result, the maximum revenue is .    In order to find the price per diamond ring that will maximize revenue we must evaluate the demand equation at . Again, since the price is in hundreds of dollars, the price per diamond ring that will maximize revenue is .        "
},
{
  "id": "sec_Ch2Sec2v2",
  "level": "1",
  "url": "sec_Ch2Sec2v2.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Limit of a Function",
  "body": " The Limit of a Function   Learning Objectives   Using correct notation, describe the limit of a function.  Use a table of values to estimate the limit of a function or to identify when the limit does not exist.  Use a graph to estimate the limit of a function or to identify when the limit does not exist.  Define one-sided limits and provide examples.  Explain the relationship between one-sided and two-sided limits.  Using correct notation, describe an infinite limit.    The concept of a limit or limiting process, essential to the understanding of calculus, has been around for thousands of years. In fact, early mathematicians used a limiting process to obtain better and better approximations of areas of circles. Yet, the formal definition of a limit—as we know and understand it today—did not appear until the late 19th century. We therefore begin our quest to understand limits, as our mathematical ancestors did, by using an intuitive approach. In the next section, armed with a conceptual understanding of limits, we examine the formal definition of a limit.  We begin our exploration of limits by taking a look at the graphs of the functions   which are shown in . In particular, let’s focus our attention on the behavior of each graph at and around    \"Three graphs of functions. The first is f(s) = (x^2 – 4) \/ (x-2), which is a line of slope, x intercept (-2,0), and open circle at (2,4). The second is g(x) = |x – 2 | \/ (x-2), which contains two lines: x=1 for x\\gt 2 and x= -1 for x \\lt 2. There are open circles at both endpoints (2, 1) and (-2, 1). The third is h(x) = 1 \/ (x-2)^2, in which the function curves asymptotically towards y=0 and x=2 in quadrants one and two.\"  These graphs show the behavior of three different functions around   Each of the three functions is undefined at but if we make this statement and no other, we give a very incomplete picture of how each function behaves in the vicinity of To express the behavior of each graph in the vicinity of 2 more completely, we need to introduce the concept of a limit.    Intuitive Definition of a Limit  Let’s first take a closer look at how the function behaves around in . As the values of approach 2 from either side of 2, the values of approach 4. Mathematically, we say that the limit of as approaches 2 is 4. Symbolically, we express this limit as   From this very brief informal look at one limit, let’s start to develop an intuitive definition of the limit . We can think of the limit of a function at a number as being the one real number that the functional values approach as the -values approach provided such a real number exists. Stated more carefully, we have the following definition:   Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. If all values of the function approach the real number as the values of approach the number , then we say that the limit of as approaches is . (More succinct, as gets closer to , gets closer and stays close to .) Symbolically, we express this idea as     In this section, we'll focus on finding a table of values and the graph of a function. As an example, consider . Notice that is undefined at , but we are not interested in the function value at , only in the value the function is approaching as the values approach .   Evaluating a Limit Using a Table of Functional Values 1   Evaluate using a table of functional values.    We have calculated the values of for the values of listed in .   Table of Functional Values for           -0.1  0.998334166468   0.1  0.998334166468    -0.01  0.999983333417   0.01  0.999983333417    -0.001  0.999999833333   0.001  0.999999833333    -0.0001  0.999999998333   0.0001  0.999999998333     Note : The values in this table were obtained using a calculator and using all the places given in the calculator output. As we read down each column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that A calculator-or computer-generated graph of would be similar to that shown in , and it confirms our estimate.    \"A graph of f(x) = sin(x)\/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.\"  The graph of confirms the estimate from .       Problem-Solving Strategy: Evaluating a Limit Using a Table of Functional Values   To evaluate we begin by completing a table of functional values. We should choose two sets of -values—one set of values approaching and less than , and another set of values approaching and greater than . demonstrates what your tables might look like.   Table of Functional Values for                                       Use additional values as necessary.  Use additional values as necessary.     Next, let’s look at the values in each of the columns and determine whether the values seem to be approaching a single value as we move down each column. In our columns, we look at the sequence and so on, and and so on. ( Note : Although we have chosen the -values and so forth, and these values will probably work nearly every time, on very rare occasions we may need to modify our choices.)  If both columns approach a common y -value , we state We can use the following strategy to confirm the result obtained from the table or as an alternative method for estimating a limit.  Using a graphing calculator or computer software that allows us graph functions, we can plot the function making sure the functional values of for -values near are in our window. We can use the trace feature to move along the graph of the function and watch the y -value readout as the -values approach . If the -values approach as our -values approach from both directions, then We may need to zoom in on our graph and repeat this process several times.     Evaluating a Limit Using a Table of Functional Values 2   Evaluate using a table of functional values.    As before, we use a table—in this case, —to list the values of the function for the given values of .   Table of Functional Values for           3.9  0.251582341869   4.1  0.248456731317    3.99  0.25015644562   4.01  0.24984394501    3.999  0.250015627   4.001  0.249984377    3.9999  0.250001563   4.0001  0.249998438    3.99999  0.25000016   4.00001  0.24999984     After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward whereas the functional values greater than appear to be increasing toward . We conclude that We confirm this estimate using the graph of shown in .    \"A graph of the function f(x) = (sqrt(x) – 2 ) \/ (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.\"  The graph of confirms the estimate from .       Estimate using a table of functional values. Use a graph to confirm your estimate.       Use and as your table values.    At this point, we see from and that it may be just as easy, if not easier, to estimate a limit of a function by inspecting its graph as it is to estimate the limit by using a table of functional values. In , we evaluate a limit exclusively by looking at a graph rather than by using a table of functional values.   Evaluating a Limit Using a Graph   For shown in , evaluate    \"The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1,4).\"  The graph of includes one value not on a smooth curve.     Despite the fact that as the -values approach from either side, the values approach . Therefore, Note that we can determine this limit without even knowing the algebraic expression of the function.    Based on , we make the following observation: It is possible for the limit of a function to exist at a point, and for the function to be defined at this point, but the limit of the function and the value of the function at the point may be different.   Use the graph of in to evaluate if possible.    \"A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).\"         What -value does the function approach as the -values approach ?      Identifying When Limits Do Not Exist  A function may not have a limit for all values of . that is, we cannot write that (where is some real number) for all values of , for there may not be a number that is approaching. There are three common ways in which a limit may fail to exist.  The function may approach different values on either side of  The function may grow without upper or lower bound as approaches  The function may oscillate as approaches without approaching a specific value  We'll explore each of these in turn.   Different Values Approached From Left and Right  Explore why does not exist where    A graph of around and a table are given in and , respectively. It is clear that as approaches , does not seem to approach a single number. Instead it seems as though approaches two different numbers. When considering values of less than (approaching from the left), it seems is approaching ; when considering values of greater than (approaching from the right), it seems is approaching .  Recognizing this behavior is important; we'll study this in greater depth later. Right now, it suffices to say that the limit does not exist since is approaching two different values as approaches .    A graph of a polynomial from (0,3) to (2,1) with a point at (2,1) and on the same axes a line from (1,1) to (2,2) with a hole at (1,1)   The limit of does not exist at    Values of near                                    The Function Grows Without Bound  Explore why does not exist.   A graph and table of are given in and , respectively. Both show that as approaches , grows larger and larger    A graph of 1\/(x-1)^2 showing a vertical asymptote at x=1   Observing no limit as    Values of near                                 We can deduce this on our own with the aid of the graph and table. If is near , then is very small, and Since is not approaching a single number, we conclude does not exist.        The Function Oscillates   Explore why does not exist.    Two graphs of are given in . The first shows on the interval ; notice how seems to oscillate near . One might think that despite the oscillation, as approaches , approaches . However, the second image zooms in on on the interval . Here the oscillation is even more pronounced.      \"The graph of the function f(x) = sin(1\/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.\"   Observing no limit as   lists values for the function for the given values of .   Table of Functional Values for                                                      After examining the table of functional values, we can see that the -values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of -values approaching :   The corresponding -values are   At this point we can indeed conclude that does not exist.  Mathematicians frequently abbreviate “does not exist” as DNE.        Use a table of functional values to evaluate if possible.    does not exist.    Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 and 2.1, 2.01, 2.001, 2.0001, 2.00001 in your table.      One-Sided Limits  Sometimes indicating that the limit of a function fails to exist at a point does not provide us with enough information about the behavior of the function at that particular point. To see this, we now revisit the function introduced at the beginning of the section (see (b)). As we pick values of close to , does not approach a single value, so the limit as approaches 2 does not exist—that is, DNE.  However, this statement alone does not give us a complete picture of the behavior of the function around the -value . To provide a more accurate description, we introduce the idea of a one-sided limit . For all values to the left of (or the negative side of  ), Thus, as approaches from the left, approaches -1. Mathematically, we say that the limit as approaches from the left is . Symbolically, we express this idea as   Similarly, as approaches from the right (or from the positive side ), approaches . Symbolically, we express this idea as   We can now present an informal definition of one-sided limits.    We define two types of one-sided limits .  Limit from the left: Let be a function defined at all values in an open interval of the form ), and let be a real number. If the values of the function approach the real number as the values of (where approach the number , then we say that is the limit of as approaches a from the left. Symbolically, we express this idea as  Limit from the right: Let be a function defined at all values in an open interval of the form and let be a real number. If the values of the function approach the real number L as the values of (where ) approach the number , then we say that is the limit of as approaches from the right. Symbolically, we express this idea as     Evaluating One-Sided Limits   For the function evaluate each of the following limits.        We can use tables of functional values again . Observe that for values of less than , we use and for values of greater than 2 , we use   Table of Functional Values for           1.9  2.9   2.1  0.41    1.99  2.99  2.01  0.0401    1.999  2.999  2.001  0.004001    1.9999  2.9999  2.0001  0.00040001    1.99999  2.99999  2.00001  0.0000400001     Based on this table, we can conclude that a. and b. Therefore, the (two-sided) limit of does not exist at  shows a graph of and reinforces our conclusion about these limits.    \"The graph of the given piecewise function. The first piece is f(x) = x+1 if x \\lt 2. The second piece is x^2 – 4 if x \\gt = 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.\"  The graph of has a break at      Use a table of functional values to estimate the following limits, if possible.        a. b.     Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate  Use -values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate (These tables are available from a previous Checkpoint problem.)     Let us now consider the relationship between the limit of a function at a point and the limits from the right and left at that point. It seems clear that if the limit from the right and the limit from the left have a common value, then that common value is the limit of the function at that point. Similarly, if the limit from the left and the limit from the right take on different values, the limit of the function does not exist. These conclusions are summarized in .   Relating One-Sided and Two-Sided Limits  Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. Then,      Infinite Limits  Evaluating the limit of a function at a point or evaluating the limit of a function from the right and left at a point helps us to characterize the behavior of a function around a given value. As we shall see, we can also describe the behavior of functions that do not have finite limits.  We now turn our attention to the third and final function introduced at the beginning of this section (see (c)). From its graph we see that as the values of approach , the values of become larger and larger and, in fact, become infinite. Mathematically, we say that the limit of as approaches is positive infinity. Symbolically, we express this idea as   More generally, we define infinite limits as follows:   An infinite limit describes the behavior of a function when its values increase or decrease without bound as approaches a point.   From the left: means grows larger and larger as approaches from the left. means decreases without bound as approaches from the left  From the right: means grows larger and larger as approaches from the right. means decreases without bound as approaches from the right  Two-sided: means that both one-sided limits agree and the function increases or decreases without bound as approaches from either side.     It is important to understand that when we write statements such as or we are describing the behavior of the function, as we have just defined it. We are not asserting that a limit exists. For the limit of a function to exist at , it must approach a real number as approaches . That said, if, for example, we always write rather than DNE.   Recognizing an Infinite Limit   Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         Begin by constructing a table of functional values.   Table of Functional Values for           -0.1  -10   0.1  10    -0.01  -100   0.01  100    -0.001  -1000   0.001  1000    -0.0001  -10,000   0.0001  10,000    -0.00001  -100,000   0.00001  100,000    -0.000001  -1,000,000   0.000001  1,000,000      The values of decrease without bound as approaches 0 from the left. We conclude that   The values of increase without bound as approaches 0 from the right. We conclude that   Since and have different values, we conclude that   The graph of in confirms these conclusions.    \"The graph of the function f(x) = 1\/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.\"  The graph of confirms that the limit as approaches 0 does not exist.       Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.                Follow the procedures from .     In the next example we put our knowledge of various types of limits to use to analyze the behavior of a function at several different points.   Behavior of a Function at Different Points   Use the graph of in to determine each of the following values:          \"The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.\"  The graph shows        is undefined  DNE;  is undefined       Evaluate for shown here:   \"A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.\"     Does not exist.    Compare the limit from the right with the limit from the left.        Section Exercises  For the following exercises, consider the function    [T] Complete the following table for the function. Round your solutions to four decimal places.                  0.9  a.  1.1  e.    0.99  b.  1.01  f.    0.999  c.  1.001  g.    0.9999  d.  1.0001  h.        "
},
{
  "id": "CNX_Calc_Figure_02_02_001",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#CNX_Calc_Figure_02_02_001",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "  \"Three graphs of functions. The first is f(s) = (x^2 – 4) \/ (x-2), which is a line of slope, x intercept (-2,0), and open circle at (2,4). The second is g(x) = |x – 2 | \/ (x-2), which contains two lines: x=1 for x\\gt 2 and x= -1 for x \\lt 2. There are open circles at both endpoints (2, 1) and (-2, 1). The third is h(x) = 1 \/ (x-2)^2, in which the function curves asymptotically towards y=0 and x=2 in quadrants one and two.\"  These graphs show the behavior of three different functions around  "
},
{
  "id": "sec_Ch2Sec2v2-3-4",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intuitive definition of the limit "
},
{
  "id": "sec_Ch2Sec2v2-3-5",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-5",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. If all values of the function approach the real number as the values of approach the number , then we say that the limit of as approaches is . (More succinct, as gets closer to , gets closer and stays close to .) Symbolically, we express this idea as   "
},
{
  "id": "fs-id1170572561451",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170572561451",
  "type": "Example",
  "number": "2.1.3",
  "title": "Evaluating a Limit Using a Table of Functional Values 1.",
  "body": " Evaluating a Limit Using a Table of Functional Values 1   Evaluate using a table of functional values.    We have calculated the values of for the values of listed in .   Table of Functional Values for           -0.1  0.998334166468   0.1  0.998334166468    -0.01  0.999983333417   0.01  0.999983333417    -0.001  0.999999833333   0.001  0.999999833333    -0.0001  0.999999998333   0.0001  0.999999998333     Note : The values in this table were obtained using a calculator and using all the places given in the calculator output. As we read down each column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that A calculator-or computer-generated graph of would be similar to that shown in , and it confirms our estimate.    \"A graph of f(x) = sin(x)\/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.\"  The graph of confirms the estimate from .    "
},
{
  "id": "sec_Ch2Sec2v2-3-8",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-8",
  "type": "Note",
  "number": "2.1.6",
  "title": "Problem-Solving Strategy: Evaluating a Limit Using a Table of Functional Values.",
  "body": " Problem-Solving Strategy: Evaluating a Limit Using a Table of Functional Values   To evaluate we begin by completing a table of functional values. We should choose two sets of -values—one set of values approaching and less than , and another set of values approaching and greater than . demonstrates what your tables might look like.   Table of Functional Values for                                       Use additional values as necessary.  Use additional values as necessary.     Next, let’s look at the values in each of the columns and determine whether the values seem to be approaching a single value as we move down each column. In our columns, we look at the sequence and so on, and and so on. ( Note : Although we have chosen the -values and so forth, and these values will probably work nearly every time, on very rare occasions we may need to modify our choices.)  If both columns approach a common y -value , we state We can use the following strategy to confirm the result obtained from the table or as an alternative method for estimating a limit.  Using a graphing calculator or computer software that allows us graph functions, we can plot the function making sure the functional values of for -values near are in our window. We can use the trace feature to move along the graph of the function and watch the y -value readout as the -values approach . If the -values approach as our -values approach from both directions, then We may need to zoom in on our graph and repeat this process several times.   "
},
{
  "id": "fs-id1170571656691",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571656691",
  "type": "Example",
  "number": "2.1.8",
  "title": "Evaluating a Limit Using a Table of Functional Values 2.",
  "body": " Evaluating a Limit Using a Table of Functional Values 2   Evaluate using a table of functional values.    As before, we use a table—in this case, —to list the values of the function for the given values of .   Table of Functional Values for           3.9  0.251582341869   4.1  0.248456731317    3.99  0.25015644562   4.01  0.24984394501    3.999  0.250015627   4.001  0.249984377    3.9999  0.250001563   4.0001  0.249998438    3.99999  0.25000016   4.00001  0.24999984     After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward whereas the functional values greater than appear to be increasing toward . We conclude that We confirm this estimate using the graph of shown in .    \"A graph of the function f(x) = (sqrt(x) – 2 ) \/ (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.\"  The graph of confirms the estimate from .    "
},
{
  "id": "sec_Ch2Sec2v2-3-10",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-10",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "",
  "body": "  Estimate using a table of functional values. Use a graph to confirm your estimate.       Use and as your table values.   "
},
{
  "id": "fs-id1170572337207",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170572337207",
  "type": "Example",
  "number": "2.1.12",
  "title": "Evaluating a Limit Using a Graph.",
  "body": " Evaluating a Limit Using a Graph   For shown in , evaluate    \"The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1,4).\"  The graph of includes one value not on a smooth curve.     Despite the fact that as the -values approach from either side, the values approach . Therefore, Note that we can determine this limit without even knowing the algebraic expression of the function.   "
},
{
  "id": "sec_Ch2Sec2v2-3-14",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-14",
  "type": "Checkpoint",
  "number": "2.1.14",
  "title": "",
  "body": " Use the graph of in to evaluate if possible.    \"A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).\"         What -value does the function approach as the -values approach ?   "
},
{
  "id": "sec_Ch2Sec2v2-4-3",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-3",
  "type": "Example",
  "number": "2.1.16",
  "title": "Different Values Approached From Left and Right.",
  "body": " Different Values Approached From Left and Right  Explore why does not exist where    A graph of around and a table are given in and , respectively. It is clear that as approaches , does not seem to approach a single number. Instead it seems as though approaches two different numbers. When considering values of less than (approaching from the left), it seems is approaching ; when considering values of greater than (approaching from the right), it seems is approaching .  Recognizing this behavior is important; we'll study this in greater depth later. Right now, it suffices to say that the limit does not exist since is approaching two different values as approaches .    A graph of a polynomial from (0,3) to (2,1) with a point at (2,1) and on the same axes a line from (1,1) to (2,2) with a hole at (1,1)   The limit of does not exist at    Values of near                                  "
},
{
  "id": "sec_Ch2Sec2v2-4-4",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-4",
  "type": "Example",
  "number": "2.1.19",
  "title": "The Function Grows Without Bound.",
  "body": " The Function Grows Without Bound  Explore why does not exist.   A graph and table of are given in and , respectively. Both show that as approaches , grows larger and larger    A graph of 1\/(x-1)^2 showing a vertical asymptote at x=1   Observing no limit as    Values of near                                 We can deduce this on our own with the aid of the graph and table. If is near , then is very small, and Since is not approaching a single number, we conclude does not exist.   "
},
{
  "id": "sec_Ch2Sec2v2-4-5",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-5",
  "type": "Example",
  "number": "2.1.22",
  "title": "The Function Oscillates.",
  "body": " The Function Oscillates   Explore why does not exist.    Two graphs of are given in . The first shows on the interval ; notice how seems to oscillate near . One might think that despite the oscillation, as approaches , approaches . However, the second image zooms in on on the interval . Here the oscillation is even more pronounced.      \"The graph of the function f(x) = sin(1\/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.\"   Observing no limit as   lists values for the function for the given values of .   Table of Functional Values for                                                      After examining the table of functional values, we can see that the -values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of -values approaching :   The corresponding -values are   At this point we can indeed conclude that does not exist.  Mathematicians frequently abbreviate “does not exist” as DNE.     "
},
{
  "id": "sec_Ch2Sec2v2-4-6",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-6",
  "type": "Checkpoint",
  "number": "2.1.25",
  "title": "",
  "body": "  Use a table of functional values to evaluate if possible.    does not exist.    Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 and 2.1, 2.01, 2.001, 2.0001, 2.00001 in your table.   "
},
{
  "id": "sec_Ch2Sec2v2-5-3",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-sided limit "
},
{
  "id": "sec_Ch2Sec2v2-5-8",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-5-8",
  "type": "Definition",
  "number": "2.1.26",
  "title": "",
  "body": "  We define two types of one-sided limits .  Limit from the left: Let be a function defined at all values in an open interval of the form ), and let be a real number. If the values of the function approach the real number as the values of (where approach the number , then we say that is the limit of as approaches a from the left. Symbolically, we express this idea as  Limit from the right: Let be a function defined at all values in an open interval of the form and let be a real number. If the values of the function approach the real number L as the values of (where ) approach the number , then we say that is the limit of as approaches from the right. Symbolically, we express this idea as   "
},
{
  "id": "sec_Ch2Sec2v2-5-9",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-5-9",
  "type": "Example",
  "number": "2.1.27",
  "title": "Evaluating One-Sided Limits.",
  "body": " Evaluating One-Sided Limits   For the function evaluate each of the following limits.        We can use tables of functional values again . Observe that for values of less than , we use and for values of greater than 2 , we use   Table of Functional Values for           1.9  2.9   2.1  0.41    1.99  2.99  2.01  0.0401    1.999  2.999  2.001  0.004001    1.9999  2.9999  2.0001  0.00040001    1.99999  2.99999  2.00001  0.0000400001     Based on this table, we can conclude that a. and b. Therefore, the (two-sided) limit of does not exist at  shows a graph of and reinforces our conclusion about these limits.    \"The graph of the given piecewise function. The first piece is f(x) = x+1 if x \\lt 2. The second piece is x^2 – 4 if x \\gt = 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.\"  The graph of has a break at    "
},
{
  "id": "sec_Ch2Sec2v2-5-10",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-5-10",
  "type": "Checkpoint",
  "number": "2.1.30",
  "title": "",
  "body": " Use a table of functional values to estimate the following limits, if possible.        a. b.     Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate  Use -values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate (These tables are available from a previous Checkpoint problem.)    "
},
{
  "id": "fs-id1170571598073",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571598073",
  "type": "Theorem",
  "number": "2.1.31",
  "title": "Relating One-Sided and Two-Sided Limits.",
  "body": " Relating One-Sided and Two-Sided Limits  Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. Then,   "
},
{
  "id": "sec_Ch2Sec2v2-6-5",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite limits "
},
{
  "id": "sec_Ch2Sec2v2-6-6",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-6",
  "type": "Definition",
  "number": "2.1.32",
  "title": "",
  "body": " An infinite limit describes the behavior of a function when its values increase or decrease without bound as approaches a point.   From the left: means grows larger and larger as approaches from the left. means decreases without bound as approaches from the left  From the right: means grows larger and larger as approaches from the right. means decreases without bound as approaches from the right  Two-sided: means that both one-sided limits agree and the function increases or decreases without bound as approaches from either side.    "
},
{
  "id": "fs-id1170571611150",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571611150",
  "type": "Example",
  "number": "2.1.33",
  "title": "Recognizing an Infinite Limit.",
  "body": " Recognizing an Infinite Limit   Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         Begin by constructing a table of functional values.   Table of Functional Values for           -0.1  -10   0.1  10    -0.01  -100   0.01  100    -0.001  -1000   0.001  1000    -0.0001  -10,000   0.0001  10,000    -0.00001  -100,000   0.00001  100,000    -0.000001  -1,000,000   0.000001  1,000,000      The values of decrease without bound as approaches 0 from the left. We conclude that   The values of increase without bound as approaches 0 from the right. We conclude that   Since and have different values, we conclude that   The graph of in confirms these conclusions.    \"The graph of the function f(x) = 1\/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.\"  The graph of confirms that the limit as approaches 0 does not exist.    "
},
{
  "id": "sec_Ch2Sec2v2-6-9",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-9",
  "type": "Checkpoint",
  "number": "2.1.36",
  "title": "",
  "body": "  Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.                Follow the procedures from .   "
},
{
  "id": "sec_Ch2Sec2v2-6-11",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-11",
  "type": "Example",
  "number": "2.1.37",
  "title": "Behavior of a Function at Different Points.",
  "body": " Behavior of a Function at Different Points   Use the graph of in to determine each of the following values:          \"The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.\"  The graph shows        is undefined  DNE;  is undefined    "
},
{
  "id": "sec_Ch2Sec2v2-6-12",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-12",
  "type": "Checkpoint",
  "number": "2.1.39",
  "title": "",
  "body": "  Evaluate for shown here:   \"A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.\"     Does not exist.    Compare the limit from the right with the limit from the left.   "
},
{
  "id": "fs-id1170571655743",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571655743",
  "type": "Table",
  "number": "2.1.40",
  "title": "",
  "body": "                0.9  a.  1.1  e.    0.99  b.  1.01  f.    0.999  c.  1.001  g.    0.9999  d.  1.0001  h.     "
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
