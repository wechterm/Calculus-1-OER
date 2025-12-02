var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_Ch1Sec1",
  "level": "1",
  "url": "sec_Ch1Sec1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Review of Functions",
  "body": " Review of Functions   Learning Objectives   Use functional notation to evaluate a function.  Determine the domain and range of a function.  Draw the graph of a function.  Find the zeros of a function.  Recognize a function from a table of values.  Make new functions from two or more given functions.  Describe the symmetry properties of a function.   In this section, we provide a formal definition of a function and examine several ways in which functions are represented—namely, through tables, formulas, and graphs. We study formal notation and terms related to functions. We also define composition of functions and symmetry properties. Most of this material will be a review for you, but it serves as a handy reference to remind you of some of the algebraic techniques useful for working with functions.    Functions  Given two sets and , a set with elements that are ordered pairs where is an element of and is an element of , is a relation from to . A relation from to defines a relationship between those two sets. A function is a special type of relation in which each element of the first set is related to exactly one element of the second set. The element of the first set is called the input ; the element of the second set is called the output . Functions are used all the time in mathematics to describe relationships between two sets. For any function, when we know the input, the output is determined, so we say that the output is a function of the input. For example, the area of a square is determined by its side length, so we say that the area (the output) is a function of its side length (the input). The velocity of a ball thrown in the air can be described as a function of the amount of time the ball is in the air. The cost of mailing a package is a function of the weight of the package. Since functions have so many uses, it is important to have precise definitions and terminology to study them.  A function  consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the domain of the function. The set of outputs is called the range of the function.  For example, consider the function , where the domain is the set of all real numbers and the rule is to square the input. Then, the input is assigned to the output . Since every nonnegative real number has a real-value square root, every nonnegative number is an element of the range of this function. Since there is no real number with a square that is negative, the negative real numbers are not elements of the range. We conclude that the range is the set of nonnegative real numbers. For a general function with domain , we often use to denote the input and to denote the output associated with . When doing so, we refer to as the independent variable and as the dependent variable , because it depends on . Using function notation, we write and we read this equation as “ equals of .” For the squaring function described earlier, we write   The concept of a function can be visualized using Figure , Figure and Figures .   A function can be visualized as an input\/output device.   An image with three items. The first item is text that reads Input. An arrow points from the first item to the second item, which is a box with the label function. An arrow points from the second item to the third item, which is text that reads Output, f(x).     A function maps every element in the domain to exactly one element in the range. Although each input can be sent to only one output, two different inputs can be sent to the same output.   An image with two items. The first item is a bubble labeled domain. Within the bubble are the numbers 1, 2, 3, and 4. An arrow with the label f; points from the first item to the second item, which is a bubble labeled range. Within this bubble are the numbers 2, 4, and 6. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 2 in the domain bubble to the 4 in the range bubble. An arrow points from the 3 in the domain bubble to the 2 in the range bubble. An arrow points from the 4 in the domain bubble to the 2 in the range bubble.     In this case, a graph of a function f has a domain of {1,2,3} and a range of {1,2}. The independent variable is x and the dependent variable is y.   An image of a graph. The y axis runs from 0 to 3 and has the label dependent variable, y = f(x). The x axis runs from 0 to 5 and has the label independent variable, x. There are three points on the graph. The first point is at (1, 2) and has the label (1, f(1)) = (1, 2). The second point is at (2, 1) and has the label (2, f(2))=(2,1). The third point is at (3, 2) and has the label (3, f(3)) = (3,2). There is text along the y axis that reads range = \\{1, 2} and text along the x axis that reads domain = \\{1,2,3}     Visit this applet link to see more about graphs of functions.   We can also visualize a function by plotting points in the coordinate plane where . The graph of a function is the set of all these points. For example, consider the function where the domain is the set and the rule is In Figure , we plot a graph of this function.   Here we see a graph of the function with domain and rule The graph consists of the points for all in the domain.   An image of a graph. The y axis runs from 0 to 5. The x axis runs from 0 to 5. There are three points on the graph at (1, 2), (2, 1), and (3, 0). There is text along the y axis that reads “range = {0,1,2}” and text along the x axis that reads “domain = {1,2,3}”.    Every function has a domain. However, sometimes a function is described by an equation, as in with no specific domain given. In this case, the domain is taken to be the set of all real numbers for which is a real number. For example, since any real number can be squared, if no other domain is specified, we consider the domain of to be the set of all real numbers. On the other hand, the square root function only gives a real output if is nonnegative. Therefore, the domain of the function is the set of nonnegative real numbers, sometimes called the natural domain .  For the functions and the domains are sets with an infinite number of elements. Clearly we cannot list all these elements. When describing a set with an infinite number of elements, it is often helpful to use set-builder or interval notation. When using set-builder notation to describe a subset of all real numbers, denoted we write   We read this as the set of real numbers such that has some property. For example, if we were interested in the set of real numbers that are greater than one but less than five, we could denote this set using set-builder notation by writing   A set such as this, which contains all numbers greater than and less than can also be denoted using the interval notation  Therefore,   The numbers and are called the endpoints of this set. If we want to consider the set that includes the endpoints, we would denote this set by writing   We can use similar notation if we want to include one of the endpoints, but not the other. To denote the set of nonnegative real numbers, we would use the set-builder notation   The smallest number in this set is zero, but this set does not have a largest number. Using interval notation, we would use the symbol which refers to positive infinity, and we would write the set as   It is important to note that is not a real number. It is used symbolically here to indicate that this set includes all real numbers greater than or equal to zero. Similarly, if we wanted to describe the set of all nonpositive numbers, we could write   Here, the notation refers to negative infinity, and it indicates that we are including all numbers less than or equal to zero, no matter how small. The set   refers to the set of all real numbers.  Some functions are defined using different equations for different parts of their domain. These types of functions are known as piecewise-defined functions . For example, suppose we want to define a function with a domain that is the set of all real numbers such that for and for We denote this function by writing   When evaluating this function for an input the equation to use depends on whether or For example, since we use the fact that for and see that On the other hand, for we use the fact that for and see that   Evaluating Functions   For the function evaluate         Substitute the given value for in the formula for         For evaluate and    and    Substitute and for in the formula for       For each of the following functions, determine the a. domain and b. range.        Finding Domain and Range    Consider    Since is a real number for any real number the domain of is the interval  Since we know Therefore, the range must be a subset of To show that every element in this set is in the range, we need to show that for a given in that set, there is a real number such that Solving this equation for we see that we need such that This equation is satisfied as long as there exists a real number such that Since the square root is well-defined. We conclude that for and therefore the range is   Consider    To find the domain of we need the expression Solving this inequality, we conclude that the domain is  To find the range of we note that since Therefore, the range of must be a subset of the set To show that every element in this set is in the range of we need to show that for all in this set, there exists a real number in the domain such that Let Then, if and only if Solving this equation for we see that must solve the equation Since such an could exist. Squaring both sides of this equation, we have Therefore, we need which implies We just need to verify that is in the domain of Since the domain of consists of all real numbers greater than or equal to and there does exist an in the domain of We conclude that the range of is    Consider   Since is defined when the denominator is nonzero, the domain is  To find the range of we need to find the values of such that there exists a real number in the domain with the property that Solving this equation for we find that Therefore, as long as there exists a real number in the domain such that Thus, the range is        Find the domain and range for    Domain = range =    Use      Representing Functions   Typically, a function is represented using one or more of the following tools:   A table  A graph  A formula   We can identify a function in each form, but we can also use them together. For instance, we can plot on a graph the values from a table or create a table from a formula.    Tables  Functions described using a table of values arise frequently in real-world applications. Consider the following simple example. We can describe temperature on a given day as a function of time of day. Suppose we record the temperature every hour for a 24-hour period starting at midnight. We let our input variable be the time after midnight, measured in hours, and the output variable be the temperature hours after midnight, measured in degrees Fahrenheit. We record our data in Table .   Temperature as a Function of Time of Day    Hours after Midnight  Temperature ( F)  Hours after Midnight  Temperature ( F)    0  58  12  84    1  54  13  85    2  53  14  85    3  52  15  83    4  52  16  82    5  55  17  80    6  60  18  77    7  64  19  74    8  72  20  69    9  75  21  65    10  78  22  60    11  80  23  58     We can see from the table that temperature is a function of time, and the temperature decreases, then increases, and then decreases again. However, we cannot get a clear picture of the behavior of the function without graphing it.    Graphs  Given a function described by a table, we can provide a visual picture of the function in the form of a graph. Graphing the temperatures listed in Table can give us a better idea of their fluctuation throughout the day. Figure shows the plot of the temperature function.    \"An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58).\"   The graph of the data from Table shows temperature as a function of time.   From the points plotted on the graph in Figure , we can visualize the general shape of the graph. It is often useful to connect the dots in the graph, which represent the data from the table. In this example, although we cannot make any definitive conclusion regarding what the temperature was at any time for which the temperature was not recorded, given the number of data points collected and the pattern in these points, it is reasonable to suspect that the temperatures at other times followed a similar pattern, as we can see in Figure .    \"An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58). A line connects all the points on the graph.\"   Connecting the dots in Figure shows the general pattern of the data.     Algebraic Formulas  Sometimes we are not given the values of a function in table form, rather we are given the values in an explicit formula. Formulas arise in many applications. For example, the area of a circle of radius is given by the formula When an object is thrown upward from the ground with an initial velocity ft\/s, its height above the ground from the time it is thrown until it hits the ground is given by the formula When dollars are invested in an account at an annual interest rate compounded continuously, the amount of money after years is given by the formula Algebraic formulas are important tools to calculate function values. Often we also represent these functions visually in graph form.  Given an algebraic formula for a function the graph of is the set of points where is in the domain of and is in the range. To graph a function given by a formula, it is helpful to begin by using the formula to create a table of inputs and outputs. If the domain of consists of an infinite number of values, we cannot list all of them, but because listing some of the inputs and outputs can be very useful, it is often a good way to begin.  When creating a table of inputs and outputs, we typically check to determine whether zero is an output. Those values of where are called the zeros of a function . For example, the zeros of are The zeros determine where the graph of intersects the -axis, which gives us more information about the shape of the graph of the function. The graph of a function may never intersect the x -axis, or it may intersect multiple (or even infinitely many) times.  Another point of interest is the -intercept, if it exists. The -intercept is given by  Since a function has exactly one output for each input, the graph of a function can have, at most, one -intercept. If is in the domain of a function then has exactly one -intercept. If is not in the domain of then has no -intercept. Similarly, for any real number if is in the domain of there is exactly one output and the line intersects the graph of exactly once. On the other hand, if is not in the domain of is not defined and the line does not intersect the graph of This property is summarized in the vertical line test .   Rule: Vertical Line Test  Given a function every vertical line that may be drawn intersects the graph of no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.   We can use this test to determine whether a set of plotted points represents the graph of a function ( Figure ).    \"An image of two graphs. The first graph is labeled “a” and is of the function “y = f(x)”. Three vertical lines run through 3 points on the function, each vertical line only passing through the function once. The second graph is labeled “b” and is of the relation “y not equal to f(x)”. Two vertical lines run through the relation, one line intercepting the relation at 3 points and the other line intercepting the relation at 3 different points.\"   (a) The set of plotted points represents the graph of a function because every vertical line intersects the set of points, at most, once. (b) The set of plotted points does not represent the graph of a function because some vertical lines intersect the set of points more than once.    Finding Zeros and -Intercepts of a Function   Consider the function   Find all zeros of  Find the -intercept (if any).  Sketch a graph of      To find the zeros, solve We discover that has one zero at  The -intercept is given by  Given that is a linear function of the form that passes through the points and we can sketch the graph of ( Figure ).   \"An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the function “f(x) = -4x + 2”, which is a decreasing straight line. There are two points plotted on the function at (0, 2) and (1\/2, 0).\"   The function is a line with -intercept and -intercept       Using Zeros and -Intercepts to Sketch a Graph   Consider the function   Find all zeros of  Find the -intercept (if any).  Sketch a graph of      To find the zeros, solve This equation implies Since for all this equation has no solutions, and therefore has no zeros.  The -intercept is given by  To graph this function, we make a table of values. Since we need we need to choose values of We choose values that make the square-root function easy to evaluate.                  Making use of the table and knowing that, since the function is a square root, the graph of should be similar to the graph of we sketch the graph ( Figure ).    \"An image of a graph. The y axis runs from -2 to 4 and the x axis runs from -3 to 2. The graph is of the function “f(x) = (square root of x + 3) + 1”, which is an increasing curved function that starts at the point (-3, 1). There are 3 points plotted on the function at (-3, 1), (-2, 2), and (1, 3). The function has a y intercept at (0, 1 + square root of 3).\"   The graph of has a -intercept but no -intercepts.       Find the zeros of       Factor the polynomial.     Finding the Height of a Free-Falling Object   If a ball is dropped from a height of ft, its height at time is given by the function where is measured in feet and is measured in seconds. The domain is restricted to the interval where is the time when the ball is dropped and is the time when the ball hits the ground.   Create a table showing the height when and Using the data from the table, determine the domain for this function. That is, find the time when the ball hits the ground.  Sketch a graph of         Height as a Function of Time                       Since the ball hits the ground when the domain of this function is the interval     \"An image of a graph. The y axis runs from 0 to 100 and is labeled “s(t), height in feet”. The x axis runs from 0 to 3 and is labeled “t, time in seconds”. The graph is of the function “s(t) = -16 t squared + 100”, which is a decreasing curved function that starts at the y intercept point (0, 100). There are 6 points plotted on the function at (0, 100), (0.5, 96), (1, 84), (1.5, 64), (2, 36), and (2.5, 0). The function has a x intercept at the last point (2.5, 0).\">        Note that for this function and the function graphed in , the values of are getting smaller as is getting larger. A function with this property is said to be decreasing. On the other hand, for the function graphed in , the values of are getting larger as the values of are getting larger. A function with this property is said to be increasing. It is important to note, however, that a function can be increasing on some interval or intervals and decreasing over a different interval or intervals. For example, using our temperature function in , we can see that the function is decreasing on the interval increasing on the interval and then decreasing on the interval We make the idea of a function increasing or decreasing over a particular interval more precise in the next definition.   We say that a function is increasing on the interval if for all   We say is strictly increasing on the interval  if for all   We say that a function is decreasing on the interval if for all   We say that a function is strictly decreasing on the interval  if for all    For example, the function is increasing on the interval because whenever On the other hand, the function is decreasing on the interval because whenever ( ).    \"An image of two graphs. The first graph is labeled “a” and is of the function “f(x) = 3x”, which is an increasing straight line that passes through the origin. The second graph is labeled “b” and is of the function “f(x) = -x cubed”, which is curved function that decreases until the function hits the origin where it becomes level, then decreases again after the origin.\"   (a) The function is increasing on the interval (b) The function is decreasing on the interval      Combining Functions   Now that we have reviewed the basic characteristics of functions, we can see what happens to these properties when we combine functions in different ways, using basic mathematical operations to create new functions. For example, if the cost for a company to manufacture items is described by the function and the revenue created by the sale of items is described by the function then the profit on the manufacture and sale of items is defined as Using the difference between two functions, we created a new function.  Alternatively, we can create a new function by composing two functions. For example, given the functions and the composite function is defined such that   The composite function is defined such that   Note that these two new functions are different from each other.    Combining Functions with Mathematical Operators  To combine functions using mathematical operators, we simply write the functions with the operator and simplify. Given two functions and we can define four new functions:    Combining Functions Using Mathematical Operations   Given the functions and find each of the following functions and state its domain.           The domain of this function is the interval  The domain of this function is the interval  The domain of this function is the interval  The domain of this function is       For and find and state its domain.    The new function is a quotient of two functions. For what values of is the denominator zero?    The domain is      Function Composition  When we compose functions, we take a function of a function. For example, suppose the temperature on a given day is described as a function of time (measured in hours after midnight) as in . Suppose the cost to heat or cool a building for 1 hour, can be described as a function of the temperature Combining these two functions, we can describe the cost of heating or cooling a building as a function of time by evaluating We have defined a new function, denoted which is defined such that for all in the domain of This new function is called a composite function. We note that since cost is a function of temperature and temperature is a function of time, it makes sense to define this new function It does not make sense to consider because temperature is not a function of cost.   Consider the function with domain and range and the function with domain and range If is a subset of then the composite function  is the function with domain such that    A composite function can be viewed in two steps. First, the function maps each input in the domain of to its output in the range of Second, since the range of is a subset of the domain of the output is an element in the domain of and therefore it is mapped to an output in the range of In , we see a visual image of a composite function.    \"An image with three items. The first item is a blue bubble that has two labels: “domain of f” and “domain of g of f”. This item contains the numbers 1, 2, and 3. The second item is two bubbles: an orange bubble labeled “domain of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of f”. The blue bubble contains the numbers 0 and 1, which are thus also contained within the larger orange bubble. The orange bubble contains two numbers not contained within the smaller blue bubble, which are 2 and 3. The third item is two bubbles: an orange bubble labeled “range of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of g of f”. The blue bubble contains the numbers 4 and 5, which are thus also contained within the larger orange bubble. The orange bubble contains one number not contained within the smaller blue bubble, which is the number 3. The first item points has a blue arrow with the label “f” that points to the blue bubble in the second item. The orange bubble in the second item has an orange arrow labeled “g” that points the orange bubble in the third item. The first item has a blue arrow labeled “g of f” which points to the blue bubble in the third item. There are three blue arrows pointing from numbers in the first item to the numbers contained in the blue bubble of the second item. The first blue arrow points from the 1 to the 0, the second blue arrow points from the 2 to the 1, and the third blue arrow points from the 3 to the 0. There are 4 orange arrows pointing from the numbers contained in the orange bubble in the second item, including those also contained in the blue bubble of the second item, to the numbers contained in the orange bubble of the third item, including the numbers in the blue bubble of the third item. The first orange arrow points from 2 to 3, the second orange arrow points from 3 to 5, the third orange arrow points from 0 to 4, and the fourth orange arrow points from 1 to 5.\"   For the composite function we have and    Compositions of Functions Defined by Formulas   Consider the functions and   Find and state its domain and range.  Evaluate  Find and state its domain and range.  Evaluate     We can find the formula for in two different ways. We could write Alternatively, we could write Since for all real numbers the domain of is the set of all real numbers. Since the range is, at most, the interval To show that the range is this entire interval, we let and solve this equation for to show that for all in the interval there exists a real number such that Solving this equation for we see that which implies that If is in the interval the expression under the radical is nonnegative, and therefore there exists a real number such that We conclude that the range of is the interval  and  We can find a formula for in two ways. First, we could write Alternatively, we could write The domain of is the set of all real numbers such that To find the range of we need to find all values for which there exists a real number such that Solving this equation for we see that we need to satisfy which simplifies to Finally, we obtain Since is a real number if and only if the range of is the set      In , we can see that This tells us, in general terms, that the order in which we compose functions matters.    Let Let Find        Composition of Functions Defined by Tables   Test  Consider the functions and described by and .                                                 Evaluate  State the domain and range of  Evaluate  State the domain and range of        The domain of is the set Since the range of is the set the range of is the set    The domain of is the set Since the range of is the set the range of is the set      Application Involving a Composite Function   A store is advertising a sale of off all merchandise. Caroline has a coupon that entitles her to an additional off any item, including sale merchandise. If Caroline decides to purchase an item with an original price of dollars, how much will she end up paying if she applies her coupon to the sale price? Solve this problem by using a composite function.    Since the sale price is off the original price, if an item is dollars, its sale price is given by Since the coupon entitles an individual to off the price of any item, if an item is dollars, the price, after applying the coupon, is given by Therefore, if the price is originally dollars, its sale price will be and then its final price after the coupon will be      If items are on sale for off their original price, and a customer has a coupon for an additional off, what will be the final price for an item that is originally dollars, after applying the coupon to the sale price?       The sale price of an item with an original price of dollars is The coupon price for an item that is dollars is       Symmetry of Functions  The graphs of certain functions have symmetry properties that help us understand the function and the shape of its graph. For example, consider the function shown in (a). If we take the part of the curve that lies to the right of the -axis and flip it over the -axis, it lays exactly on top of the curve to the left of the -axis. In this case, we say the function has symmetry about the -axis . On the other hand, consider the function shown in (b). If we take the graph and rotate it about the origin, the new graph will look exactly the same. In this case, we say the function has symmetry about the origin .    \"An image of two graphs. The first graph is labeled “(a), symmetry about the y-axis” and is of the curved function “f(x) = (x to the 4th) - 2(x squared) - 3”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. This function decreases until it hits the point (-1, -4), which is minimum of the function. Then the graph increases to the point (0,3), which is a local maximum. Then the the graph decreases until it hits the point (1, -4), before it increases again. The second graph is labeled “(b), symmetry about the origin” and is of the curved function “f(x) = x cubed - 4x”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. The graph of the function starts at the x intercept at (-2, 0) and increases until the approximate point of (-1.2, 3.1). The function then decreases, passing through the origin, until it hits the approximate point of (1.2, -3.1). The function then begins to increase again and has another x intercept at (2, 0).\"   (a) A graph that is symmetric about the -axis. (b) A graph that is symmetric about the origin.   If we are given the graph of a function, it is easy to see whether the graph has one of these symmetry properties. But without a graph, how can we determine algebraically whether a function has symmetry? Looking at (a) again, we see that since is symmetric about the -axis, if the point is on the graph, the point is on the graph. In other words, If a function has this property, we say is an even function, which has symmetry about the -axis. For example, is even because   In contrast, looking at (b) again, if a function is symmetric about the origin, then whenever the point is on the graph, the point is also on the graph. In other words, If has this property, we say is an odd function, which has symmetry about the origin. For example, is odd because    If for all in the domain of then is an even function . An even function is symmetric about the -axis.  If for all in the domain of then is an odd function . An odd function is symmetric about the origin.    Even and Odd Functions   Determine whether each of the following functions is even, odd, or neither.         To determine whether a function is even or odd, we evaluate and compare it to and   Therefore, is even.  Now, Furthermore, noting that we see that Therefore, is neither even nor odd.  Therefore, is odd.       Determine whether is even, odd, or neither.    is odd.    Compare with and    One symmetric function that arises frequently is the absolute value function , written as The absolute value function is defined as  . Some students describe this function by stating that it “makes everything positive.” By the definition of the absolute value function, we see that if then and if then However, for Therefore, it is more accurate to say that for all nonzero inputs, the output is positive, but if the output We conclude that the range of the absolute value function is In , we see that the absolute value function is symmetric about the -axis and is therefore an even function.    \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -4 to 4. The graph is of the function “f(x) = absolute value of x”. The graph starts at the point (-3, 3) and decreases in a straight line until it hits the origin. Then the graph increases in a straight line until it hits the point (3, 3).\"   The graph of is symmetric about the -axis.    Working with the Absolute Value Function   Find the domain and range of the function    Since the absolute value function is defined for all real numbers, the domain of this function is Since for all the function Therefore, the range is, at most, the set To see that the range is, in fact, this whole set, we need to show that for there exists a real number such that   A real number satisfies this equation as long as   Since we know and thus the right-hand side of the equation is nonnegative, so it is possible that there is a solution. Furthermore,   Therefore, we see there are two solutions:   The range of this function is      For the function find the domain and range.    Domain = range =    for all real numbers      Key Concepts   A function is a mapping from a set of inputs to a set of outputs with exactly one output for each input.  If no domain is stated for a function the domain is considered to be the set of all real numbers for which the function is defined.  When sketching the graph of a function each vertical line may intersect the graph, at most, once.  A function may have any number of zeros, but it has, at most, one -intercept.  To define the composition the range of must be contained in the domain of  Even functions are symmetric about the -axis whereas odd functions are symmetric about the origin.     Key Equations   Composition of two functions   Absolute value function  .    "
},
{
  "id": "subsec_Ch1Sec1Ss1-3",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "A function  consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the domain of the function. The set of outputs is called the range of the function. "
},
{
  "id": "subsec_Ch1Sec1Ss1-4",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent variable dependent variable "
},
{
  "id": "CNX_Calc_Figure_01_01_001",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_001",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " A function can be visualized as an input\/output device.   An image with three items. The first item is text that reads Input. An arrow points from the first item to the second item, which is a box with the label function. An arrow points from the second item to the third item, which is text that reads Output, f(x).   "
},
{
  "id": "CNX_Calc_Figure_01_01_002",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_002",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A function maps every element in the domain to exactly one element in the range. Although each input can be sent to only one output, two different inputs can be sent to the same output.   An image with two items. The first item is a bubble labeled domain. Within the bubble are the numbers 1, 2, 3, and 4. An arrow with the label f; points from the first item to the second item, which is a bubble labeled range. Within this bubble are the numbers 2, 4, and 6. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 2 in the domain bubble to the 4 in the range bubble. An arrow points from the 3 in the domain bubble to the 2 in the range bubble. An arrow points from the 4 in the domain bubble to the 2 in the range bubble.   "
},
{
  "id": "CNX_Calc_Figure_01_01_003",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_003",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " In this case, a graph of a function f has a domain of {1,2,3} and a range of {1,2}. The independent variable is x and the dependent variable is y.   An image of a graph. The y axis runs from 0 to 3 and has the label dependent variable, y = f(x). The x axis runs from 0 to 5 and has the label independent variable, x. There are three points on the graph. The first point is at (1, 2) and has the label (1, f(1)) = (1, 2). The second point is at (2, 1) and has the label (2, f(2))=(2,1). The third point is at (3, 2) and has the label (3, f(3)) = (3,2). There is text along the y axis that reads range = \\{1, 2} and text along the x axis that reads domain = \\{1,2,3}   "
},
{
  "id": "subsec_Ch1Sec1Ss1-9",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-9",
  "type": "Note",
  "number": "1.1.5",
  "title": "",
  "body": " Visit this applet link to see more about graphs of functions.  "
},
{
  "id": "subsec_Ch1Sec1Ss1-10",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph of a function "
},
{
  "id": "CNX_Calc_Figure_01_01_004",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_004",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " Here we see a graph of the function with domain and rule The graph consists of the points for all in the domain.   An image of a graph. The y axis runs from 0 to 5. The x axis runs from 0 to 5. There are three points on the graph at (1, 2), (2, 1), and (3, 0). There is text along the y axis that reads “range = {0,1,2}” and text along the x axis that reads “domain = {1,2,3}”.   "
},
{
  "id": "subsec_Ch1Sec1Ss1-12",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural domain "
},
{
  "id": "subsec_Ch1Sec1Ss1-17",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval notation "
},
{
  "id": "subsec_Ch1Sec1Ss1-19",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "endpoints "
},
{
  "id": "subsec_Ch1Sec1Ss1-30",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "piecewise-defined functions "
},
{
  "id": "subsec_Ch1Sec1Ss1-33",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-33",
  "type": "Example",
  "number": "1.1.7",
  "title": "Evaluating Functions.",
  "body": " Evaluating Functions   For the function evaluate         Substitute the given value for in the formula for      "
},
{
  "id": "subsec_Ch1Sec1Ss1-34",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-34",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "",
  "body": "  For evaluate and    and    Substitute and for in the formula for    "
},
{
  "id": "subsec_Ch1Sec1Ss1-35",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-35",
  "type": "Example",
  "number": "1.1.9",
  "title": "Finding Domain and Range.",
  "body": "  For each of the following functions, determine the a. domain and b. range.        Finding Domain and Range    Consider    Since is a real number for any real number the domain of is the interval  Since we know Therefore, the range must be a subset of To show that every element in this set is in the range, we need to show that for a given in that set, there is a real number such that Solving this equation for we see that we need such that This equation is satisfied as long as there exists a real number such that Since the square root is well-defined. We conclude that for and therefore the range is   Consider    To find the domain of we need the expression Solving this inequality, we conclude that the domain is  To find the range of we note that since Therefore, the range of must be a subset of the set To show that every element in this set is in the range of we need to show that for all in this set, there exists a real number in the domain such that Let Then, if and only if Solving this equation for we see that must solve the equation Since such an could exist. Squaring both sides of this equation, we have Therefore, we need which implies We just need to verify that is in the domain of Since the domain of consists of all real numbers greater than or equal to and there does exist an in the domain of We conclude that the range of is    Consider   Since is defined when the denominator is nonzero, the domain is  To find the range of we need to find the values of such that there exists a real number in the domain with the property that Solving this equation for we find that Therefore, as long as there exists a real number in the domain such that Thus, the range is     "
},
{
  "id": "subsec_Ch1Sec1Ss1-36",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-36",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "",
  "body": "  Find the domain and range for    Domain = range =    Use   "
},
{
  "id": "sec_Ch1Sec1-4-3-2",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "table of values "
},
{
  "id": "fs-id1170572114646",
  "level": "2",
  "url": "sec_Ch1Sec1.html#fs-id1170572114646",
  "type": "Table",
  "number": "1.1.11",
  "title": "Temperature as a Function of Time of Day",
  "body": " Temperature as a Function of Time of Day    Hours after Midnight  Temperature ( F)  Hours after Midnight  Temperature ( F)    0  58  12  84    1  54  13  85    2  53  14  85    3  52  15  83    4  52  16  82    5  55  17  80    6  60  18  77    7  64  19  74    8  72  20  69    9  75  21  65    10  78  22  60    11  80  23  58    "
},
{
  "id": "CNX_Calc_Figure_01_01_005",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_005",
  "type": "Figure",
  "number": "1.1.12",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58).\"   The graph of the data from Table shows temperature as a function of time.  "
},
{
  "id": "CNX_Calc_Figure_01_01_014",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_014",
  "type": "Figure",
  "number": "1.1.13",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58). A line connects all the points on the graph.\"   Connecting the dots in Figure shows the general pattern of the data.  "
},
{
  "id": "sec_Ch1Sec1-4-5-4",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zeros of a function "
},
{
  "id": "sec_Ch1Sec1-4-5-6",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertical line test "
},
{
  "id": "sec_Ch1Sec1-4-5-7",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-7",
  "type": "Note",
  "number": "1.1.14",
  "title": "Rule: Vertical Line Test.",
  "body": " Rule: Vertical Line Test  Given a function every vertical line that may be drawn intersects the graph of no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.  "
},
{
  "id": "CNX_Calc_Figure_01_01_006",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_006",
  "type": "Figure",
  "number": "1.1.15",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and is of the function “y = f(x)”. Three vertical lines run through 3 points on the function, each vertical line only passing through the function once. The second graph is labeled “b” and is of the relation “y not equal to f(x)”. Two vertical lines run through the relation, one line intercepting the relation at 3 points and the other line intercepting the relation at 3 different points.\"   (a) The set of plotted points represents the graph of a function because every vertical line intersects the set of points, at most, once. (b) The set of plotted points does not represent the graph of a function because some vertical lines intersect the set of points more than once.  "
},
{
  "id": "sec_Ch1Sec1-4-5-10",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-10",
  "type": "Example",
  "number": "1.1.16",
  "title": "Finding Zeros and <span class=\"process-math\">\\(y\\)<\/span>-Intercepts of a Function.",
  "body": " Finding Zeros and -Intercepts of a Function   Consider the function   Find all zeros of  Find the -intercept (if any).  Sketch a graph of      To find the zeros, solve We discover that has one zero at  The -intercept is given by  Given that is a linear function of the form that passes through the points and we can sketch the graph of ( Figure ).   \"An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the function “f(x) = -4x + 2”, which is a decreasing straight line. There are two points plotted on the function at (0, 2) and (1\/2, 0).\"   The function is a line with -intercept and -intercept     "
},
{
  "id": "sec_Ch1Sec1-4-5-11",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-11",
  "type": "Example",
  "number": "1.1.18",
  "title": "Using Zeros and <span class=\"process-math\">\\(y\\)<\/span>-Intercepts to Sketch a Graph.",
  "body": " Using Zeros and -Intercepts to Sketch a Graph   Consider the function   Find all zeros of  Find the -intercept (if any).  Sketch a graph of      To find the zeros, solve This equation implies Since for all this equation has no solutions, and therefore has no zeros.  The -intercept is given by  To graph this function, we make a table of values. Since we need we need to choose values of We choose values that make the square-root function easy to evaluate.                  Making use of the table and knowing that, since the function is a square root, the graph of should be similar to the graph of we sketch the graph ( Figure ).    \"An image of a graph. The y axis runs from -2 to 4 and the x axis runs from -3 to 2. The graph is of the function “f(x) = (square root of x + 3) + 1”, which is an increasing curved function that starts at the point (-3, 1). There are 3 points plotted on the function at (-3, 1), (-2, 2), and (1, 3). The function has a y intercept at (0, 1 + square root of 3).\"   The graph of has a -intercept but no -intercepts.    "
},
{
  "id": "sec_Ch1Sec1-4-5-12",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-12",
  "type": "Checkpoint",
  "number": "1.1.21",
  "title": "",
  "body": "  Find the zeros of       Factor the polynomial.   "
},
{
  "id": "sec_Ch1Sec1-4-5-13",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-13",
  "type": "Example",
  "number": "1.1.22",
  "title": "Finding the Height of a Free-Falling Object.",
  "body": " Finding the Height of a Free-Falling Object   If a ball is dropped from a height of ft, its height at time is given by the function where is measured in feet and is measured in seconds. The domain is restricted to the interval where is the time when the ball is dropped and is the time when the ball hits the ground.   Create a table showing the height when and Using the data from the table, determine the domain for this function. That is, find the time when the ball hits the ground.  Sketch a graph of         Height as a Function of Time                       Since the ball hits the ground when the domain of this function is the interval     \"An image of a graph. The y axis runs from 0 to 100 and is labeled “s(t), height in feet”. The x axis runs from 0 to 3 and is labeled “t, time in seconds”. The graph is of the function “s(t) = -16 t squared + 100”, which is a decreasing curved function that starts at the y intercept point (0, 100). There are 6 points plotted on the function at (0, 100), (0.5, 96), (1, 84), (1.5, 64), (2, 36), and (2.5, 0). The function has a x intercept at the last point (2.5, 0).\">       "
},
{
  "id": "sec_Ch1Sec1-4-5-15",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-4-5-15",
  "type": "Definition",
  "number": "1.1.25",
  "title": "",
  "body": " We say that a function is increasing on the interval if for all   We say is strictly increasing on the interval  if for all   We say that a function is decreasing on the interval if for all   We say that a function is strictly decreasing on the interval  if for all   "
},
{
  "id": "CNX_Calc_Figure_01_01_010",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_010",
  "type": "Figure",
  "number": "1.1.26",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and is of the function “f(x) = 3x”, which is an increasing straight line that passes through the origin. The second graph is labeled “b” and is of the function “f(x) = -x cubed”, which is curved function that decreases until the function hits the origin where it becomes level, then decreases again after the origin.\"   (a) The function is increasing on the interval (b) The function is decreasing on the interval  "
},
{
  "id": "sec_Ch1Sec1-5-3-4",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-3-4",
  "type": "Example",
  "number": "1.1.27",
  "title": "Combining Functions Using Mathematical Operations.",
  "body": " Combining Functions Using Mathematical Operations   Given the functions and find each of the following functions and state its domain.           The domain of this function is the interval  The domain of this function is the interval  The domain of this function is the interval  The domain of this function is    "
},
{
  "id": "sec_Ch1Sec1-5-3-5",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-3-5",
  "type": "Checkpoint",
  "number": "1.1.28",
  "title": "",
  "body": "  For and find and state its domain.    The new function is a quotient of two functions. For what values of is the denominator zero?    The domain is   "
},
{
  "id": "sec_Ch1Sec1-5-4-3",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-4-3",
  "type": "Definition",
  "number": "1.1.29",
  "title": "",
  "body": " Consider the function with domain and range and the function with domain and range If is a subset of then the composite function  is the function with domain such that   "
},
{
  "id": "CNX_Calc_Figure_01_01_011",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_011",
  "type": "Figure",
  "number": "1.1.30",
  "title": "",
  "body": "  \"An image with three items. The first item is a blue bubble that has two labels: “domain of f” and “domain of g of f”. This item contains the numbers 1, 2, and 3. The second item is two bubbles: an orange bubble labeled “domain of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of f”. The blue bubble contains the numbers 0 and 1, which are thus also contained within the larger orange bubble. The orange bubble contains two numbers not contained within the smaller blue bubble, which are 2 and 3. The third item is two bubbles: an orange bubble labeled “range of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of g of f”. The blue bubble contains the numbers 4 and 5, which are thus also contained within the larger orange bubble. The orange bubble contains one number not contained within the smaller blue bubble, which is the number 3. The first item points has a blue arrow with the label “f” that points to the blue bubble in the second item. The orange bubble in the second item has an orange arrow labeled “g” that points the orange bubble in the third item. The first item has a blue arrow labeled “g of f” which points to the blue bubble in the third item. There are three blue arrows pointing from numbers in the first item to the numbers contained in the blue bubble of the second item. The first blue arrow points from the 1 to the 0, the second blue arrow points from the 2 to the 1, and the third blue arrow points from the 3 to the 0. There are 4 orange arrows pointing from the numbers contained in the orange bubble in the second item, including those also contained in the blue bubble of the second item, to the numbers contained in the orange bubble of the third item, including the numbers in the blue bubble of the third item. The first orange arrow points from 2 to 3, the second orange arrow points from 3 to 5, the third orange arrow points from 0 to 4, and the fourth orange arrow points from 1 to 5.\"   For the composite function we have and  "
},
{
  "id": "fs-id1170572481349",
  "level": "2",
  "url": "sec_Ch1Sec1.html#fs-id1170572481349",
  "type": "Example",
  "number": "1.1.31",
  "title": "Compositions of Functions Defined by Formulas.",
  "body": " Compositions of Functions Defined by Formulas   Consider the functions and   Find and state its domain and range.  Evaluate  Find and state its domain and range.  Evaluate     We can find the formula for in two different ways. We could write Alternatively, we could write Since for all real numbers the domain of is the set of all real numbers. Since the range is, at most, the interval To show that the range is this entire interval, we let and solve this equation for to show that for all in the interval there exists a real number such that Solving this equation for we see that which implies that If is in the interval the expression under the radical is nonnegative, and therefore there exists a real number such that We conclude that the range of is the interval  and  We can find a formula for in two ways. First, we could write Alternatively, we could write The domain of is the set of all real numbers such that To find the range of we need to find all values for which there exists a real number such that Solving this equation for we see that we need to satisfy which simplifies to Finally, we obtain Since is a real number if and only if the range of is the set     "
},
{
  "id": "sec_Ch1Sec1-5-4-8",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-4-8",
  "type": "Checkpoint",
  "number": "1.1.32",
  "title": "",
  "body": "  Let Let Find      "
},
{
  "id": "sec_Ch1Sec1-5-4-9",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-4-9",
  "type": "Example",
  "number": "1.1.33",
  "title": "Composition of Functions Defined by Tables.",
  "body": " Composition of Functions Defined by Tables   Test  Consider the functions and described by and .                                                 Evaluate  State the domain and range of  Evaluate  State the domain and range of        The domain of is the set Since the range of is the set the range of is the set    The domain of is the set Since the range of is the set the range of is the set    "
},
{
  "id": "sec_Ch1Sec1-5-4-10",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-4-10",
  "type": "Example",
  "number": "1.1.36",
  "title": "Application Involving a Composite Function.",
  "body": " Application Involving a Composite Function   A store is advertising a sale of off all merchandise. Caroline has a coupon that entitles her to an additional off any item, including sale merchandise. If Caroline decides to purchase an item with an original price of dollars, how much will she end up paying if she applies her coupon to the sale price? Solve this problem by using a composite function.    Since the sale price is off the original price, if an item is dollars, its sale price is given by Since the coupon entitles an individual to off the price of any item, if an item is dollars, the price, after applying the coupon, is given by Therefore, if the price is originally dollars, its sale price will be and then its final price after the coupon will be   "
},
{
  "id": "sec_Ch1Sec1-5-4-11",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-5-4-11",
  "type": "Checkpoint",
  "number": "1.1.37",
  "title": "",
  "body": "  If items are on sale for off their original price, and a customer has a coupon for an additional off, what will be the final price for an item that is originally dollars, after applying the coupon to the sale price?       The sale price of an item with an original price of dollars is The coupon price for an item that is dollars is   "
},
{
  "id": "sec_Ch1Sec1-6-2",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetry about the -axis symmetry about the origin "
},
{
  "id": "CNX_Calc_Figure_01_01_012",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_012",
  "type": "Figure",
  "number": "1.1.38",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “(a), symmetry about the y-axis” and is of the curved function “f(x) = (x to the 4th) - 2(x squared) - 3”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. This function decreases until it hits the point (-1, -4), which is minimum of the function. Then the graph increases to the point (0,3), which is a local maximum. Then the the graph decreases until it hits the point (1, -4), before it increases again. The second graph is labeled “(b), symmetry about the origin” and is of the curved function “f(x) = x cubed - 4x”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. The graph of the function starts at the x intercept at (-2, 0) and increases until the approximate point of (-1.2, 3.1). The function then decreases, passing through the origin, until it hits the approximate point of (1.2, -3.1). The function then begins to increase again and has another x intercept at (2, 0).\"   (a) A graph that is symmetric about the -axis. (b) A graph that is symmetric about the origin.  "
},
{
  "id": "sec_Ch1Sec1-6-8",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-8",
  "type": "Definition",
  "number": "1.1.39",
  "title": "",
  "body": " If for all in the domain of then is an even function . An even function is symmetric about the -axis.  If for all in the domain of then is an odd function . An odd function is symmetric about the origin.  "
},
{
  "id": "sec_Ch1Sec1-6-9",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-9",
  "type": "Example",
  "number": "1.1.40",
  "title": "Even and Odd Functions.",
  "body": " Even and Odd Functions   Determine whether each of the following functions is even, odd, or neither.         To determine whether a function is even or odd, we evaluate and compare it to and   Therefore, is even.  Now, Furthermore, noting that we see that Therefore, is neither even nor odd.  Therefore, is odd.    "
},
{
  "id": "sec_Ch1Sec1-6-10",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-10",
  "type": "Checkpoint",
  "number": "1.1.41",
  "title": "",
  "body": "  Determine whether is even, odd, or neither.    is odd.    Compare with and   "
},
{
  "id": "sec_Ch1Sec1-6-11",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "absolute value function "
},
{
  "id": "CNX_Calc_Figure_01_01_013",
  "level": "2",
  "url": "sec_Ch1Sec1.html#CNX_Calc_Figure_01_01_013",
  "type": "Figure",
  "number": "1.1.42",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -4 to 4. The graph is of the function “f(x) = absolute value of x”. The graph starts at the point (-3, 3) and decreases in a straight line until it hits the origin. Then the graph increases in a straight line until it hits the point (3, 3).\"   The graph of is symmetric about the -axis.  "
},
{
  "id": "sec_Ch1Sec1-6-15",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-15",
  "type": "Example",
  "number": "1.1.43",
  "title": "Working with the Absolute Value Function.",
  "body": " Working with the Absolute Value Function   Find the domain and range of the function    Since the absolute value function is defined for all real numbers, the domain of this function is Since for all the function Therefore, the range is, at most, the set To see that the range is, in fact, this whole set, we need to show that for there exists a real number such that   A real number satisfies this equation as long as   Since we know and thus the right-hand side of the equation is nonnegative, so it is possible that there is a solution. Furthermore,   Therefore, we see there are two solutions:   The range of this function is   "
},
{
  "id": "sec_Ch1Sec1-6-16",
  "level": "2",
  "url": "sec_Ch1Sec1.html#sec_Ch1Sec1-6-16",
  "type": "Checkpoint",
  "number": "1.1.44",
  "title": "",
  "body": "  For the function find the domain and range.    Domain = range =    for all real numbers   "
},
{
  "id": "sec_Ch1Sec2",
  "level": "1",
  "url": "sec_Ch1Sec2.html",
  "type": "Section",
  "number": "1.2",
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
  "number": "1.2.1",
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
  "number": "1.2.2",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from -1 to 10 and the x axis runs from -1 to 6. The graph is of a function that is an increasing straight line. There are four points labeled on the function at (1, 1), (2, 3), (3, 5), and (5, 9). There is a dotted horizontal line from the labeled function point (1, 1) to the unlabeled point (3, 1) which is not on the function, and then dotted vertical line from the unlabeled point (3, 1), which is not on the function, to the labeled function point (3, 5). These two dotted have the label “(y2 - y1)\/(x2 - x1) = (5 -1)\/(3 - 1) = 2”. There is a dotted horizontal line from the labeled function point (2, 3) to the unlabeled point (5, 3) which is not on the function, and then dotted vertical line from the unlabeled point (5, 3), which is not on the function, to the labeled function point (5, 9). These two dotted have the label “(y2 - y1)\/(x2 - x1) = (9 -3)\/(5 - 2) = 2”.\">    For any linear function, the slope is independent of the choice of points and on the line.  "
},
{
  "id": "sec_Ch1Sec2-3-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-6",
  "type": "Definition",
  "number": "1.2.3",
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
  "number": "1.2.4",
  "title": "",
  "body": "  Consider a line passing through the point with slope The equation   is the point-slope equation for that line.  Consider a line with slope and -intercept The equation   is an equation for that line in slope-intercept form .  The standard form of a line is given by the equation   where and are both not zero. This form is more general because it allows for a vertical line,  "
},
{
  "id": "sec_Ch1Sec2-3-21",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-21",
  "type": "Example",
  "number": "1.2.5",
  "title": "Finding the Slope and Equations of Lines.",
  "body": " Finding the Slope and Equations of Lines   Consider the line passing through the points and as shown in .    \"An image of a graph. The x axis runs from -5 to 12 and the y axis runs from -5 to 6. The graph is of the function that is a decreasing straight line. The function has two points plotted, at (-4, 5) and (11, 4).\"   Finding the equation of a linear function with a graph that is a line between two given points.    Find the slope of the line.  Find an equation for this linear function in point-slope form.  Find an equation for this linear function in slope-intercept form.      The slope of the line is  To find an equation for the linear function in point-slope form, use the slope and choose any point on the line. If we choose the point we get the equation  To find an equation for the linear function in slope-intercept form, solve the equation in part b. for When we do this, we get the equation    "
},
{
  "id": "sec_Ch1Sec2-3-22",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-22",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": "  Consider the line passing through points and Find the slope of the line.  Find an equation of that line in point-slope form. Find an equation of that line in slope-intercept form.    The point-slope form is   The slope-intercept form is     The slope   "
},
{
  "id": "sec_Ch1Sec2-3-23",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-3-23",
  "type": "Example",
  "number": "1.2.8",
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
  "number": "1.2.9",
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
  "number": "1.2.10",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 5 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x squared) - 4x -4”, which is a parabola. The function increasing until it hits the maximum at the point (-2, 0) and then begins decreasing. The x intercept is at (-2, 0) and the y intercept is at (0, -4). The second function is “f(x) = 2(x squared) -12x + 16”, which is a parabola. The function decreases until it hits the minimum point at (3, -2) and then begins increasing. The x intercepts are at (2, 0) and (4, 0) and the y intercept is not shown. The second graph is labeled “b” and has an x axis that runs from -4 to 3 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x cubed) - 3(x squared) + x + 3”. The graph decreases until the approximate point at (-2.2, -3.1), then increases until the approximate point at (0.2, 3.1), then begins decreasing again. The x intercepts are at (-3, 0), (-1, 0), and (1, 0). The y intercept is at (0, 3). The second function is “f(x) = (x cubed) -3(x squared) + 3x - 1”. It is a curved function that increases until the point (1, 0), where it levels out. After this point, the function begins increasing again. It has an x intercept at (1, 0) and a y intercept at (0, -1).\"   (a) For a quadratic function, if the leading coefficient the parabola opens upward. If the parabola opens downward. (b) For a cubic function if the leading coefficient the values as and the values as If the leading coefficient the opposite is true.  "
},
{
  "id": "sec_Ch1Sec2-4-5-3",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-5-3",
  "type": "Note",
  "number": "1.2.11",
  "title": "Rule: The Quadratic Formula.",
  "body": " Rule: The Quadratic Formula  Consider the quadratic equation   where The solutions of this equation are given by the quadratic formula   If the discriminant this formula tells us there are two real numbers that satisfy the quadratic equation. If this formula tells us there is only one solution, and it is a real number. If no real numbers satisfy the quadratic equation.  "
},
{
  "id": "sec_Ch1Sec2-4-5-5",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-5-5",
  "type": "Example",
  "number": "1.2.12",
  "title": "Graphing Polynomial Functions.",
  "body": " Graphing Polynomial Functions   For the following functions a. and b., i. describe the behavior of as ii. find all zeros of and iii. sketch a graph of         The function is a quadratic function.   Because  To find the zeros of use the quadratic formula. The zeros are  To sketch the graph of use the information from your previous answers and combine it with the fact that the graph is a parabola opening downward.   \"An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -8 to 2. The graph is of the function “f(x) = -2(x squared) + 4x - 1”, which is a parabola. The function increases until the maximum point at (1, 1) and then decreases. Both x intercept points are plotted on the function, at approximately (0.2929, 0) and (1.7071, 0). The y intercept is at the point (0, -1).\"    The function is a cubic function.   Because As  To find the zeros of we need to factor the polynomial. First, when we factor out of all the terms, we find Then, when we factor the quadratic function we find Therefore, the zeros of are  Combining the results from parts i. and ii., draw a rough sketch of   \"An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -14 to 7. The graph is of the curved function “f(x) = (x cubed) - 3(x squared) - 4x”. The function increases until the approximate point at (-0.5, 1.1), then decreases until the approximate point (2.5, -13.1), then begins increasing again. The x intercept points are plotted on the function, at (-1, 0), (0, 0), and (4, 0). The y intercept is at the origin.\"      "
},
{
  "id": "sec_Ch1Sec2-4-5-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-5-6",
  "type": "Checkpoint",
  "number": "1.2.13",
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
  "number": "1.2.14",
  "title": "Number of Units Sold <span class=\"process-math\">\\(n\\)<\/span> (in Thousands) as a Function of Price per Unit <span class=\"process-math\">\\(p\\)<\/span> (in Dollars)",
  "body": " Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                    "
},
{
  "id": "sec_Ch1Sec2-4-6-8",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-6-8",
  "type": "Figure",
  "number": "1.2.15",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.  "
},
{
  "id": "sec_Ch1Sec2-4-6-9",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-4-6-9",
  "type": "Example",
  "number": "1.2.16",
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
  "number": "1.2.17",
  "title": "Finding Domain and Range for Algebraic Functions.",
  "body": " Finding Domain and Range for Algebraic Functions   For each of the following functions, find the domain and range.    To find the domain of , we need . Or, Or , the solution to which is . Therefore, the domain is . If , then . Therefore, and the range of is .       It is not possible to divide by zero, so the domain is the set of real numbers such that To find the range, we need to find the values for which there exists a real number such that When we multiply both sides of this equation by we see that must satisfy the equation  From this equation, we can see that must satisfy  If this equation has no solution. On the other hand, as long as satisfies this equation. We can conclude that the range of is  To find the domain of we need When we factor, we write This inequality holds if and only if both terms are positive or both terms are negative. For both terms to be positive, we need to find such that These two inequalities reduce to and Therefore, the set must be part of the domain. For both terms to be negative, we need These two inequalities also reduce to and There are no values of that satisfy both of these inequalities. Thus, we can conclude the domain of this function is If then Therefore, and the range of is    "
},
{
  "id": "sec_Ch1Sec2-5-7",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-7",
  "type": "Checkpoint",
  "number": "1.2.18",
  "title": "",
  "body": "  Find the domain and range for the function    The domain is the set of real numbers such that The range is the set    The denominator cannot be zero. Solve the equation for to find the range.   "
},
{
  "id": "CNX_Calc_Figure_01_02_022",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_022",
  "type": "Figure",
  "number": "1.2.19",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -2 to 9 and a y axis that runs from -4 to 4. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = x to the 4th root”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function. The second graph is labeled “b” and has an x axis that runs from -8 to 8 and a y axis that runs from -4 to 4. The second graph is of two functions. The first function is “f(x) = cube root of x”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin. The second function is “f(x) = x to the 5th root”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin, but increases at a slower rate than the first function.\"   (a) If is even, the domain of is (b) If is odd, the domain of is and the function is an odd function.  "
},
{
  "id": "sec_Ch1Sec2-5-10",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-10",
  "type": "Example",
  "number": "1.2.20",
  "title": "Finding Domains for Algebraic Functions.",
  "body": " Finding Domains for Algebraic Functions   For each of the following functions, determine the domain of the function.           You cannot divide by zero, so the domain is the set of values such that Therefore, the domain is  You need to determine the values of for which the denominator is zero. Since for all real numbers the denominator is never zero. Therefore, the domain is  Since the square root of a negative number is not a real number, the domain is the set of values for which Therefore, the domain is  The cube root is defined for all real numbers, so the domain is the interval    "
},
{
  "id": "sec_Ch1Sec2-5-11",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-5-11",
  "type": "Checkpoint",
  "number": "1.2.21",
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
  "number": "1.2.22",
  "title": "Classifying Algebraic and Transcendental Functions.",
  "body": " Classifying Algebraic and Transcendental Functions   Classify each of the following functions, a. through c., as algebraic or transcendental.          Since this function involves basic algebraic operations only, it is an algebraic function.  This function cannot be written as a formula that involves only basic algebraic operations, so it is transcendental. (Note that algebraic functions can only have powers that are rational numbers.)  As in part b., this function cannot be written using a formula involving basic algebraic operations only; therefore, this function is transcendental.    "
},
{
  "id": "sec_Ch1Sec2-6-4",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-6-4",
  "type": "Checkpoint",
  "number": "1.2.23",
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
  "number": "1.2.24",
  "title": "Graphing a Piecewise-Defined Function.",
  "body": " Graphing a Piecewise-Defined Function   Sketch a graph of the following piecewise-defined function:     Graph the linear function on the interval and graph the quadratic function on the interval Since the value of the function at is given by the formula we see that To indicate this on the graph, we draw a closed circle at the point The value of the function is given by for all but not at To indicate this on the graph, we draw an open circle at    \"An image of a graph. The x axis runs from -7 to 5 and the y axis runs from -4 to 6. The graph is of a function that has two pieces. The first piece is an increasing line that ends at the open circle point (1, 4) and has the label “f(x) = x + 3, for x \\lt 1”. The second piece is parabolic and begins at the closed circle point (1, 1). After the point (1, 1), the piece begins to decrease until the point (2, 0) then begins to increase. This piece has the label “f(x) = (x - 2) squared, for x \\gt = 1”.The function has x intercepts at (-3, 0) and (2, 0) and a y intercept at (0, 3).\"   This piecewise-defined function is linear for and quadratic for    "
},
{
  "id": "sec_Ch1Sec2-7-6",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-6",
  "type": "Checkpoint",
  "number": "1.2.26",
  "title": "",
  "body": "  Sketch a graph of the function       \"An image of a graph. The x axis runs from -6 to 5 and the y axis runs from -2 to 7. The graph is of a function that has two pieces. The first piece is a decreasing line that ends at the closed circle point (2, 0) and has the label “f(x) = 2 - x, for x \\lt = 2. The second piece is an increasing line and begins at the open circle point (2, 4) and has the label “f(x) = x + 2, for x \\gt 2.The function has an x intercept at (2, 0) and a y intercept at (0, 2)\"      Graph one linear function for and then graph a different linear function for   "
},
{
  "id": "sec_Ch1Sec2-7-7",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-7",
  "type": "Example",
  "number": "1.2.27",
  "title": "Parking Fees Described by a Piecewise-Defined Function.",
  "body": " Parking Fees Described by a Piecewise-Defined Function   In a big city, drivers are charged variable rates for parking in a parking garage. They are charged $10 for the first hour or any part of the first hour and an additional $2 for each hour or part thereof up to a maximum of $30 for the day. The parking garage is open from 6 a.m. to 12 midnight.   Write a piecewise-defined function that describes the cost to park in the parking garage as a function of hours parked  Sketch a graph of this function      Since the parking garage is open 18 hours each day, the domain for this function is The cost to park a car at this parking garage can be described piecewise by the function  The graph of the function consists of several horizontal line segments.  \"An image of a graph. The x axis runs from 0 to 18 and is labeled “x, hours”. The y axis runs from 0 to 32 and is labeled “y, cost in dollars”. The function consists 11 pieces, all horizontal line segments that begin with an open circle and end with a closed circle. The first piece starts at x = 0 and ends at x = 1 and is at y = 10. The second piece starts at x = 1 and ends at x = 2 and is at y = 12. The third piece starts at x = 2 and ends at x = 3 and is at y = 14. The fourth piece starts at x = 3 and ends at x = 4 and is at y = 16. The fifth piece starts at x = 4 and ends at x = 5 and is at y = 18. The sixth piece starts at x = 5 and ends at x = 6 and is at y = 20. The seventh piece starts at x = 6 and ends at x = 7 and is at y = 22. The eighth piece starts at x = 7 and ends at x = 8 and is at y = 24. The ninth piece starts at x = 8 and ends at x = 9 and is at y = 26. The tenth piece starts at x = 9 and ends at x = 10 and is at y = 28. The eleventh piece starts at x = 10 and ends at x = 18 and is at y = 30.\"      "
},
{
  "id": "sec_Ch1Sec2-7-8",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-7-8",
  "type": "Checkpoint",
  "number": "1.2.28",
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
  "number": "1.2.29",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 4 and a y axis that runs from -1 to 10. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) + 4”, which is a parabola that decreases until the point (0, 4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted up 4 units. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -5 to 6. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) - 4”, which is a parabola that decreases until the point (0, -4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted down 4 units.\"   (a) For the graph of is a vertical shift up units of the graph of (b) For the graph of is a vertical shift down units of the graph of  "
},
{
  "id": "CNX_Calc_Figure_01_02_015",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_015",
  "type": "Figure",
  "number": "1.2.30",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -8 to 5 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 3)”, which decreases in a straight line until the point (-3, 0) and then increases in a straight line again after the point (-3, 0). The two functions are the same in shape, but the second function is shifted left 3 units. The second graph is labeled “b” and has an x axis that runs from -5 to 8 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x - 3)”, which decreases in a straight line until the point (3, 0) and then increases in a straight line again after the point (3, 0). The two functions are the same in shape, but the second function is shifted right 3 units.\"   (a) For the graph of is a horizontal shift left units of the graph of (b) For the graph of is a horizontal shift right units of the graph of  "
},
{
  "id": "CNX_Calc_Figure_01_02_024",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_024",
  "type": "Figure",
  "number": "1.2.31",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -3 to 3 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = 3(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically stretched and thus increases at a quicker rate than the first function. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (1\/3)(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically compressed and thus increases at a slower rate than the first function.\"   (a) If the graph of is a vertical stretch of the graph of (b) If the graph of is a vertical compression of the graph of  "
},
{
  "id": "CNX_Calc_Figure_01_02_017",
  "level": "2",
  "url": "sec_Ch1Sec2.html#CNX_Calc_Figure_01_02_017",
  "type": "Figure",
  "number": "1.2.32",
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
  "number": "1.2.33",
  "title": "",
  "body": "  \"An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -5 to 6. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = -(x cubed + 1)”, which is a curved decreasing function that has an x intercept at (-1, 0) and a y intercept at (0, -1). The second graph is labeled “b” and is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = (-x) cubed + 1”, which is a curved decreasing function that has an x intercept at (1, 0) and a y intercept at (0, 1). The first function increases at the same rate the second function decreases for the same values of x.\"   (a) The graph of is the graph of reflected about the -axis. (b) The graph of is the graph of reflected about the -axis.  "
},
{
  "id": "fs-id1170573580486",
  "level": "2",
  "url": "sec_Ch1Sec2.html#fs-id1170573580486",
  "type": "Table",
  "number": "1.2.34",
  "title": "Transformations of Functions",
  "body": " Transformations of Functions    Transformation of  Effect on the graph of      Vertical shift up units     Vertical shift down units     Shift left by units     Shift right by units     Vertical stretch if vertical compression if     Horizontal stretch if horizontal compression if     Reflection about the -axis     Reflection about the -axis    "
},
{
  "id": "sec_Ch1Sec2-8-18",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-8-18",
  "type": "Example",
  "number": "1.2.35",
  "title": "Transforming a Function.",
  "body": " Transforming a Function   For each of the following functions, a. and b., sketch a graph by using a sequence of transformations of a well-known function.         Starting with the graph of shift units to the left, reflect about the -axis, and then shift down 3 units.    \"An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -7 to 7. The graph contains four functions. The first function is “f(x) = absolute value of x” and is labeled starting function. It decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 2)”, which decreases in a straight line until the point (-2, 0) and then increases in a straight line again after the point (-2, 0). The second function is the same shape as the first function, but is shifted left 2 units. The third function is “f(x) = -(absolute value of (x + 2))”, which increases in a straight line until the point (-2, 0) and then decreases in a straight line again after the point (-2, 0). The third function is the second function reflected about the x axis. The fourth function is “f(x) = -(absolute value of (x + 2)) - 3” and is labeled “transformed function”. It increases in a straight line until the point (-2, -3) and then decreases in a straight line again after the point (-2, -3). The fourth function is the third function shifted down 3 units.\"   The function can be viewed as a sequence of three transformations of the function   Starting with the graph of reflect about the -axis, stretch the graph vertically by a factor of 3, and move up 1 unit.   \"An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -2 to 10. The graph contains four functions. The first function is “f(x) = square root of x” and is labeled starting function. It is a curved function that begins at the origin and increases. The second function is “f(x) = square root of -x”, which is a curved function that decreases until it reaches the origin, where it stops. The second function is the first function reflected about the y axis. The third function is “f(x) = 3(square root of -x)”, which is a curved function that decreases until it reaches the origin, where it stops. The third function decreases at a quicker rate than the second function. The fourth function is “f(x) = 3(square root of -x) + 1” and is labeled “transformed function”. Itis a curved function that decreases until it reaches the point (0, 1), where it stops. The fourth function is the third function shifted up 1 unit.\"   The function can be viewed as a sequence of three transformations of the function     "
},
{
  "id": "sec_Ch1Sec2-8-19",
  "level": "2",
  "url": "sec_Ch1Sec2.html#sec_Ch1Sec2-8-19",
  "type": "Checkpoint",
  "number": "1.2.38",
  "title": "",
  "body": "  Describe how the function can be graphed using the graph of and a sequence of transformations.    Shift the graph to the left 1 unit, reflect about the -axis, then shift down 4 units.    Use .   "
},
{
  "id": "sec_Ch1Sec3",
  "level": "1",
  "url": "sec_Ch1Sec3.html",
  "type": "Section",
  "number": "1.3",
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
  "number": "1.3.1",
  "title": "",
  "body": "The break-even quantity is the number of units needed so that cost and revenue are equal, meaning the total profit is zero. That is, or . "
},
{
  "id": "sec_Ch1Sec3-3-12-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-12-5",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Peter's ice cream stand has an operating cost of $200 per week. The cost to make an ice cream sundae is $2 and they sell for $6. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of ice cream sundaes sold.   Since our operating costs (fixed costs) are $200 per week and the marginal cost is $2 per ice cream sundae, then . Since the selling price is $6 per ice cream sundae, then . Using and , we can obtain the profit function.     To find the break-even quantity, we may proceed by using two different methods. Both yield the same solution.  Method 1:      Method 2:     Peter must sell at least 50 ice cream sundaes in one week in order to make a profit.  "
},
{
  "id": "sec_Ch1Sec3-3-12-6",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-12-6",
  "type": "Checkpoint",
  "number": "1.3.3",
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
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose that 500 units of a certain item are sold per day by the entire industry at a price of $20 per item and that 1500 units can be sold per day by the same industry at a price of $15 per unit. Assuming a linear model, find the demand equation where is the number of units sold per day.    Observe that 500 units are sold at a price of $20 per unit gives us the ordered pair . Moreover, we also have that 1500 units are sold at a price of $15 per unit. That is, .  Since the demand equation is linear, we can compute the slope of the line by using the above ordered pairs.  Using point-slope form,  Hence, our demand equation is .  "
},
{
  "id": "sec_Ch1Sec3-4-4",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-4",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": " Suppose that when 100 units of a certain item are supplied, they are sold at a price of $1.25 per unit. When 80 more units of a certain item are supplied, the price per unit increased by $1. Assuming a linear model, find the supply equation where is the number of units sold.   Using the ordered pairs and ,  Supply equation:  .  Use point-slope form to construct the linear supply equation.  "
},
{
  "id": "sec_Ch1Sec3-4-5-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5-3",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "The equilibrium point  is the number of units needed at a selling price where supply and demand are equal. The -coordinate is the equilibrium quantity and the -coordinate is the equilibrium price . "
},
{
  "id": "sec_Ch1Sec3-4-5-4",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5-4",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": " Suppose the supply and demand equations for Peter's ice cream stand are and respectively. Find the equilibrium price and quantity. Suppose is the number of ice cream sundaes sold and the price per sundae is in dollars.  In order to find the equilibrium point we must set Peter's supply and demand equations equal to one another.    The equilibrium quantity is 20 ice cream sundaes.  Next, we can use either the supply or demand equation to solve for the equilibrium price. Notice that both equations will yield the same result.  Method 1: Using the supply equation.  Method 2: Using the demand equation. The equilibrium price is $7.  "
},
{
  "id": "sec_Ch1Sec3-4-5-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5-5",
  "type": "Checkpoint",
  "number": "1.3.8",
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
  "number": "1.3.9",
  "title": "Number of Units Sold <span class=\"process-math\">\\(x\\)<\/span> (in Thousands) as a Function of Price per Unit <span class=\"process-math\">\\(p\\)<\/span> (in Dollars)",
  "body": " Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                    "
},
{
  "id": "CNX_Calc_Figure_01_02_008",
  "level": "2",
  "url": "sec_Ch1Sec3.html#CNX_Calc_Figure_01_02_008",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": "  \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “x = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.  "
},
{
  "id": "fs-id1170573569241",
  "level": "2",
  "url": "sec_Ch1Sec3.html#fs-id1170573569241",
  "type": "Example",
  "number": "1.3.11",
  "title": "Maximizing Revenue.",
  "body": " Maximizing Revenue   A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from , the company arrives at the following quadratic function to model revenue (in thousands of dollars) as a function of price per item   for   Predict the revenue if the company sells the item at a price of and  Find the zeros of this function and interpret the meaning of the zeros.  Sketch a graph of  Use the graph to determine the value of that maximizes revenue. Find the maximum revenue.      Evaluating the revenue function at and we can conclude that  The zeros of this function can be found by solving the equation When we factor the quadratic expression, we get The solutions to this equation are given by For these values of the revenue is zero. When the revenue is zero because the company is giving away its merchandise for free. When the revenue is zero because the price is too high, and no one will buy any items.  Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at and the parabola must be symmetric about the line halfway between them, or   \"An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.\">    The function is a parabola with zeros at and and it is symmetric about the line so the maximum revenue occurs at a price of per item. At that price, the revenue is    "
},
{
  "id": "sec_Ch1Sec3-5-11",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-5-11",
  "type": "Example",
  "number": "1.3.12",
  "title": "Maximizing Profit and Minimizing Cost.",
  "body": " Maximizing Profit and Minimizing Cost   A clothing store determines that its supply equation for dresses sold is and the cost for producing dresses is .   Find the revenue function .  Find the profit function .  How many dresses must be sold in order to maximize profits?  What is the maximum profit?  How many dresses must be sold in order to minimize costs?      We can find the revenue equation using the supply equation. Recall that, . . .        "
},
{
  "id": "sec_Ch1Sec3-5-12",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-5-12",
  "type": "Checkpoint",
  "number": "1.3.13",
  "title": "",
  "body": "  The demand equation for diamond rings sold at a jewelry store in one month is where is the number of diamond rings sold in one month and the price of each diamond ring is in hundreds of dollars.   Find the revenue function .  How many diamond rings must be sold in order to maximize revenue?  What is the maximum revenue?  What is the price per diamond ring that will maximize revenue?       Using we obtain    Since the graph of our revenue function opens downward, the vertex point will give us maximum revenue. Using the vertex formula, Furthermore, selling 32 diamond rings in one month will maximize revenue.    Since revenue is maximized when 32 diamond rings are sold, evaluating will give us the maximum revenue. Recalling that the price is in hundreds of dollars, revenue will also be in hundreds of dollars. As a result, the maximum revenue is .    In order to find the price per diamond ring that will maximize revenue we must evaluate the demand equation at . Again, since the price is in hundreds of dollars, the price per diamond ring that will maximize revenue is .        "
},
{
  "id": "sec_Ch1Sec4",
  "level": "1",
  "url": "sec_Ch1Sec4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Inverse Functions",
  "body": " Inverse Functions   Learning Objectives   Determine the conditions for when a function has an inverse.  Use the horizontal line test to recognize when a function is one-to-one.  Find the inverse of a given function.  Draw the graph of an inverse function.  Evaluate inverse trigonometric functions.   An inverse function reverses the operation done by a particular function. In other words, whatever a function does, the inverse function undoes it. In this section, we define an inverse function formally and state the necessary conditions for an inverse function to exist. We examine how to find an inverse function and study the relationship between the graph of a function and the graph of its inverse. Then we apply these ideas to define and discuss properties of the inverse trigonometric functions.    Existence of an Inverse Function  We begin with an example. Given a function and an output we are often interested in finding what value or values were mapped to by For example, consider the function Since any output we can solve this equation for to find that the input is This equation defines as a function of Denoting this function as , and writing we see that for any in the domain of Thus, this new function, “undid” what the original function did. A function with this property is called the inverse function of the original function.    Given a function with domain and range its inverse function (if it exists) is the function with domain and range such that if In other words, for a function and its inverse    Note that is read as “f inverse.” Here, the is not used as an exponent and  shows the relationship between the domain and range of and the domain and range of    \"An image of two bubbles. The first bubble is orange and has two labels: the top label is “Domain of f” and the bottom label is “Range of f inverse”. Within this bubble is the variable “x”. An orange arrow with the label “f” points from this bubble to the second bubble. The second bubble is blue and has two labels: the top label is “range of f” and the bottom label is “domain of f inverse”. Within this bubble is the variable “y”. A blue arrow with the label “f inverse” points from this bubble to the first bubble.\"  Given a function and its inverse if and only if The range of becomes the domain of and the domain of becomes the range of   Recall that a function has exactly one output for each input. Therefore, to define an inverse function, we need to map each input to exactly one output. For example, let’s try to find the inverse function for Solving the equation for we arrive at the equation This equation does not describe as a function of because there are two solutions to this equation for every The problem with trying to find an inverse function for is that two inputs are sent to the same output for each output The function discussed earlier did not have this problem. For that function, each input was sent to a different output. A function that sends each input to a different output is called a one-to-one function.    We say a is a one-to-one function if when   One way to determine whether a function is one-to-one is by looking at its graph. If a function is one-to-one, then no two inputs can be sent to the same output. Therefore, if we draw a horizontal line anywhere in the -plane, according to the horizontal line test , it cannot intersect the graph more than once. We note that the horizontal line test is different from the vertical line test. The vertical line test determines whether a graph is the graph of a function. The horizontal line test determines whether a function is one-to-one ( ).   Rule: Horizontal Line Test  A function is one-to-one if and only if every horizontal line intersects the graph of no more than once.     \"An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -3 to 4. The first graph is of the function “f(x) = x squared”, which is a parabola. The function decreases until it hits the origin, where it begins to increase. The x intercept and y intercept are both at the origin. There are two orange horizontal lines also plotted on the graph, both of which run through the function at two points each. The second graph is of the function “f(x) = x cubed”, which is an increasing curved function. The x intercept and y intercept are both at the origin. There are three orange lines also plotted on the graph, each of which only intersects the function at one point.\"  (a) The function is not one-to-one because it fails the horizontal line test. (b) The function is one-to-one because it passes the horizontal line test.    Determining Whether a Function Is One-to-One   For each of the following functions, use the horizontal line test to determine whether it is one-to-one.    \"An image of a graph. The x axis runs from -3 to 11 and the y axis runs from -3 to 11. The graph is of a step function which contains 10 horizontal steps. Each steps starts with a closed circle and ends with an open circle. The first step starts at the origin and ends at the point (1, 0). The second step starts at the point (1, 1) and ends at the point (1, 2). Each of the following 8 steps starts 1 unit higher in the y direction than where the previous step ended. The tenth and final step starts at the point (9, 9) and ends at the point (10, 9)\"     \"An image of a graph. The x axis runs from -3 to 6 and the y axis runs from -3 to 6. The graph is of the function “f(x) = (1\/x)”, a curved decreasing function. The graph of the function starts right below the x axis in the 4th quadrant and begins to decreases until it comes close to the y axis. The graph keeps decreasing as it gets closer and closer to the y axis, but never touches it due to the vertical asymptote. In the first quadrant, the graph of the function starts close to the y axis and keeps decreasing until it gets close to the x axis. As the function continues to decreases it gets closer and closer to the x axis without touching it, where there is a horizontal asymptote.\"        Since the horizontal line for any integer intersects the graph more than once, this function is not one-to-one.   \"An image of a graph. The x axis runs from -3 to 11 and the y axis runs from -3 to 11. The graph is of a step function which contains 10 horizontal steps. Each steps starts with a closed circle and ends with an open circle. The first step starts at the origin and ends at the point (1, 0). The second step starts at the point (1, 1) and ends at the point (1, 2). Each of the following 8 steps starts 1 unit higher in the y direction than where the previous step ended. The tenth and final step starts at the point (9, 9) and ends at the point (10, 9). There are also two horizontal orange lines plotted on the graph, each of which run through an entire step of the function.\"    Since every horizontal line intersects the graph once (at most), this function is one-to-one.   \"An image of a graph. The x axis runs from -3 to 6 and the y axis runs from -3 to 6. The graph is of the function “f(x) = (1\/x)”, a curved decreasing function. The graph of the function starts right below the x axis in the 4th quadrant and begins to decreases until it comes close to the y axis. The graph keeps decreasing as it gets closer and closer to the y axis, but never touches it due to the vertical asymptote. In the first quadrant, the graph of the function starts close to the y axis and keeps decreasing until it gets close to the x axis. As the function continues to decreases it gets closer and closer to the x axis without touching it, where there is a horizontal asymptote. There are also three horizontal orange lines plotted on the graph, each of which only runs through the function at one point.\"         Is the function graphed in the following image one-to-one?   \"An image of a graph. The x axis runs from -3 to 4 and the y axis runs from -3 to 5. The graph is of the function “f(x) = (x cubed) - x” which is a curved function. The function increases, decreases, then increases again. The x intercepts are at the points (-1, 0), (0,0), and (1, 0). The y intercept is at the origin.\"     No.    Use the horizontal line test.      Finding a Function's Inverse   We can now consider one-to-one functions and show how to find their inverses. Recall that a function maps elements in the domain of to elements in the range of The inverse function maps each element from the range of back to its corresponding element from the domain of Therefore, to find the inverse function of a one-to-one function given any in the range of we need to determine which in the domain of satisfies Since is one-to-one, there is exactly one such value We can find that value by solving the equation for Doing so, we are able to write as a function of where the domain of this function is the range of and the range of this new function is the domain of Consequently, this function is the inverse of and we write Since we typically use the variable to denote the independent variable and to denote the dependent variable, we often interchange the roles of and and write Representing the inverse function in this way is also helpful later when we graph a function and its inverse on the same axes.   Problem-Solving Strategy: Finding an Inverse Function   Solve the equation for  Interchange the variables and and write     Finding an Inverse Function   Find the inverse for the function State the domain and range of the inverse function. Verify that    Follow the steps outlined in the strategy.  Step 1. If then and  Step 2. Rewrite as and let  Therefore,  Since the domain of is the range of is Since the range of is the domain of is  You can verify that by writing   Note that for to be the inverse of both and for all in the domain of the inside function.      Find the inverse of the function State the domain and range of the inverse function.    The domain of is The range of is    Use the for finding inverse functions.      Graphing Inverse Functions  Let’s consider the relationship between the graph of a function and the graph of its inverse. Consider the graph of shown in and a point on the graph. Since then Therefore, when we graph the point is on the graph. As a result, the graph of is a reflection of the graph of about the line    \"An image of two graphs. The first graph is of “y = f(x)”, which is a curved increasing function, that increases at a faster rate as x increases. The point (a, b) is on the graph of the function in the first quadrant. The second graph also graphs “y = f(x)” with the point (a, b), but also graphs the function “y = f inverse (x)”, an increasing curved function, that increases at a slower rate as x increases. This function includes the point (b, a). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"  (a) The graph of this function shows point on the graph of (b) Since is on the graph of the point is on the graph of The graph of is a reflection of the graph of about the line    Sketching Graphs of Inverse Functions   For the graph of in the following image, sketch a graph of by sketching the line and using symmetry. Identify the domain and range of   \"An image of a graph. The x axis runs from -2 to 2 and the y axis runs from 0 to 2. The graph is of the function “f(x) = square root of (x +2)”, an increasing curved function. The function starts at the point (-2, 0). The x intercept is at (-2, 0) and the y intercept is at the approximate point (0, 1.4).\"     Reflect the graph about the line The domain of is The range of is By using the preceding strategy for finding inverse functions, we can verify that the inverse function is as shown in the graph.   \"An image of a graph. The x axis runs from -2 to 2 and the y axis runs from -2 to 2. The graph is of two functions. The first function is “f(x) = square root of (x +2)”, an increasing curved function. The function starts at the point (-2, 0). The x intercept is at (-2, 0) and the y intercept is at the approximate point (0, 1.4). The second function is “f inverse (x) = (x squared) -2”, an increasing curved function that starts at the point (0, -2). The x intercept is at the approximate point (1.4, 0) and the y intercept is at the point (0, -2). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"       Sketch the graph of and the graph of its inverse using the symmetry property of inverse functions.      \"An image of a graph. The x axis runs from -3 to 4 and the y axis runs from -3 to 5. The graph is of two functions. The first function is “f(x) = 2x +3”, an increasing straight line function. The function has an x intercept at (-1.5, 0) and a y intercept at (0, 3). The second function is “f inverse (x) = (x - 3)\/2”, an increasing straight line function, which increases at a slower rate than the first function. The function has an x intercept at (3, 0) and a y intercept at (0, -1.5). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"      The graphs are symmetric about the line      Restricting Domains  As we have seen, does not have an inverse function because it is not one-to-one. However, we can choose a subset of the domain of such that the function is one-to-one. This subset is called a restricted domain . By restricting the domain of we can define a new function such that the domain of is the restricted domain of and for all in the domain of Then we can define an inverse function for on that domain. For example, since is one-to-one on the interval we can define a new function such that the domain of is and for all in its domain. Since is a one-to-one function, it has an inverse function, given by the formula On the other hand, the function is also one-to-one on the domain Therefore, we could also define a new function such that the domain of is and for all in the domain of Then is a one-to-one function and must also have an inverse. Its inverse is given by the formula ( ).    \"An image of two graphs. Both graphs have an x axis that runs from -2 to 5 and a y axis that runs from -2 to 5. The first graph is of two functions. The first function is “g(x) = x squared”, an increasing curved function that starts at the point (0, 0). This function increases at a faster rate for larger values of x. The second function is “g inverse (x) = square root of x”, an increasing curved function that starts at the point (0, 0). This function increases at a slower rate for larger values of x. The first function is “h(x) = x squared”, a decreasing curved function that ends at the point (0, 0). This function decreases at a slower rate for larger values of x. The second function is “h inverse (x) = -(square root of x)”, an increasing curved function that starts at the point (0, 0). This function decreases at a slower rate for larger values of x. In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"  (a) For restricted to (b) For restricted to    Restricting the Domain   Consider the function   Sketch the graph of and use the horizontal line test to show that is not one-to-one.  Show that is one-to-one on the restricted domain Determine the domain and range for the inverse of on this restricted domain and find a formula for      The graph of is the graph of shifted left 1 unit. Since there exists a horizontal line intersecting the graph more than once, is not one-to-one.   \"An image of a graph. The x axis runs from -6 to 6 and the y axis runs from -2 to 10. The graph is of the function “f(x) = (x+ 1) squared”, which is a parabola. The function decreases until the point (-1, 0), where it begins it increases. The x intercept is at the point (-1, 0) and the y intercept is at the point (0, 1). There is also a horizontal dotted line plotted on the graph, which crosses through the function at two points.\"    On the interval is one-to-one.   \"An image of a graph. The x axis runs from -6 to 6 and the y axis runs from -2 to 10. The graph is of the function “f(x) = (x+ 1) squared”, on the interval [1, infinity). The function starts from the point (-1, 0) and increases. The x intercept is at the point (-1, 0) and the y intercept is at the point (0, 1).\"   The domain and range of are given by the range and domain of respectively. Therefore, the domain of is and the range of is To find a formula for solve the equation for If then Since we are restricting the domain to the interval where we need Therefore, Interchanging and we write and conclude that       Consider restricted to the domain Verify that is one-to-one on this domain. Determine the domain and range of the inverse of and find a formula for    The domain of is The range of is The inverse function is given by the formula    The domain and range of is given by the range and domain of respectively. To find solve for       Inverse Trigonometric Functions  The six basic trigonometric functions are periodic, and therefore they are not one-to-one. However, if we restrict the domain of a trigonometric function to an interval where it is one-to-one, we can define its inverse. Consider the sine function. The sine function is one-to-one on an infinite number of intervals, but the standard convention is to restrict the domain to the interval By doing so, we define the inverse sine function on the domain such that for any in the interval the inverse sine function tells us which angle in the interval satisfies Similarly, we can restrict the domains of the other trigonometric functions to define inverse trigonometric functions , which are functions that tell us which angle in a certain interval has a specified trigonometric value.    The inverse sine function, denoted or arcsin, and the inverse cosine function, denoted or arccos, are defined on the domain as follows:   The inverse tangent function, denoted or arctan, and inverse cotangent function, denoted or arccot, are defined on the domain as follows:   The inverse cosecant function, denoted or arccsc, and inverse secant function, denoted or arcsec, are defined on the domain as follows:    To graph the inverse trigonometric functions, we use the graphs of the trigonometric functions restricted to the domains defined earlier and reflect the graphs about the line ( ).    \"An image of six graphs. The first graph is of the function “f(x) = sin inverse(x)”, which is an increasing curve function. The function starts at the point (-1, -(pi\/2)) and increases until it ends at the point (1, (pi\/2)). The x intercept and y intercept are at the origin. The second graph is of the function “f(x) = cos inverse (x)”, which is a decreasing curved function. The function starts at the point (-1, pi) and decreases until it ends at the point (1, 0). The x intercept is at the point (1, 0). The y intercept is at the point (0, (pi\/2)). The third graph is of the function f(x) = tan inverse (x)”, which is an increasing curve function. The function starts close to the horizontal line “y = -(pi\/2)” and increases until it comes close the “y = (pi\/2)”. The function never intersects either of these lines, it always stays between them - they are horizontal asymptotes. The x intercept and y intercept are both at the origin. The fourth graph is of the function “f(x) = cot inverse (x)”, which is a decreasing curved function. The function starts slightly below the horizontal line “y = pi” and decreases until it gets close the x axis. The function never intersects either of these lines, it always stays between them - they are horizontal asymptotes. The fifth graph is of the function “f(x) = csc inverse (x)”, a decreasing curved function. The function starts slightly below the x axis, then decreases until it hits a closed circle point at (-1, -(pi\/2)). The function then picks up again at the point (1, (pi\/2)), where is begins to decrease and approach the x axis, without ever touching the x axis. There is a horizontal asymptote at the x axis. The sixth graph is of the function “f(x) = sec inverse (x)”, an increasing curved function. The function starts slightly above the horizontal line “y = (pi\/2)”, then increases until it hits a closed circle point at (-1, pi). The function then picks up again at the point (1, 0), where is begins to increase and approach the horizontal line “y = (pi\/2)”, without ever touching the line. There is a horizontal asymptote at the “y = (pi\/2)”.\"  The graph of each of the inverse trigonometric functions is a reflection about the line of the corresponding restricted trigonometric function.    Go to the following site for more comparisons of functions and their inverses.   When evaluating an inverse trigonometric function, the output is an angle. For example, to evaluate we need to find an angle such that Clearly, many angles have this property. However, given the definition of we need the angle that not only solves this equation, but also lies in the interval We conclude that  We now consider a composition of a trigonometric function and its inverse. For example, consider the two expressions and For the first one, we simplify as follows:   For the second one, we have   The inverse function is supposed to “undo” the original function, so why isn’t Recalling our definition of inverse functions, a function and its inverse satisfy the conditions for all in the domain of and for all in the domain of so what happened here? The issue is that the inverse sine function, is the inverse of the restricted sine function defined on the domain Therefore, for in the interval it is true that However, for values of outside this interval, the equation does not hold, even though is defined for all real numbers  What about Does that have a similar issue? The answer is no . Since the domain of is the interval we conclude that if and the expression is not defined for other values of To summarize,   and   Similarly, for the cosine function,   and   Similar properties hold for the other trigonometric functions and their inverses.   Evaluating Expressions Involving Inverse Trigonometric Functions   Evaluate each of the following expressions.           Evaluating is equivalent to finding the angle such that and The angle satisfies these two conditions. Therefore,  First we use the fact that Then Therefore,  To evaluate first use the fact that Then we need to find the angle such that and Since satisfies both these conditions, we have  Since we need to evaluate That is, we need to find the angle such that and Since satisfies both these conditions, we can conclude that      Project: The Maximum Value of a Function  In many areas of science, engineering, and mathematics, it is useful to know the maximum value a function can obtain, even if we don’t know its exact value at a given instant. For instance, if we have a function describing the strength of a roof beam, we would want to know the maximum weight the beam can support without breaking. If we have a function that describes the speed of a train, we would want to know its maximum speed before it jumps off the rails. Safe design often depends on knowing maximum values.  This project describes a simple example of a function with a maximum value that depends on two equation coefficients. We will see that maximum values can depend on several factors other than the independent variable .   Consider the graph in of the function Describe its overall shape. Is it periodic? How do you know?    \"An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of the function “y = sin(x) + cos(x)”, a curved wave function. The graph of the function decreases until it hits the approximate point (-(3pi\/4), -1.4), where it increases until the approximate point ((pi\/4), 1.4), where it begins to decrease again. The x intercepts shown on this graph of the function are at (-(5pi\/4), 0), (-(pi\/4), 0), and ((3pi\/4), 0). The y intercept is at (0, 1).\"  The graph of  Using a graphing calculator or other graphing device, estimate the - and -values of the maximum point for the graph (the first such point where \\gt 0). It may be helpful to express the -value as a multiple of \\pi.  Now consider other graphs of the form for various values of and . Sketch the graph when = 2 and = 1, and find the - and -values for the maximum point. (Remember to express the -value as a multiple of \\pi, if possible.) Has it moved?  Repeat for = 1, = 2. Is there any relationship to what you found in part (2)?  Complete the following table, adding a few choices of your own for and :                0  1      1      1  0     1       1  1     12  5      1  2     5  12      2  1           2  2           3  4           4  3            Try to figure out the formula for the -values.  The formula for the -values is a little harder. The most helpful points from the table are ( Hint : Consider inverse trigonometric functions.)  If you found formulas for parts (5) and (6), show that they work together. That is, substitute the -value formula you found into and simplify it to arrive at the -value formula you found.      Key Concepts   For a function to have an inverse, the function must be one-to-one. Given the graph of a function, we can determine whether the function is one-to-one by using the horizontal line test.  If a function is not one-to-one, we can restrict the domain to a smaller domain where the function is one-to-one and then define the inverse of the function on the smaller domain.  For a function and its inverse for all in the domain of and for all in the domain of  Since the trigonometric functions are periodic, we need to restrict their domains to define the inverse trigonometric functions.  The graph of a function and its inverse are symmetric about the line     Key Equations   Inverse functions     "
},
{
  "id": "sec_Ch1Sec4-3-3",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-3-3",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  Given a function with domain and range its inverse function (if it exists) is the function with domain and range such that if In other words, for a function and its inverse   "
},
{
  "id": "CNX_Calc_Figure_01_04_001",
  "level": "2",
  "url": "sec_Ch1Sec4.html#CNX_Calc_Figure_01_04_001",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "  \"An image of two bubbles. The first bubble is orange and has two labels: the top label is “Domain of f” and the bottom label is “Range of f inverse”. Within this bubble is the variable “x”. An orange arrow with the label “f” points from this bubble to the second bubble. The second bubble is blue and has two labels: the top label is “range of f” and the bottom label is “domain of f inverse”. Within this bubble is the variable “y”. A blue arrow with the label “f inverse” points from this bubble to the first bubble.\"  Given a function and its inverse if and only if The range of becomes the domain of and the domain of becomes the range of  "
},
{
  "id": "sec_Ch1Sec4-3-7",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-3-7",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "  We say a is a one-to-one function if when  "
},
{
  "id": "sec_Ch1Sec4-3-8",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "horizontal line test "
},
{
  "id": "sec_Ch1Sec4-3-9",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-3-9",
  "type": "Note",
  "number": "1.4.4",
  "title": "Rule: Horizontal Line Test.",
  "body": " Rule: Horizontal Line Test  A function is one-to-one if and only if every horizontal line intersects the graph of no more than once.  "
},
{
  "id": "CNX_Calc_Figure_01_04_002",
  "level": "2",
  "url": "sec_Ch1Sec4.html#CNX_Calc_Figure_01_04_002",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": "  \"An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -3 to 4. The first graph is of the function “f(x) = x squared”, which is a parabola. The function decreases until it hits the origin, where it begins to increase. The x intercept and y intercept are both at the origin. There are two orange horizontal lines also plotted on the graph, both of which run through the function at two points each. The second graph is of the function “f(x) = x cubed”, which is an increasing curved function. The x intercept and y intercept are both at the origin. There are three orange lines also plotted on the graph, each of which only intersects the function at one point.\"  (a) The function is not one-to-one because it fails the horizontal line test. (b) The function is one-to-one because it passes the horizontal line test.  "
},
{
  "id": "sec_Ch1Sec4-3-11",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-3-11",
  "type": "Example",
  "number": "1.4.6",
  "title": "Determining Whether a Function Is One-to-One.",
  "body": " Determining Whether a Function Is One-to-One   For each of the following functions, use the horizontal line test to determine whether it is one-to-one.    \"An image of a graph. The x axis runs from -3 to 11 and the y axis runs from -3 to 11. The graph is of a step function which contains 10 horizontal steps. Each steps starts with a closed circle and ends with an open circle. The first step starts at the origin and ends at the point (1, 0). The second step starts at the point (1, 1) and ends at the point (1, 2). Each of the following 8 steps starts 1 unit higher in the y direction than where the previous step ended. The tenth and final step starts at the point (9, 9) and ends at the point (10, 9)\"     \"An image of a graph. The x axis runs from -3 to 6 and the y axis runs from -3 to 6. The graph is of the function “f(x) = (1\/x)”, a curved decreasing function. The graph of the function starts right below the x axis in the 4th quadrant and begins to decreases until it comes close to the y axis. The graph keeps decreasing as it gets closer and closer to the y axis, but never touches it due to the vertical asymptote. In the first quadrant, the graph of the function starts close to the y axis and keeps decreasing until it gets close to the x axis. As the function continues to decreases it gets closer and closer to the x axis without touching it, where there is a horizontal asymptote.\"        Since the horizontal line for any integer intersects the graph more than once, this function is not one-to-one.   \"An image of a graph. The x axis runs from -3 to 11 and the y axis runs from -3 to 11. The graph is of a step function which contains 10 horizontal steps. Each steps starts with a closed circle and ends with an open circle. The first step starts at the origin and ends at the point (1, 0). The second step starts at the point (1, 1) and ends at the point (1, 2). Each of the following 8 steps starts 1 unit higher in the y direction than where the previous step ended. The tenth and final step starts at the point (9, 9) and ends at the point (10, 9). There are also two horizontal orange lines plotted on the graph, each of which run through an entire step of the function.\"    Since every horizontal line intersects the graph once (at most), this function is one-to-one.   \"An image of a graph. The x axis runs from -3 to 6 and the y axis runs from -3 to 6. The graph is of the function “f(x) = (1\/x)”, a curved decreasing function. The graph of the function starts right below the x axis in the 4th quadrant and begins to decreases until it comes close to the y axis. The graph keeps decreasing as it gets closer and closer to the y axis, but never touches it due to the vertical asymptote. In the first quadrant, the graph of the function starts close to the y axis and keeps decreasing until it gets close to the x axis. As the function continues to decreases it gets closer and closer to the x axis without touching it, where there is a horizontal asymptote. There are also three horizontal orange lines plotted on the graph, each of which only runs through the function at one point.\"      "
},
{
  "id": "sec_Ch1Sec4-3-12",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-3-12",
  "type": "Checkpoint",
  "number": "1.4.7",
  "title": "",
  "body": "  Is the function graphed in the following image one-to-one?   \"An image of a graph. The x axis runs from -3 to 4 and the y axis runs from -3 to 5. The graph is of the function “f(x) = (x cubed) - x” which is a curved function. The function increases, decreases, then increases again. The x intercepts are at the points (-1, 0), (0,0), and (1, 0). The y intercept is at the origin.\"     No.    Use the horizontal line test.   "
},
{
  "id": "fs-id1170572552427",
  "level": "2",
  "url": "sec_Ch1Sec4.html#fs-id1170572552427",
  "type": "Note",
  "number": "1.4.8",
  "title": "Problem-Solving Strategy: Finding an Inverse Function.",
  "body": " Problem-Solving Strategy: Finding an Inverse Function   Solve the equation for  Interchange the variables and and write   "
},
{
  "id": "sec_Ch1Sec4-4-2-3",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-2-3",
  "type": "Example",
  "number": "1.4.9",
  "title": "Finding an Inverse Function.",
  "body": " Finding an Inverse Function   Find the inverse for the function State the domain and range of the inverse function. Verify that    Follow the steps outlined in the strategy.  Step 1. If then and  Step 2. Rewrite as and let  Therefore,  Since the domain of is the range of is Since the range of is the domain of is  You can verify that by writing   Note that for to be the inverse of both and for all in the domain of the inside function.   "
},
{
  "id": "sec_Ch1Sec4-4-2-4",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-2-4",
  "type": "Checkpoint",
  "number": "1.4.10",
  "title": "",
  "body": "  Find the inverse of the function State the domain and range of the inverse function.    The domain of is The range of is    Use the for finding inverse functions.   "
},
{
  "id": "CNX_Calc_Figure_01_04_008",
  "level": "2",
  "url": "sec_Ch1Sec4.html#CNX_Calc_Figure_01_04_008",
  "type": "Figure",
  "number": "1.4.11",
  "title": "",
  "body": "  \"An image of two graphs. The first graph is of “y = f(x)”, which is a curved increasing function, that increases at a faster rate as x increases. The point (a, b) is on the graph of the function in the first quadrant. The second graph also graphs “y = f(x)” with the point (a, b), but also graphs the function “y = f inverse (x)”, an increasing curved function, that increases at a slower rate as x increases. This function includes the point (b, a). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"  (a) The graph of this function shows point on the graph of (b) Since is on the graph of the point is on the graph of The graph of is a reflection of the graph of about the line  "
},
{
  "id": "sec_Ch1Sec4-4-3-4",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-3-4",
  "type": "Example",
  "number": "1.4.12",
  "title": "Sketching Graphs of Inverse Functions.",
  "body": " Sketching Graphs of Inverse Functions   For the graph of in the following image, sketch a graph of by sketching the line and using symmetry. Identify the domain and range of   \"An image of a graph. The x axis runs from -2 to 2 and the y axis runs from 0 to 2. The graph is of the function “f(x) = square root of (x +2)”, an increasing curved function. The function starts at the point (-2, 0). The x intercept is at (-2, 0) and the y intercept is at the approximate point (0, 1.4).\"     Reflect the graph about the line The domain of is The range of is By using the preceding strategy for finding inverse functions, we can verify that the inverse function is as shown in the graph.   \"An image of a graph. The x axis runs from -2 to 2 and the y axis runs from -2 to 2. The graph is of two functions. The first function is “f(x) = square root of (x +2)”, an increasing curved function. The function starts at the point (-2, 0). The x intercept is at (-2, 0) and the y intercept is at the approximate point (0, 1.4). The second function is “f inverse (x) = (x squared) -2”, an increasing curved function that starts at the point (0, -2). The x intercept is at the approximate point (1.4, 0) and the y intercept is at the point (0, -2). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"    "
},
{
  "id": "sec_Ch1Sec4-4-3-5",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-3-5",
  "type": "Checkpoint",
  "number": "1.4.13",
  "title": "",
  "body": "  Sketch the graph of and the graph of its inverse using the symmetry property of inverse functions.      \"An image of a graph. The x axis runs from -3 to 4 and the y axis runs from -3 to 5. The graph is of two functions. The first function is “f(x) = 2x +3”, an increasing straight line function. The function has an x intercept at (-1.5, 0) and a y intercept at (0, 3). The second function is “f inverse (x) = (x - 3)\/2”, an increasing straight line function, which increases at a slower rate than the first function. The function has an x intercept at (3, 0) and a y intercept at (0, -1.5). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"      The graphs are symmetric about the line   "
},
{
  "id": "sec_Ch1Sec4-4-4-2",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "restricted domain "
},
{
  "id": "CNX_Calc_Figure_01_04_012",
  "level": "2",
  "url": "sec_Ch1Sec4.html#CNX_Calc_Figure_01_04_012",
  "type": "Figure",
  "number": "1.4.14",
  "title": "",
  "body": "  \"An image of two graphs. Both graphs have an x axis that runs from -2 to 5 and a y axis that runs from -2 to 5. The first graph is of two functions. The first function is “g(x) = x squared”, an increasing curved function that starts at the point (0, 0). This function increases at a faster rate for larger values of x. The second function is “g inverse (x) = square root of x”, an increasing curved function that starts at the point (0, 0). This function increases at a slower rate for larger values of x. The first function is “h(x) = x squared”, a decreasing curved function that ends at the point (0, 0). This function decreases at a slower rate for larger values of x. The second function is “h inverse (x) = -(square root of x)”, an increasing curved function that starts at the point (0, 0). This function decreases at a slower rate for larger values of x. In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.\"  (a) For restricted to (b) For restricted to  "
},
{
  "id": "sec_Ch1Sec4-4-4-4",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-4-4",
  "type": "Example",
  "number": "1.4.15",
  "title": "Restricting the Domain.",
  "body": " Restricting the Domain   Consider the function   Sketch the graph of and use the horizontal line test to show that is not one-to-one.  Show that is one-to-one on the restricted domain Determine the domain and range for the inverse of on this restricted domain and find a formula for      The graph of is the graph of shifted left 1 unit. Since there exists a horizontal line intersecting the graph more than once, is not one-to-one.   \"An image of a graph. The x axis runs from -6 to 6 and the y axis runs from -2 to 10. The graph is of the function “f(x) = (x+ 1) squared”, which is a parabola. The function decreases until the point (-1, 0), where it begins it increases. The x intercept is at the point (-1, 0) and the y intercept is at the point (0, 1). There is also a horizontal dotted line plotted on the graph, which crosses through the function at two points.\"    On the interval is one-to-one.   \"An image of a graph. The x axis runs from -6 to 6 and the y axis runs from -2 to 10. The graph is of the function “f(x) = (x+ 1) squared”, on the interval [1, infinity). The function starts from the point (-1, 0) and increases. The x intercept is at the point (-1, 0) and the y intercept is at the point (0, 1).\"   The domain and range of are given by the range and domain of respectively. Therefore, the domain of is and the range of is To find a formula for solve the equation for If then Since we are restricting the domain to the interval where we need Therefore, Interchanging and we write and conclude that    "
},
{
  "id": "sec_Ch1Sec4-4-4-5",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-4-4-5",
  "type": "Checkpoint",
  "number": "1.4.16",
  "title": "",
  "body": "  Consider restricted to the domain Verify that is one-to-one on this domain. Determine the domain and range of the inverse of and find a formula for    The domain of is The range of is The inverse function is given by the formula    The domain and range of is given by the range and domain of respectively. To find solve for   "
},
{
  "id": "sec_Ch1Sec4-5-2",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse trigonometric functions "
},
{
  "id": "sec_Ch1Sec4-5-3",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-5-3",
  "type": "Definition",
  "number": "1.4.17",
  "title": "",
  "body": "  The inverse sine function, denoted or arcsin, and the inverse cosine function, denoted or arccos, are defined on the domain as follows:   The inverse tangent function, denoted or arctan, and inverse cotangent function, denoted or arccot, are defined on the domain as follows:   The inverse cosecant function, denoted or arccsc, and inverse secant function, denoted or arcsec, are defined on the domain as follows:   "
},
{
  "id": "CNX_Calc_Figure_01_04_015",
  "level": "2",
  "url": "sec_Ch1Sec4.html#CNX_Calc_Figure_01_04_015",
  "type": "Figure",
  "number": "1.4.18",
  "title": "",
  "body": "  \"An image of six graphs. The first graph is of the function “f(x) = sin inverse(x)”, which is an increasing curve function. The function starts at the point (-1, -(pi\/2)) and increases until it ends at the point (1, (pi\/2)). The x intercept and y intercept are at the origin. The second graph is of the function “f(x) = cos inverse (x)”, which is a decreasing curved function. The function starts at the point (-1, pi) and decreases until it ends at the point (1, 0). The x intercept is at the point (1, 0). The y intercept is at the point (0, (pi\/2)). The third graph is of the function f(x) = tan inverse (x)”, which is an increasing curve function. The function starts close to the horizontal line “y = -(pi\/2)” and increases until it comes close the “y = (pi\/2)”. The function never intersects either of these lines, it always stays between them - they are horizontal asymptotes. The x intercept and y intercept are both at the origin. The fourth graph is of the function “f(x) = cot inverse (x)”, which is a decreasing curved function. The function starts slightly below the horizontal line “y = pi” and decreases until it gets close the x axis. The function never intersects either of these lines, it always stays between them - they are horizontal asymptotes. The fifth graph is of the function “f(x) = csc inverse (x)”, a decreasing curved function. The function starts slightly below the x axis, then decreases until it hits a closed circle point at (-1, -(pi\/2)). The function then picks up again at the point (1, (pi\/2)), where is begins to decrease and approach the x axis, without ever touching the x axis. There is a horizontal asymptote at the x axis. The sixth graph is of the function “f(x) = sec inverse (x)”, an increasing curved function. The function starts slightly above the horizontal line “y = (pi\/2)”, then increases until it hits a closed circle point at (-1, pi). The function then picks up again at the point (1, 0), where is begins to increase and approach the horizontal line “y = (pi\/2)”, without ever touching the line. There is a horizontal asymptote at the “y = (pi\/2)”.\"  The graph of each of the inverse trigonometric functions is a reflection about the line of the corresponding restricted trigonometric function.  "
},
{
  "id": "sec_Ch1Sec4-5-6",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-5-6",
  "type": "Note",
  "number": "1.4.19",
  "title": "",
  "body": " Go to the following site for more comparisons of functions and their inverses.  "
},
{
  "id": "sec_Ch1Sec4-5-22",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-5-22",
  "type": "Example",
  "number": "1.4.20",
  "title": "Evaluating Expressions Involving Inverse Trigonometric Functions.",
  "body": " Evaluating Expressions Involving Inverse Trigonometric Functions   Evaluate each of the following expressions.           Evaluating is equivalent to finding the angle such that and The angle satisfies these two conditions. Therefore,  First we use the fact that Then Therefore,  To evaluate first use the fact that Then we need to find the angle such that and Since satisfies both these conditions, we have  Since we need to evaluate That is, we need to find the angle such that and Since satisfies both these conditions, we can conclude that    "
},
{
  "id": "sec_Ch1Sec4-5-23",
  "level": "2",
  "url": "sec_Ch1Sec4.html#sec_Ch1Sec4-5-23",
  "type": "Note",
  "number": "1.4.21",
  "title": "Project: The Maximum Value of a Function.",
  "body": " Project: The Maximum Value of a Function  In many areas of science, engineering, and mathematics, it is useful to know the maximum value a function can obtain, even if we don’t know its exact value at a given instant. For instance, if we have a function describing the strength of a roof beam, we would want to know the maximum weight the beam can support without breaking. If we have a function that describes the speed of a train, we would want to know its maximum speed before it jumps off the rails. Safe design often depends on knowing maximum values.  This project describes a simple example of a function with a maximum value that depends on two equation coefficients. We will see that maximum values can depend on several factors other than the independent variable .   Consider the graph in of the function Describe its overall shape. Is it periodic? How do you know?    \"An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of the function “y = sin(x) + cos(x)”, a curved wave function. The graph of the function decreases until it hits the approximate point (-(3pi\/4), -1.4), where it increases until the approximate point ((pi\/4), 1.4), where it begins to decrease again. The x intercepts shown on this graph of the function are at (-(5pi\/4), 0), (-(pi\/4), 0), and ((3pi\/4), 0). The y intercept is at (0, 1).\"  The graph of  Using a graphing calculator or other graphing device, estimate the - and -values of the maximum point for the graph (the first such point where \\gt 0). It may be helpful to express the -value as a multiple of \\pi.  Now consider other graphs of the form for various values of and . Sketch the graph when = 2 and = 1, and find the - and -values for the maximum point. (Remember to express the -value as a multiple of \\pi, if possible.) Has it moved?  Repeat for = 1, = 2. Is there any relationship to what you found in part (2)?  Complete the following table, adding a few choices of your own for and :                0  1      1      1  0     1       1  1     12  5      1  2     5  12      2  1           2  2           3  4           4  3            Try to figure out the formula for the -values.  The formula for the -values is a little harder. The most helpful points from the table are ( Hint : Consider inverse trigonometric functions.)  If you found formulas for parts (5) and (6), show that they work together. That is, substitute the -value formula you found into and simplify it to arrive at the -value formula you found.   "
},
{
  "id": "sec_Ch1Sec5",
  "level": "1",
  "url": "sec_Ch1Sec5.html",
  "type": "Section",
  "number": "1.5",
  "title": "Exponential and Logarithmic Functions",
  "body": " Exponential and Logarithmic Functions   Learning Objectives   Identify the form of an exponential function.  Explain the difference between the graphs of and  Recognize the significance of the number  Identify the form of a logarithmic function.  Explain the relationship between exponential and logarithmic functions.  Describe how to calculate a logarithm to a different base.  Identify the hyperbolic functions, their graphs, and basic identities.   In this section we examine exponential and logarithmic functions. We use the properties of these functions to solve equations involving exponential or logarithmic terms, and we study the meaning and importance of the number We also define hyperbolic and inverse hyperbolic functions, which involve combinations of exponential and logarithmic functions. (Note that we present alternative definitions of exponential and logarithmic functions in the chapter Applications of Integrations , and prove that the functions have the same properties with either definition.)    Exponential Functions   Exponential functions arise in many applications. One common example is population growth .  For example, if a population starts with individuals and then grows at an annual rate of its population after 1 year is   Its population after 2 years is   In general, its population after years is   which is an exponential function. More generally, any function of the form where is an exponential function with base  and exponent  . Exponential functions have constant bases and variable exponents. Note that a function of the form for some constant is not an exponential function but a power function.  To see the difference between an exponential function and a power function, we compare the functions and In , we see that both and approach infinity as Eventually, however, becomes larger than and grows more rapidly as In the opposite direction, as whereas The line is a horizontal asymptote for   Values of and                                            In , we graph both and to show how the graphs differ.    \"An image of a graph. The x axis runs from -10 to 10 and the y axis runs from 0 to 50. The graph is of two functions. The first function is “y = x squared”, which is a parabola. The function decreases until it hits the origin and then begins increasing. The second function is “y = 2 to the power of x”, which starts slightly above the x axis, and begins increasing very rapidly, more rapidly than the first function.\"  Both and approach infinity as but grows more rapidly than As whereas   prei  Evaluating Exponential Functions  Recall the properties of exponents: If is a positive integer, then we define (with factors of If is a negative integer, then for some positive integer and we define Also, is defined to be If is a rational number, then where and are integers and For example, However, how is defined if is an irrational number? For example, what do we mean by This is too complex a question for us to answer fully right now; however, we can make an approximation. In , we list some rational numbers approaching and the values of for each rational number are presented as well. We claim that if we choose rational numbers getting closer and closer to the values of get closer and closer to some number We define that number to be   Values of for a List of Rational Numbers Approximating                        Bacterial Growth   Suppose a particular population of bacteria is known to double in size every hours. If a culture starts with bacteria, the number of bacteria after hours is The number of bacteria after hours is In general, the number of bacteria after hours is Letting we see that the number of bacteria after hours is Find the number of bacteria after hours, hours, and hours.    The number of bacteria after 6 hours is given by bacteria. The number of bacteria after hours is given by bacteria. The number of bacteria after hours is given by bacteria.      Given the exponential function evaluate and        Media  Go to World Population Balance for another example of exponential population growth.     Graphing Exponential Functions  For any base the exponential function is defined for all real numbers and Therefore, the domain of is and the range is To graph we note that for is increasing on and as whereas as On the other hand, if is decreasing on and as whereas as ( ).    \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of four functions. The first function is “f(x) = 2 to the power of x”, an increasing curved function, which starts slightly above the x axis and begins increasing. The second function is “f(x) = 4 to the power of x”, an increasing curved function, which starts slightly above the x axis and begins increasing rapidly, more rapidly than the first function. The third function is “f(x) = (1\/2) to the power of x”, a decreasing curved function with decreases until it gets close to the x axis without touching it. The third function is “f(x) = (1\/4) to the power of x”, a decreasing curved function with decreases until it gets close to the x axis without touching it. It decreases at a faster rate than the third function.\"  If then is increasing on If then is decreasing on   Media  Visit this site for more exploration of the graphs of exponential functions.   Note that exponential functions satisfy the general laws of exponents. To remind you of these laws, we state them as rules.   Rule: Laws of Exponents  For any constants and for all and y ,           Using the Laws of Exponents   Use the laws of exponents to simplify each of the following expressions.         We can simplify as follows:  We can simplify as follows:       Use the laws of exponents to simplify             The Number  A special type of exponential function appears frequently in real-world applications. To describe it, consider the following example of exponential growth, which arises from compounding interest in a savings account. Suppose a person invests dollars in a savings account with an annual interest rate compounded annually. The amount of money after 1 year is   The amount of money after years is   More generally, the amount after years is   If the money is compounded 2 times per year, the amount of money after half a year is   The amount of money after year is   After years, the amount of money in the account is   More generally, if the money is compounded times per year, the amount of money in the account after years is given by the function   What happens as To answer this question, we let and write   and examine the behavior of as using a table of values \\left( \\right).   Values of as                       Looking at this table, it appears that is approaching a number between and as In fact, does approach some number as We call this number . To six decimal places of accuracy,   The letter was first used to represent this number by the Swiss mathematician Leonhard Euler during the 1720s. Although Euler did not discover the number, he showed many important connections between and logarithmic functions. We still use the notation today to honor Euler’s work because it appears in many areas of mathematics and because we can use it in many practical applications.  Returning to our savings account example, we can conclude that if a person puts dollars in an account at an annual interest rate compounded continuously, then This function may be familiar. Since functions involving base arise often in applications, we call the function the natural exponential function . Not only is this function interesting because of the definition of the number but also, as discussed next, its graph has an important property.  Since we know is increasing on In , we show a graph of along with a tangent line to the graph of at We give a precise definition of tangent line in the next chapter; but, informally, we say a tangent line to a graph of at is a line that passes through the point and has the same “slope” as at that point The function is the only exponential function with tangent line at that has a slope of 1. As we see later in the text, having this property makes the natural exponential function the most simple exponential function to use in many instances.    \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of the function “f(x) = e to power of x”, an increasing curved function that starts slightly above the x axis. The y intercept is at the point (0, 1). At this point, a line is drawn tangent to the function. This line has the label “slope = 1”.\"  The graph of has a tangent line with slope at    Compounding Interest   Suppose is invested in an account at an annual interest rate of compounded continuously.   Let denote the number of years after the initial investment and denote the amount of money in the account at time Find a formula for  Find the amount of money in the account after years and after years.      If dollars are invested in an account at an annual interest rate compounded continuously, then Here and Therefore,  After years, the amount of money in the account is After years, the amount of money in the account is       If is invested in an account at an annual interest rate of compounded continuously, find a formula for the amount of money in the account after years. Find the amount of money after years.    After years, there will be approximately         Logarithmic Functions  Using our understanding of exponential functions, we can discuss their inverses, which are the logarithmic functions. These come in handy when we need to consider any phenomenon that varies over a wide range of values, such as pH in chemistry or decibels in sound levels.  The exponential function is one-to-one, with domain and range Therefore, it has an inverse function, called the logarithmic function with base  For any the logarithmic function with base b , denoted has domain and range and satisfies   For example,   Furthermore, since and are inverse functions,   The most commonly used logarithmic function is the function Since this function uses natural as its base, it is called the natural logarithm . Here we use the notation or to mean For example,   Since the functions and are inverses of each other,   and their graphs are symmetric about the line ( ).    \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -3 to 4. The graph is of two functions. The first function is “f(x) = e to power of x”, an increasing curved function that starts slightly above the x axis. The y intercept is at the point (0, 1) and there is no x intercept. The second function is “f(x) = ln(x)”, an increasing curved function. The x intercept is at the point (1, 0) and there is no y intercept. A dotted line with label “y = x” is also plotted on the graph, to show that the functions are mirror images over this line.\"  The functions and are inverses of each other, so their graphs are symmetric about the line    Media  At this site you can see an example of a base-10 logarithmic scale.   In general, for any base the function is symmetric about the line with the function Using this fact and the graphs of the exponential functions, we graph functions for several values of ( ).    \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of three functions. All three functions a log functions that are increasing curved functions that start slightly to the right of the y axis and have an x intercept at (1, 0). The first function is “y = log base 10 (x)”, the second function is “f(x) = ln(x)”, and the third function is “y = log base 2 (x)”. The third function increases the most rapidly, the second function increases next most rapidly, and the third function increases the slowest.\"  Graphs of are depicted for   Before solving some equations involving exponential and logarithmic functions, let’s review the basic properties of logarithms.   Rule: Properties of Logarithms  If and is any real number, then     Solving Equations Involving Exponential Functions   Solve each of the following equations for         Applying the natural logarithm function to both sides of the equation, we have Using the power property of logarithms, Therefore,  Multiplying both sides of the equation by we arrive at the equation Rewriting this equation as we can then rewrite it as a quadratic equation in  Now we can solve the quadratic equation. Factoring this equation, we obtain Therefore, the solutions satisfy and Taking the natural logarithm of both sides gives us the solutions       Solve       First solve the equation for     Solving Equations Involving Logarithmic Functions   Solve each of the following equations for          By the definition of the natural logarithm function, Therefore, the solution is  Using the product and power properties of logarithmic functions, rewrite the left-hand side of the equation as Therefore, the equation can be rewritten as The solution is  Using the power property of logarithmic functions, we can rewrite the equation as Using the quotient property, this becomes Therefore, which implies We should then check for any extraneous solutions.       Solve       First use the power property, then use the product property of logarithms.    When evaluating a logarithmic function with a calculator, you may have noticed that the only options are or log, called the common logarithm , or ln , which is the natural logarithm. However, exponential functions and logarithm functions can be expressed in terms of any desired base If you need to use a calculator to evaluate an expression with a different base, you can apply the change-of-base formulas first. Using this change of base, we typically write a given exponential or logarithmic function in terms of the natural exponential and natural logarithmic functions.   Rule: Change-of-Base Formulas  Let and   for any real number If this equation reduces to  for any real number If this equation reduces to     Proof  For the first change-of-base formula, we begin by making use of the power property of logarithmic functions. We know that for any base Therefore,   In addition, we know that and are inverse functions. Therefore,   Combining these last two equalities, we conclude that  To prove the second property, we show that   Let and We will show that By the definition of logarithmic functions, we know that and From the previous equations, we see that   Therefore, Since exponential functions are one-to-one, we can conclude that    Changing Bases   Use a calculating utility to evaluate with the change-of-base formula presented earlier.    Use the second equation with and       Use the change-of-base formula and a calculating utility to evaluate       Use the change of base to rewrite this expression in terms of expressions involving the natural logarithm function.     Chapter Opener: The Richter Scale for Earthquakes     \"A photograph of an earthquake fault.\"  (credit: modification of work by Robb Hannawacker, NPS)   In 1935, Charles Richter developed a scale (now known as the Richter scale ) to measure the magnitude of an earthquake . The scale is a base-10 logarithmic scale, and it can be described as follows: Consider one earthquake with magnitude on the Richter scale and a second earthquake with magnitude on the Richter scale. Suppose which means the earthquake of magnitude is stronger, but how much stronger is it than the other earthquake? A way of measuring the intensity of an earthquake is by using a seismograph to measure the amplitude of the earthquake waves. If is the amplitude measured for the first earthquake and is the amplitude measured for the second earthquake, then the amplitudes and magnitudes of the two earthquakes satisfy the following equation:   Consider an earthquake that measures 8 on the Richter scale and an earthquake that measures 7 on the Richter scale. Then,   Therefore,   which implies or Since is 10 times the size of we say that the first earthquake is 10 times as intense as the second earthquake. On the other hand, if one earthquake measures 8 on the Richter scale and another measures 6, then the relative intensity of the two earthquakes satisfies the equation   Therefore, That is, the first earthquake is 100 times more intense than the second earthquake.  How can we use logarithmic functions to compare the relative severity of the magnitude 9 earthquake in Japan in 2011 with the magnitude 7.3 earthquake in Haiti in 2010?    To compare the Japan and Haiti earthquakes, we can use an equation presented earlier:   Therefore, and we conclude that the earthquake in Japan was approximately times more intense than the earthquake in Haiti.      Compare the relative severity of a magnitude earthquake with a magnitude earthquake.    The magnitude earthquake is roughly times as severe as the magnitude earthquake.         Hyperbolic Functions   The hyperbolic functions are defined in terms of certain combinations of and These functions arise naturally in various engineering and physics applications, including the study of water waves and vibrations of elastic membranes. Another common use for a hyperbolic function is the representation of a hanging chain or cable, also known as a catenary ( ). If we introduce a coordinate system so that the low point of the chain lies along the -axis, we can describe the height of the chain in terms of a hyperbolic function. First, we define the hyperbolic functions .    \"A photograph of a spider web collecting dew drops.\"  The shape of a strand of silk in a spider’s web can be described in terms of a hyperbolic function. The same shape applies to a chain or cable hanging from two supports with only its own weight. (credit: “Mtpaley”, Wikimedia Commons)    Hyperbolic cosine   Hyperbolic sine   Hyperbolic tangent   Hyperbolic cosecant   Hyperbolic secant   Hyperbolic cotangent    The name rhymes with “gosh,” whereas the name is pronounced “cinch.” The functions , , , and are pronounced “tanch,” “seech,” “coseech,” and “cotanch,” respectively.  Using the definition of and principles of physics, it can be shown that the height of a hanging chain, such as the one in , can be described by the function for certain constants and  But why are these functions called hyperbolic functions ? To answer this question, consider the quantity Using the definition of and we see that   This identity is the analog of the trigonometric identity Here, given a value the point lies on the unit hyperbola ( ).    \"An image of a graph. The x axis runs from -1 to 3 and the y axis runs from -3 to 3. The graph is of the relation “(x squared) - (y squared) -1”. The left most point of the relation is at the x intercept, which is at the point (1, 0). From this point the relation both increases and decreases in curves as x increases. This relation is known as a hyperbola and it resembles a sideways “U” shape. There is a point plotted on the graph of the relation labeled “(cosh(1), sinh(1))”, which is at the approximate point (1.5, 1.2).\"  The unit hyperbola     Graphs of Hyperbolic Functions  To graph and we make use of the fact that both functions approach as since as As approaches whereas approaches Therefore, using the graphs of and as guides, we graph and To graph we use the fact that for all as and as The graphs of the other three hyperbolic functions can be sketched using the graphs of and ( ).    \"An image of six graphs. Each graph has an x axis that runs from -3 to 3 and a y axis that runs from -4 to 4. The first graph is of the function “y = cosh(x)”, which is a hyperbola. The function decreases until it hits the point (0, 1), where it begins to increase. There are also two functions that serve as a boundary for this function. The first of these functions is “y = (1\/2)(e to power of -x)”, a decreasing curved function and the second of these functions is “y = (1\/2)(e to power of x)”, an increasing curved function. The function “y = cosh(x)” is always above these two functions without ever touching them. The second graph is of the function “y = sinh(x)”, which is an increasing curved function. There are also two functions that serve as a boundary for this function. The first of these functions is “y = (1\/2)(e to power of x)”, an increasing curved function and the second of these functions is “y = -(1\/2)(e to power of -x)”, an increasing curved function that approaches the x axis without touching it. The function “y = sinh(x)” is always between these two functions without ever touching them. The third graph is of the function “y = sech(x)”, which increases until the point (0, 1), where it begins to decrease. The graph of the function has a hump. The fourth graph is of the function “y = csch(x)”. On the left side of the y axis, the function starts slightly below the x axis and decreases until it approaches the y axis, which it never touches. On the right side of the y axis, the function starts slightly to the right of the y axis and decreases until it approaches the x axis, which it never touches. The fifth graph is of the function “y = tanh(x)”, an increasing curved function. There are also two functions that serve as a boundary for this function. The first of these functions is “y = 1”, a horizontal line function and the second of these functions is “y = -1”, another horizontal line function. The function “y = tanh(x)” is always between these two functions without ever touching them. The sixth graph is of the function “y = coth(x)”. On the left side of the y axis, the function starts slightly below the boundary line “y = 1” and decreases until it approaches the y axis, which it never touches. On the right side of the y axis, the function starts slightly to the right of the y axis and decreases until it approaches the boundary line “y = -1”, which it never touches.\"  The hyperbolic functions involve combinations of and     Identities Involving Hyperbolic Functions  The identity shown in , is one of several identities involving the hyperbolic functions, some of which are listed next. The first four properties follow easily from the definitions of hyperbolic sine and hyperbolic cosine. Except for some differences in signs, most of these properties are analogous to identities for trigonometric functions.   Rule: Identities Involving Hyperbolic Functions               Evaluating Hyperbolic Functions    Simplify  If find the values of the remaining five hyperbolic functions.      Using the definition of the function, we write  Using the identity we see that Since for all we must have Then, using the definitions for the other hyperbolic functions, we conclude that and       Simplify       Use the definition of the cosh function and the power property of logarithm functions.      Inverse Hyperbolic Functions  From the graphs of the hyperbolic functions, we see that all of them are one-to-one except and If we restrict the domains of these two functions to the interval then all the hyperbolic functions are one-to-one, and we can define the inverse hyperbolic functions . Since the hyperbolic functions themselves involve exponential functions, the inverse hyperbolic functions involve logarithmic functions.   Inverse Hyperbolic Functions    Let’s look at how to derive the first equation. The others follow similarly. Suppose Then, and, by the definition of the hyperbolic sine function, Therefore,   Multiplying this equation by we obtain   This can be solved like a quadratic equation, with the solution   Since the only solution is the one with the positive sign. Applying the natural logarithm to both sides of the equation, we conclude that    Evaluating Inverse Hyperbolic Functions   Evaluate each of the following expressions.            Evaluate       Use the definition of and simplify.       Key Concepts   The exponential function is increasing if and decreasing if Its domain is and its range is  The logarithmic function is the inverse of Its domain is and its range is  The natural exponential function is and the natural logarithmic function is  Given an exponential function or logarithmic function in base we can make a change of base to convert this function to any base We typically convert to base  The hyperbolic functions involve combinations of the exponential functions and As a result, the inverse hyperbolic functions involve the natural logarithm.    "
},
{
  "id": "sec_Ch1Sec5-3-2-1",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population growth "
},
{
  "id": "sec_Ch1Sec5-3-2-8",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base exponent "
},
{
  "id": "fs-id1170572205233",
  "level": "2",
  "url": "sec_Ch1Sec5.html#fs-id1170572205233",
  "type": "Table",
  "number": "1.5.1",
  "title": "Values of <span class=\"process-math\">\\(x^2\\)<\/span> and <span class=\"process-math\">\\(2^x\\)<\/span>",
  "body": " Values of and                                           "
},
{
  "id": "CNX_Calc_Figure_01_05_001",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_001",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -10 to 10 and the y axis runs from 0 to 50. The graph is of two functions. The first function is “y = x squared”, which is a parabola. The function decreases until it hits the origin and then begins increasing. The second function is “y = 2 to the power of x”, which starts slightly above the x axis, and begins increasing very rapidly, more rapidly than the first function.\"  Both and approach infinity as but grows more rapidly than As whereas  "
},
{
  "id": "fs-id1170572480690",
  "level": "2",
  "url": "sec_Ch1Sec5.html#fs-id1170572480690",
  "type": "Table",
  "number": "1.5.3",
  "title": "Values of <span class=\"process-math\">\\(2^x\\)<\/span> for a List of Rational Numbers Approximating <span class=\"process-math\">\\(\\sqrt{2}\\)<\/span>",
  "body": " Values of for a List of Rational Numbers Approximating                      "
},
{
  "id": "sec_Ch1Sec5-3-3-4",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-3-4",
  "type": "Example",
  "number": "1.5.4",
  "title": "Bacterial Growth.",
  "body": " Bacterial Growth   Suppose a particular population of bacteria is known to double in size every hours. If a culture starts with bacteria, the number of bacteria after hours is The number of bacteria after hours is In general, the number of bacteria after hours is Letting we see that the number of bacteria after hours is Find the number of bacteria after hours, hours, and hours.    The number of bacteria after 6 hours is given by bacteria. The number of bacteria after hours is given by bacteria. The number of bacteria after hours is given by bacteria.   "
},
{
  "id": "sec_Ch1Sec5-3-3-5",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-3-5",
  "type": "Checkpoint",
  "number": "1.5.5",
  "title": "",
  "body": "  Given the exponential function evaluate and      "
},
{
  "id": "sec_Ch1Sec5-3-3-6",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-3-6",
  "type": "Note",
  "number": "1.5.6",
  "title": "Media.",
  "body": " Media  Go to World Population Balance for another example of exponential population growth.  "
},
{
  "id": "CNX_Calc_Figure_01_05_002",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_002",
  "type": "Figure",
  "number": "1.5.7",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of four functions. The first function is “f(x) = 2 to the power of x”, an increasing curved function, which starts slightly above the x axis and begins increasing. The second function is “f(x) = 4 to the power of x”, an increasing curved function, which starts slightly above the x axis and begins increasing rapidly, more rapidly than the first function. The third function is “f(x) = (1\/2) to the power of x”, a decreasing curved function with decreases until it gets close to the x axis without touching it. The third function is “f(x) = (1\/4) to the power of x”, a decreasing curved function with decreases until it gets close to the x axis without touching it. It decreases at a faster rate than the third function.\"  If then is increasing on If then is decreasing on "
},
{
  "id": "sec_Ch1Sec5-3-4-4",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-4-4",
  "type": "Note",
  "number": "1.5.8",
  "title": "Media.",
  "body": " Media  Visit this site for more exploration of the graphs of exponential functions.  "
},
{
  "id": "sec_Ch1Sec5-3-4-6",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-4-6",
  "type": "Note",
  "number": "1.5.9",
  "title": "Rule: Laws of Exponents.",
  "body": " Rule: Laws of Exponents  For any constants and for all and y ,         "
},
{
  "id": "sec_Ch1Sec5-3-4-7",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-4-7",
  "type": "Example",
  "number": "1.5.10",
  "title": "Using the Laws of Exponents.",
  "body": " Using the Laws of Exponents   Use the laws of exponents to simplify each of the following expressions.         We can simplify as follows:  We can simplify as follows:    "
},
{
  "id": "sec_Ch1Sec5-3-4-8",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-3-4-8",
  "type": "Checkpoint",
  "number": "1.5.11",
  "title": "",
  "body": "  Use the laws of exponents to simplify         "
},
{
  "id": "sec_Ch1Sec5-4-2",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compounding interest "
},
{
  "id": "fs-id1170572451390",
  "level": "2",
  "url": "sec_Ch1Sec5.html#fs-id1170572451390",
  "type": "Table",
  "number": "1.5.12",
  "title": "Values of <span class=\"process-math\">\\(\\left(1+ \\frac{1}{m}\\right)^m\\)<\/span> as <span class=\"process-math\">\\(m\\to \\infty\\)<\/span>",
  "body": " Values of as                      "
},
{
  "id": "sec_Ch1Sec5-4-20",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-4-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "number "
},
{
  "id": "sec_Ch1Sec5-4-23",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-4-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural exponential function "
},
{
  "id": "CNX_Calc_Figure_01_05_003",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_003",
  "type": "Figure",
  "number": "1.5.13",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of the function “f(x) = e to power of x”, an increasing curved function that starts slightly above the x axis. The y intercept is at the point (0, 1). At this point, a line is drawn tangent to the function. This line has the label “slope = 1”.\"  The graph of has a tangent line with slope at  "
},
{
  "id": "sec_Ch1Sec5-4-26",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-4-26",
  "type": "Example",
  "number": "1.5.14",
  "title": "Compounding Interest.",
  "body": " Compounding Interest   Suppose is invested in an account at an annual interest rate of compounded continuously.   Let denote the number of years after the initial investment and denote the amount of money in the account at time Find a formula for  Find the amount of money in the account after years and after years.      If dollars are invested in an account at an annual interest rate compounded continuously, then Here and Therefore,  After years, the amount of money in the account is After years, the amount of money in the account is    "
},
{
  "id": "sec_Ch1Sec5-4-27",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-4-27",
  "type": "Checkpoint",
  "number": "1.5.15",
  "title": "",
  "body": "  If is invested in an account at an annual interest rate of compounded continuously, find a formula for the amount of money in the account after years. Find the amount of money after years.    After years, there will be approximately      "
},
{
  "id": "sec_Ch1Sec5-5-9",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarithm "
},
{
  "id": "CNX_Calc_Figure_01_05_004",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_004",
  "type": "Figure",
  "number": "1.5.16",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -3 to 4. The graph is of two functions. The first function is “f(x) = e to power of x”, an increasing curved function that starts slightly above the x axis. The y intercept is at the point (0, 1) and there is no x intercept. The second function is “f(x) = ln(x)”, an increasing curved function. The x intercept is at the point (1, 0) and there is no y intercept. A dotted line with label “y = x” is also plotted on the graph, to show that the functions are mirror images over this line.\"  The functions and are inverses of each other, so their graphs are symmetric about the line  "
},
{
  "id": "sec_Ch1Sec5-5-15",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-15",
  "type": "Note",
  "number": "1.5.17",
  "title": "Media.",
  "body": " Media  At this site you can see an example of a base-10 logarithmic scale.  "
},
{
  "id": "CNX_Calc_Figure_01_05_005",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_005",
  "type": "Figure",
  "number": "1.5.18",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of three functions. All three functions a log functions that are increasing curved functions that start slightly to the right of the y axis and have an x intercept at (1, 0). The first function is “y = log base 10 (x)”, the second function is “f(x) = ln(x)”, and the third function is “y = log base 2 (x)”. The third function increases the most rapidly, the second function increases next most rapidly, and the third function increases the slowest.\"  Graphs of are depicted for  "
},
{
  "id": "sec_Ch1Sec5-5-19",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-19",
  "type": "Note",
  "number": "1.5.19",
  "title": "Rule: Properties of Logarithms.",
  "body": " Rule: Properties of Logarithms  If and is any real number, then   "
},
{
  "id": "sec_Ch1Sec5-5-20",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-20",
  "type": "Example",
  "number": "1.5.20",
  "title": "Solving Equations Involving Exponential Functions.",
  "body": " Solving Equations Involving Exponential Functions   Solve each of the following equations for         Applying the natural logarithm function to both sides of the equation, we have Using the power property of logarithms, Therefore,  Multiplying both sides of the equation by we arrive at the equation Rewriting this equation as we can then rewrite it as a quadratic equation in  Now we can solve the quadratic equation. Factoring this equation, we obtain Therefore, the solutions satisfy and Taking the natural logarithm of both sides gives us the solutions    "
},
{
  "id": "sec_Ch1Sec5-5-21",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-21",
  "type": "Checkpoint",
  "number": "1.5.21",
  "title": "",
  "body": "  Solve       First solve the equation for   "
},
{
  "id": "sec_Ch1Sec5-5-22",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-22",
  "type": "Example",
  "number": "1.5.22",
  "title": "Solving Equations Involving Logarithmic Functions.",
  "body": " Solving Equations Involving Logarithmic Functions   Solve each of the following equations for          By the definition of the natural logarithm function, Therefore, the solution is  Using the product and power properties of logarithmic functions, rewrite the left-hand side of the equation as Therefore, the equation can be rewritten as The solution is  Using the power property of logarithmic functions, we can rewrite the equation as Using the quotient property, this becomes Therefore, which implies We should then check for any extraneous solutions.    "
},
{
  "id": "sec_Ch1Sec5-5-23",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-23",
  "type": "Checkpoint",
  "number": "1.5.23",
  "title": "",
  "body": "  Solve       First use the power property, then use the product property of logarithms.   "
},
{
  "id": "sec_Ch1Sec5-5-24",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "common logarithm "
},
{
  "id": "sec_Ch1Sec5-5-25",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-25",
  "type": "Note",
  "number": "1.5.24",
  "title": "Rule: Change-of-Base Formulas.",
  "body": " Rule: Change-of-Base Formulas  Let and   for any real number If this equation reduces to  for any real number If this equation reduces to   "
},
{
  "id": "sec_Ch1Sec5-5-26",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-26",
  "type": "Note",
  "number": "1.5.25",
  "title": "Proof.",
  "body": " Proof  For the first change-of-base formula, we begin by making use of the power property of logarithmic functions. We know that for any base Therefore,   In addition, we know that and are inverse functions. Therefore,   Combining these last two equalities, we conclude that  To prove the second property, we show that   Let and We will show that By the definition of logarithmic functions, we know that and From the previous equations, we see that   Therefore, Since exponential functions are one-to-one, we can conclude that  "
},
{
  "id": "sec_Ch1Sec5-5-27",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-27",
  "type": "Example",
  "number": "1.5.26",
  "title": "Changing Bases.",
  "body": " Changing Bases   Use a calculating utility to evaluate with the change-of-base formula presented earlier.    Use the second equation with and    "
},
{
  "id": "sec_Ch1Sec5-5-28",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-28",
  "type": "Checkpoint",
  "number": "1.5.27",
  "title": "",
  "body": "  Use the change-of-base formula and a calculating utility to evaluate       Use the change of base to rewrite this expression in terms of expressions involving the natural logarithm function.   "
},
{
  "id": "sec_Ch1Sec5-5-29",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-29",
  "type": "Example",
  "number": "1.5.28",
  "title": "Chapter Opener: The Richter Scale for Earthquakes.",
  "body": " Chapter Opener: The Richter Scale for Earthquakes     \"A photograph of an earthquake fault.\"  (credit: modification of work by Robb Hannawacker, NPS)   In 1935, Charles Richter developed a scale (now known as the Richter scale ) to measure the magnitude of an earthquake . The scale is a base-10 logarithmic scale, and it can be described as follows: Consider one earthquake with magnitude on the Richter scale and a second earthquake with magnitude on the Richter scale. Suppose which means the earthquake of magnitude is stronger, but how much stronger is it than the other earthquake? A way of measuring the intensity of an earthquake is by using a seismograph to measure the amplitude of the earthquake waves. If is the amplitude measured for the first earthquake and is the amplitude measured for the second earthquake, then the amplitudes and magnitudes of the two earthquakes satisfy the following equation:   Consider an earthquake that measures 8 on the Richter scale and an earthquake that measures 7 on the Richter scale. Then,   Therefore,   which implies or Since is 10 times the size of we say that the first earthquake is 10 times as intense as the second earthquake. On the other hand, if one earthquake measures 8 on the Richter scale and another measures 6, then the relative intensity of the two earthquakes satisfies the equation   Therefore, That is, the first earthquake is 100 times more intense than the second earthquake.  How can we use logarithmic functions to compare the relative severity of the magnitude 9 earthquake in Japan in 2011 with the magnitude 7.3 earthquake in Haiti in 2010?    To compare the Japan and Haiti earthquakes, we can use an equation presented earlier:   Therefore, and we conclude that the earthquake in Japan was approximately times more intense than the earthquake in Haiti.   "
},
{
  "id": "sec_Ch1Sec5-5-30",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-5-30",
  "type": "Checkpoint",
  "number": "1.5.30",
  "title": "",
  "body": "  Compare the relative severity of a magnitude earthquake with a magnitude earthquake.    The magnitude earthquake is roughly times as severe as the magnitude earthquake.      "
},
{
  "id": "sec_Ch1Sec5-6-2-1",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic functions "
},
{
  "id": "CNX_Calc_Figure_01_05_006",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_006",
  "type": "Figure",
  "number": "1.5.31",
  "title": "",
  "body": "  \"A photograph of a spider web collecting dew drops.\"  The shape of a strand of silk in a spider’s web can be described in terms of a hyperbolic function. The same shape applies to a chain or cable hanging from two supports with only its own weight. (credit: “Mtpaley”, Wikimedia Commons)  "
},
{
  "id": "sec_Ch1Sec5-6-2-3",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-2-3",
  "type": "Definition",
  "number": "1.5.32",
  "title": "",
  "body": " Hyperbolic cosine   Hyperbolic sine   Hyperbolic tangent   Hyperbolic cosecant   Hyperbolic secant   Hyperbolic cotangent   "
},
{
  "id": "CNX_Calc_Figure_01_05_007",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_007",
  "type": "Figure",
  "number": "1.5.33",
  "title": "",
  "body": "  \"An image of a graph. The x axis runs from -1 to 3 and the y axis runs from -3 to 3. The graph is of the relation “(x squared) - (y squared) -1”. The left most point of the relation is at the x intercept, which is at the point (1, 0). From this point the relation both increases and decreases in curves as x increases. This relation is known as a hyperbola and it resembles a sideways “U” shape. There is a point plotted on the graph of the relation labeled “(cosh(1), sinh(1))”, which is at the approximate point (1.5, 1.2).\"  The unit hyperbola  "
},
{
  "id": "CNX_Calc_Figure_01_05_008",
  "level": "2",
  "url": "sec_Ch1Sec5.html#CNX_Calc_Figure_01_05_008",
  "type": "Figure",
  "number": "1.5.34",
  "title": "",
  "body": "  \"An image of six graphs. Each graph has an x axis that runs from -3 to 3 and a y axis that runs from -4 to 4. The first graph is of the function “y = cosh(x)”, which is a hyperbola. The function decreases until it hits the point (0, 1), where it begins to increase. There are also two functions that serve as a boundary for this function. The first of these functions is “y = (1\/2)(e to power of -x)”, a decreasing curved function and the second of these functions is “y = (1\/2)(e to power of x)”, an increasing curved function. The function “y = cosh(x)” is always above these two functions without ever touching them. The second graph is of the function “y = sinh(x)”, which is an increasing curved function. There are also two functions that serve as a boundary for this function. The first of these functions is “y = (1\/2)(e to power of x)”, an increasing curved function and the second of these functions is “y = -(1\/2)(e to power of -x)”, an increasing curved function that approaches the x axis without touching it. The function “y = sinh(x)” is always between these two functions without ever touching them. The third graph is of the function “y = sech(x)”, which increases until the point (0, 1), where it begins to decrease. The graph of the function has a hump. The fourth graph is of the function “y = csch(x)”. On the left side of the y axis, the function starts slightly below the x axis and decreases until it approaches the y axis, which it never touches. On the right side of the y axis, the function starts slightly to the right of the y axis and decreases until it approaches the x axis, which it never touches. The fifth graph is of the function “y = tanh(x)”, an increasing curved function. There are also two functions that serve as a boundary for this function. The first of these functions is “y = 1”, a horizontal line function and the second of these functions is “y = -1”, another horizontal line function. The function “y = tanh(x)” is always between these two functions without ever touching them. The sixth graph is of the function “y = coth(x)”. On the left side of the y axis, the function starts slightly below the boundary line “y = 1” and decreases until it approaches the y axis, which it never touches. On the right side of the y axis, the function starts slightly to the right of the y axis and decreases until it approaches the boundary line “y = -1”, which it never touches.\"  The hyperbolic functions involve combinations of and  "
},
{
  "id": "sec_Ch1Sec5-6-4-3",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-4-3",
  "type": "Note",
  "number": "1.5.35",
  "title": "Rule: Identities Involving Hyperbolic Functions.",
  "body": " Rule: Identities Involving Hyperbolic Functions             "
},
{
  "id": "sec_Ch1Sec5-6-4-4",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-4-4",
  "type": "Example",
  "number": "1.5.36",
  "title": "Evaluating Hyperbolic Functions.",
  "body": " Evaluating Hyperbolic Functions    Simplify  If find the values of the remaining five hyperbolic functions.      Using the definition of the function, we write  Using the identity we see that Since for all we must have Then, using the definitions for the other hyperbolic functions, we conclude that and    "
},
{
  "id": "sec_Ch1Sec5-6-4-5",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-4-5",
  "type": "Checkpoint",
  "number": "1.5.37",
  "title": "",
  "body": "  Simplify       Use the definition of the cosh function and the power property of logarithm functions.   "
},
{
  "id": "sec_Ch1Sec5-6-5-2",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse hyperbolic functions "
},
{
  "id": "sec_Ch1Sec5-6-5-3",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-5-3",
  "type": "Definition",
  "number": "1.5.38",
  "title": "",
  "body": " Inverse Hyperbolic Functions   "
},
{
  "id": "sec_Ch1Sec5-6-5-12",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-5-12",
  "type": "Example",
  "number": "1.5.39",
  "title": "Evaluating Inverse Hyperbolic Functions.",
  "body": " Evaluating Inverse Hyperbolic Functions   Evaluate each of the following expressions.         "
},
{
  "id": "sec_Ch1Sec5-6-5-13",
  "level": "2",
  "url": "sec_Ch1Sec5.html#sec_Ch1Sec5-6-5-13",
  "type": "Checkpoint",
  "number": "1.5.40",
  "title": "",
  "body": "  Evaluate       Use the definition of and simplify.   "
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
},
{
  "id": "Ch2Sec3LimitDef",
  "level": "1",
  "url": "Ch2Sec3LimitDef.html",
  "type": "Section",
  "number": "2.2",
  "title": "Formal <span class=\"process-math\">\\(\\delta-\\varepsilon\\)<\/span> Definition of a Limit",
  "body": " Formal Definition of a Limit   Learning Objectives   Describe the definition of a limit.  Apply the definition to find the limit of a function.  Describe the definitions of one-sided limits   So far, you’ve built an intuitive understanding of limits using tables, graphs, one-sided behavior, and examples of when limits fail to exist. Now we turn to the formal, precise, mathematical definition of a limit: the ( delta epsilon ) definition . This is often one of the most challenging definitions in early calculus but learning it pays off. Understanding this definition is the key that opens the door to a better understanding of calculus.    The Core Idea: Quantifying Closeness  The intuitive meaning of a limit is   We translate what \"gets close\" means in mathematical language.   Describing closeness in  Saying that \" is within units of \" means is a solution to the inequality This simply means the distance between and is less than   Because the limit can ignore the value of at (see ), we can exclude it from the inequality by specifying This means the distance between and is less than  and      Describing closeness in  Similarly, \" is within units of \" can be written This means the distance between the -values of the function and the limit is less than     Putting these ideas together  The formal definition rewrites the informal statement as This is the heart of the definition.     Let be defined for all over an open interval containing . Let be a real number. Then if, for every there exists a , such that if , then .    Let's look at , which breaks down the definition and translates each part.   Translation of the Definition of a Limit    Definition  Translation    For every  For every positive distance from    there exists ,  There is a positive distance from    such that  such that    if , then  if is closer than to and , then is closer than to     We can get a better handle on this definition by looking at the definition geometrically. shows possible values of for various choices of for a given function , a number , and a limit .  Notice that as we choose smaller values of (the distance between the function and the limit), we can always find a small enough so that we have chosen an value within of , then the value of is within of the limit .    \"Three zoomed in images of a function f(x) over the interval \"   These graphs show possible values of given successively smaller values of . FIX THE IMAGE DESCRIPTION     Visit the following site to experiment with finding values of for selected values of .    Visualizer      Proving a Statement About the Limit of a Specific Function   Prove that     Let .  Choose .  Assume .  Thus,   Therefore,     We started with and used our assumption in a key part of the chain of inequalities to get to be less than .  We could just as easily have manipulated the assumed inequality to arrive at as follows:   Therefore, . (Having completed the proof, we state what we have accomplished.)     Problem-Solving Strategy: Proving that for a Specific Function    Let's begin the proof with the following statement: Let .    Next we need to obtain a value for . After we have obtained this value, we make the following statement, filling in the blank with our choice of : Choose     The next statement in the proof should be (at this point, we fill in our given value for ): Assume .    Next, based on this assumption, we need to show that , where and are our function and our limit . At some point, we need to use .    We conclude our proof with the statement: Therefore, .   >   Proving a Statement about a Limit   Complete the proof that by filling in the blanks.  Let .  Choose .  Assume .  Thus, .    We begin by filling in the blanks where the choices are specified by the definition. Thus we have  Let .  Choose .  Assume (or equivalently, ).  Thus, .  Focusing on the final line of the proof, we see that we should choose .  We now complete the final write-up of the proof:  Let .  Choose .  Assume (or equivalently, ).  Thus,      Proving a Statement about the Limit of a Specific Function (Geometric Approach)   Prove that       Let . The first part of the definition begins For every , so we must prove that whatever follows is true no matter what positive value of is chosen. By stating Let , we signal our intent to do so.    Without loss of generality, assume . Two questions present themselves: Why do we want and why is it okay to make this assumption?  In answer to the first question: Later on, in the process of solving for , we will discover that involves the quantity . Consequently, we need .  In answer to the second question: If we can find that works for , then it will work for any as well. Keep in mind that, although it is always okay to put an upper bound on , it is never okay to put a lower bound (other than zero) on     Choose . shows how we made this choice of .    \"Three zoomed in images of a function f(x) over the interval\"   This graph shows how we find geometrically for a given for the proof in . FIX THE IMAGE DESCRIPTION     We must show: If , then , so we must begin by assuming We don't really need (in other words, ) for this proof. Since , it is okay to drop . Hence,   Recall that . Thus, and consequently . We also use here.  We might ask at this point: Why did we substitute for on the left-hand side of the inequality and on the right-hand side of the inequality? If we look at , we see that corresponds to the distance on the left of on the -axis and corresponds to the distance on the right. Thus,   We simplify the expression on the left: Then, we add to all parts of the inequality: We square all parts of the inequality. It is okay to do so, since all parts of the inequality are positive: We subtract from all parts of the inequality: Last,     Therefore,        Proving a Statement about the Nonexistence of a Limit   Let Prove that does not exist.    One way to prove that a limit does not exist is to show that, for any possible value one might think the limit equals, one can find an such that no possible works in the definition.  Suppose a person think the limit exists, and (some common values of might be or , but we'll stick with a generic real number). Let . We show that there is no possible that would satisfy .  The inequality can be written as For any , the solution to are values . This interval contains both positive and negative numbers. When is positive, and when is negative, . Since these two values of are units, apart, it would be impossible for them both to be within of any number .  That is, if then it can't also be true that and vice-versa. Any will result in an interval with both positive and negative values, thus no value of can satisfy the defintion.      One-Sided Limits  Just as we first gained an intuitive understanding of limits and then moved on to a more rigorous definition of limits, we now revisit one-sided limits through that same lens. To do this, we modify the definition of a limit to give formal definitions for limits from the left and from the right at a point.  These definitions require only slight modifications from the definition of the limit. In the definition of the limit from the right, the inequality replaces , which ensures that we only consider values of that are greater than (to the right of) .  Similarly, in the definition of the limit from the left, the inequality replaces , which ensures that we only consider values of that are less than (to the left of) .     Limit from the Right:  Let be defined over an open interval of the form where . Then, if for every , there exists a such that if , then     Limit from the Left  Let be defined over an open interval of the form where . Then, if for every , there exists a such that if , then .      Proving a Statement about a Limit From the Right   Prove that     Let .  Choose . Since we ultimately want , we manipulate this inequality to get , or equivalently, , making a clear choice.  We may also determine geometrically as shown in     \"Three zoomed in images of a function f(x) over the interval\" >   This graph shows how we find for the proof in . FIX THE IMAGE DESCRIPTION   Assume . Thus, . Hence, . Finally, .  Therefore, .    We do not normally use the definition to compute everyday limits like the ones you've seen earlier. Instead, the definition is used to prove the limit laws you'll see in the next section. Once these theorems are proven, you can use them freely without going back to and each time.   "
},
{
  "id": "Ch2Sec3LimitDef-2-3",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#Ch2Sec3LimitDef-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "( delta epsilon ) definition "
},
{
  "id": "def-limit",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#def-limit",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be defined for all over an open interval containing . Let be a real number. Then if, for every there exists a , such that if , then .   "
},
{
  "id": "deltaepsilondeftable",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#deltaepsilondeftable",
  "type": "Table",
  "number": "2.2.2",
  "title": "Translation of the <span class=\"process-math\">\\(\\delta-\\varepsilon\\)<\/span> Definition of a Limit",
  "body": " Translation of the Definition of a Limit    Definition  Translation    For every  For every positive distance from    there exists ,  There is a positive distance from    such that  such that    if , then  if is closer than to and , then is closer than to    "
},
{
  "id": "CNX_Calc_Figure_02_05_001",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#CNX_Calc_Figure_02_05_001",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": "  \"Three zoomed in images of a function f(x) over the interval \"   These graphs show possible values of given successively smaller values of . FIX THE IMAGE DESCRIPTION  "
},
{
  "id": "subsec-coreidea-13",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-13",
  "type": "Insight",
  "number": "2.2.4",
  "title": "",
  "body": "  Visit the following site to experiment with finding values of for selected values of .    Visualizer    "
},
{
  "id": "subsec-coreidea-14",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-14",
  "type": "Example",
  "number": "2.2.5",
  "title": "Proving a Statement About the Limit of a Specific Function.",
  "body": " Proving a Statement About the Limit of a Specific Function   Prove that     Let .  Choose .  Assume .  Thus,   Therefore,     We started with and used our assumption in a key part of the chain of inequalities to get to be less than .  We could just as easily have manipulated the assumed inequality to arrive at as follows:   Therefore, . (Having completed the proof, we state what we have accomplished.)   "
},
{
  "id": "subsec-coreidea-15",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-15",
  "type": "Note",
  "number": "2.2.6",
  "title": "Problem-Solving Strategy: Proving that <span class=\"process-math\">\\(\\ds \\lim_{x\\to a}f(x)=L\\)<\/span> for a Specific Function <span class=\"process-math\">\\(f(x)\\)<\/span>.",
  "body": " Problem-Solving Strategy: Proving that for a Specific Function    Let's begin the proof with the following statement: Let .    Next we need to obtain a value for . After we have obtained this value, we make the following statement, filling in the blank with our choice of : Choose     The next statement in the proof should be (at this point, we fill in our given value for ): Assume .    Next, based on this assumption, we need to show that , where and are our function and our limit . At some point, we need to use .    We conclude our proof with the statement: Therefore, .   > "
},
{
  "id": "subsec-coreidea-16",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-16",
  "type": "Example",
  "number": "2.2.7",
  "title": "Proving a Statement about a Limit.",
  "body": " Proving a Statement about a Limit   Complete the proof that by filling in the blanks.  Let .  Choose .  Assume .  Thus, .    We begin by filling in the blanks where the choices are specified by the definition. Thus we have  Let .  Choose .  Assume (or equivalently, ).  Thus, .  Focusing on the final line of the proof, we see that we should choose .  We now complete the final write-up of the proof:  Let .  Choose .  Assume (or equivalently, ).  Thus,    "
},
{
  "id": "geometriclimitproof",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#geometriclimitproof",
  "type": "Example",
  "number": "2.2.8",
  "title": "Proving a Statement about the Limit of a Specific Function (Geometric Approach).",
  "body": " Proving a Statement about the Limit of a Specific Function (Geometric Approach)   Prove that       Let . The first part of the definition begins For every , so we must prove that whatever follows is true no matter what positive value of is chosen. By stating Let , we signal our intent to do so.    Without loss of generality, assume . Two questions present themselves: Why do we want and why is it okay to make this assumption?  In answer to the first question: Later on, in the process of solving for , we will discover that involves the quantity . Consequently, we need .  In answer to the second question: If we can find that works for , then it will work for any as well. Keep in mind that, although it is always okay to put an upper bound on , it is never okay to put a lower bound (other than zero) on     Choose . shows how we made this choice of .    \"Three zoomed in images of a function f(x) over the interval\"   This graph shows how we find geometrically for a given for the proof in . FIX THE IMAGE DESCRIPTION     We must show: If , then , so we must begin by assuming We don't really need (in other words, ) for this proof. Since , it is okay to drop . Hence,   Recall that . Thus, and consequently . We also use here.  We might ask at this point: Why did we substitute for on the left-hand side of the inequality and on the right-hand side of the inequality? If we look at , we see that corresponds to the distance on the left of on the -axis and corresponds to the distance on the right. Thus,   We simplify the expression on the left: Then, we add to all parts of the inequality: We square all parts of the inequality. It is okay to do so, since all parts of the inequality are positive: We subtract from all parts of the inequality: Last,     Therefore,      "
},
{
  "id": "subsec-coreidea-18",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-18",
  "type": "Example",
  "number": "2.2.10",
  "title": "Proving a Statement about the Nonexistence of a Limit.",
  "body": " Proving a Statement about the Nonexistence of a Limit   Let Prove that does not exist.    One way to prove that a limit does not exist is to show that, for any possible value one might think the limit equals, one can find an such that no possible works in the definition.  Suppose a person think the limit exists, and (some common values of might be or , but we'll stick with a generic real number). Let . We show that there is no possible that would satisfy .  The inequality can be written as For any , the solution to are values . This interval contains both positive and negative numbers. When is positive, and when is negative, . Since these two values of are units, apart, it would be impossible for them both to be within of any number .  That is, if then it can't also be true that and vice-versa. Any will result in an interval with both positive and negative values, thus no value of can satisfy the defintion.   "
},
{
  "id": "def-onesidedlimitdef",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#def-onesidedlimitdef",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "   Limit from the Right:  Let be defined over an open interval of the form where . Then, if for every , there exists a such that if , then     Limit from the Left  Let be defined over an open interval of the form where . Then, if for every , there exists a such that if , then .    "
},
{
  "id": "ex-onesidedproof",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#ex-onesidedproof",
  "type": "Example",
  "number": "2.2.12",
  "title": "Proving a Statement about a Limit From the Right.",
  "body": " Proving a Statement about a Limit From the Right   Prove that     Let .  Choose . Since we ultimately want , we manipulate this inequality to get , or equivalently, , making a clear choice.  We may also determine geometrically as shown in     \"Three zoomed in images of a function f(x) over the interval\" >   This graph shows how we find for the proof in . FIX THE IMAGE DESCRIPTION   Assume . Thus, . Hence, . Finally, .  Therefore, .   "
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
