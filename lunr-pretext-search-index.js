var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec_Ch1Sec1",
  "level": "1",
  "url": "sec_Ch1Sec1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Review of Functions",
  "body": " Review of Functions   Learning Objectives   Use functional notation to evaluate a function.  Determine the domain and range of a function.  Draw the graph of a function.  Find the zeros of a function.  Recognize a function from a table of values.  Make new functions from two or more given functions.  Describe the symmetry properties of a function.   In this section, we provide a formal definition of a function and examine several ways in which functions are represented—namely, through tables, formulas, and graphs. We study formal notation and terms related to functions. We also define composition of functions and symmetry properties. Most of this material will be a review for you, but it serves as a handy reference to remind you of some of the algebraic techniques useful for working with functions.    Functions  Given two sets and , a set with elements that are ordered pairs where is an element of and is an element of , is a relation from to . A relation from to defines a relationship between those two sets. A function is a special type of relation in which each element of the first set is related to exactly one element of the second set. The element of the first set is called the input ; the element of the second set is called the output . Functions are used all the time in mathematics to describe relationships between two sets. For any function, when we know the input, the output is determined, so we say that the output is a function of the input. For example, the area of a square is determined by its side length, so we say that the area (the output) is a function of its side length (the input). The velocity of a ball thrown in the air can be described as a function of the amount of time the ball is in the air. The cost of mailing a package is a function of the weight of the package. Since functions have so many uses, it is important to have precise definitions and terminology to study them.   A function  consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the domain of the function. The set of outputs is called the range of the function.   For example, consider the function , where the domain is the set of all real numbers and the rule is to square the input. Then, the input is assigned to the output . Since every nonnegative real number has a real-value square root, every nonnegative number is an element of the range of this function. Since there is no real number with a square that is negative, the negative real numbers are not elements of the range. We conclude that the range is the set of nonnegative real numbers. For a general function with domain , we often use to denote the input and to denote the output associated with . When doing so, we refer to as the independent variable and as the dependent variable , because it depends on . Using function notation, we write and we read this equation as “ equals of .” For the squaring function described earlier, we write   The concept of a function can be visualized using Figure , Figure and Figures .   A function can be visualized as an input\/output device.   An image with three items. The first item is text that reads Input. An arrow points from the first item to the second item, which is a box with the label function. An arrow points from the second item to the third item, which is text that reads Output, f(x).     A function maps every element in the domain to exactly one element in the range. Although each input can be sent to only one output, two different inputs can be sent to the same output.   An image with two items. The first item is a bubble labeled domain. Within the bubble are the numbers 1, 2, 3, and 4. An arrow with the label f; points from the first item to the second item, which is a bubble labeled range. Within this bubble are the numbers 2, 4, and 6. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 2 in the domain bubble to the 4 in the range bubble. An arrow points from the 3 in the domain bubble to the 2 in the range bubble. An arrow points from the 4 in the domain bubble to the 2 in the range bubble.     In this case, a graph of a function f has a domain of {1,2,3} and a range of {1,2}. The independent variable is x and the dependent variable is y.   An image of a graph. The y axis runs from 0 to 3 and has the label dependent variable, y = f(x). The x axis runs from 0 to 5 and has the label independent variable, x. There are three points on the graph. The first point is at (1, 2) and has the label (1, f(1)) = (1, 2). The second point is at (2, 1) and has the label (2, f(2))=(2,1). The third point is at (3, 2) and has the label (3, f(3)) = (3,2). There is text along the y axis that reads range = \\{1, 2} and text along the x axis that reads domain = \\{1,2,3}     Visit this applet link to see more about graphs of functions.   We can also visualize a function by plotting points in the coordinate plane where . The graph of a function is the set of all these points. For example, consider the function where the domain is the set and the rule is In Figure , we plot a graph of this function.   Here we see a graph of the function with domain and rule The graph consists of the points for all in the domain.   An image of a graph. The y axis runs from 0 to 5. The x axis runs from 0 to 5. There are three points on the graph at (1, 2), (2, 1), and (3, 0). There is text along the y axis that reads “range = {0,1,2}” and text along the x axis that reads “domain = {1,2,3}”.    Every function has a domain. However, sometimes a function is described by an equation, as in with no specific domain given. In this case, the domain is taken to be the set of all real numbers for which is a real number. For example, since any real number can be squared, if no other domain is specified, we consider the domain of to be the set of all real numbers. On the other hand, the square root function only gives a real output if is nonnegative. Therefore, the domain of the function is the set of nonnegative real numbers, sometimes called the natural domain .  For the functions and the domains are sets with an infinite number of elements. Clearly we cannot list all these elements. When describing a set with an infinite number of elements, it is often helpful to use set-builder or interval notation. When using set-builder notation to describe a subset of all real numbers, denoted we write   We read this as the set of real numbers such that has some property. For example, if we were interested in the set of real numbers that are greater than one but less than five, we could denote this set using set-builder notation by writing   A set such as this, which contains all numbers greater than and less than can also be denoted using the interval notation  Therefore,   The numbers and are called the endpoints of this set. If we want to consider the set that includes the endpoints, we would denote this set by writing   We can use similar notation if we want to include one of the endpoints, but not the other. To denote the set of nonnegative real numbers, we would use the set-builder notation   The smallest number in this set is zero, but this set does not have a largest number. Using interval notation, we would use the symbol which refers to positive infinity, and we would write the set as   It is important to note that is not a real number. It is used symbolically here to indicate that this set includes all real numbers greater than or equal to zero. Similarly, if we wanted to describe the set of all nonpositive numbers, we could write   Here, the notation refers to negative infinity, and it indicates that we are including all numbers less than or equal to zero, no matter how small. The set   refers to the set of all real numbers.  Some functions are defined using different equations for different parts of their domain. These types of functions are known as piecewise-defined functions . For example, suppose we want to define a function with a domain that is the set of all real numbers such that for and for We denote this function by writing   When evaluating this function for an input the equation to use depends on whether or For example, since we use the fact that for and see that On the other hand, for we use the fact that for and see that   Evaluating Functions   For the function evaluate         Substitute the given value for in the formula for         For evaluate and    and    Substitute and for in the formula for       For each of the following functions, determine the a. domain and b. range.        Finding Domain and Range    Consider    Since is a real number for any real number the domain of is the interval  Since we know Therefore, the range must be a subset of To show that every element in this set is in the range, we need to show that for a given in that set, there is a real number such that Solving this equation for we see that we need such that This equation is satisfied as long as there exists a real number such that Since the square root is well-defined. We conclude that for and therefore the range is   Consider    To find the domain of we need the expression Solving this inequality, we conclude that the domain is  To find the range of we note that since Therefore, the range of must be a subset of the set To show that every element in this set is in the range of we need to show that for all in this set, there exists a real number in the domain such that Let Then, if and only if Solving this equation for we see that must solve the equation Since such an could exist. Squaring both sides of this equation, we have Therefore, we need which implies We just need to verify that is in the domain of Since the domain of consists of all real numbers greater than or equal to and there does exist an in the domain of We conclude that the range of is    Consider   Since is defined when the denominator is nonzero, the domain is  To find the range of we need to find the values of such that there exists a real number in the domain with the property that Solving this equation for we find that Therefore, as long as there exists a real number in the domain such that Thus, the range is        Find the domain and range for    Domain = range =    Use      Representing Functions   Typically, a function is represented using one or more of the following tools:   A table  A graph  A formula   We can identify a function in each form, but we can also use them together. For instance, we can plot on a graph the values from a table or create a table from a formula.    Tables  Functions described using a table of values arise frequently in real-world applications. Consider the following simple example. We can describe temperature on a given day as a function of time of day. Suppose we record the temperature every hour for a 24-hour period starting at midnight. We let our input variable be the time after midnight, measured in hours, and the output variable be the temperature hours after midnight, measured in degrees Fahrenheit. We record our data in Table .   Temperature as a Function of Time of Day    Hours after Midnight  Temperature ( F)  Hours after Midnight  Temperature ( F)    0  58  12  84    1  54  13  85    2  53  14  85    3  52  15  83    4  52  16  82    5  55  17  80    6  60  18  77    7  64  19  74    8  72  20  69    9  75  21  65    10  78  22  60    11  80  23  58     We can see from the table that temperature is a function of time, and the temperature decreases, then increases, and then decreases again. However, we cannot get a clear picture of the behavior of the function without graphing it.    Graphs  Given a function described by a table, we can provide a visual picture of the function in the form of a graph. Graphing the temperatures listed in Table can give us a better idea of their fluctuation throughout the day. Figure shows the plot of the temperature function.    \"An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58).\"   The graph of the data from Table shows temperature as a function of time.   From the points plotted on the graph in Figure , we can visualize the general shape of the graph. It is often useful to connect the dots in the graph, which represent the data from the table. In this example, although we cannot make any definitive conclusion regarding what the temperature was at any time for which the temperature was not recorded, given the number of data points collected and the pattern in these points, it is reasonable to suspect that the temperatures at other times followed a similar pattern, as we can see in Figure .    \"An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58). A line connects all the points on the graph.\"   Connecting the dots in Figure shows the general pattern of the data.     Algebraic Formulas  Sometimes we are not given the values of a function in table form, rather we are given the values in an explicit formula. Formulas arise in many applications. For example, the area of a circle of radius is given by the formula When an object is thrown upward from the ground with an initial velocity ft\/s, its height above the ground from the time it is thrown until it hits the ground is given by the formula When dollars are invested in an account at an annual interest rate compounded continuously, the amount of money after years is given by the formula Algebraic formulas are important tools to calculate function values. Often we also represent these functions visually in graph form.  Given an algebraic formula for a function the graph of is the set of points where is in the domain of and is in the range. To graph a function given by a formula, it is helpful to begin by using the formula to create a table of inputs and outputs. If the domain of consists of an infinite number of values, we cannot list all of them, but because listing some of the inputs and outputs can be very useful, it is often a good way to begin.  When creating a table of inputs and outputs, we typically check to determine whether zero is an output. Those values of where are called the zeros of a function . For example, the zeros of are The zeros determine where the graph of intersects the -axis, which gives us more information about the shape of the graph of the function. The graph of a function may never intersect the x -axis, or it may intersect multiple (or even infinitely many) times.  Another point of interest is the -intercept, if it exists. The -intercept is given by  Since a function has exactly one output for each input, the graph of a function can have, at most, one -intercept. If is in the domain of a function then has exactly one -intercept. If is not in the domain of then has no -intercept. Similarly, for any real number if is in the domain of there is exactly one output and the line intersects the graph of exactly once. On the other hand, if is not in the domain of is not defined and the line does not intersect the graph of This property is summarized in the vertical line test .   Rule: Vertical Line Test  Given a function every vertical line that may be drawn intersects the graph of no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.   We can use this test to determine whether a set of plotted points represents the graph of a function ( Figure ).    \"An image of two graphs. The first graph is labeled “a” and is of the function “y = f(x)”. Three vertical lines run through 3 points on the function, each vertical line only passing through the function once. The second graph is labeled “b” and is of the relation “y not equal to f(x)”. Two vertical lines run through the relation, one line intercepting the relation at 3 points and the other line intercepting the relation at 3 different points.\"   (a) The set of plotted points represents the graph of a function because every vertical line intersects the set of points, at most, once. (b) The set of plotted points does not represent the graph of a function because some vertical lines intersect the set of points more than once.    Finding Zeros and -Intercepts of a Function   Consider the function   Find all zeros of  Find the -intercept (if any).  Sketch a graph of      To find the zeros, solve We discover that has one zero at  The -intercept is given by  Given that is a linear function of the form that passes through the points and we can sketch the graph of ( Figure ).   \"An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the function “f(x) = -4x + 2”, which is a decreasing straight line. There are two points plotted on the function at (0, 2) and (1\/2, 0).\"   The function is a line with -intercept and -intercept       Using Zeros and -Intercepts to Sketch a Graph   Consider the function   Find all zeros of  Find the -intercept (if any).  Sketch a graph of      To find the zeros, solve This equation implies Since for all this equation has no solutions, and therefore has no zeros.  The -intercept is given by  To graph this function, we make a table of values. Since we need we need to choose values of We choose values that make the square-root function easy to evaluate.                  Making use of the table and knowing that, since the function is a square root, the graph of should be similar to the graph of we sketch the graph ( Figure ).    \"An image of a graph. The y axis runs from -2 to 4 and the x axis runs from -3 to 2. The graph is of the function “f(x) = (square root of x + 3) + 1”, which is an increasing curved function that starts at the point (-3, 1). There are 3 points plotted on the function at (-3, 1), (-2, 2), and (1, 3). The function has a y intercept at (0, 1 + square root of 3).\"   The graph of has a -intercept but no -intercepts.       Find the zeros of       Factor the polynomial.     Finding the Height of a Free-Falling Object   If a ball is dropped from a height of ft, its height at time is given by the function where is measured in feet and is measured in seconds. The domain is restricted to the interval where is the time when the ball is dropped and is the time when the ball hits the ground.   Create a table showing the height when and Using the data from the table, determine the domain for this function. That is, find the time when the ball hits the ground.  Sketch a graph of         Height as a Function of Time                       Since the ball hits the ground when the domain of this function is the interval     \"An image of a graph. The y axis runs from 0 to 100 and is labeled “s(t), height in feet”. The x axis runs from 0 to 3 and is labeled “t, time in seconds”. The graph is of the function “s(t) = -16 t squared + 100”, which is a decreasing curved function that starts at the y intercept point (0, 100). There are 6 points plotted on the function at (0, 100), (0.5, 96), (1, 84), (1.5, 64), (2, 36), and (2.5, 0). The function has a x intercept at the last point (2.5, 0).\">        Note that for this function and the function graphed in , the values of are getting smaller as is getting larger. A function with this property is said to be decreasing. On the other hand, for the function graphed in , the values of are getting larger as the values of are getting larger. A function with this property is said to be increasing. It is important to note, however, that a function can be increasing on some interval or intervals and decreasing over a different interval or intervals. For example, using our temperature function in , we can see that the function is decreasing on the interval increasing on the interval and then decreasing on the interval We make the idea of a function increasing or decreasing over a particular interval more precise in the next definition.   We say that a function is increasing on the interval if for all   We say is strictly increasing on the interval  if for all   We say that a function is decreasing on the interval if for all   We say that a function is strictly decreasing on the interval  if for all    For example, the function is increasing on the interval because whenever On the other hand, the function is decreasing on the interval because whenever ( ).    \"An image of two graphs. The first graph is labeled “a” and is of the function “f(x) = 3x”, which is an increasing straight line that passes through the origin. The second graph is labeled “b” and is of the function “f(x) = -x cubed”, which is curved function that decreases until the function hits the origin where it becomes level, then decreases again after the origin.\"   (a) The function is increasing on the interval (b) The function is decreasing on the interval      Combining Functions   Now that we have reviewed the basic characteristics of functions, we can see what happens to these properties when we combine functions in different ways, using basic mathematical operations to create new functions. For example, if the cost for a company to manufacture items is described by the function and the revenue created by the sale of items is described by the function then the profit on the manufacture and sale of items is defined as Using the difference between two functions, we created a new function.  Alternatively, we can create a new function by composing two functions. For example, given the functions and the composite function is defined such that   The composite function is defined such that   Note that these two new functions are different from each other.    Combining Functions with Mathematical Operators  To combine functions using mathematical operators, we simply write the functions with the operator and simplify. Given two functions and we can define four new functions:    Combining Functions Using Mathematical Operations   Given the functions and find each of the following functions and state its domain.           The domain of this function is the interval  The domain of this function is the interval  The domain of this function is the interval  The domain of this function is       For and find and state its domain.    The new function is a quotient of two functions. For what values of is the denominator zero?    The domain is      Function Composition  When we compose functions, we take a function of a function. For example, suppose the temperature on a given day is described as a function of time (measured in hours after midnight) as in . Suppose the cost to heat or cool a building for 1 hour, can be described as a function of the temperature Combining these two functions, we can describe the cost of heating or cooling a building as a function of time by evaluating We have defined a new function, denoted which is defined such that for all in the domain of This new function is called a composite function. We note that since cost is a function of temperature and temperature is a function of time, it makes sense to define this new function It does not make sense to consider because temperature is not a function of cost.   Consider the function with domain and range and the function with domain and range If is a subset of then the composite function  is the function with domain such that    A composite function can be viewed in two steps. First, the function maps each input in the domain of to its output in the range of Second, since the range of is a subset of the domain of the output is an element in the domain of and therefore it is mapped to an output in the range of In , we see a visual image of a composite function.    \"An image with three items. The first item is a blue bubble that has two labels: “domain of f” and “domain of g of f”. This item contains the numbers 1, 2, and 3. The second item is two bubbles: an orange bubble labeled “domain of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of f”. The blue bubble contains the numbers 0 and 1, which are thus also contained within the larger orange bubble. The orange bubble contains two numbers not contained within the smaller blue bubble, which are 2 and 3. The third item is two bubbles: an orange bubble labeled “range of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of g of f”. The blue bubble contains the numbers 4 and 5, which are thus also contained within the larger orange bubble. The orange bubble contains one number not contained within the smaller blue bubble, which is the number 3. The first item points has a blue arrow with the label “f” that points to the blue bubble in the second item. The orange bubble in the second item has an orange arrow labeled “g” that points the orange bubble in the third item. The first item has a blue arrow labeled “g of f” which points to the blue bubble in the third item. There are three blue arrows pointing from numbers in the first item to the numbers contained in the blue bubble of the second item. The first blue arrow points from the 1 to the 0, the second blue arrow points from the 2 to the 1, and the third blue arrow points from the 3 to the 0. There are 4 orange arrows pointing from the numbers contained in the orange bubble in the second item, including those also contained in the blue bubble of the second item, to the numbers contained in the orange bubble of the third item, including the numbers in the blue bubble of the third item. The first orange arrow points from 2 to 3, the second orange arrow points from 3 to 5, the third orange arrow points from 0 to 4, and the fourth orange arrow points from 1 to 5.\"   For the composite function we have and    Compositions of Functions Defined by Formulas   Consider the functions and   Find and state its domain and range.  Evaluate  Find and state its domain and range.  Evaluate     We can find the formula for in two different ways. We could write Alternatively, we could write Since for all real numbers the domain of is the set of all real numbers. Since the range is, at most, the interval To show that the range is this entire interval, we let and solve this equation for to show that for all in the interval there exists a real number such that Solving this equation for we see that which implies that If is in the interval the expression under the radical is nonnegative, and therefore there exists a real number such that We conclude that the range of is the interval  and  We can find a formula for in two ways. First, we could write Alternatively, we could write The domain of is the set of all real numbers such that To find the range of we need to find all values for which there exists a real number such that Solving this equation for we see that we need to satisfy which simplifies to Finally, we obtain Since is a real number if and only if the range of is the set      In , we can see that This tells us, in general terms, that the order in which we compose functions matters.    Let Let Find        Composition of Functions Defined by Tables   Test  Consider the functions and described by and .                                                 Evaluate  State the domain and range of  Evaluate  State the domain and range of        The domain of is the set Since the range of is the set the range of is the set    The domain of is the set Since the range of is the set the range of is the set      Application Involving a Composite Function   A store is advertising a sale of off all merchandise. Caroline has a coupon that entitles her to an additional off any item, including sale merchandise. If Caroline decides to purchase an item with an original price of dollars, how much will she end up paying if she applies her coupon to the sale price? Solve this problem by using a composite function.    Since the sale price is off the original price, if an item is dollars, its sale price is given by Since the coupon entitles an individual to off the price of any item, if an item is dollars, the price, after applying the coupon, is given by Therefore, if the price is originally dollars, its sale price will be and then its final price after the coupon will be      If items are on sale for off their original price, and a customer has a coupon for an additional off, what will be the final price for an item that is originally dollars, after applying the coupon to the sale price?       The sale price of an item with an original price of dollars is The coupon price for an item that is dollars is       Symmetry of Functions  The graphs of certain functions have symmetry properties that help us understand the function and the shape of its graph. For example, consider the function shown in (a). If we take the part of the curve that lies to the right of the -axis and flip it over the -axis, it lays exactly on top of the curve to the left of the -axis. In this case, we say the function has symmetry about the -axis . On the other hand, consider the function shown in (b). If we take the graph and rotate it about the origin, the new graph will look exactly the same. In this case, we say the function has symmetry about the origin .    \"An image of two graphs. The first graph is labeled “(a), symmetry about the y-axis” and is of the curved function “f(x) = (x to the 4th) - 2(x squared) - 3”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. This function decreases until it hits the point (-1, -4), which is minimum of the function. Then the graph increases to the point (0,3), which is a local maximum. Then the the graph decreases until it hits the point (1, -4), before it increases again. The second graph is labeled “(b), symmetry about the origin” and is of the curved function “f(x) = x cubed - 4x”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. The graph of the function starts at the x intercept at (-2, 0) and increases until the approximate point of (-1.2, 3.1). The function then decreases, passing through the origin, until it hits the approximate point of (1.2, -3.1). The function then begins to increase again and has another x intercept at (2, 0).\"   (a) A graph that is symmetric about the -axis. (b) A graph that is symmetric about the origin.   If we are given the graph of a function, it is easy to see whether the graph has one of these symmetry properties. But without a graph, how can we determine algebraically whether a function has symmetry? Looking at (a) again, we see that since is symmetric about the -axis, if the point is on the graph, the point is on the graph. In other words, If a function has this property, we say is an even function, which has symmetry about the -axis. For example, is even because   In contrast, looking at (b) again, if a function is symmetric about the origin, then whenever the point is on the graph, the point is also on the graph. In other words, If has this property, we say is an odd function, which has symmetry about the origin. For example, is odd because    If for all in the domain of then is an even function . An even function is symmetric about the -axis.  If for all in the domain of then is an odd function . An odd function is symmetric about the origin.    Even and Odd Functions   Determine whether each of the following functions is even, odd, or neither.         To determine whether a function is even or odd, we evaluate and compare it to and   Therefore, is even.  Now, Furthermore, noting that we see that Therefore, is neither even nor odd.  Therefore, is odd.       Determine whether is even, odd, or neither.    is odd.    Compare with and    One symmetric function that arises frequently is the absolute value function , written as The absolute value function is defined as  . Some students describe this function by stating that it “makes everything positive.” By the definition of the absolute value function, we see that if then and if then However, for Therefore, it is more accurate to say that for all nonzero inputs, the output is positive, but if the output We conclude that the range of the absolute value function is In , we see that the absolute value function is symmetric about the -axis and is therefore an even function.    \"An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -4 to 4. The graph is of the function “f(x) = absolute value of x”. The graph starts at the point (-3, 3) and decreases in a straight line until it hits the origin. Then the graph increases in a straight line until it hits the point (3, 3).\"   The graph of is symmetric about the -axis.    Working with the Absolute Value Function   Find the domain and range of the function    Since the absolute value function is defined for all real numbers, the domain of this function is Since for all the function Therefore, the range is, at most, the set To see that the range is, in fact, this whole set, we need to show that for there exists a real number such that   A real number satisfies this equation as long as   Since we know and thus the right-hand side of the equation is nonnegative, so it is possible that there is a solution. Furthermore,   Therefore, we see there are two solutions:   The range of this function is      For the function find the domain and range.    Domain = range =    for all real numbers      Key Concepts   A function is a mapping from a set of inputs to a set of outputs with exactly one output for each input.  If no domain is stated for a function the domain is considered to be the set of all real numbers for which the function is defined.  When sketching the graph of a function each vertical line may intersect the graph, at most, once.  A function may have any number of zeros, but it has, at most, one -intercept.  To define the composition the range of must be contained in the domain of  Even functions are symmetric about the -axis whereas odd functions are symmetric about the origin.     Key Equations   Composition of two functions   Absolute value function  .    "
},
{
  "id": "subsec_Ch1Sec1Ss1-3",
  "level": "2",
  "url": "sec_Ch1Sec1.html#subsec_Ch1Sec1Ss1-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": " A function  consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the domain of the function. The set of outputs is called the range of the function.  "
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
  "body": " Mathematical Modeling   Learning Objectives   Discuss linear mathematical models for cost, revenue, profit, supply, and demand functions.  Find and analyze the break-even quantity and equilibrium point.  Discuss quadratic mathematical models.  Find and analyze the vertex point of a quadratic function.  Optimize cost, revenue, and profit functions.   A large variety of real-world situations can be described using mathematical models . A mathematical model is a method of simulating real-life situations with mathematical equations. Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately. Models are useful because they help predict future outcomes. Examples of mathematical models include the study of population dynamics, investigations of weather patterns, and predictions of product sales.    Mathematical Models of Cost, Revenue, and Profit   Given the number of units produced, the cost function outputs the amount a business or company must pay in order to produce units. There are typicically two types of costs: fixed and variable. In a linear cost model, the cost function is expressed as   where is the cost per unit also referred to as the variable or marginal cost . Here, the variable cost term depends on the number of units produced. Some examples of variable\/marginal costs are labor, material, or manufacturing costs. Additionally, are the fixed costs which is the amount one must pay to operate a business. The fixed cost is independent of the number of units produced. It often represents the amount one must pay if 0 units are produced since is the -intercept of the cost function. That is, . Some examples of fixed costs are rent, utility bills, or operating costs.  The revenue function outputs the payment received from selling units. In a linear model, the revenue is   where is the selling price per unit which is also called the marginal revenue .  The profit function outputs the net proceeds after paying off the expenses\/costs. That is,  . Notice that the above definition for the profit function holds if either of our revenue or cost functions are non-linear.  If profits are negative, this is considered a and if profits are positive, this is considered a .    Companies often look for the point at which there is no or . This gives you the minimum number of units a company must produce in order to make a profit. The break-even quantity is the number of units needed so that cost and revenue are equal, meaning the total profit is zero. That is, or .  Observe that and will yield the same break-even quantity solution since if and only if .     Peter's ice cream stand has an operating cost of $200 per week. The cost to make an ice cream sundae is $2 and they sell for $6. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of ice cream sundaes sold.   Since our operating costs (fixed costs) are $200 per week and the marginal cost is $2 per ice cream sundae, then . Since the selling price is $6 per ice cream sundae, then . Using and , we can obtain the profit function.     To find the break-even quantity, we may proceed by using two different methods. Both yield the same solution.  Method 1:      Method 2:     Peter must sell at least 50 ice cream sundaes in one week in order to make a profit.     A suit department store has an operating cost of $1000 per week. The cost to supply a suit is $50 each and they sell for $150 each. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of suits sold.    The cost and revenue functions are Profit function:  Break-even quantity:   The department store must sell at least 10 suits in one week in order to make a profit.  Recall that and to find the break-even quantity, we can solve either or .     Mathematical Models of Supply and Demand  The demand equation  gives you the price of one unit if units are sold. The supply equation  gives you the price needed to make units available to the market. If we supply more units than the market demanded, this is considered a . If we supply less units than the market demanded, this is considered a .    Suppose that 500 units of a certain item are sold per day by the entire industry at a price of $20 per item and that 1500 units can be sold per day by the same industry at a price of $15 per unit. Assuming a linear model, find the demand equation where is the number of units sold per day.    Observe that 500 units are sold at a price of $20 per unit gives us the ordered pair . Moreover, we also have that 1500 units are sold at a price of $15 per unit. That is, .  Since the demand equation is linear, we can compute the slope of the line by using the above ordered pairs.  Using point-slope form,  Hence, our demand equation is .    Suppose that when 100 units of a certain item are supplied, they are sold at a price of $1.25 per unit. When 80 more units of a certain item are supplied, the price per unit increased by $1. Assuming a linear model, find the supply equation where is the number of units sold.   Using the ordered pairs and ,  Supply equation:  .  Use point-slope form to construct the linear supply equation.    Companies often look for the amount of units needed to guarantee there is neither a or of units. Meaning, we want supply and demand to be equal which brings us to the following definition. The equilibrium point  is the number of units needed at a selling price where supply and demand are equal. The -coordinate is the equilibrium quantity and the -coordinate is the equilibrium price .    Suppose the supply and demand equations for Peter's ice cream stand are and respectively. Find the equilibrium price and quantity. Suppose is the number of ice cream sundaes sold and the price per sundae is in dollars.  In order to find the equilibrium point we must set Peter's supply and demand equations equal to one another.    The equilibrium quantity is 20 ice cream sundaes.  Next, we can use either the supply or demand equation to solve for the equilibrium price. Notice that both equations will yield the same result.  Method 1: Using the supply equation.  Method 2: Using the demand equation. The equilibrium price is $7.    The supply and demand equations for Lola's smoothie shop are and respectively. Find the equilibrium point. Suppose is the number of smoothies sold in one day and the price per smoothie is in dollars.  Setting Lola's supply and demand equations equal to one another,   The equilibrium quantity is 20 smoothies. Using the supply equation: The equilibrium price is $5.  Recall that we must set the supply and demand equations equal to one another to find the equilibrium quantity.     Quadratic Mathematical Models  As we saw in the previous section, a quadratic polynomial is typically of the form where if the graph of opens upward and if the graph of opens downward. (See (a).) The quadratic polynomial can also be written in standard form . The point is called the vertex point . The -coordinate of the vertex point can be found using the vertex formula : The -coordinate of the vertex point can be found by evaluating the quadratic function at . That is, . Notice here that if the parabola opens upward, then the vertex is a . Conversely, if the parabola opens downward, the vertex is a .   As an example, let’s consider a mathematical model that a company could use to describe its revenue for the sale of a particular item. Recall the revenue equation The company is interested in how the sales change as the price of the item changes. Suppose the data in show the number of units a company sells as a function of the price per item.   Number of Units Sold (in Thousands) as a Function of Price per Unit (in Dollars)                     In , we see the graph the number of units sold (in thousands) as a function of price (in dollars). We note from the shape of the graph that the number of units sold is likely a linear function of price per item, and the data can be closely approximated by the linear function for where predicts the number of units sold in thousands. Using this linear function, the revenue (in thousands of dollars) can be estimated by the quadratic function   for In , we use this quadratic function to predict the amount of revenue the company receives depending on the price the company charges per item. Note that we cannot conclude definitively the actual number of units sold for values of for which no data are collected. However, given the other data values and the graph shown, it seems reasonable that the number of units sold (in thousands) if the price charged is dollars may be close to the values predicted by the linear function    \"An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “x = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).\"   The data collected for the number of items sold as a function of price is roughly linear. We use the linear function to estimate this function.    Maximizing Revenue   A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from , the company arrives at the following quadratic function to model revenue (in thousands of dollars) as a function of price per item   for   Predict the revenue if the company sells the item at a price of and  Find the zeros of this function and interpret the meaning of the zeros.  Sketch a graph of  Use the graph to determine the value of that maximizes revenue. Find the maximum revenue.      Evaluating the revenue function at and we can conclude that  The zeros of this function can be found by solving the equation When we factor the quadratic expression, we get The solutions to this equation are given by For these values of the revenue is zero. When the revenue is zero because the company is giving away its merchandise for free. When the revenue is zero because the price is too high, and no one will buy any items.  Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at and the parabola must be symmetric about the line halfway between them, or   \"An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.\">    The function is a parabola with zeros at and and it is symmetric about the line so the maximum revenue occurs at a price of per item. At that price, the revenue is     Recall that both the supply and demand equations give the price per unit given the number of units sold. This means that using either the supply or demand equation and that we can find the revenue equation:    Maximizing Profit and Minimizing Cost   A clothing store determines that its supply equation for dresses sold is and the cost for producing dresses is .   Find the revenue function .  Find the profit function .  How many dresses must be sold in order to maximize profits?  What is the maximum profit?  How many dresses must be sold in order to minimize costs?      We can find the revenue equation using the supply equation. Recall that, . . .           The demand equation for diamond rings sold at a jewelry store in one month is where is the number of diamond rings sold in one month and the price of each diamond ring is in hundreds of dollars.   Find the revenue function .  How many diamond rings must be sold in order to maximize revenue?  What is the maximum revenue?  What is the price per diamond ring that will maximize revenue?       Using we obtain    Since the graph of our revenue function opens downward, the vertex point will give us maximum revenue. Using the vertex formula, Furthermore, selling 32 diamond rings in one month will maximize revenue.    Since revenue is maximized when 32 diamond rings are sold, evaluating will give us the maximum revenue. Recalling that the price is in hundreds of dollars, revenue will also be in hundreds of dollars. As a result, the maximum revenue is .    In order to find the price per diamond ring that will maximize revenue we must evaluate the demand equation at . Again, since the price is in hundreds of dollars, the price per diamond ring that will maximize revenue is .          "
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
  "id": "sec_Ch1Sec3-3-2-1",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cost function "
},
{
  "id": "sec_Ch1Sec3-3-2-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable marginal cost fixed costs "
},
{
  "id": "sec_Ch1Sec3-3-2-4",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "revenue function "
},
{
  "id": "sec_Ch1Sec3-3-2-6",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "marginal revenue "
},
{
  "id": "sec_Ch1Sec3-3-2-7",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "profit function "
},
{
  "id": "sec_Ch1Sec3-3-3",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-3",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": " Companies often look for the point at which there is no or . This gives you the minimum number of units a company must produce in order to make a profit. The break-even quantity is the number of units needed so that cost and revenue are equal, meaning the total profit is zero. That is, or . "
},
{
  "id": "sec_Ch1Sec3-3-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-5",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Peter's ice cream stand has an operating cost of $200 per week. The cost to make an ice cream sundae is $2 and they sell for $6. Compute the cost, revenue, and profit functions for one week. Then, find the break-even quantity. Let represent the number of ice cream sundaes sold.   Since our operating costs (fixed costs) are $200 per week and the marginal cost is $2 per ice cream sundae, then . Since the selling price is $6 per ice cream sundae, then . Using and , we can obtain the profit function.     To find the break-even quantity, we may proceed by using two different methods. Both yield the same solution.  Method 1:      Method 2:     Peter must sell at least 50 ice cream sundaes in one week in order to make a profit.  "
},
{
  "id": "sec_Ch1Sec3-3-6",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-3-6",
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
  "id": "sec_Ch1Sec3-4-5",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-5",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": " Companies often look for the amount of units needed to guarantee there is neither a or of units. Meaning, we want supply and demand to be equal which brings us to the following definition. The equilibrium point  is the number of units needed at a selling price where supply and demand are equal. The -coordinate is the equilibrium quantity and the -coordinate is the equilibrium price . "
},
{
  "id": "sec_Ch1Sec3-4-6",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-6",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": " Suppose the supply and demand equations for Peter's ice cream stand are and respectively. Find the equilibrium price and quantity. Suppose is the number of ice cream sundaes sold and the price per sundae is in dollars.  In order to find the equilibrium point we must set Peter's supply and demand equations equal to one another.    The equilibrium quantity is 20 ice cream sundaes.  Next, we can use either the supply or demand equation to solve for the equilibrium price. Notice that both equations will yield the same result.  Method 1: Using the supply equation.  Method 2: Using the demand equation. The equilibrium price is $7.  "
},
{
  "id": "sec_Ch1Sec3-4-7",
  "level": "2",
  "url": "sec_Ch1Sec3.html#sec_Ch1Sec3-4-7",
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
  "id": "sec_Ch2Sec1",
  "level": "1",
  "url": "sec_Ch2Sec1.html",
  "type": "Section",
  "number": "2.1",
  "title": "A Preview of Calculus",
  "body": " A Preview of Calculus   Introduction  Don't forget the photo    Science fiction writers often imagine spaceships that can travel to far-off planets in distant galaxies. However, back in 1905, Albert Einstein showed that a limit exists to how fast any object can travel. The problem is that the faster an object moves, the more mass it attains (in the form of energy), according to the equation   where is the object's mass at rest, is its speed, and is the speed of light. What is this speed limit?  The idea of a limit is central to all of calculus. We begin this chapter by examining why limits are so important. Then, we go on to describe how to find the limit of a function at a given point. Not all functions have limits at all points, and we discuss what this means and how we can tell if a function does or does not have a limit at a particular value.    Learning Objectives   Describe the tangent problem and how it led to the idea of a derivative.  Explain how the idea of a limit is involved in solving the tangent problem.  Recognize a tangent to a curve at a point as the limit of secant lines.  Identify instantaneous velocity as the limit of average velocity over a small time interval.  Describe the area problem and how it was solved by the integral.  Explain how the idea of a limit is involved in solving the area problem.  Recognize how the ideas of limit, derivative, and integral led to the studies of infinite series and multivariable calculus.   As we embark on our study of calculus, we shall see how its development arose from common solutions to practical problems in areas such as engineering physics—like the space travel problem posed in the chapter opener. Two key problems led to the initial formulation of calculus: (1) the tangent problem, or how to determine the slope of a line tangent to a curve at a point; and (2) the area problem, or how to determine the area under a curve.    The Tangent Problem and Differential Calculus  Rate of change is one of the most critical concepts in calculus. We begin our investigation of rates of change by looking at the graphs of the three lines and shown in .    \"Three graphs of different linear functions are shown. The first is f(x) = -2x – 3, with slope of -2 and y intercept of -3. The second is g(x) = x \/ 2 + 1, with slope of 1\/2 and y intercept of 1. The third is h(x) = 2, with slope of 0 and y intercept of 2. The rate of change of each is constant, as determined by the slope.\"  The rate of change of a linear function is constant in each of these three graphs, with the constant determined by the slope.   As we move from left to right along the graph of we see that the graph decreases at a constant rate. For every 1 unit we move to the right along the -axis, the -coordinate decreases by 2 units. This rate of change is determined by the slope (-2) of the line. Similarly, the slope of 1\/2 in the function tells us that for every change in of 1 unit there is a corresponding change in of 1\/2 unit. The function has a slope of zero, indicating that the values of the function remain constant. We see that the slope of each linear function indicates the rate of change of the function.  Compare the graphs of these three functions with the graph of ( ). The graph of starts from the left by decreasing rapidly, then begins to decrease more slowly and level off, and then finally begins to increase—slowly at first, followed by an increasing rate of increase as it moves toward the right. Unlike a linear function, no single number represents the rate of change for this function. We quite naturally ask: How do we measure the rate of change of a nonlinear function?    \"A graph of the parabola k(x) = x^2, which opens up and has its vertex at the origin.\"  The function does not have a constant rate of change.   We can approximate the rate of change of a function at a point on its graph by taking another point on the graph of drawing a line through the two points, and calculating the slope of the resulting line. Such a line is called a secant line. shows a secant line to a function at a point    \"A graph showing a generic curved function going through the points (0,0), (a, fa.), and (x, f(x)). A straight line called the secant line is drawn through the points (a, fa.), and (x, f(x)), going below the curved function between a and x and going above the curved function at values greater than x or less than a. The curved function and the secant line cross once more at some point in the third quadrant. The slope of the secant line is ( f(x) – fa. ) \/ (x – a).\">  The slope of a secant line through a point estimates the rate of change of the function at the point   We formally define a secant line as follows:   The secant to the function through the points and is the line passing through these points. Its slope is given by    The accuracy of approximating the rate of change of the function with a secant line depends on how close is to . As we see in , if is closer to , the slope of the secant line is a better measure of the rate of change of at .    \"This graph is the same as the previous secant line and generic curved function graph. However, another point x is added, this time plotted closer to a on the x-axis. As such, another secant line is drawn through the points (a, fa.) and the new, closer (x, f(x)). The line stays much closer to the generic curved function around (a, fa.). The slope of this secant line has become a better approximation of the rate of change of the generic function.\">  As gets closer to , the slope of the secant line becomes a better approximation to the rate of change of the function at .   The secant lines themselves approach a line that is called the tangent to the function at ( ). The slope of the tangent line to the graph at measures the rate of change of the function at . This value also represents the derivative of the function at , or the rate of change of the function at . This derivative is denoted by  Differential calculus is the field of calculus concerned with the study of derivatives and their applications.   Media  For an interactive demonstration of the slope of a secant line that you can manipulate yourself, visit this applet ( Note: this site requires a Java browser plugin): Math Insight .    \"This graph is a continuation of the previous two. This time, the graph contains the curved function, the two secant lines, and a tangent line. As x approaches a, the secant lines approach the tangent line.\"  Solving the Tangent Problem : As approaches , the secant lines approach the tangent line.   illustrates how to find slopes of secant lines. These slopes estimate the slope of the tangent line or, equivalently, the rate of change of the function at the point at which the slopes are calculated.   Finding Slopes of Secant Lines   Estimate the slope of the tangent line (rate of change) to at by finding slopes of secant lines through and each of the following points on the graph of        Use the formula for the slope of a secant line from the definition.      The point in part b. is closer to the point so the slope of 2.5 is closer to the slope of the tangent line. A good estimate for the slope of the tangent would be in the range of 2 to 2.5 ( ).    \"Two graphs of the parabola f(x) = x^2 are shown. The first has a secant line drawn, intersecting the parabola at (1,1) and (2,4). The second has a secant line drawn, intersecting the parabola at (1,1) and (3\/2, 9\/4). These lines provide successively closer approximations to the tangent line to the function at (1,1).\"  The secant lines to at through (a) and (b) provide successively closer approximations to the tangent line to at       Estimate the slope of the tangent line (rate of change) to at by finding slopes of secant lines through and the point on the graph of    2.25    Use and as a solving guide.    We continue our investigation by exploring a related question. Keeping in mind that velocity may be thought of as the rate of change of position, suppose that we have a function, that gives the position of an object along a coordinate axis at any given time . Can we use these same ideas to create a reasonable definition of the instantaneous velocity at a given time We start by approximating the instantaneous velocity with an average velocity. First, recall that the speed of an object traveling at a constant rate is the ratio of the distance traveled to the length of time it has traveled. We define the average velocity of an object over a time period to be the change in its position divided by the length of the time period.   Let be the position of an object moving along a coordinate axis at time . The average velocity of the object over a time interval where (or if is    As is chosen closer to , the average velocity becomes closer to the instantaneous velocity. Note that finding the average velocity of a position function over a time interval is essentially the same as finding the slope of a secant line to a function. Furthermore, to find the slope of a tangent line at a point , we let the -values approach in the slope of the secant line. Similarly, to find the instantaneous velocity at time , we let the -values approach in the average velocity. This process of letting or approach in an expression is called taking a limit . Thus, we may define the instantaneous velocity as follows.   For a position function the instantaneous velocity at a time is the value that the average velocities approach on intervals of the form and as the values of become closer to , provided such a value exists.   illustrates this concept of limits and average velocity.   Finding Average Velocity   A rock is dropped from a height of 64 ft. It is determined that its height (in feet) above ground seconds later (for is given by Find the average velocity of the rock over each of the given time intervals. Use this information to guess the instantaneous velocity of the rock at time        Substitute the data into the formula for the definition of average velocity.    The instantaneous velocity is somewhere between -15.84 and -16.16 ft\/sec. A good guess might be -16 ft\/sec.      An object moves along a coordinate axis so that its position at time is given by Estimate its instantaneous velocity at time by computing its average velocity over the time interval    12.006001    Use      The Area Problem and Integral Calculus  We now turn our attention to a classic question from calculus. Many quantities in physics—for example, quantities of work—may be interpreted as the area under a curve. This leads us to ask the question: How can we find the area between the graph of a function and the -axis over an interval ( )?    \"A graph is shown of a generic curved function f(x) shaped like a hill in quadrant one. An area under the function is shaded above the x-axis and between x=a and x=b.\"  The Area Problem : How do we find the area of the shaded region?   As in the answer to our previous questions on velocity, we first try to approximate the solution. We approximate the area by dividing up the interval into smaller intervals in the shape of rectangles. The approximation of the area comes from adding up the areas of these rectangles ( ).    \"The graph is the same as the previous image, with one difference. Instead of the area completely shaded under the curved function, the interval [a, b] is divided into smaller intervals in the shape of rectangles. The rectangles have the same small width. The height of each rectangle is the height of the function at the midpoint of the base of that specific rectangle.\"  The area of the region under the curve is approximated by summing the areas of thin rectangles.   As the widths of the rectangles become smaller (approach zero), the sums of the areas of the rectangles approach the area between the graph of and the -axis over the interval Once again, we find ourselves taking a limit. Limits of this type serve as a basis for the definition of the definite integral. Integral calculus is the study of integrals and their applications.   Estimation Using Rectangles   Estimate the area between the -axis and the graph of over the interval by using the three rectangles shown in .    \"A graph of the parabola f(x) – x^2 + 1 drawn on graph paper with all units shown. The rectangles completely contained under the function and above the x-axis in the interval [0,3] are shaded. This strategy sets the heights of the rectangles as the smaller of the two corners that could intersect with the function. As such, the rectangles are shorter than the height of the function.\"  The area of the region under the curve of can be estimated using rectangles.     The areas of the three rectangles are 1 unit , 2 unit , and 5 unit . Using these rectangles, our area estimate is 8 unit .      Estimate the area between the -axis and the graph of over the interval by using the three rectangles shown here:   \"A graph of the same parabola f(x) = x^2 + 1, but with a different shading strategy over the interval [0,3]. This time, the shaded rectangles are given the height of the taller corner that could intersect with the function. As such, the rectangles go higher than the height of the function     16 unit    Use as a guide.      Other Aspects of Calculus  So far, we have studied functions of one variable only. Such functions can be represented visually using graphs in two dimensions; however, there is no good reason to restrict our investigation to two dimensions. Suppose, for example, that instead of determining the velocity of an object moving along a coordinate axis, we want to determine the velocity of a rock fired from a catapult at a given time, or of an airplane moving in three dimensions. We might want to graph real-value functions of two variables or determine volumes of solids of the type shown in . These are only a few of the types of questions that can be asked and answered using multivariable calculus . Informally, multivariable calculus can be characterized as the study of the calculus of functions of two or more variables. However, before exploring these and other ideas, we must first lay a foundation for the study of calculus in one variable by exploring the concept of a limit.    \"A diagram in three dimensional space, over the x, y, and z axis where z = f(x,y). The base is the x,y axis, and the height is the z axis. The base is a rectangle contained in the x,y axis plane. The top is a surface of changing height with corners located directly above those of the rectangle in the x,y plane.. The highest point is above the corner at x=0, y=0. The lowest point is at the corner somewhere in the first quadrant of the x, y plane. The other two points are roughly the same height and located above the corners on the x axis and y axis. Lines are drawn connecting the corners of the rectangle to those of the surface.\"  We can use multivariable calculus to find the volume between a surface defined by a function of two variables and a plane.     Key Concepts   Differential calculus arose from trying to solve the problem of determining the slope of a line tangent to a curve at a point. The slope of the tangent line indicates the rate of change of the function, also called the derivative . Calculating a derivative requires finding a limit.  Integral calculus arose from trying to solve the problem of finding the area of a region between the graph of a function and the -axis. We can approximate the area by dividing it into thin rectangles and summing the areas of these rectangles. This summation leads to the value of a function called the integral . The integral is also calculated by finding a limit and, in fact, is related to the derivative of a function.  Multivariable calculus enables us to solve problems in three-dimensional space, including determining motion in space and finding volumes of solids.     Key Equations   Slope of a Secant Line   Average Velocity over Interval      "
},
{
  "id": "CNX_Calc_Figure_02_01_001",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_001",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "  \"Three graphs of different linear functions are shown. The first is f(x) = -2x – 3, with slope of -2 and y intercept of -3. The second is g(x) = x \/ 2 + 1, with slope of 1\/2 and y intercept of 1. The third is h(x) = 2, with slope of 0 and y intercept of 2. The rate of change of each is constant, as determined by the slope.\"  The rate of change of a linear function is constant in each of these three graphs, with the constant determined by the slope.  "
},
{
  "id": "sec_Ch2Sec1-4-4",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate of change "
},
{
  "id": "CNX_Calc_Figure_02_01_002",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_002",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": "  \"A graph of the parabola k(x) = x^2, which opens up and has its vertex at the origin.\"  The function does not have a constant rate of change.  "
},
{
  "id": "sec_Ch2Sec1-4-7",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant "
},
{
  "id": "CNX_Calc_Figure_02_01_003",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_003",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "  \"A graph showing a generic curved function going through the points (0,0), (a, fa.), and (x, f(x)). A straight line called the secant line is drawn through the points (a, fa.), and (x, f(x)), going below the curved function between a and x and going above the curved function at values greater than x or less than a. The curved function and the secant line cross once more at some point in the third quadrant. The slope of the secant line is ( f(x) – fa. ) \/ (x – a).\">  The slope of a secant line through a point estimates the rate of change of the function at the point  "
},
{
  "id": "sec_Ch2Sec1-4-10",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-10",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " The secant to the function through the points and is the line passing through these points. Its slope is given by   "
},
{
  "id": "CNX_Calc_Figure_02_01_004",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_004",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": "  \"This graph is the same as the previous secant line and generic curved function graph. However, another point x is added, this time plotted closer to a on the x-axis. As such, another secant line is drawn through the points (a, fa.) and the new, closer (x, f(x)). The line stays much closer to the generic curved function around (a, fa.). The slope of this secant line has become a better approximation of the rate of change of the generic function.\">  As gets closer to , the slope of the secant line becomes a better approximation to the rate of change of the function at .  "
},
{
  "id": "sec_Ch2Sec1-4-13",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent Differential calculus "
},
{
  "id": "sec_Ch2Sec1-4-14",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-14",
  "type": "Note",
  "number": "2.1.6",
  "title": "Media.",
  "body": " Media  For an interactive demonstration of the slope of a secant line that you can manipulate yourself, visit this applet ( Note: this site requires a Java browser plugin): Math Insight . "
},
{
  "id": "CNX_Calc_Figure_02_01_005",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_005",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": "  \"This graph is a continuation of the previous two. This time, the graph contains the curved function, the two secant lines, and a tangent line. As x approaches a, the secant lines approach the tangent line.\"  Solving the Tangent Problem : As approaches , the secant lines approach the tangent line.  "
},
{
  "id": "fs-id1170573387465",
  "level": "2",
  "url": "sec_Ch2Sec1.html#fs-id1170573387465",
  "type": "Example",
  "number": "2.1.8",
  "title": "Finding Slopes of Secant Lines.",
  "body": " Finding Slopes of Secant Lines   Estimate the slope of the tangent line (rate of change) to at by finding slopes of secant lines through and each of the following points on the graph of        Use the formula for the slope of a secant line from the definition.      The point in part b. is closer to the point so the slope of 2.5 is closer to the slope of the tangent line. A good estimate for the slope of the tangent would be in the range of 2 to 2.5 ( ).    \"Two graphs of the parabola f(x) = x^2 are shown. The first has a secant line drawn, intersecting the parabola at (1,1) and (2,4). The second has a secant line drawn, intersecting the parabola at (1,1) and (3\/2, 9\/4). These lines provide successively closer approximations to the tangent line to the function at (1,1).\"  The secant lines to at through (a) and (b) provide successively closer approximations to the tangent line to at    "
},
{
  "id": "sec_Ch2Sec1-4-18",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-18",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "",
  "body": "  Estimate the slope of the tangent line (rate of change) to at by finding slopes of secant lines through and the point on the graph of    2.25    Use and as a solving guide.   "
},
{
  "id": "sec_Ch2Sec1-4-19",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average velocity "
},
{
  "id": "sec_Ch2Sec1-4-20",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-20",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": " Let be the position of an object moving along a coordinate axis at time . The average velocity of the object over a time interval where (or if is   "
},
{
  "id": "sec_Ch2Sec1-4-21",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit instantaneous velocity "
},
{
  "id": "sec_Ch2Sec1-4-22",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-22",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": " For a position function the instantaneous velocity at a time is the value that the average velocities approach on intervals of the form and as the values of become closer to , provided such a value exists.  "
},
{
  "id": "fs-id1170573397285",
  "level": "2",
  "url": "sec_Ch2Sec1.html#fs-id1170573397285",
  "type": "Example",
  "number": "2.1.13",
  "title": "Finding Average Velocity.",
  "body": " Finding Average Velocity   A rock is dropped from a height of 64 ft. It is determined that its height (in feet) above ground seconds later (for is given by Find the average velocity of the rock over each of the given time intervals. Use this information to guess the instantaneous velocity of the rock at time        Substitute the data into the formula for the definition of average velocity.    The instantaneous velocity is somewhere between -15.84 and -16.16 ft\/sec. A good guess might be -16 ft\/sec.   "
},
{
  "id": "sec_Ch2Sec1-4-25",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-4-25",
  "type": "Checkpoint",
  "number": "2.1.14",
  "title": "",
  "body": "  An object moves along a coordinate axis so that its position at time is given by Estimate its instantaneous velocity at time by computing its average velocity over the time interval    12.006001    Use   "
},
{
  "id": "CNX_Calc_Figure_02_01_006",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_006",
  "type": "Figure",
  "number": "2.1.15",
  "title": "",
  "body": "  \"A graph is shown of a generic curved function f(x) shaped like a hill in quadrant one. An area under the function is shaded above the x-axis and between x=a and x=b.\"  The Area Problem : How do we find the area of the shaded region?  "
},
{
  "id": "CNX_Calc_Figure_02_01_007",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_007",
  "type": "Figure",
  "number": "2.1.16",
  "title": "",
  "body": "  \"The graph is the same as the previous image, with one difference. Instead of the area completely shaded under the curved function, the interval [a, b] is divided into smaller intervals in the shape of rectangles. The rectangles have the same small width. The height of each rectangle is the height of the function at the midpoint of the base of that specific rectangle.\"  The area of the region under the curve is approximated by summing the areas of thin rectangles.  "
},
{
  "id": "sec_Ch2Sec1-5-6",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integral calculus "
},
{
  "id": "fs-id1170573406196",
  "level": "2",
  "url": "sec_Ch2Sec1.html#fs-id1170573406196",
  "type": "Example",
  "number": "2.1.17",
  "title": "Estimation Using Rectangles.",
  "body": " Estimation Using Rectangles   Estimate the area between the -axis and the graph of over the interval by using the three rectangles shown in .    \"A graph of the parabola f(x) – x^2 + 1 drawn on graph paper with all units shown. The rectangles completely contained under the function and above the x-axis in the interval [0,3] are shaded. This strategy sets the heights of the rectangles as the smaller of the two corners that could intersect with the function. As such, the rectangles are shorter than the height of the function.\"  The area of the region under the curve of can be estimated using rectangles.     The areas of the three rectangles are 1 unit , 2 unit , and 5 unit . Using these rectangles, our area estimate is 8 unit .   "
},
{
  "id": "sec_Ch2Sec1-5-8",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-5-8",
  "type": "Checkpoint",
  "number": "2.1.19",
  "title": "",
  "body": "  Estimate the area between the -axis and the graph of over the interval by using the three rectangles shown here:   \"A graph of the same parabola f(x) = x^2 + 1, but with a different shading strategy over the interval [0,3]. This time, the shaded rectangles are given the height of the taller corner that could intersect with the function. As such, the rectangles go higher than the height of the function     16 unit    Use as a guide.   "
},
{
  "id": "sec_Ch2Sec1-6-2",
  "level": "2",
  "url": "sec_Ch2Sec1.html#sec_Ch2Sec1-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multivariable calculus "
},
{
  "id": "CNX_Calc_Figure_02_01_010",
  "level": "2",
  "url": "sec_Ch2Sec1.html#CNX_Calc_Figure_02_01_010",
  "type": "Figure",
  "number": "2.1.20",
  "title": "",
  "body": "  \"A diagram in three dimensional space, over the x, y, and z axis where z = f(x,y). The base is the x,y axis, and the height is the z axis. The base is a rectangle contained in the x,y axis plane. The top is a surface of changing height with corners located directly above those of the rectangle in the x,y plane.. The highest point is above the corner at x=0, y=0. The lowest point is at the corner somewhere in the first quadrant of the x, y plane. The other two points are roughly the same height and located above the corners on the x axis and y axis. Lines are drawn connecting the corners of the rectangle to those of the surface.\"  We can use multivariable calculus to find the volume between a surface defined by a function of two variables and a plane.  "
},
{
  "id": "sec_Ch2Sec2v2",
  "level": "1",
  "url": "sec_Ch2Sec2v2.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Limit of a Function",
  "body": " The Limit of a Function   Learning Objectives   Using correct notation, describe the limit of a function.  Use a table of values to estimate the limit of a function or to identify when the limit does not exist.  Use a graph to estimate the limit of a function or to identify when the limit does not exist.  Define one-sided limits and provide examples.  Explain the relationship between one-sided and two-sided limits.  Using correct notation, describe an infinite limit.    The concept of a limit or limiting process, essential to the understanding of calculus, has been around for thousands of years. In fact, early mathematicians used a limiting process to obtain better and better approximations of areas of circles. Yet, the formal definition of a limit—as we know and understand it today—did not appear until the late 19th century. We therefore begin our quest to understand limits, as our mathematical ancestors did, by using an intuitive approach. In the next section, armed with a conceptual understanding of limits, we examine the formal definition of a limit.  We begin our exploration of limits by taking a look at the graphs of the functions   which are shown in . In particular, let’s focus our attention on the behavior of each graph at and around    \"Three graphs of functions. The first is f(s) = (x^2 – 4) \/ (x-2), which is a line of slope, x intercept (-2,0), and open circle at (2,4). The second is g(x) = |x – 2 | \/ (x-2), which contains two lines: x=1 for x\\gt 2 and x= -1 for x \\lt 2. There are open circles at both endpoints (2, 1) and (-2, 1). The third is h(x) = 1 \/ (x-2)^2, in which the function curves asymptotically towards y=0 and x=2 in quadrants one and two.\"  These graphs show the behavior of three different functions around   Each of the three functions is undefined at but if we make this statement and no other, we give a very incomplete picture of how each function behaves in the vicinity of To express the behavior of each graph in the vicinity of 2 more completely, we need to introduce the concept of a limit.    Intuitive Definition of a Limit  Let’s first take a closer look at how the function behaves around in . As the values of approach 2 from either side of 2, the values of approach 4. Mathematically, we say that the limit of as approaches 2 is 4. Symbolically, we express this limit as   From this very brief informal look at one limit, let’s start to develop an intuitive definition of the limit . We can think of the limit of a function at a number as being the one real number that the functional values approach as the -values approach provided such a real number exists. Stated more carefully, we have the following definition:   Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. If all values of the function approach the real number as the values of approach the number , then we say that the limit of as approaches is . (More succinct, as gets closer to , gets closer and stays close to .) Symbolically, we express this idea as     In this section, we'll focus on finding a table of values and the graph of a function. As an example, consider . Notice that is undefined at , but we are not interested in the function value at , only in the value the function is approaching as the values approach .   Evaluating a Limit Using a Table of Functional Values 1   Evaluate using a table of functional values.    We have calculated the values of for the values of listed in .   Table of Functional Values for           -0.1  0.998334166468   0.1  0.998334166468    -0.01  0.999983333417   0.01  0.999983333417    -0.001  0.999999833333   0.001  0.999999833333    -0.0001  0.999999998333   0.0001  0.999999998333     Note : The values in this table were obtained using a calculator and using all the places given in the calculator output. As we read down each column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that A calculator-or computer-generated graph of would be similar to that shown in , and it confirms our estimate.    \"A graph of f(x) = sin(x)\/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.\"  The graph of confirms the estimate from .        Strategy For Evaluating a Limit Using a Table of Functional Values    To evaluate we begin by completing a table of functional values. We should choose two sets of -values—one set of values approaching and less than , and another set of values approaching and greater than . demonstrates what your tables might look like.   Table of Functional Values for                                       Use additional values as necessary.  Use additional values as necessary.     Next, let’s look at the values in each of the columns and determine whether the values seem to be approaching a single value as we move down each column. In our columns, we look at the sequence and so on, and and so on. ( Note : Although we have chosen the -values and so forth, and these values will probably work nearly every time, on very rare occasions we may need to modify our choices.)  If both columns approach a common y -value , we state We can use the following strategy to confirm the result obtained from the table or as an alternative method for estimating a limit.  Using a graphing calculator or computer software that allows us graph functions, we can plot the function making sure the functional values of for -values near are in our window. We can use the trace feature to move along the graph of the function and watch the y -value readout as the -values approach . If the -values approach as our -values approach from both directions, then We may need to zoom in on our graph and repeat this process several times.      Evaluating a Limit Using a Table of Functional Values 2   Evaluate using a table of functional values.    As before, we use a table—in this case, —to list the values of the function for the given values of .   Table of Functional Values for           3.9  0.251582341869   4.1  0.248456731317    3.99  0.25015644562   4.01  0.24984394501    3.999  0.250015627   4.001  0.249984377    3.9999  0.250001563   4.0001  0.249998438    3.99999  0.25000016   4.00001  0.24999984     After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward whereas the functional values greater than appear to be increasing toward . We conclude that We confirm this estimate using the graph of shown in .    \"A graph of the function f(x) = (sqrt(x) – 2 ) \/ (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.\"  The graph of confirms the estimate from .       Estimate using a table of functional values. Use a graph to confirm your estimate.       Use and as your table values.    At this point, we see from and that it may be just as easy, if not easier, to estimate a limit of a function by inspecting its graph as it is to estimate the limit by using a table of functional values. In , we evaluate a limit exclusively by looking at a graph rather than by using a table of functional values.   Evaluating a Limit Using a Graph   For shown in , evaluate    \"The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1,4).\"  The graph of includes one value not on a smooth curve.     Despite the fact that as the -values approach from either side, the values approach . Therefore, Note that we can determine this limit without even knowing the algebraic expression of the function.    Based on , we make the following observation: It is possible for the limit of a function to exist at a point, and for the function to be defined at this point, but the limit of the function and the value of the function at the point may be different.   Use the graph of in to evaluate if possible.    \"A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).\"         What -value does the function approach as the -values approach ?      Identifying When Limits Do Not Exist  A function may not have a limit for all values of . that is, we cannot write that (where is some real number) for all values of , for there may not be a number that is approaching. There are three common ways in which a limit may fail to exist.  The function may approach different values on either side of  The function may grow without upper or lower bound as approaches  The function may oscillate as approaches without approaching a specific value  We'll explore each of these in turn.   Different Values Approached From Left and Right  Explore why does not exist where    A graph of around and a table are given in and , respectively. It is clear that as approaches , does not seem to approach a single number. Instead it seems as though approaches two different numbers. When considering values of less than (approaching from the left), it seems is approaching ; when considering values of greater than (approaching from the right), it seems is approaching .  Recognizing this behavior is important; we'll study this in greater depth later. Right now, it suffices to say that the limit does not exist since is approaching two different values as approaches .    A graph of a polynomial from (0,3) to (2,1) with a point at (2,1) and on the same axes a line from (1,1) to (2,2) with a hole at (1,1)   The limit of does not exist at    Values of near                                    The Function Grows Without Bound  Explore why does not exist.   A graph and table of are given in and , respectively. Both show that as approaches , grows larger and larger    A graph of 1\/(x-1)^2 showing a vertical asymptote at x=1   Observing no limit as    Values of near                                 We can deduce this on our own with the aid of the graph and table. If is near , then is very small, and Since is not approaching a single number, we conclude does not exist.        The Function Oscillates   Explore why does not exist.    Two graphs of are given in . The first shows on the interval ; notice how seems to oscillate near . One might think that despite the oscillation, as approaches , approaches . However, the second image zooms in on on the interval . Here the oscillation is even more pronounced.      \"The graph of the function f(x) = sin(1\/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.\"   Observing no limit as   lists values for the function for the given values of .   Table of Functional Values for                                                      After examining the table of functional values, we can see that the -values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of -values approaching :   The corresponding -values are   At this point we can indeed conclude that does not exist.  Mathematicians frequently abbreviate “does not exist” as DNE.        Use a table of functional values to evaluate if possible.    does not exist.    Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 and 2.1, 2.01, 2.001, 2.0001, 2.00001 in your table.      One-Sided Limits  Sometimes indicating that the limit of a function fails to exist at a point does not provide us with enough information about the behavior of the function at that particular point. To see this, we now revisit the function introduced at the beginning of the section (see (b)). As we pick values of close to , does not approach a single value, so the limit as approaches 2 does not exist—that is, DNE.  However, this statement alone does not give us a complete picture of the behavior of the function around the -value . To provide a more accurate description, we introduce the idea of a one-sided limit . For all values to the left of (or the negative side of  ), Thus, as approaches from the left, approaches -1. Mathematically, we say that the limit as approaches from the left is . Symbolically, we express this idea as   Similarly, as approaches from the right (or from the positive side ), approaches . Symbolically, we express this idea as   We can now present an informal definition of one-sided limits.    We define two types of one-sided limits .  Limit from the left: Let be a function defined at all values in an open interval of the form ), and let be a real number. If the values of the function approach the real number as the values of (where approach the number , then we say that is the limit of as approaches a from the left. Symbolically, we express this idea as  Limit from the right: Let be a function defined at all values in an open interval of the form and let be a real number. If the values of the function approach the real number L as the values of (where ) approach the number , then we say that is the limit of as approaches from the right. Symbolically, we express this idea as     Evaluating One-Sided Limits   For the function evaluate each of the following limits.        We can use tables of functional values again . Observe that for values of less than , we use and for values of greater than 2 , we use   Table of Functional Values for           1.9  2.9   2.1  0.41    1.99  2.99  2.01  0.0401    1.999  2.999  2.001  0.004001    1.9999  2.9999  2.0001  0.00040001    1.99999  2.99999  2.00001  0.0000400001     Based on this table, we can conclude that a. and b. Therefore, the (two-sided) limit of does not exist at  shows a graph of and reinforces our conclusion about these limits.    \"The graph of the given piecewise function. The first piece is f(x) = x+1 if x \\lt 2. The second piece is x^2 – 4 if x \\gt = 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.\"  The graph of has a break at      Use a table of functional values to estimate the following limits, if possible.        a. b.     Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate  Use -values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate (These tables are available from a previous Checkpoint problem.)     Let us now consider the relationship between the limit of a function at a point and the limits from the right and left at that point. It seems clear that if the limit from the right and the limit from the left have a common value, then that common value is the limit of the function at that point. Similarly, if the limit from the left and the limit from the right take on different values, the limit of the function does not exist. These conclusions are summarized in .   Relating One-Sided and Two-Sided Limits  Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. Then,      Infinite Limits  Evaluating the limit of a function at a point or evaluating the limit of a function from the right and left at a point helps us to characterize the behavior of a function around a given value. As we shall see, we can also describe the behavior of functions that do not have finite limits.  We now turn our attention to the third and final function introduced at the beginning of this section (see (c)). From its graph we see that as the values of approach , the values of become larger and larger and, in fact, become infinite. Mathematically, we say that the limit of as approaches is positive infinity. Symbolically, we express this idea as   More generally, we define infinite limits as follows:   An infinite limit describes the behavior of a function when its values increase or decrease without bound as approaches a point.   From the left: means grows larger and larger as approaches from the left. means decreases without bound as approaches from the left  From the right: means grows larger and larger as approaches from the right. means decreases without bound as approaches from the right  Two-sided: means that both one-sided limits agree and the function increases or decreases without bound as approaches from either side.     It is important to understand that when we write statements such as or we are describing the behavior of the function, as we have just defined it. We are not asserting that a limit exists. For the limit of a function to exist at , it must approach a real number as approaches . That said, if, for example, we always write rather than DNE.   Recognizing an Infinite Limit   Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         Begin by constructing a table of functional values.   Table of Functional Values for           -0.1  -10   0.1  10    -0.01  -100   0.01  100    -0.001  -1000   0.001  1000    -0.0001  -10,000   0.0001  10,000    -0.00001  -100,000   0.00001  100,000    -0.000001  -1,000,000   0.000001  1,000,000      The values of decrease without bound as approaches 0 from the left. We conclude that   The values of increase without bound as approaches 0 from the right. We conclude that   Since and have different values, we conclude that   The graph of in confirms these conclusions.    \"The graph of the function f(x) = 1\/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.\"  The graph of confirms that the limit as approaches 0 does not exist.       Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.                Follow the procedures from .    In the examples above, as x approaches 0, the points on the graph of are getting closer to the line . The vertical line is called a vertical asymptote of the graph. We formally define a vertical asymptote as follows:   Let be a function. If any of the following conditions hold, then the line is a vertical asymptote of     Finding a Vertical Asymptote   Evaluate each of the following limits using . Identify any vertical asymptotes of the function         We can use directly.       The function has a vertical asymptote of      Evaluate each of the following limits. Identify any vertical asymptotes of the function         1. 2. 3. DNE. The line is the vertical asymptote of       It is useful to point out that functions of the form where is a positive integer, have infinite limits as approaches from either the left or right ( ). These limits are summarized in .    \"Two graphs side by side of f(x) = 1 \/ (x-a)^n. The first graph shows the case where n is an odd positive integer, and the second shows the case where n is an even positive integer. In the first, the graph has two segments. Each curve asymptotically towards the x axis, also known as y=0, and x=a. The segment to the left of x=a is below the x axis, and the segment to the right of x=a is above the x axis. In the second graph, both segments are above the x axis.\"  The function has infinite limits at .    Infinite Limits from Positive Integers  If is a positive even integer, then   If is a positive odd integer, then   and    We should also point out that in the graphs of points on the graph having -coordinates very near to are very close to the vertical line That is, as approaches , the points on the graph of are closer to the line The line is called a vertical asymptote of the graph. We formally define a vertical asymptote as follows:   Let be a function. If any of the following conditions hold, then the line is a vertical asymptote of     Finding a Vertical Asymptote   Evaluate each of the following limits using . Identify any vertical asymptotes of the function         We can use directly.       The function has a vertical asymptote of      Evaluate each of the following limits. Identify any vertical asymptotes of the function         a. b. c. DNE. The line is the vertical asymptote of    Use .    In the next example we put our knowledge of various types of limits to use to analyze the behavior of a function at several different points.   Behavior of a Function at Different Points   Use the graph of in to determine each of the following values:          \"The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.\"  The graph shows        is undefined  DNE;  is undefined       Evaluate for shown here:   \"A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.\"     Does not exist.    Compare the limit from the right with the limit from the left.     "
},
{
  "id": "CNX_Calc_Figure_02_02_001",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#CNX_Calc_Figure_02_02_001",
  "type": "Figure",
  "number": "2.2.1",
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
  "number": "2.2.2",
  "title": "",
  "body": " Let be a function defined at all values in an open interval containing , with the possible exception of itself, and let be a real number. If all values of the function approach the real number as the values of approach the number , then we say that the limit of as approaches is . (More succinct, as gets closer to , gets closer and stays close to .) Symbolically, we express this idea as   "
},
{
  "id": "fs-id1170572561451",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170572561451",
  "type": "Example",
  "number": "2.2.3",
  "title": "Evaluating a Limit Using a Table of Functional Values 1.",
  "body": " Evaluating a Limit Using a Table of Functional Values 1   Evaluate using a table of functional values.    We have calculated the values of for the values of listed in .   Table of Functional Values for           -0.1  0.998334166468   0.1  0.998334166468    -0.01  0.999983333417   0.01  0.999983333417    -0.001  0.999999833333   0.001  0.999999833333    -0.0001  0.999999998333   0.0001  0.999999998333     Note : The values in this table were obtained using a calculator and using all the places given in the calculator output. As we read down each column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that A calculator-or computer-generated graph of would be similar to that shown in , and it confirms our estimate.    \"A graph of f(x) = sin(x)\/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.\"  The graph of confirms the estimate from .    "
},
{
  "id": "sec_Ch2Sec2v2-3-8",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-8",
  "type": "Problem-Solving Strategy",
  "number": "2.2.6",
  "title": "Strategy For Evaluating a Limit Using a Table of Functional Values.",
  "body": " Strategy For Evaluating a Limit Using a Table of Functional Values    To evaluate we begin by completing a table of functional values. We should choose two sets of -values—one set of values approaching and less than , and another set of values approaching and greater than . demonstrates what your tables might look like.   Table of Functional Values for                                       Use additional values as necessary.  Use additional values as necessary.     Next, let’s look at the values in each of the columns and determine whether the values seem to be approaching a single value as we move down each column. In our columns, we look at the sequence and so on, and and so on. ( Note : Although we have chosen the -values and so forth, and these values will probably work nearly every time, on very rare occasions we may need to modify our choices.)  If both columns approach a common y -value , we state We can use the following strategy to confirm the result obtained from the table or as an alternative method for estimating a limit.  Using a graphing calculator or computer software that allows us graph functions, we can plot the function making sure the functional values of for -values near are in our window. We can use the trace feature to move along the graph of the function and watch the y -value readout as the -values approach . If the -values approach as our -values approach from both directions, then We may need to zoom in on our graph and repeat this process several times.    "
},
{
  "id": "fs-id1170571656691",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571656691",
  "type": "Example",
  "number": "2.2.8",
  "title": "Evaluating a Limit Using a Table of Functional Values 2.",
  "body": " Evaluating a Limit Using a Table of Functional Values 2   Evaluate using a table of functional values.    As before, we use a table—in this case, —to list the values of the function for the given values of .   Table of Functional Values for           3.9  0.251582341869   4.1  0.248456731317    3.99  0.25015644562   4.01  0.24984394501    3.999  0.250015627   4.001  0.249984377    3.9999  0.250001563   4.0001  0.249998438    3.99999  0.25000016   4.00001  0.24999984     After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward whereas the functional values greater than appear to be increasing toward . We conclude that We confirm this estimate using the graph of shown in .    \"A graph of the function f(x) = (sqrt(x) – 2 ) \/ (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.\"  The graph of confirms the estimate from .    "
},
{
  "id": "sec_Ch2Sec2v2-3-10",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-10",
  "type": "Checkpoint",
  "number": "2.2.11",
  "title": "",
  "body": "  Estimate using a table of functional values. Use a graph to confirm your estimate.       Use and as your table values.   "
},
{
  "id": "fs-id1170572337207",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170572337207",
  "type": "Example",
  "number": "2.2.12",
  "title": "Evaluating a Limit Using a Graph.",
  "body": " Evaluating a Limit Using a Graph   For shown in , evaluate    \"The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1,4).\"  The graph of includes one value not on a smooth curve.     Despite the fact that as the -values approach from either side, the values approach . Therefore, Note that we can determine this limit without even knowing the algebraic expression of the function.   "
},
{
  "id": "sec_Ch2Sec2v2-3-14",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-3-14",
  "type": "Checkpoint",
  "number": "2.2.14",
  "title": "",
  "body": " Use the graph of in to evaluate if possible.    \"A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).\"         What -value does the function approach as the -values approach ?   "
},
{
  "id": "sec_Ch2Sec2v2-4-3",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-3",
  "type": "Example",
  "number": "2.2.16",
  "title": "Different Values Approached From Left and Right.",
  "body": " Different Values Approached From Left and Right  Explore why does not exist where    A graph of around and a table are given in and , respectively. It is clear that as approaches , does not seem to approach a single number. Instead it seems as though approaches two different numbers. When considering values of less than (approaching from the left), it seems is approaching ; when considering values of greater than (approaching from the right), it seems is approaching .  Recognizing this behavior is important; we'll study this in greater depth later. Right now, it suffices to say that the limit does not exist since is approaching two different values as approaches .    A graph of a polynomial from (0,3) to (2,1) with a point at (2,1) and on the same axes a line from (1,1) to (2,2) with a hole at (1,1)   The limit of does not exist at    Values of near                                  "
},
{
  "id": "sec_Ch2Sec2v2-4-4",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-4",
  "type": "Example",
  "number": "2.2.19",
  "title": "The Function Grows Without Bound.",
  "body": " The Function Grows Without Bound  Explore why does not exist.   A graph and table of are given in and , respectively. Both show that as approaches , grows larger and larger    A graph of 1\/(x-1)^2 showing a vertical asymptote at x=1   Observing no limit as    Values of near                                 We can deduce this on our own with the aid of the graph and table. If is near , then is very small, and Since is not approaching a single number, we conclude does not exist.   "
},
{
  "id": "sec_Ch2Sec2v2-4-5",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-5",
  "type": "Example",
  "number": "2.2.22",
  "title": "The Function Oscillates.",
  "body": " The Function Oscillates   Explore why does not exist.    Two graphs of are given in . The first shows on the interval ; notice how seems to oscillate near . One might think that despite the oscillation, as approaches , approaches . However, the second image zooms in on on the interval . Here the oscillation is even more pronounced.      \"The graph of the function f(x) = sin(1\/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.\"   Observing no limit as   lists values for the function for the given values of .   Table of Functional Values for                                                      After examining the table of functional values, we can see that the -values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of -values approaching :   The corresponding -values are   At this point we can indeed conclude that does not exist.  Mathematicians frequently abbreviate “does not exist” as DNE.     "
},
{
  "id": "sec_Ch2Sec2v2-4-6",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-4-6",
  "type": "Checkpoint",
  "number": "2.2.25",
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
  "number": "2.2.26",
  "title": "",
  "body": "  We define two types of one-sided limits .  Limit from the left: Let be a function defined at all values in an open interval of the form ), and let be a real number. If the values of the function approach the real number as the values of (where approach the number , then we say that is the limit of as approaches a from the left. Symbolically, we express this idea as  Limit from the right: Let be a function defined at all values in an open interval of the form and let be a real number. If the values of the function approach the real number L as the values of (where ) approach the number , then we say that is the limit of as approaches from the right. Symbolically, we express this idea as   "
},
{
  "id": "sec_Ch2Sec2v2-5-9",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-5-9",
  "type": "Example",
  "number": "2.2.27",
  "title": "Evaluating One-Sided Limits.",
  "body": " Evaluating One-Sided Limits   For the function evaluate each of the following limits.        We can use tables of functional values again . Observe that for values of less than , we use and for values of greater than 2 , we use   Table of Functional Values for           1.9  2.9   2.1  0.41    1.99  2.99  2.01  0.0401    1.999  2.999  2.001  0.004001    1.9999  2.9999  2.0001  0.00040001    1.99999  2.99999  2.00001  0.0000400001     Based on this table, we can conclude that a. and b. Therefore, the (two-sided) limit of does not exist at  shows a graph of and reinforces our conclusion about these limits.    \"The graph of the given piecewise function. The first piece is f(x) = x+1 if x \\lt 2. The second piece is x^2 – 4 if x \\gt = 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.\"  The graph of has a break at    "
},
{
  "id": "sec_Ch2Sec2v2-5-10",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-5-10",
  "type": "Checkpoint",
  "number": "2.2.30",
  "title": "",
  "body": " Use a table of functional values to estimate the following limits, if possible.        a. b.     Use -values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate  Use -values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate (These tables are available from a previous Checkpoint problem.)    "
},
{
  "id": "fs-id1170571598073",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571598073",
  "type": "Theorem",
  "number": "2.2.31",
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
  "number": "2.2.32",
  "title": "",
  "body": " An infinite limit describes the behavior of a function when its values increase or decrease without bound as approaches a point.   From the left: means grows larger and larger as approaches from the left. means decreases without bound as approaches from the left  From the right: means grows larger and larger as approaches from the right. means decreases without bound as approaches from the right  Two-sided: means that both one-sided limits agree and the function increases or decreases without bound as approaches from either side.    "
},
{
  "id": "fs-id1170571611150",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571611150",
  "type": "Example",
  "number": "2.2.33",
  "title": "Recognizing an Infinite Limit.",
  "body": " Recognizing an Infinite Limit   Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.         Begin by constructing a table of functional values.   Table of Functional Values for           -0.1  -10   0.1  10    -0.01  -100   0.01  100    -0.001  -1000   0.001  1000    -0.0001  -10,000   0.0001  10,000    -0.00001  -100,000   0.00001  100,000    -0.000001  -1,000,000   0.000001  1,000,000      The values of decrease without bound as approaches 0 from the left. We conclude that   The values of increase without bound as approaches 0 from the right. We conclude that   Since and have different values, we conclude that   The graph of in confirms these conclusions.    \"The graph of the function f(x) = 1\/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.\"  The graph of confirms that the limit as approaches 0 does not exist.    "
},
{
  "id": "sec_Ch2Sec2v2-6-9",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-9",
  "type": "Checkpoint",
  "number": "2.2.36",
  "title": "",
  "body": "  Evaluate each of the following limits, if possible. Use a table of functional values and graph to confirm your conclusion.                Follow the procedures from .   "
},
{
  "id": "sec_Ch2Sec2v2-6-11",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-11",
  "type": "Definition",
  "number": "2.2.37",
  "title": "",
  "body": " Let be a function. If any of the following conditions hold, then the line is a vertical asymptote of   "
},
{
  "id": "sec_Ch2Sec2v2-6-12",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-12",
  "type": "Example",
  "number": "2.2.38",
  "title": "Finding a Vertical Asymptote.",
  "body": " Finding a Vertical Asymptote   Evaluate each of the following limits using . Identify any vertical asymptotes of the function         We can use directly.       The function has a vertical asymptote of   "
},
{
  "id": "sec_Ch2Sec2v2-6-13",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-13",
  "type": "Checkpoint",
  "number": "2.2.39",
  "title": "",
  "body": "  Evaluate each of the following limits. Identify any vertical asymptotes of the function         1. 2. 3. DNE. The line is the vertical asymptote of      "
},
{
  "id": "CNX_Calc_Figure_02_02_014",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#CNX_Calc_Figure_02_02_014",
  "type": "Figure",
  "number": "2.2.40",
  "title": "",
  "body": "  \"Two graphs side by side of f(x) = 1 \/ (x-a)^n. The first graph shows the case where n is an odd positive integer, and the second shows the case where n is an even positive integer. In the first, the graph has two segments. Each curve asymptotically towards the x axis, also known as y=0, and x=a. The segment to the left of x=a is below the x axis, and the segment to the right of x=a is above the x axis. In the second graph, both segments are above the x axis.\"  The function has infinite limits at .  "
},
{
  "id": "fs-id1170571654206",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#fs-id1170571654206",
  "type": "Theorem",
  "number": "2.2.41",
  "title": "Infinite Limits from Positive Integers.",
  "body": " Infinite Limits from Positive Integers  If is a positive even integer, then   If is a positive odd integer, then   and   "
},
{
  "id": "sec_Ch2Sec2v2-6-17",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertical asymptote "
},
{
  "id": "sec_Ch2Sec2v2-6-18",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-18",
  "type": "Definition",
  "number": "2.2.42",
  "title": "",
  "body": " Let be a function. If any of the following conditions hold, then the line is a vertical asymptote of   "
},
{
  "id": "sec_Ch2Sec2v2-6-19",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-19",
  "type": "Example",
  "number": "2.2.43",
  "title": "Finding a Vertical Asymptote.",
  "body": " Finding a Vertical Asymptote   Evaluate each of the following limits using . Identify any vertical asymptotes of the function         We can use directly.       The function has a vertical asymptote of   "
},
{
  "id": "sec_Ch2Sec2v2-6-20",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-20",
  "type": "Checkpoint",
  "number": "2.2.44",
  "title": "",
  "body": "  Evaluate each of the following limits. Identify any vertical asymptotes of the function         a. b. c. DNE. The line is the vertical asymptote of    Use .   "
},
{
  "id": "sec_Ch2Sec2v2-6-22",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-22",
  "type": "Example",
  "number": "2.2.45",
  "title": "Behavior of a Function at Different Points.",
  "body": " Behavior of a Function at Different Points   Use the graph of in to determine each of the following values:          \"The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.\"  The graph shows        is undefined  DNE;  is undefined    "
},
{
  "id": "sec_Ch2Sec2v2-6-23",
  "level": "2",
  "url": "sec_Ch2Sec2v2.html#sec_Ch2Sec2v2-6-23",
  "type": "Checkpoint",
  "number": "2.2.47",
  "title": "",
  "body": "  Evaluate for shown here:   \"A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.\"     Does not exist.    Compare the limit from the right with the limit from the left.   "
},
{
  "id": "Ch2Sec3LimitDef",
  "level": "1",
  "url": "Ch2Sec3LimitDef.html",
  "type": "Section",
  "number": "2.3",
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
  "number": "2.3.1",
  "title": "",
  "body": "  Let be defined for all over an open interval containing . Let be a real number. Then if, for every there exists a , such that if , then .   "
},
{
  "id": "deltaepsilondeftable",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#deltaepsilondeftable",
  "type": "Table",
  "number": "2.3.2",
  "title": "Translation of the <span class=\"process-math\">\\(\\delta-\\varepsilon\\)<\/span> Definition of a Limit",
  "body": " Translation of the Definition of a Limit    Definition  Translation    For every  For every positive distance from    there exists ,  There is a positive distance from    such that  such that    if , then  if is closer than to and , then is closer than to    "
},
{
  "id": "CNX_Calc_Figure_02_05_001",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#CNX_Calc_Figure_02_05_001",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "  \"Three zoomed in images of a function f(x) over the interval \"   These graphs show possible values of given successively smaller values of . FIX THE IMAGE DESCRIPTION  "
},
{
  "id": "subsec-coreidea-13",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-13",
  "type": "Insight",
  "number": "2.3.4",
  "title": "",
  "body": "  Visit the following site to experiment with finding values of for selected values of .    Visualizer    "
},
{
  "id": "subsec-coreidea-14",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-14",
  "type": "Example",
  "number": "2.3.5",
  "title": "Proving a Statement About the Limit of a Specific Function.",
  "body": " Proving a Statement About the Limit of a Specific Function   Prove that     Let .  Choose .  Assume .  Thus,   Therefore,     We started with and used our assumption in a key part of the chain of inequalities to get to be less than .  We could just as easily have manipulated the assumed inequality to arrive at as follows:   Therefore, . (Having completed the proof, we state what we have accomplished.)   "
},
{
  "id": "subsec-coreidea-15",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-15",
  "type": "Note",
  "number": "2.3.6",
  "title": "Problem-Solving Strategy: Proving that <span class=\"process-math\">\\(\\ds \\lim_{x\\to a}f(x)=L\\)<\/span> for a Specific Function <span class=\"process-math\">\\(f(x)\\)<\/span>.",
  "body": " Problem-Solving Strategy: Proving that for a Specific Function    Let's begin the proof with the following statement: Let .    Next we need to obtain a value for . After we have obtained this value, we make the following statement, filling in the blank with our choice of : Choose     The next statement in the proof should be (at this point, we fill in our given value for ): Assume .    Next, based on this assumption, we need to show that , where and are our function and our limit . At some point, we need to use .    We conclude our proof with the statement: Therefore, .   > "
},
{
  "id": "subsec-coreidea-16",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-16",
  "type": "Example",
  "number": "2.3.7",
  "title": "Proving a Statement about a Limit.",
  "body": " Proving a Statement about a Limit   Complete the proof that by filling in the blanks.  Let .  Choose .  Assume .  Thus, .    We begin by filling in the blanks where the choices are specified by the definition. Thus we have  Let .  Choose .  Assume (or equivalently, ).  Thus, .  Focusing on the final line of the proof, we see that we should choose .  We now complete the final write-up of the proof:  Let .  Choose .  Assume (or equivalently, ).  Thus,    "
},
{
  "id": "geometriclimitproof",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#geometriclimitproof",
  "type": "Example",
  "number": "2.3.8",
  "title": "Proving a Statement about the Limit of a Specific Function (Geometric Approach).",
  "body": " Proving a Statement about the Limit of a Specific Function (Geometric Approach)   Prove that       Let . The first part of the definition begins For every , so we must prove that whatever follows is true no matter what positive value of is chosen. By stating Let , we signal our intent to do so.    Without loss of generality, assume . Two questions present themselves: Why do we want and why is it okay to make this assumption?  In answer to the first question: Later on, in the process of solving for , we will discover that involves the quantity . Consequently, we need .  In answer to the second question: If we can find that works for , then it will work for any as well. Keep in mind that, although it is always okay to put an upper bound on , it is never okay to put a lower bound (other than zero) on     Choose . shows how we made this choice of .    \"Three zoomed in images of a function f(x) over the interval\"   This graph shows how we find geometrically for a given for the proof in . FIX THE IMAGE DESCRIPTION     We must show: If , then , so we must begin by assuming We don't really need (in other words, ) for this proof. Since , it is okay to drop . Hence,   Recall that . Thus, and consequently . We also use here.  We might ask at this point: Why did we substitute for on the left-hand side of the inequality and on the right-hand side of the inequality? If we look at , we see that corresponds to the distance on the left of on the -axis and corresponds to the distance on the right. Thus,   We simplify the expression on the left: Then, we add to all parts of the inequality: We square all parts of the inequality. It is okay to do so, since all parts of the inequality are positive: We subtract from all parts of the inequality: Last,     Therefore,      "
},
{
  "id": "subsec-coreidea-18",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#subsec-coreidea-18",
  "type": "Example",
  "number": "2.3.10",
  "title": "Proving a Statement about the Nonexistence of a Limit.",
  "body": " Proving a Statement about the Nonexistence of a Limit   Let Prove that does not exist.    One way to prove that a limit does not exist is to show that, for any possible value one might think the limit equals, one can find an such that no possible works in the definition.  Suppose a person think the limit exists, and (some common values of might be or , but we'll stick with a generic real number). Let . We show that there is no possible that would satisfy .  The inequality can be written as For any , the solution to are values . This interval contains both positive and negative numbers. When is positive, and when is negative, . Since these two values of are units, apart, it would be impossible for them both to be within of any number .  That is, if then it can't also be true that and vice-versa. Any will result in an interval with both positive and negative values, thus no value of can satisfy the defintion.   "
},
{
  "id": "def-onesidedlimitdef",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#def-onesidedlimitdef",
  "type": "Definition",
  "number": "2.3.11",
  "title": "",
  "body": "   Limit from the Right:  Let be defined over an open interval of the form where . Then, if for every , there exists a such that if , then     Limit from the Left  Let be defined over an open interval of the form where . Then, if for every , there exists a such that if , then .    "
},
{
  "id": "ex-onesidedproof",
  "level": "2",
  "url": "Ch2Sec3LimitDef.html#ex-onesidedproof",
  "type": "Example",
  "number": "2.3.12",
  "title": "Proving a Statement about a Limit From the Right.",
  "body": " Proving a Statement about a Limit From the Right   Prove that     Let .  Choose . Since we ultimately want , we manipulate this inequality to get , or equivalently, , making a clear choice.  We may also determine geometrically as shown in     \"Three zoomed in images of a function f(x) over the interval\" >   This graph shows how we find for the proof in . FIX THE IMAGE DESCRIPTION   Assume . Thus, . Hence, . Finally, .  Therefore, .   "
},
{
  "id": "sec_Ch2Sec3",
  "level": "1",
  "url": "sec_Ch2Sec3.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Limit Laws",
  "body": " The Limit Laws   Learning Objectives   Recognize the basic limit laws.  Use the limit laws to evaluate the limit of a function.  Use the limit laws to evaluate the limit of a polynomial or rational function.  Evaluate the limit of a function by factoring or by using conjugates.  Evaluate the limit of a function by using the squeeze theorem.   In , we evaluated limits by looking at graphs or by constructing a table of values. In this section, we establish laws for calculating limits and learn how to apply these laws.    The Limit Laws   A few basic rules allow us to break down complicated functions into simpler ones when calculating limits. By using these limit laws, we can simplify many limit computations. We start with two important limits.   Basic Limit Results   For any real number and any constant ,          For , let . Whenever then Therefore,     For , let . Whenever then Therefore,        Evaluating a Basic Limit   Evaluate each of the following limits using .         The limit of as approaches is :  The limit of a constant is that constant:     We now take a look at the limit laws , the individual properties of limits. The proofs that these laws hold are included at the end of the section.   Limit Laws  Let and be defined for all over some open interval containing . Assume that and are real numbers such that and Let be a constant. Then, each of the following statements holds:  Sum law for limits :  Difference law for limits :  Constant multiple law for limits :  Product law for limits :  Quotient law for limits : for  Power law for limits : for every positive integer .  Root law for limits : for all if is odd and for if is even. (If then this cannot be computed with a two-sided limit).   We now practice applying these limit laws to evaluate a limit.   Evaluating a Limit Using Limit Laws   Use the limit laws to evaluate    Let’s apply the limit laws one step at a time to be sure we understand how they work. We need to keep in mind the requirement that, at each application of a limit law, the new limits must exist for the limit law to be applied.      Using Limit Laws Repeatedly   Use the limit laws to evaluate    To find this limit, we need to apply the limit laws several times. Again, we need to keep in mind that as we rewrite the limit in terms of other limits, each new limit must exist for the limit law to be applied.       Use the limit laws to evaluate In each step, indicate the limit law applied.       Begin by applying the product law.      Limits of Polynomial and Rational Functions  By now you have probably noticed that, in each of the previous examples, it has been the case that This is not always true, but it does hold for all polynomials for any choice of and for all rational functions at all values of for which the rational function is defined.    Let and be polynomial functions. Let be a real number. Then,      To see that this theorem holds, consider the polynomial By applying the sum, constant multiple, and power laws, we end up with   It now follows from the quotient law that if and are polynomials for which then       Evaluating a Limit of a Rational Function   Evaluate the    Since 3 is in the domain of the rational function we can calculate the limit by substituting 3 for into the function. Thus,       Evaluate    -13;    Use      Additional Limit Evaluation Techniques  As we have seen, we may evaluate easily the limits of polynomials and limits of some (but not all) rational functions by direct substitution. However, as we saw in the introductory section on limits, it is certainly possible for to exist when is undefined. The following observation allows us to evaluate many limits of this type:  If for all over some open interval containing , then  To understand this idea better, consider the limit  The function   and the function are identical for all values of The graphs of these two functions are shown in .    \"Two graphs side by side. The first is a graph of g(x) = x + 1, a linear function with y intercept at (0,1) and x intercept at (-1,0). The second is a graph of f(x) = (x^2 – 1) \/ (x – 1). This graph is identical to the first for all x not equal to 1, as there is an open circle at (1,2) in the second graph.\"  The graphs of and are identical for all Their limits at 1 are equal.   We see that   The limit has the form where and (In this case, we say that has the indeterminate form The following problem-solving strategy provides a general outline for evaluating limits of this type.   Strategy For Calculating a Limit When has the Indeterminate Form 0\/0   First, we need to make sure that our function has the appropriate form and cannot be evaluated immediately using the limit laws.  We then need to find a function that is equal to for all over some interval containing . To do this, we may need to try one or more of the following steps:   If and are polynomials, we should factor each function and cancel out any common factors.  If the numerator or denominator contains a difference involving a square root, we should try multiplying the numerator and denominator by the conjugate of the expression involving the square root.  If is a complex fraction, we begin by simplifying it.   Last, we apply the limit laws.    The next examples demonstrate the use of this Problem-Solving Strategy. illustrates the factor-and-cancel technique; shows multiplying by a conjugate. In , we look at simplifying a complex fraction.   Evaluating a Limit by Factoring and Canceling   Evaluate       The function is undefined for In fact, if we substitute 3 into the function we get which is undefined. Factoring and canceling is a good strategy:     For all Therefore,     Evaluate using the limit laws:          Evaluate       Follow the steps in and .     Evaluating a Limit by Multiplying by a Conjugate   Evaluate       has the form at -1. Let’s begin by multiplying by the conjugate of on the numerator and denominator:    We then multiply out the numerator. We don’t multiply out the denominator because we are hoping that the in the denominator cancels out in the end:   Then we cancel:    Last, we apply the limit laws:          Evaluate       Follow the steps in and .     Evaluating a Limit by Simplifying a Complex Fraction   Evaluate       has the form at 1.    We simplify the algebraic fraction by multiplying by    Next, we multiply through the numerators. Do not multiply the denominators because we want to be able to cancel the factor   Then, we simplify the numerator:   Now we factor out -1 from the numerator:   Then, we cancel the common factors of     Last, we evaluate using the limit laws:          Evaluate    -1;    Follow the steps in and .    does not fall neatly into any of the patterns established in the previous examples. However, with a little creativity, we can still use these same techniques.   Evaluating a Limit When the Limit Laws Do Not Apply   Evaluate    Both and fail to have a limit at zero. Since neither of the two functions has a limit at zero, we cannot apply the sum law for limits; we must use a different strategy. In this case, we find the limit by performing addition and then applying one of our previous strategies. Observe that   Thus,       Evaluate       Use the same technique as . Don’t forget to factor before getting a common denominator.      One-Sided Limits  Let’s now revisit one-sided limits. Simple modifications in the limit laws allow us to apply them to one-sided limits. For example, to apply the limit laws to a limit of the form we require the function to be defined over an open interval of the form for a limit of the form we require the function to be defined over an open interval of the form  illustrates this point.   Evaluating a One-Sided Limit Using the Limit Laws   Evaluate each of the following limits, if possible.        illustrates the function and aids in our understanding of these limits.    \"A graph of the function f(x) = sqrt(x-3). Visually, the function looks like the top half of a parabola opening to the right with vertex at (3,0).\"  The graph shows the function    The function is defined over the interval Since this function is not defined to the left of 3, we cannot apply the limit laws to compute In fact, since is undefined to the left of 3, does not exist.  Since is defined to the right of 3, the limit laws do apply to By applying these limit laws we obtain     In we look at one-sided limits of a piecewise-defined function and use these limits to draw a conclusion about a two-sided limit of the same function.    Evaluating a Two-Sided Limit Using the Limit Laws  For evaluate each of the following limits:         illustrates the function and aids in our understanding of these limits.    \"The graph of a piecewise function with two segments. For x\\lt 2, the function is linear with the equation 4x-3. There is an open circle at (2,5). The second segment is a parabola and exists for x\\gt =2, with the equation (x-3)^2. There is a closed circle at (2,1). The vertex of the parabola is at (3,0).\"  This graph shows a function    Since for all in replace in the limit with and apply the limit laws:   Since for all in replace in the limit with and apply the limit laws:   Since and we conclude that does not exist.      Graph and evaluate      \"The graph of a piecewise function with three segments. The first is a linear function, -x-2, for x\\lt -1. The x intercept is at (-2,0), and there is an open circle at (-1,-1). The next segment is simply the point (-1, 2). The third segment is the function x^3 for x \\gt -1, which crossed the x axis and y axis at the origin.\"      Use the method in to evaluate the limit.    Limits approaching the form are omitted from this section and held until the section on infinite limits     The Squeeze Theorem  The techniques we have developed thus far work very well for algebraic functions, but we are still unable to evaluate limits of very basic trigonometric functions. The next theorem, called the squeeze theorem , proves very useful for establishing basic trigonometric limits. This theorem allows us to calculate limits by “squeezing” a function, with a limit at a point that is unknown, between two functions having a common known limit at . illustrates this idea.    \"A graph of three functions over a small interval. All three functions curve. Over this interval, the function g(x) is trapped between the functions h(x), which gives greater y values for the same x values, and f(x), which gives smaller y values for the same x values. The functions all approach the same limit when x=a.\"  The Squeeze Theorem applies when and    The Squeeze Theorem  Let and be defined for all over an open interval containing . If   for all in an open interval containing and   where is a real number, then   For there exist such that whenever and whenever .  Let be the smaller of . For any satisfying , then (or ) and (or ).  Putting it all together, Therefore, .     Applying the Squeeze Theorem   Apply the squeeze theorem to evaluate    Because for all , we have . Since from the squeeze theorem, we obtain The graphs of and are shown in .   \"The graph of three functions: h(x) = x, f(x) = -x, and g(x) = xcos(x). The first, h(x) = x, is a linear function with slope of 1 going through the origin. The second, f(x), is also a linear function with slope of -1; going through the origin. The third, g(x) = xcos(x), curves between the two and goes through the origin. It opens upward for x\\gt 0 and downward for x\\gt 0.\"  The graphs of and are shown around the point       Use the squeeze theorem to evaluate    0    Use the fact that to help you find two functions such that is squeezed between them.      A Few Important Trigonometric Limits  We now use the squeeze theorem to tackle several very important limits. Although this discussion is somewhat lengthy, these limits prove invaluable for the development of the material in both the next section and the next chapter. The first of these limits is Consider the unit circle shown in . In the figure, we see that is the -coordinate on the unit circle and it corresponds to the line segment shown in blue. The radian measure of angle is the length of the arc it subtends on the unit circle. Therefore, we see that for    \"A diagram of the unit circle in the x,y plane – it is a circle with radius 1 and center at the origin. A specific point (cos(theta), sin(theta)) is labeled in quadrant 1 on the edge of the circle. This point is one vertex of a right triangle inside the circle, with other vertices at the origin and (cos(theta), 0). As such, the lengths of the sides are cos(theta) for the base and sin(theta) for the height, where theta is the angle created by the hypotenuse and base. The radian measure of angle theta is the length of the arc it subtends on the unit circle. The diagram shows that for 0 \\lt theta \\lt pi\/2, 0 \\lt sin(theta) \\lt theta.\"  The sine function is shown as a line on the unit circle.   Because and by using the squeeze theorem we conclude that  To see that as well, observe that for and hence, Consequently, It follows that An application of the squeeze theorem produces the desired limit. Thus, since and   Next, using the identity for we see that   We now take a look at a limit that plays an important role in later chapters—namely, To evaluate this limit, we use the unit circle in . Notice that this figure adds one additional triangle to . We see that the length of the side opposite angle in this new triangle is Thus, we see that for    \"The same diagram as the previous one. However, the triangle is expanded. The base is now from the origin to (1,0). The height goes from (1,0) to (1, tan(theta)). The hypotenuse goes from the origin to (1, tan(theta)). As such, the height is now tan(theta). It shows that for 0 \\lt theta \\lt pi\/2, sin(theta) \\lt theta \\lt tan(theta).\"  The sine and tangent functions are shown as lines on the unit circle.   By dividing by in all parts of the inequality, we obtain   Equivalently, we have   Since we conclude that By applying a manipulation similar to that used in demonstrating that we can show that Thus,   In we use this limit to establish This limit also proves useful in later chapters.   Evaluating an Important Trigonometric Limit   Evaluate    In the first step, we multiply by the conjugate so that we can use a trigonometric identity to convert the cosine in the numerator to a sine:   Therefore,       Evaluate    0    Multiply numerator and denominator by      Deriving the Formula for the Area of a Circle  Some of the geometric formulas we take for granted today were first derived by methods that anticipate some of the methods of calculus. The Greek mathematician Archimedes (ca. 287-212; BCE) was particularly inventive, using polygons inscribed within circles to approximate the area of the circle as the number of sides of the polygon increased. He never came up with the idea of a limit, but we can use this idea to see what his geometric constructions could have predicted about the limit.  We can estimate the area of a circle by computing the area of an inscribed regular polygon. Think of the regular polygon as being made up of triangles. By taking the limit as the vertex angle of these triangles goes to zero, you can obtain the area of the circle. To see this, carry out the following steps:   Express the height and the base of the isosceles triangle in in terms of and .    \"A diagram of a circle with an inscribed polygon – namely, an octagon. An isosceles triangle is drawn with one of the sides of the octagon as the base and center of the circle\/octagon as the top vertex. The height h goes from the center of the base b to the center, and each of the legs is also radii r of the circle. The angle created by the height h and one of the legs r is labeled as theta.\"    Using the expressions that you obtained in step 1, express the area of the isosceles triangle in terms of and . (Substitute for in your expression.)  If an -sided regular polygon is inscribed in a circle of radius , find a relationship between and . Solve this for . Keep in mind there are 2 radians in a circle. (Use radians, not degrees.)  Find an expression for the area of the -sided polygon in terms of and .  To find a formula for the area of the circle, find the limit of the expression in step 4 as goes to zero. ( Hint:    The technique of estimating areas of regions by using polygons is revisited in Introduction to Integration .      Proofs of the Limit Laws (Optional)  We now prove    To start, we need the triangle inequality , which says that for any real numbers ,    Sum law for limits : For . Since the limit for exists, then there exists such that when then .  Also, since the limit for exists, there is some such that when then .  Let be the smaller of (so and ). Whenever , then using the Triangle Inequality,    Difference law for limits : Choose the same way as in the sum law for limits.  Again using the Triangle Inequality, whenever , then    Constant multiple law for limits : If then this is just a case of   If , let . Since the limit for exists, there is some such that whenever . For such ,    Product law for limits : Let . First, consider the case if Since the limits for exist, there exists and such that when and when .  Let be the smaller of like we did in the sum law for limits. For any ,   Now, for the more general case, assume . Since the limit for exists, then there is some such that whenever , then (the last line is true regardless of whether is positive or negative)  Since the limit for exists, there is some such that whenever , then . Also, there is some such that whenever .  Let's put the pieces altogether by letting be the minimum of . For any x satisfying , again use the Triangle Inequality to show    Quotient law for limits : This limit law will follow quickly if we first show that : Assume for simplicity that . Since the limit for exists, then given there exists such that whenever . Note that .  Following the inequalities down the rabbit hole, for any satisfying , Since , then .  Now, if , define . The constant multiple law of limits shows that and so   Finally, to prove the quotient law for limits, rewrite as and apply the product law for limits.   Power law for limits : This is a repeated application of the product law for limits   Root law for limits : First start with the case when . Let . Without loss of generality, assume . Then there exists such that whenever (which makes ). It can be verified that So, Therefore, if then   Now suppose where is any nonzero number. Define . Using the constant multiple law for limits, . Thus, by the work above, . Again using the constant multiple law for limits,   Finally, suppose with odd. It can be shown that whenever , then .    "
},
{
  "id": "fs-id1170572451153",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572451153",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Basic Limit Results.",
  "body": " Basic Limit Results   For any real number and any constant ,          For , let . Whenever then Therefore,     For , let . Whenever then Therefore,      "
},
{
  "id": "fs-id1170572111463",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572111463",
  "type": "Example",
  "number": "2.4.2",
  "title": "Evaluating a Basic Limit.",
  "body": " Evaluating a Basic Limit   Evaluate each of the following limits using .         The limit of as approaches is :  The limit of a constant is that constant:    "
},
{
  "id": "sec_Ch2Sec3-3-5",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit laws "
},
{
  "id": "limitlaws",
  "level": "2",
  "url": "sec_Ch2Sec3.html#limitlaws",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Limit Laws.",
  "body": " Limit Laws  Let and be defined for all over some open interval containing . Assume that and are real numbers such that and Let be a constant. Then, each of the following statements holds:  Sum law for limits :  Difference law for limits :  Constant multiple law for limits :  Product law for limits :  Quotient law for limits : for  Power law for limits : for every positive integer .  Root law for limits : for all if is odd and for if is even. (If then this cannot be computed with a two-sided limit).  "
},
{
  "id": "fs-id1170572451489",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572451489",
  "type": "Example",
  "number": "2.4.4",
  "title": "Evaluating a Limit Using Limit Laws.",
  "body": " Evaluating a Limit Using Limit Laws   Use the limit laws to evaluate    Let’s apply the limit laws one step at a time to be sure we understand how they work. We need to keep in mind the requirement that, at each application of a limit law, the new limits must exist for the limit law to be applied.    "
},
{
  "id": "fs-id1170572509954",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572509954",
  "type": "Example",
  "number": "2.4.5",
  "title": "Using Limit Laws Repeatedly.",
  "body": " Using Limit Laws Repeatedly   Use the limit laws to evaluate    To find this limit, we need to apply the limit laws several times. Again, we need to keep in mind that as we rewrite the limit in terms of other limits, each new limit must exist for the limit law to be applied.    "
},
{
  "id": "sec_Ch2Sec3-3-10",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-3-10",
  "type": "Checkpoint",
  "number": "2.4.6",
  "title": "",
  "body": "  Use the limit laws to evaluate In each step, indicate the limit law applied.       Begin by applying the product law.   "
},
{
  "id": "fs-id1170572557796",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572557796",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "",
  "body": "  Let and be polynomial functions. Let be a real number. Then,      To see that this theorem holds, consider the polynomial By applying the sum, constant multiple, and power laws, we end up with   It now follows from the quotient law that if and are polynomials for which then    "
},
{
  "id": "fs-id1170572305829",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572305829",
  "type": "Example",
  "number": "2.4.8",
  "title": "Evaluating a Limit of a Rational Function.",
  "body": " Evaluating a Limit of a Rational Function   Evaluate the    Since 3 is in the domain of the rational function we can calculate the limit by substituting 3 for into the function. Thus,    "
},
{
  "id": "sec_Ch2Sec3-4-5",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-4-5",
  "type": "Checkpoint",
  "number": "2.4.9",
  "title": "",
  "body": "  Evaluate    -13;    Use   "
},
{
  "id": "CNX_Calc_Figure_02_03_001",
  "level": "2",
  "url": "sec_Ch2Sec3.html#CNX_Calc_Figure_02_03_001",
  "type": "Figure",
  "number": "2.4.10",
  "title": "",
  "body": "  \"Two graphs side by side. The first is a graph of g(x) = x + 1, a linear function with y intercept at (0,1) and x intercept at (-1,0). The second is a graph of f(x) = (x^2 – 1) \/ (x – 1). This graph is identical to the first for all x not equal to 1, as there is an open circle at (1,2) in the second graph.\"  The graphs of and are identical for all Their limits at 1 are equal.  "
},
{
  "id": "fs-id1170571611384",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571611384",
  "type": "Problem-Solving Strategy",
  "number": "2.4.11",
  "title": "Strategy For Calculating a Limit When <span class=\"process-math\">\\(f(x)\/g(x)\\)<\/span> has the Indeterminate Form 0\/0.",
  "body": " Strategy For Calculating a Limit When has the Indeterminate Form 0\/0   First, we need to make sure that our function has the appropriate form and cannot be evaluated immediately using the limit laws.  We then need to find a function that is equal to for all over some interval containing . To do this, we may need to try one or more of the following steps:   If and are polynomials, we should factor each function and cancel out any common factors.  If the numerator or denominator contains a difference involving a square root, we should try multiplying the numerator and denominator by the conjugate of the expression involving the square root.  If is a complex fraction, we begin by simplifying it.   Last, we apply the limit laws.   "
},
{
  "id": "fs-id1170571669713",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571669713",
  "type": "Example",
  "number": "2.4.12",
  "title": "Evaluating a Limit by Factoring and Canceling.",
  "body": " Evaluating a Limit by Factoring and Canceling   Evaluate       The function is undefined for In fact, if we substitute 3 into the function we get which is undefined. Factoring and canceling is a good strategy:     For all Therefore,     Evaluate using the limit laws:       "
},
{
  "id": "sec_Ch2Sec3-5-15",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-5-15",
  "type": "Checkpoint",
  "number": "2.4.13",
  "title": "",
  "body": "  Evaluate       Follow the steps in and .   "
},
{
  "id": "fs-id1170572307613",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572307613",
  "type": "Example",
  "number": "2.4.14",
  "title": "Evaluating a Limit by Multiplying by a Conjugate.",
  "body": " Evaluating a Limit by Multiplying by a Conjugate   Evaluate       has the form at -1. Let’s begin by multiplying by the conjugate of on the numerator and denominator:    We then multiply out the numerator. We don’t multiply out the denominator because we are hoping that the in the denominator cancels out in the end:   Then we cancel:    Last, we apply the limit laws:       "
},
{
  "id": "sec_Ch2Sec3-5-17",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-5-17",
  "type": "Checkpoint",
  "number": "2.4.15",
  "title": "",
  "body": "  Evaluate       Follow the steps in and .   "
},
{
  "id": "fs-id1170571612021",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571612021",
  "type": "Example",
  "number": "2.4.16",
  "title": "Evaluating a Limit by Simplifying a Complex Fraction.",
  "body": " Evaluating a Limit by Simplifying a Complex Fraction   Evaluate       has the form at 1.    We simplify the algebraic fraction by multiplying by    Next, we multiply through the numerators. Do not multiply the denominators because we want to be able to cancel the factor   Then, we simplify the numerator:   Now we factor out -1 from the numerator:   Then, we cancel the common factors of     Last, we evaluate using the limit laws:       "
},
{
  "id": "sec_Ch2Sec3-5-19",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-5-19",
  "type": "Checkpoint",
  "number": "2.4.17",
  "title": "",
  "body": "  Evaluate    -1;    Follow the steps in and .   "
},
{
  "id": "fs-id1170571648139",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571648139",
  "type": "Example",
  "number": "2.4.18",
  "title": "Evaluating a Limit When the Limit Laws Do Not Apply.",
  "body": " Evaluating a Limit When the Limit Laws Do Not Apply   Evaluate    Both and fail to have a limit at zero. Since neither of the two functions has a limit at zero, we cannot apply the sum law for limits; we must use a different strategy. In this case, we find the limit by performing addition and then applying one of our previous strategies. Observe that   Thus,    "
},
{
  "id": "sec_Ch2Sec3-5-22",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-5-22",
  "type": "Checkpoint",
  "number": "2.4.19",
  "title": "",
  "body": "  Evaluate       Use the same technique as . Don’t forget to factor before getting a common denominator.   "
},
{
  "id": "fs-id1170571679268",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571679268",
  "type": "Example",
  "number": "2.4.20",
  "title": "Evaluating a One-Sided Limit Using the Limit Laws.",
  "body": " Evaluating a One-Sided Limit Using the Limit Laws   Evaluate each of the following limits, if possible.        illustrates the function and aids in our understanding of these limits.    \"A graph of the function f(x) = sqrt(x-3). Visually, the function looks like the top half of a parabola opening to the right with vertex at (3,0).\"  The graph shows the function    The function is defined over the interval Since this function is not defined to the left of 3, we cannot apply the limit laws to compute In fact, since is undefined to the left of 3, does not exist.  Since is defined to the right of 3, the limit laws do apply to By applying these limit laws we obtain    "
},
{
  "id": "fs-id1170571558882",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571558882",
  "type": "Example",
  "number": "2.4.22",
  "title": "Evaluating a Two-Sided Limit Using the Limit Laws.",
  "body": "  Evaluating a Two-Sided Limit Using the Limit Laws  For evaluate each of the following limits:       "
},
{
  "id": "CNX_Calc_Figure_02_03_003",
  "level": "2",
  "url": "sec_Ch2Sec3.html#CNX_Calc_Figure_02_03_003",
  "type": "Figure",
  "number": "2.4.23",
  "title": "",
  "body": "  \"The graph of a piecewise function with two segments. For x\\lt 2, the function is linear with the equation 4x-3. There is an open circle at (2,5). The second segment is a parabola and exists for x\\gt =2, with the equation (x-3)^2. There is a closed circle at (2,1). The vertex of the parabola is at (3,0).\"  This graph shows a function  "
},
{
  "id": "subsec-onesidedlimits-7",
  "level": "2",
  "url": "sec_Ch2Sec3.html#subsec-onesidedlimits-7",
  "type": "Checkpoint",
  "number": "2.4.24",
  "title": "",
  "body": "  Graph and evaluate      \"The graph of a piecewise function with three segments. The first is a linear function, -x-2, for x\\lt -1. The x intercept is at (-2,0), and there is an open circle at (-1,-1). The next segment is simply the point (-1, 2). The third segment is the function x^3 for x \\gt -1, which crossed the x axis and y axis at the origin.\"      Use the method in to evaluate the limit.   "
},
{
  "id": "sec_Ch2Sec3-7-2",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "squeeze theorem "
},
{
  "id": "CNX_Calc_Figure_02_03_005",
  "level": "2",
  "url": "sec_Ch2Sec3.html#CNX_Calc_Figure_02_03_005",
  "type": "Figure",
  "number": "2.4.25",
  "title": "",
  "body": "  \"A graph of three functions over a small interval. All three functions curve. Over this interval, the function g(x) is trapped between the functions h(x), which gives greater y values for the same x values, and f(x), which gives smaller y values for the same x values. The functions all approach the same limit when x=a.\"  The Squeeze Theorem applies when and  "
},
{
  "id": "sec_Ch2Sec3-7-4",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-7-4",
  "type": "Theorem",
  "number": "2.4.26",
  "title": "The Squeeze Theorem.",
  "body": " The Squeeze Theorem  Let and be defined for all over an open interval containing . If   for all in an open interval containing and   where is a real number, then   For there exist such that whenever and whenever .  Let be the smaller of . For any satisfying , then (or ) and (or ).  Putting it all together, Therefore, .   "
},
{
  "id": "fs-id1170571654228",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170571654228",
  "type": "Example",
  "number": "2.4.27",
  "title": "Applying the Squeeze Theorem.",
  "body": " Applying the Squeeze Theorem   Apply the squeeze theorem to evaluate    Because for all , we have . Since from the squeeze theorem, we obtain The graphs of and are shown in .   \"The graph of three functions: h(x) = x, f(x) = -x, and g(x) = xcos(x). The first, h(x) = x, is a linear function with slope of 1 going through the origin. The second, f(x), is also a linear function with slope of -1; going through the origin. The third, g(x) = xcos(x), curves between the two and goes through the origin. It opens upward for x\\gt 0 and downward for x\\gt 0.\"  The graphs of and are shown around the point    "
},
{
  "id": "sec_Ch2Sec3-7-6",
  "level": "2",
  "url": "sec_Ch2Sec3.html#sec_Ch2Sec3-7-6",
  "type": "Checkpoint",
  "number": "2.4.29",
  "title": "",
  "body": "  Use the squeeze theorem to evaluate    0    Use the fact that to help you find two functions such that is squeezed between them.   "
},
{
  "id": "CNX_Calc_Figure_02_03_007",
  "level": "2",
  "url": "sec_Ch2Sec3.html#CNX_Calc_Figure_02_03_007",
  "type": "Figure",
  "number": "2.4.30",
  "title": "",
  "body": "  \"A diagram of the unit circle in the x,y plane – it is a circle with radius 1 and center at the origin. A specific point (cos(theta), sin(theta)) is labeled in quadrant 1 on the edge of the circle. This point is one vertex of a right triangle inside the circle, with other vertices at the origin and (cos(theta), 0). As such, the lengths of the sides are cos(theta) for the base and sin(theta) for the height, where theta is the angle created by the hypotenuse and base. The radian measure of angle theta is the length of the arc it subtends on the unit circle. The diagram shows that for 0 \\lt theta \\lt pi\/2, 0 \\lt sin(theta) \\lt theta.\"  The sine function is shown as a line on the unit circle.  "
},
{
  "id": "CNX_Calc_Figure_02_03_008",
  "level": "2",
  "url": "sec_Ch2Sec3.html#CNX_Calc_Figure_02_03_008",
  "type": "Figure",
  "number": "2.4.31",
  "title": "",
  "body": "  \"The same diagram as the previous one. However, the triangle is expanded. The base is now from the origin to (1,0). The height goes from (1,0) to (1, tan(theta)). The hypotenuse goes from the origin to (1, tan(theta)). As such, the height is now tan(theta). It shows that for 0 \\lt theta \\lt pi\/2, sin(theta) \\lt theta \\lt tan(theta).\"  The sine and tangent functions are shown as lines on the unit circle.  "
},
{
  "id": "fs-id1170572243714",
  "level": "2",
  "url": "sec_Ch2Sec3.html#fs-id1170572243714",
  "type": "Example",
  "number": "2.4.32",
  "title": "Evaluating an Important Trigonometric Limit.",
  "body": " Evaluating an Important Trigonometric Limit   Evaluate    In the first step, we multiply by the conjugate so that we can use a trigonometric identity to convert the cosine in the numerator to a sine:   Therefore,    "
},
{
  "id": "subsubsec-triglimits-20",
  "level": "2",
  "url": "sec_Ch2Sec3.html#subsubsec-triglimits-20",
  "type": "Checkpoint",
  "number": "2.4.33",
  "title": "",
  "body": "  Evaluate    0    Multiply numerator and denominator by   "
},
{
  "id": "subsubsec-triglimits-21",
  "level": "2",
  "url": "sec_Ch2Sec3.html#subsubsec-triglimits-21",
  "type": "Project",
  "number": "2.4.1",
  "title": "Deriving the Formula for the Area of a Circle.",
  "body": " Deriving the Formula for the Area of a Circle  Some of the geometric formulas we take for granted today were first derived by methods that anticipate some of the methods of calculus. The Greek mathematician Archimedes (ca. 287-212; BCE) was particularly inventive, using polygons inscribed within circles to approximate the area of the circle as the number of sides of the polygon increased. He never came up with the idea of a limit, but we can use this idea to see what his geometric constructions could have predicted about the limit.  We can estimate the area of a circle by computing the area of an inscribed regular polygon. Think of the regular polygon as being made up of triangles. By taking the limit as the vertex angle of these triangles goes to zero, you can obtain the area of the circle. To see this, carry out the following steps:   Express the height and the base of the isosceles triangle in in terms of and .    \"A diagram of a circle with an inscribed polygon – namely, an octagon. An isosceles triangle is drawn with one of the sides of the octagon as the base and center of the circle\/octagon as the top vertex. The height h goes from the center of the base b to the center, and each of the legs is also radii r of the circle. The angle created by the height h and one of the legs r is labeled as theta.\"    Using the expressions that you obtained in step 1, express the area of the isosceles triangle in terms of and . (Substitute for in your expression.)  If an -sided regular polygon is inscribed in a circle of radius , find a relationship between and . Solve this for . Keep in mind there are 2 radians in a circle. (Use radians, not degrees.)  Find an expression for the area of the -sided polygon in terms of and .  To find a formula for the area of the circle, find the limit of the expression in step 4 as goes to zero. ( Hint:    The technique of estimating areas of regions by using polygons is revisited in Introduction to Integration .   "
},
{
  "id": "subsec-LimitLawProofs-3",
  "level": "2",
  "url": "sec_Ch2Sec3.html#subsec-LimitLawProofs-3",
  "type": "Proof",
  "number": "2.4.7.1",
  "title": "",
  "body": " To start, we need the triangle inequality , which says that for any real numbers ,    Sum law for limits : For . Since the limit for exists, then there exists such that when then .  Also, since the limit for exists, there is some such that when then .  Let be the smaller of (so and ). Whenever , then using the Triangle Inequality,    Difference law for limits : Choose the same way as in the sum law for limits.  Again using the Triangle Inequality, whenever , then    Constant multiple law for limits : If then this is just a case of   If , let . Since the limit for exists, there is some such that whenever . For such ,    Product law for limits : Let . First, consider the case if Since the limits for exist, there exists and such that when and when .  Let be the smaller of like we did in the sum law for limits. For any ,   Now, for the more general case, assume . Since the limit for exists, then there is some such that whenever , then (the last line is true regardless of whether is positive or negative)  Since the limit for exists, there is some such that whenever , then . Also, there is some such that whenever .  Let's put the pieces altogether by letting be the minimum of . For any x satisfying , again use the Triangle Inequality to show    Quotient law for limits : This limit law will follow quickly if we first show that : Assume for simplicity that . Since the limit for exists, then given there exists such that whenever . Note that .  Following the inequalities down the rabbit hole, for any satisfying , Since , then .  Now, if , define . The constant multiple law of limits shows that and so   Finally, to prove the quotient law for limits, rewrite as and apply the product law for limits.   Power law for limits : This is a repeated application of the product law for limits   Root law for limits : First start with the case when . Let . Without loss of generality, assume . Then there exists such that whenever (which makes ). It can be verified that So, Therefore, if then   Now suppose where is any nonzero number. Define . Using the constant multiple law for limits, . Thus, by the work above, . Again using the constant multiple law for limits,   Finally, suppose with odd. It can be shown that whenever , then .  "
},
{
  "id": "sec_Ch2Sec4",
  "level": "1",
  "url": "sec_Ch2Sec4.html",
  "type": "Section",
  "number": "2.5",
  "title": "Continuity",
  "body": " Continuity   Learning Objectives   Explain the three conditions for continuity at a point.  Describe three kinds of discontinuities.  Define continuity on an interval.  State the theorem for limits of composite functions.  Provide an example of the intermediate value theorem.   We have seen that computing the limits of polynomial and rational functions at any point in their domains is easy because That is, the limit as approaches is just . Roughly speaking, the reason we can compute the limit this way is because these functions do not have any jumps as near  Many other functions have this property, for example. A function with this property is called \"continuous\" and there is a precise definition for it.    Continuity at a Point  Before we look at a formal definition of what it means for a function to be continuous at a point, let’s consider various functions that fail to meet our intuitive notion of what it means to be continuous at a point. We then create a list of conditions that prevent such failures.  Our first function of interest is shown in . We see that the graph of has a hole at . In fact, is undefined. At the very least, for to be continuous at , we need the following condition:     \"A graph of an increasing linear function f(x) which crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. A point a greater than zero is marked on the x axis. The point on the function f(x) above a is an open circle; the function is not defined at a.\"  The function is not continuous at because is undefined.   However, as we see in , this condition alone is insufficient to guarantee continuity at the point . Although is defined, the function has a gap at . In this example, the gap exists because does not exist. We must add another condition for continuity at —namely,     \"The graph of a piecewise function f(x) with two parts. The first part is an increasing linear function that crosses from quadrant three to quadrant one at the origin. A point a greater than zero is marked on the x axis. At fa. on this segment, there is a solid circle. The other segment is also an increasing linear function. It exists in quadrant one for values of x greater than a. At x=a, this segment has an open circle.\"  The function is not continuous at because does not exist.   However, as we see in , these two conditions by themselves do not guarantee continuity at a point. The function in this figure satisfies both of our first two conditions, but is still not continuous at . We must add a third condition to our list:     \"The graph of a piecewise function with two parts. The first part is an increasing linear function that crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. A point a greater than zero is marked on the x axis. At this point, there is an open circle on the linear function. The second part is a point at x=a above the line.\"  The function is not continuous at because   Now we put our list of conditions together and form a definition of continuity at a point.   A function is continuous at a point  if and only if the following three conditions are satisfied:   is defined  exists    A function is discontinuous at a point  if it fails to be continuous at .   The following procedure can be used to analyze the continuity of a function at a point using this definition.   Determining Continuity at a Point   Check to see if is defined. If is undefined, we need go no further. The function is not continuous at . If is defined, continue to step 2.  Compute In some cases, we may need to do this by first computing and If does not exist (that is, it is not a real number), then the function is not continuous at and the problem is solved. If exists, then continue to step 3.  Compare and If then the function is not continuous at . If then the function is continuous at .    The next three examples demonstrate how to apply this definition to determine whether a function is continuous at a given point. These examples illustrate situations in which each of the conditions for continuity in the definition succeed or fail.   Determining Continuity at a Point, Condition 1   Using the definition, determine whether the function is continuous at Justify the conclusion.    Let’s begin by trying to calculate We can see that which is undefined. Therefore, is discontinuous at 2 because is undefined. The graph of is shown in .    \"A graph of the given function. There is a line which crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. At a point in quadrant one, there is an open circle where the function is not defined.\"  The function is discontinuous at 2 because is undefined.      Determining Continuity at a Point, Condition 2   Using the definition, determine whether the function is continuous at Justify the conclusion.    Let’s begin by trying to calculate   Thus, is defined. Next, we calculate To do this, we must compute and   and   Therefore, does not exist. Thus, is not continuous at 3. The graph of is shown in .    \"A graph of the given piecewise function, which has two parts. The first is a downward opening parabola which is symmetric about the y axis. Its vertex is on the y axis, greater than zero. There is a closed circle on the parabola for x=3. The second part is an increasing linear function in the first quadrant, which exists for values of x \\gt 3. There is an open circle at the end of the line where x would be 3.\"  The function is not continuous at 3 because does not exist.      Determining Continuity at a Point, Condition 3   Using the definition, determine whether the function is continuous at    First, observe that   Next,   Last, compare and We see that   Since all three of the conditions in the definition of continuity are satisfied, is continuous at      Using the definition, determine whether the function is continuous at If the function is not continuous at 1, indicate the condition for continuity at a point that fails to hold.    is not continuous at 1 because    Check each condition of the definition.      Types of Discontinuities  As we have seen in and , discontinuities take on several different appearances. We classify the types of discontinuities we have seen thus far as removable discontinuities, infinite discontinuities, or jump discontinuities. Intuitively, a removable discontinuity is a discontinuity for which there is a hole in the graph, a jump discontinuity is a noninfinite discontinuity for which the sections of the function do not meet up, and an infinite discontinuity is a discontinuity located at a vertical asymptote. illustrates the differences in these types of discontinuities. Although these terms provide a handy way of describing three common types of discontinuities, keep in mind that not all discontinuities fit neatly into these categories.    \"Three graphs, each showing a different discontinuity. The first is removable discontinuity. Here, the given function is a line with positive slope. At a point x=a, where a\\gt 0, there is an open circle on the line and a closed circle a few units above the line. The second is a jump discontinuity. Here, there are two lines with positive slope. The first line exists for x\\lt =a, and the second exists for x\\gt a, where a\\gt 0. The first line ends at a solid circle where x=a, and the second begins a few units up with an open circle at x=a. The third discontinuity type is infinite discontinuity. Here, the function has two parts separated by an asymptote x=a. The first segment is a curve stretching along the x axis to 0 as x goes to negative infinity and along the y axis to infinity as x goes to zero. The second segment is a curve stretching along the y axis to negative infinity as x goes to zero and along the x axis to 0 as x goes to infinity.\"  Discontinuities are classified as (a) removable, (b) jump, or (c) infinite.   These three discontinuities are formally defined as follows:   If is discontinuous at , then   has a removable discontinuity at if exists. (Note: When we state that exists, we mean that where is a real number.)  has a jump discontinuity at if and both exist, but (Note: When we state that and both exist, we mean that both are real-valued and that neither take on the values \\pm\\infty .)  has an infinite discontinuity at if or     Classifying a Discontinuity   In , we showed that is discontinuous at Classify this discontinuity as removable, jump, or infinite.    To classify the discontinuity at 2 we must evaluate   Since is discontinuous at 2 and exists, has a removable discontinuity at     Classifying a Discontinuity   In , we showed that is discontinuous at Classify this discontinuity as removable, jump, or infinite.    Earlier, we showed that is discontinuous at 3 because does not exist. However, since and both exist, we conclude that the function has a jump discontinuity at 3.     Classifying a Discontinuity   Determine whether is continuous at -1. If the function is discontinuous at -1, classify the discontinuity as removable, jump, or infinite.    The function value is undefined. Therefore, the function is not continuous at -1. To determine the type of discontinuity, we must determine the limit at -1. We see that and Therefore, the function has an infinite discontinuity at -1.      For decide whether is continuous at 1. If is not continuous at 1, classify the discontinuity as removable, jump, or infinite.    Discontinuous at 1; removable    Follow the steps in . If the function is discontinuous at 1, look at and use the definition to determine the type of discontinuity.      Continuity over an Interval  Now that we have explored the concept of continuity at a point, we extend that idea to continuity over an interval . As we develop this idea for different types of intervals, it may be useful to keep in mind the intuitive idea that a function is continuous over an interval if we can use a pencil to trace the function between any two points in the interval without lifting the pencil from the paper. In preparation for defining continuity on an interval, we begin by looking at the definition of what it means for a function to be continuous from the right at a point and continuous from the left at a point.   Continuity from the Right and from the Left  A function is said to be continuous from the right at if  A function is said to be continuous from the left at if   A function is continuous over an open interval if it is continuous at every point in the interval. A function is continuous over a closed interval of the form if it is continuous at every point in and is continuous from the right at and is continuous from the left at :  A function is continuous on the closed interval when    is continuous on      is continuous from the right at , and     is continuous from the left at .   Note that the last two conditions are equivalent to   Requiring that and ensures that we can trace the graph of the function from the point to the point without lifting the pencil. If, for example, we would need to lift our pencil to jump from to the graph of the rest of the function over   Continuity on an Interval   State the interval(s) over which the function is continuous.    Since is a rational function, it is continuous at every point in its domain. The domain of is the set Thus, is continuous over each of the intervals and     Continuity over an Interval   State the interval(s) over which the function is continuous.    From the limit laws, we know that for all values of in We also know that exists and exists. Therefore, is continuous over the interval      State the interval(s) over which the function is continuous.       Use as a guide for solving.     Algebra of Continuous Functions   If the functions and are continuous at , then the following algebraic combinations are continuous at .                                           We prove the sum property using the limit laws.     By applying the definition of continuity and previously established theorems concerning the evaluation of limits, we can state the following theorem.   Continuity of Polynomials and Rational Functions  Polynomials and rational functions are continuous at every point in their domains.   Previously, we showed that if and are polynomials, for every polynomial and as long as Therefore, polynomials and rational functions are continuous on their domains.   We now apply to determine the points at which a given rational function is continuous.   Continuity of a Rational Function   For what values of is continuous?    The rational function is continuous for every value of except      For what values of is continuous?    is continuous at every real number.    Use    allows us to expand our ability to compute limits. In particular, this theorem ultimately allows us to demonstrate that trigonometric functions are continuous over their domains.   Composite Function Theorem  If is continuous at and then    Before we move on to , recall that earlier, in the section on limit laws, we showed Consequently, we know that is continuous at 0. In we see how to combine this result with the composite function theorem.   Limit of a Composite Cosine Function   Evaluate    The given function is a composite of and Since and is continuous at 0, we may apply the composite function theorem. Thus,       Evaluate    0    is continuous at 0. Use as a guide.    The proof of the next theorem uses the composite function theorem as well as the continuity of and at the point 0 to show that trigonometric functions are continuous over their entire domains.   Continuity of Trigonometric Functions  Trigonometric functions are continuous over their entire domains.   We begin by demonstrating that is continuous at every real number. To do this, we must show that for all values of .    The proof that is continuous at every real number is analogous. Because the remaining trigonometric functions may be expressed in terms of and their continuity follows from the quotient limit law.    This theorem says that if is a continuous function on all of the interval then as moves from to , takes every value between and at least once. To put this slightly differently, if were to avoid a value between and then cannot be continuous on .  It is not hard to convince yourself that the continuity of is crucial to the IVT. Without it one can quickly construct examples of functions that contradict the theorem. See the figure below for a few non-continuous examples:    The Intermediate Value Theorem  Functions that are continuous over intervals of the form where and are real numbers, exhibit many useful properties. Throughout our study of calculus, we will encounter many powerful theorems concerning such functions. The first of these theorems is the Intermediate Value Theorem .   The Intermediate Value Theorem  Let be continuous over a closed, bounded interval If is any real number between and then there is a number in satisfying in .    \"A diagram illustrating the intermediate value theorem. There is a generic continuous curved function shown over the interval [a,b]. The points fa. and fb. are marked, and dotted lines are drawn from a, b, fa., and fb. to the points (a, fa.) and (b, fb.). A third point, c, is plotted between a and b. Since the function is continuous, there is a value for fc. along the curve, and a line is drawn from c to (c, fc.) and from (c, fc.) to fc., which is labeled as z on the y axis.\"  There is a number that satisfies     Without continuity, there could be a -value that is \"missed\" between two other -values in the range of  NEEDS ALT TEXT. Text below agrees with notation in the picture (Y instead of z)          a  b  f(a)  f(b)  z             a  b  f(a)  f(b)  z              In the left-hand example we see that a discontinuous function can \"jump\" over the -value we have chosen, so there is no -value that makes . The right-hand example demonstrates why we need to be careful with the ends of the interval. In particular, a function must be continuous over the whole interval  including the endpoints of the interval. If we only required the function to be continuous on (so strictly between ) and then the function could \"jump\" over the -value at or .  The IVT in the real world  You are climbing the Grouse-grind with a friend call him Bob. Bob was eager and started at 9am. Bob, while very eager, is also very clumsy; he sprained his ankle somewhere along the path and has stopped moving at 9:21am and is just sitting enjoying the view. You get there late and start climbing at 10am and being quite fit you get to the top at 11am. The IVT implies that at some time between 10am and 11am you meet up with Bob.  You can translate this situation into the form of the IVT as follows. Let be time and let 10am and 11am. Let be your distance along the trail. Hence  and km. Since you are a mortal, your position along the trail is a continuous function no helicopters or teleportation or We have no idea where Bob is sitting, except that he is somewhere between and , call this point . The IVT guarantees that there is some time between and (so between 10am and 11am) with (and your position will be the same as Bob's).   Aside from finding Bob sitting by the side of the trail, one of the most important applications of the IVT is determining where a function is zero. For quadratics we know (or should know) that While the Babylonians could (mostly, but not quite) do the above, the corresponding formula for solving a cubic is uglier and that for a quartic is uglier still. One of the most famous results in mathematics demonstrates that no such formula exists for quintics or higher degree polynomials   So even for polynomials we cannot, in general, write down explicit formulae for their zeros and have to make do with numerical approximations i.e. write down the root as a decimal expansion to whatever precision we desire. For more complicated functions we have no choice there is no reason that the zeros should be expressible as nice neat little formulas. At the same time, finding the zeros of a function: or solving equations of the form In fact both of these are the same because we can write and then the zeros of are exactly when .  can be a crucial step in many mathematical proofs and applications.   Application of the Intermediate Value Theorem   Show that has at least one zero.    Since is continuous over it is continuous over any closed interval of the form If you can find an interval such that and have opposite signs, you can use the Intermediate Value Theorem to conclude there must be a real number in that satisfies Note that   and   Using the Intermediate Value Theorem, we can see that there must be a real number in that satisfies Therefore, has at least one zero.     When Can You Apply the Intermediate Value Theorem? >  If is continuous over and can we use the Intermediate Value Theorem to conclude that has no zeros in the interval Explain.    No. The Intermediate Value Theorem only allows us to conclude that we can find a value between and it doesn’t allow us to conclude that we can’t find other values. To see this more clearly, consider the function It satisfies and     When Can You Apply the Intermediate Value Theorem?   For and Can we conclude that has a zero in the interval    No. The function is not continuous over The Intermediate Value Theorem does not apply here.     Show that has a zero over the interval    is continuous over It must have a zero on this interval.    Find and Apply the Intermediate Value Theorem.      "
},
{
  "id": "CNX_Calc_Figure_02_04_001",
  "level": "2",
  "url": "sec_Ch2Sec4.html#CNX_Calc_Figure_02_04_001",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": "  \"A graph of an increasing linear function f(x) which crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. A point a greater than zero is marked on the x axis. The point on the function f(x) above a is an open circle; the function is not defined at a.\"  The function is not continuous at because is undefined.  "
},
{
  "id": "CNX_Calc_Figure_02_04_002",
  "level": "2",
  "url": "sec_Ch2Sec4.html#CNX_Calc_Figure_02_04_002",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": "  \"The graph of a piecewise function f(x) with two parts. The first part is an increasing linear function that crosses from quadrant three to quadrant one at the origin. A point a greater than zero is marked on the x axis. At fa. on this segment, there is a solid circle. The other segment is also an increasing linear function. It exists in quadrant one for values of x greater than a. At x=a, this segment has an open circle.\"  The function is not continuous at because does not exist.  "
},
{
  "id": "CNX_Calc_Figure_02_04_003",
  "level": "2",
  "url": "sec_Ch2Sec4.html#CNX_Calc_Figure_02_04_003",
  "type": "Figure",
  "number": "2.5.3",
  "title": "",
  "body": "  \"The graph of a piecewise function with two parts. The first part is an increasing linear function that crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. A point a greater than zero is marked on the x axis. At this point, there is an open circle on the linear function. The second part is a point at x=a above the line.\"  The function is not continuous at because  "
},
{
  "id": "sec_Ch2Sec4-3-13",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-3-13",
  "type": "Definition",
  "number": "2.5.4",
  "title": "",
  "body": " A function is continuous at a point  if and only if the following three conditions are satisfied:   is defined  exists    A function is discontinuous at a point  if it fails to be continuous at .  "
},
{
  "id": "fs-id1170573398041",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573398041",
  "type": "Problem-Solving Strategy",
  "number": "2.5.5",
  "title": "Determining Continuity at a Point.",
  "body": " Determining Continuity at a Point   Check to see if is defined. If is undefined, we need go no further. The function is not continuous at . If is defined, continue to step 2.  Compute In some cases, we may need to do this by first computing and If does not exist (that is, it is not a real number), then the function is not continuous at and the problem is solved. If exists, then continue to step 3.  Compare and If then the function is not continuous at . If then the function is continuous at .   "
},
{
  "id": "fs-id1170573442080",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573442080",
  "type": "Example",
  "number": "2.5.6",
  "title": "Determining Continuity at a Point, Condition 1.",
  "body": " Determining Continuity at a Point, Condition 1   Using the definition, determine whether the function is continuous at Justify the conclusion.    Let’s begin by trying to calculate We can see that which is undefined. Therefore, is discontinuous at 2 because is undefined. The graph of is shown in .    \"A graph of the given function. There is a line which crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. At a point in quadrant one, there is an open circle where the function is not defined.\"  The function is discontinuous at 2 because is undefined.    "
},
{
  "id": "fs-id1170573389760",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573389760",
  "type": "Example",
  "number": "2.5.8",
  "title": "Determining Continuity at a Point, Condition 2.",
  "body": " Determining Continuity at a Point, Condition 2   Using the definition, determine whether the function is continuous at Justify the conclusion.    Let’s begin by trying to calculate   Thus, is defined. Next, we calculate To do this, we must compute and   and   Therefore, does not exist. Thus, is not continuous at 3. The graph of is shown in .    \"A graph of the given piecewise function, which has two parts. The first is a downward opening parabola which is symmetric about the y axis. Its vertex is on the y axis, greater than zero. There is a closed circle on the parabola for x=3. The second part is an increasing linear function in the first quadrant, which exists for values of x \\gt 3. There is an open circle at the end of the line where x would be 3.\"  The function is not continuous at 3 because does not exist.    "
},
{
  "id": "fs-id1170573429945",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573429945",
  "type": "Example",
  "number": "2.5.10",
  "title": "Determining Continuity at a Point, Condition 3.",
  "body": " Determining Continuity at a Point, Condition 3   Using the definition, determine whether the function is continuous at    First, observe that   Next,   Last, compare and We see that   Since all three of the conditions in the definition of continuity are satisfied, is continuous at   "
},
{
  "id": "sec_Ch2Sec4-3-20",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-3-20",
  "type": "Checkpoint",
  "number": "2.5.11",
  "title": "",
  "body": "  Using the definition, determine whether the function is continuous at If the function is not continuous at 1, indicate the condition for continuity at a point that fails to hold.    is not continuous at 1 because    Check each condition of the definition.   "
},
{
  "id": "sec_Ch2Sec4-4-2",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "removable discontinuity jump discontinuity infinite discontinuity "
},
{
  "id": "CNX_Calc_Figure_02_04_006",
  "level": "2",
  "url": "sec_Ch2Sec4.html#CNX_Calc_Figure_02_04_006",
  "type": "Figure",
  "number": "2.5.12",
  "title": "",
  "body": "  \"Three graphs, each showing a different discontinuity. The first is removable discontinuity. Here, the given function is a line with positive slope. At a point x=a, where a\\gt 0, there is an open circle on the line and a closed circle a few units above the line. The second is a jump discontinuity. Here, there are two lines with positive slope. The first line exists for x\\lt =a, and the second exists for x\\gt a, where a\\gt 0. The first line ends at a solid circle where x=a, and the second begins a few units up with an open circle at x=a. The third discontinuity type is infinite discontinuity. Here, the function has two parts separated by an asymptote x=a. The first segment is a curve stretching along the x axis to 0 as x goes to negative infinity and along the y axis to infinity as x goes to zero. The second segment is a curve stretching along the y axis to negative infinity as x goes to zero and along the x axis to 0 as x goes to infinity.\"  Discontinuities are classified as (a) removable, (b) jump, or (c) infinite.  "
},
{
  "id": "sec_Ch2Sec4-4-5",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-4-5",
  "type": "Definition",
  "number": "2.5.13",
  "title": "",
  "body": " If is discontinuous at , then   has a removable discontinuity at if exists. (Note: When we state that exists, we mean that where is a real number.)  has a jump discontinuity at if and both exist, but (Note: When we state that and both exist, we mean that both are real-valued and that neither take on the values \\pm\\infty .)  has an infinite discontinuity at if or   "
},
{
  "id": "fs-id1170570976348",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170570976348",
  "type": "Example",
  "number": "2.5.14",
  "title": "Classifying a Discontinuity.",
  "body": " Classifying a Discontinuity   In , we showed that is discontinuous at Classify this discontinuity as removable, jump, or infinite.    To classify the discontinuity at 2 we must evaluate   Since is discontinuous at 2 and exists, has a removable discontinuity at   "
},
{
  "id": "fs-id1170573426544",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573426544",
  "type": "Example",
  "number": "2.5.15",
  "title": "Classifying a Discontinuity.",
  "body": " Classifying a Discontinuity   In , we showed that is discontinuous at Classify this discontinuity as removable, jump, or infinite.    Earlier, we showed that is discontinuous at 3 because does not exist. However, since and both exist, we conclude that the function has a jump discontinuity at 3.   "
},
{
  "id": "fs-id1170573355402",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573355402",
  "type": "Example",
  "number": "2.5.16",
  "title": "Classifying a Discontinuity.",
  "body": " Classifying a Discontinuity   Determine whether is continuous at -1. If the function is discontinuous at -1, classify the discontinuity as removable, jump, or infinite.    The function value is undefined. Therefore, the function is not continuous at -1. To determine the type of discontinuity, we must determine the limit at -1. We see that and Therefore, the function has an infinite discontinuity at -1.   "
},
{
  "id": "sec_Ch2Sec4-4-9",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-4-9",
  "type": "Checkpoint",
  "number": "2.5.17",
  "title": "",
  "body": "  For decide whether is continuous at 1. If is not continuous at 1, classify the discontinuity as removable, jump, or infinite.    Discontinuous at 1; removable    Follow the steps in . If the function is discontinuous at 1, look at and use the definition to determine the type of discontinuity.   "
},
{
  "id": "sec_Ch2Sec4-5-2",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuity over an interval "
},
{
  "id": "sec_Ch2Sec4-5-3",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-5-3",
  "type": "Definition",
  "number": "2.5.18",
  "title": "Continuity from the Right and from the Left.",
  "body": " Continuity from the Right and from the Left  A function is said to be continuous from the right at if  A function is said to be continuous from the left at if  "
},
{
  "id": "fs-id1170573395559",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573395559",
  "type": "Example",
  "number": "2.5.19",
  "title": "Continuity on an Interval.",
  "body": " Continuity on an Interval   State the interval(s) over which the function is continuous.    Since is a rational function, it is continuous at every point in its domain. The domain of is the set Thus, is continuous over each of the intervals and   "
},
{
  "id": "fs-id1170573387892",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573387892",
  "type": "Example",
  "number": "2.5.20",
  "title": "Continuity over an Interval.",
  "body": " Continuity over an Interval   State the interval(s) over which the function is continuous.    From the limit laws, we know that for all values of in We also know that exists and exists. Therefore, is continuous over the interval   "
},
{
  "id": "sec_Ch2Sec4-5-9",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-5-9",
  "type": "Checkpoint",
  "number": "2.5.21",
  "title": "",
  "body": "  State the interval(s) over which the function is continuous.       Use as a guide for solving.   "
},
{
  "id": "thm-continuity",
  "level": "2",
  "url": "sec_Ch2Sec4.html#thm-continuity",
  "type": "Theorem",
  "number": "2.5.22",
  "title": "Algebra of Continuous Functions.",
  "body": " Algebra of Continuous Functions   If the functions and are continuous at , then the following algebraic combinations are continuous at .                                           We prove the sum property using the limit laws.    "
},
{
  "id": "fs-id1170573430304",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573430304",
  "type": "Theorem",
  "number": "2.5.23",
  "title": "Continuity of Polynomials and Rational Functions.",
  "body": " Continuity of Polynomials and Rational Functions  Polynomials and rational functions are continuous at every point in their domains.   Previously, we showed that if and are polynomials, for every polynomial and as long as Therefore, polynomials and rational functions are continuous on their domains.  "
},
{
  "id": "fs-id1170573381194",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573381194",
  "type": "Example",
  "number": "2.5.24",
  "title": "Continuity of a Rational Function.",
  "body": " Continuity of a Rational Function   For what values of is continuous?    The rational function is continuous for every value of except   "
},
{
  "id": "sec_Ch2Sec4-5-15",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-5-15",
  "type": "Checkpoint",
  "number": "2.5.25",
  "title": "",
  "body": "  For what values of is continuous?    is continuous at every real number.    Use   "
},
{
  "id": "fs-id1170573352212",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573352212",
  "type": "Theorem",
  "number": "2.5.26",
  "title": "Composite Function Theorem.",
  "body": " Composite Function Theorem  If is continuous at and then   "
},
{
  "id": "fs-id1170573718134",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573718134",
  "type": "Example",
  "number": "2.5.27",
  "title": "Limit of a Composite Cosine Function.",
  "body": " Limit of a Composite Cosine Function   Evaluate    The given function is a composite of and Since and is continuous at 0, we may apply the composite function theorem. Thus,    "
},
{
  "id": "sec_Ch2Sec4-5-20",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-5-20",
  "type": "Checkpoint",
  "number": "2.5.28",
  "title": "",
  "body": "  Evaluate    0    is continuous at 0. Use as a guide.   "
},
{
  "id": "sec_Ch2Sec4-5-22",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-5-22",
  "type": "Theorem",
  "number": "2.5.29",
  "title": "Continuity of Trigonometric Functions.",
  "body": " Continuity of Trigonometric Functions  Trigonometric functions are continuous over their entire domains.   We begin by demonstrating that is continuous at every real number. To do this, we must show that for all values of .    The proof that is continuous at every real number is analogous. Because the remaining trigonometric functions may be expressed in terms of and their continuity follows from the quotient limit law.   "
},
{
  "id": "sec_Ch2Sec4-6-2",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intermediate Value Theorem "
},
{
  "id": "sec_Ch2Sec4-6-3",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-6-3",
  "type": "Theorem",
  "number": "2.5.30",
  "title": "The Intermediate Value Theorem.",
  "body": " The Intermediate Value Theorem  Let be continuous over a closed, bounded interval If is any real number between and then there is a number in satisfying in .    \"A diagram illustrating the intermediate value theorem. There is a generic continuous curved function shown over the interval [a,b]. The points fa. and fb. are marked, and dotted lines are drawn from a, b, fa., and fb. to the points (a, fa.) and (b, fb.). A third point, c, is plotted between a and b. Since the function is continuous, there is a value for fc. along the curve, and a line is drawn from c to (c, fc.) and from (c, fc.) to fc., which is labeled as z on the y axis.\"  There is a number that satisfies   "
},
{
  "id": "IVT-image",
  "level": "2",
  "url": "sec_Ch2Sec4.html#IVT-image",
  "type": "Figure",
  "number": "2.5.32",
  "title": "",
  "body": " Without continuity, there could be a -value that is \"missed\" between two other -values in the range of  NEEDS ALT TEXT. Text below agrees with notation in the picture (Y instead of z)   "
},
{
  "id": "eg_1_6_4",
  "level": "2",
  "url": "sec_Ch2Sec4.html#eg_1_6_4",
  "type": "Example",
  "number": "2.5.33",
  "title": "The IVT in the “real world”.",
  "body": "The IVT in the real world  You are climbing the Grouse-grind with a friend call him Bob. Bob was eager and started at 9am. Bob, while very eager, is also very clumsy; he sprained his ankle somewhere along the path and has stopped moving at 9:21am and is just sitting enjoying the view. You get there late and start climbing at 10am and being quite fit you get to the top at 11am. The IVT implies that at some time between 10am and 11am you meet up with Bob.  You can translate this situation into the form of the IVT as follows. Let be time and let 10am and 11am. Let be your distance along the trail. Hence  and km. Since you are a mortal, your position along the trail is a continuous function no helicopters or teleportation or We have no idea where Bob is sitting, except that he is somewhere between and , call this point . The IVT guarantees that there is some time between and (so between 10am and 11am) with (and your position will be the same as Bob's).  "
},
{
  "id": "fs-id1170571120881",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170571120881",
  "type": "Example",
  "number": "2.5.34",
  "title": "Application of the Intermediate Value Theorem.",
  "body": " Application of the Intermediate Value Theorem   Show that has at least one zero.    Since is continuous over it is continuous over any closed interval of the form If you can find an interval such that and have opposite signs, you can use the Intermediate Value Theorem to conclude there must be a real number in that satisfies Note that   and   Using the Intermediate Value Theorem, we can see that there must be a real number in that satisfies Therefore, has at least one zero.   "
},
{
  "id": "fs-id1170573439386",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170573439386",
  "type": "Example",
  "number": "2.5.35",
  "title": "When Can You Apply the Intermediate Value Theorem?",
  "body": " When Can You Apply the Intermediate Value Theorem? >  If is continuous over and can we use the Intermediate Value Theorem to conclude that has no zeros in the interval Explain.    No. The Intermediate Value Theorem only allows us to conclude that we can find a value between and it doesn’t allow us to conclude that we can’t find other values. To see this more clearly, consider the function It satisfies and   "
},
{
  "id": "fs-id1170570996536",
  "level": "2",
  "url": "sec_Ch2Sec4.html#fs-id1170570996536",
  "type": "Example",
  "number": "2.5.36",
  "title": "When Can You Apply the Intermediate Value Theorem?",
  "body": " When Can You Apply the Intermediate Value Theorem?   For and Can we conclude that has a zero in the interval    No. The function is not continuous over The Intermediate Value Theorem does not apply here.   "
},
{
  "id": "sec_Ch2Sec4-6-13",
  "level": "2",
  "url": "sec_Ch2Sec4.html#sec_Ch2Sec4-6-13",
  "type": "Checkpoint",
  "number": "2.5.37",
  "title": "",
  "body": " Show that has a zero over the interval    is continuous over It must have a zero on this interval.    Find and Apply the Intermediate Value Theorem.   "
},
{
  "id": "sec_Ch2Sec6",
  "level": "1",
  "url": "sec_Ch2Sec6.html",
  "type": "Section",
  "number": "2.6",
  "title": "Limits at Infinity and Asymptotes",
  "body": " Limits at Infinity and Asymptotes   Learning Objectives   Calculate the limit of a function as increases or decreases without bound.  Recognize a horizontal asymptote on the graph of a function.  Estimate the end behavior of a function as increases or decreases without bound.  Recognize an oblique asymptote on the graph of a function.  Analyze a function and its derivatives to draw its graph.   Up until this point we have discussed what happens to a function as we move its input closer and closer to a particular point . For a great many applications of limits we need to understand what happens to a function when its input becomes extremely large for example what happens to a population at a time far in the future.  The definition of a limit at infinity has a similar flavour to the definition of limits at finite points that we saw above, but the details are a little different. We also need to distinguish between positive and negative infinity. As becomes very large and positive it moves off towards but when it becomes very large and negative it moves off towards .       Limits at Infinity and Horizontal Asymptotes  Recall that means becomes arbitrarily close to as long as is sufficiently close to We can extend this idea to limits at infinity. For example, consider the function As can be seen graphically in and numerically in , as the values of get larger, the values of approach We say the limit as approaches of is and write Similarly, for as the values get larger, the values of approaches We say the limit as approaches of is and write    \"The function f(x) 2 + 1\/x is graphed. The function starts negative near y = 2 but then decreases to −∞ near x = 0. The function then decreases from ∞ near x = 0 and gets nearer to y = 2 as x increases. There is a horizontal line denoting the asymptote y = 2.\"  The function approaches the asymptote as approaches    Values of a function as                                 More generally, for any function we say the limit as of is if becomes arbitrarily close to as long as is sufficiently large. In that case, we write Similarly, we say the limit as of is if becomes arbitrarily close to as long as and is sufficiently large. In that case, we write We now look at the definition of a function having a limit at infinity.   (Informal) If the values of become arbitrarily close to as becomes sufficiently large, we say the function has a limit at infinity and write   If the values of becomes arbitrarily close to for as becomes sufficiently large, we say that the function has a limit at negative infinity and write   If the values are getting arbitrarily close to some finite value as or the graph of approaches the line In that case, the line is a horizontal asymptote of ( ). For example, for the function since the line is a horizontal asymptote of   If or we say the line is a horizontal asymptote of     \"The figure is broken up into two figures labeled a and b. Figure a shows a function f(x) approaching but never touching a horizontal dashed line labeled L from above. Figure b shows a function f(x) approaching but never a horizontal dashed line labeled M from below.\"  (a) As the values of are getting arbitrarily close to The line is a horizontal asymptote of (b) As the values of are getting arbitrarily close to The line is a horizontal asymptote of   A function cannot cross a vertical asymptote because the graph must approach infinity (or from at least one direction as approaches the vertical asymptote. However, a function may cross a horizontal asymptote. In fact, a function may cross a horizontal asymptote an unlimited number of times. For example, the function shown in intersects the horizontal asymptote an infinite number of times as it oscillates around the asymptote with ever-decreasing amplitude.   \"The function f(x) = (cos x)\/x + 1 is shown. It decreases from (0, ∞) and then proceeds to oscillate around y = 1 with decreasing amplitude.\"  The graph of crosses its horizontal asymptote an infinite number of times.   The algebraic limit laws and squeeze theorem we introduced in also apply to limits at infinity. We illustrate how to use these laws to compute several limits at infinity.   Computing Limits at Infinity   For each of the following functions evaluate and Determine the horizontal asymptote(s) for         Using the algebraic limit laws, we have Similarly, Therefore, has a horizontal asymptote of and approaches this horizontal asymptote as as shown in the following graph.   \"The function f(x) = 5 – 2\/x2 is graphed. The function approaches the horizontal asymptote y = 5 as x approaches ±∞.\"  This function approaches a horizontal asymptote as   Since for all we have for all Also, since we can apply the squeeze theorem to conclude that Similarly, Thus, has a horizontal asymptote of and approaches this horizontal asymptote as as shown in the following graph.   \"The function f(x) = (sin x)\/x is shown. It has a global maximum at (0, 1) and then proceeds to oscillate around y = 0 with decreasing amplitude.\"  This function crosses its horizontal asymptote multiple times.   To evaluate and we first consider the graph of over the interval as shown in the following graph.   \"The function f(x) = tan x is shown. It increases from (−π\/2, −∞), passes through the origin, and then increases toward (π\/2, ∞). There are vertical dashed lines marking x = ±π\/2.\"  The graph of has vertical asymptotes at   Since   it follows that   Similarly, since   it follows that   As a result, and are horizontal asymptotes of as shown in the following graph.    \"The function f(x) = tan−1 x is shown. It increases from (−∞, −π\/2), passes through the origin, and then increases toward (∞, π\/2). There are horizontal dashed lines marking y = ±π\/2.\"  This function has two horizontal asymptotes.       Evaluate and Determine the horizontal asymptotes of if any.    Both limits are The line is a horizontal asymptote.        Infinite Limits at Infinity  Sometimes the values of a function become arbitrarily large as (or as In this case, we write (or On the other hand, if the values of are negative but become arbitrarily large in magnitude as (or as we write (or  For example, consider the function As seen in and , as the values become arbitrarily large. Therefore, On the other hand, as the values of are negative but become arbitrarily large in magnitude. Consequently,   Values of a power function as                                       \"The function f(x) = x3 is graphed. It is apparent that this function rapidly approaches infinity as x approaches infinity.\"  For this function, the functional values approach infinity as    (Informal) We say a function has an infinite limit at infinity and write   if becomes arbitrarily large for sufficiently large. We say a function has a negative infinite limit at infinity and write   if and becomes arbitrarily large for sufficiently large. Similarly, we can define infinite limits as   Do not try to add and subtract infinity   Compute the following limit:    In this case we cannot use the arithmetic of limits to write this as because the limits do not exist. We can only use the limit laws when the limits exist. So we should go back and think some more.  When is very large, will be much larger than , so the term will dominate the term. So factor out and rewrite it as Consider what happens to each of the factors as   For large , (this is actually true for any ). In the limit as , becomes arbitrarily large and positive, and must be bigger still, so it follows that   On the other hand, becomes closer and closer to  we can use the arithmetic of limits to write this as   So the product of these two factors will be come larger and larger (and positive) as moves off to infinity. Hence we have      Formal Definitions  Earlier, we used the terms arbitrarily close , arbitrarily large , and sufficiently large to define limits at infinity informally. Although these terms provide accurate descriptions of limits at infinity, they are not precise mathematically. Here are more formal definitions of limits at infinity. We then look at how to use these definitions to prove results involving limits at infinity.   (Formal) We say a function has a limit at infinity , if there exists a real number such that for all there exists such that   for all In that case, we write   (see ).  We say a function has a limit at negative infinity if there exists a real number such that for all there exists such that   for all In that case, we write      \"The function f(x) is graphed, and it has a horizontal asymptote at L. L is marked on the y axis, as is L + ॉ and L – ॉ. On the x axis, N is marked as the value of x such that f(x) = L + ॉ.\"  For a function with a limit at infinity, for all    Earlier in this section, we used graphical evidence in and numerical evidence in to conclude that Here we use the formal definition of limit at infinity to prove this result rigorously.   A Finite Limit at Infinity Example   Use the formal definition of limit at infinity to prove that   Let Let Therefore, for all we have      Use the formal definition of limit at infinity to prove that   Let Let Therefore, for all we have   Therefore,    Let   We now turn our attention to a more precise definition for an infinite limit at infinity.   (Formal) We say a function has an infinite limit at infinity and write   if for all there exists an such that   for all (see ).  We say a function has a negative infinite limit at infinity and write   if for all there exists an such that   for all  Similarly we can define limits as     \"The function f(x) is graphed. It continues to increase rapidly after x = N, and f(N) = M.\"  For a function with an infinite limit at infinity, for all    Earlier, we used graphical evidence ( ) and numerical evidence ( ) to conclude that Here we use the formal definition of infinite limit at infinity to prove that result.   An Infinite Limit at Infinity   Use the formal definition of infinite limit at infinity to prove that    Let Let Then, for all we have   Therefore,     Use the formal definition of infinite limit at infinity to prove that    Let Let Then, for all we have     Let     End Behavior for Polynomials Functions   The behavior of a function as is called the function's end behavior . At each of the function's ends, the function could exhibit one of the following types of behavior:   The function approaches a horizontal asymptote  The function or  The function does not approach a finite limit, nor does it approach or In this case, the function may have some oscillatory behavior.   Let's consider several classes of functions here and look at the different types of end behaviors for these functions.    Consider the power function where is a positive integer. From and , we see that   and     \"The functions x2, x4, and x6 are graphed, and it is apparent that as the exponent grows the functions increase more quickly.\"  For power functions with an even power of      \"The functions x, x3, and x5 are graphed, and it is apparent that as the exponent grows the functions increase more quickly.\"  For power functions with an odd power of  and   Using these facts, it is not difficult to evaluate and where is any constant and is a positive integer. If the graph of is a vertical stretch or compression of and therefore   If the graph of is a vertical stretch or compression combined with a reflection about the -axis, and therefore   If in which case   Limits at Infinity for Power Functions   For each function evaluate and         Since the coefficient of is the graph of involves a vertical stretch and reflection of the graph of about the -axis. Therefore, and  Since the coefficient of is the graph of is a vertical stretch of the graph of Therefore, and       Let Find       The coefficient is negative.   We now look at how the limits at infinity for power functions can be used to determine for any polynomial function Consider a polynomial function   of degree so that Factoring, we see that   As all the terms inside the parentheses approach zero except the first term. We conclude that   For example, the function behaves like as as shown in and .    \"Both functions f(x) = 5x3 – 3x2 + 4 and g(x) = 5x3 are plotted. Their behavior for large positive and large negative numbers converges.\"  The end behavior of a polynomial is determined by the behavior of the term with the largest exponent.    A polynomial's end behavior is determined by the term with the largest exponent.                                           End Behavior for Algebraic Functions  The end behavior for rational functions and functions involving radicals is a little more complicated than for polynomials. In , we show that the limits at infinity of a rational function depend on the relationship between the degree of the numerator and the degree of the denominator. To evaluate the limits at infinity for a rational function, we divide the numerator and denominator by the highest power of appearing in the denominator. This determines which term in the overall expression dominates the behavior of the function at large values of   Determining End Behavior for Rational Functions   For each of the following functions, determine the limits as and Then, use this information to describe the end behavior of the function.  ( Note: The degree of the numerator and the denominator are the same.)  ( Note: The degree of numerator is less than the degree of the denominator.)  ( Note: The degree of numerator is greater than the degree of the denominator.)     The highest power of in the denominator is Therefore, dividing the numerator and denominator by and applying the algebraic limit laws, we see that Since we know that is a horizontal asymptote for this function as shown in the following graph.   \"The function f(x) = (3x + 1)\/(2x + 5) is plotted as is its horizontal asymptote at y = 3\/2.\">   The graph of this rational function approaches a horizontal asymptote as   Since the largest power of appearing in the denominator is divide the numerator and denominator by After doing so and applying algebraic limit laws, we obtain Therefore has a horizontal asymptote of as shown in the following graph.   \"The function f(x) = (3x2 + 2x)\/(4x2 – 5x + 7) is plotted as is its horizontal asymptote at y = 0.\"  The graph of this rational function approaches the horizontal asymptote as   Dividing the numerator and denominator by we have As the denominator approaches As the numerator approaches As the numerator approaches Therefore whereas as shown in the following figure.   \"The function f(x) = (3x2 + 4x)\/(x + 2) is plotted. It appears to have a diagonal asymptote as well as a vertical asymptote at x = −2.\"  As the values As the values       Evaluate and use these limits to determine the end behavior of      Divide the numerator and denominator by   Before proceeding, consider the graph of shown in . As and the graph of appears almost linear. Although is certainly not a linear function, we now investigate why the graph of seems to be approaching a linear function. First, using long division of polynomials, we can write   Since as we conclude that   Therefore, the graph of approaches the line as This line is known as an oblique asymptote for ( ).    \"The function f(x) = (3x2 + 4x)\/(x + 2) is plotted as is its diagonal asymptote y = 3x – 2.\"  The graph of the rational function approaches the oblique asymptote   We can summarize the results of to make the following conclusion regarding end behavior for rational functions. Consider a rational function   where   If the degree of the numerator is the same as the degree of the denominator then has a horizontal asymptote of as  If the degree of the numerator is less than the degree of the denominator then has a horizontal asymptote of as  If the degree of the numerator is greater than the degree of the denominator then does not have a horizontal asymptote. The limits at infinity are either positive or negative infinity, depending on the signs of the leading terms. In addition, using long division, the function can be rewritten as where the degree of is less than the degree of As a result, Therefore, the values of approach zero as If the degree of is exactly one more than the degree of  the function is a linear function. In this case, we call an oblique asymptote. Now let's consider the end behavior for functions involving a radical.   Be careful of limits involving roots  Find the limit as of     We use the same trick try to work out what is the biggest term in the numerator and denominator and pull it to one side.  The denominator is dominated by .  The biggest contribution to the numerator comes from the inside the square-root. When we pull outside the square-root it becomes , so the numerator is dominated by   To see this more explicitly rewrite the numerator   Thus the limit as is      Now let us also think about the limit of the same function, , as . There is something subtle going on because of the square-root. First consider the function    Evaluating this at gives We'll get much the same thing for any . For any , returns exactly . However now consider the function at  that is the function is returning times the input.  This is because when we defined , we defined it to be the positive square-root. i.e. the function can never return a negative number. So being more careful Where the is the absolute value of . You are perhaps used to thinking of absolute value as remove the minus sign , but this is not quite correct. Let's sketch the function    A graph of the absolute value function NEEDS A DESCRIPTION    It is a piecewise function defined by    Hence our function is really So that when we evaluate it is We are now ready to examine the limit as in our previous example. Mostly it is copy and paste from above.  Be careful of limits involving roots continued  Find the limit as of    We use the same trick try to work out what is the biggest term in the numerator and denominator and pull it to one side. Since we are taking the limit as we should think of as a large negative number.  The denominator is dominated by .  The biggest contribution to the numerator comes from the inside the square-root. When we pull the outside a square-root it becomes (since we are taking the limit as ), so the numerator is dominated by   To see this more explicitly rewrite the numerator   Thus the limit as is     So the limit as is almost the same but we gain a minus sign. This is definitely not the case in general you have to think about each example separately.  Here is a sketch of the function in question.    A sketch of the graph of NEEDS DESCRIPTION       Evaluate the limits of as approaches and       Divide the numerator and denominator by       "
},
{
  "id": "CNX_Calc_Figure_04_06_001",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_001",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": "  \"The function f(x) 2 + 1\/x is graphed. The function starts negative near y = 2 but then decreases to −∞ near x = 0. The function then decreases from ∞ near x = 0 and gets nearer to y = 2 as x increases. There is a horizontal line denoting the asymptote y = 2.\"  The function approaches the asymptote as approaches  "
},
{
  "id": "fs-id1165043428402",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165043428402",
  "type": "Table",
  "number": "2.6.2",
  "title": "Values of a function <span class=\"process-math\">\\(f\\)<\/span> as <span class=\"process-math\">\\(x\\to\\pm\\infty\\)<\/span>",
  "body": " Values of a function as                                "
},
{
  "id": "sec_Ch2Sec6-3-6",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-3-6",
  "type": "Definition",
  "number": "2.6.3",
  "title": "",
  "body": " (Informal) If the values of become arbitrarily close to as becomes sufficiently large, we say the function has a limit at infinity and write   If the values of becomes arbitrarily close to for as becomes sufficiently large, we say that the function has a limit at negative infinity and write  "
},
{
  "id": "sec_Ch2Sec6-3-8",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-3-8",
  "type": "Definition",
  "number": "2.6.4",
  "title": "",
  "body": " If or we say the line is a horizontal asymptote of  "
},
{
  "id": "CNX_Calc_Figure_04_06_002",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_002",
  "type": "Figure",
  "number": "2.6.5",
  "title": "",
  "body": "  \"The figure is broken up into two figures labeled a and b. Figure a shows a function f(x) approaching but never touching a horizontal dashed line labeled L from above. Figure b shows a function f(x) approaching but never a horizontal dashed line labeled M from below.\"  (a) As the values of are getting arbitrarily close to The line is a horizontal asymptote of (b) As the values of are getting arbitrarily close to The line is a horizontal asymptote of  "
},
{
  "id": "CNX_Calc_Figure_04_06_003",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_003",
  "type": "Figure",
  "number": "2.6.6",
  "title": "",
  "body": "  \"The function f(x) = (cos x)\/x + 1 is shown. It decreases from (0, ∞) and then proceeds to oscillate around y = 1 with decreasing amplitude.\"  The graph of crosses its horizontal asymptote an infinite number of times.  "
},
{
  "id": "fs-id1165042962649",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165042962649",
  "type": "Example",
  "number": "2.6.7",
  "title": "Computing Limits at Infinity.",
  "body": " Computing Limits at Infinity   For each of the following functions evaluate and Determine the horizontal asymptote(s) for         Using the algebraic limit laws, we have Similarly, Therefore, has a horizontal asymptote of and approaches this horizontal asymptote as as shown in the following graph.   \"The function f(x) = 5 – 2\/x2 is graphed. The function approaches the horizontal asymptote y = 5 as x approaches ±∞.\"  This function approaches a horizontal asymptote as   Since for all we have for all Also, since we can apply the squeeze theorem to conclude that Similarly, Thus, has a horizontal asymptote of and approaches this horizontal asymptote as as shown in the following graph.   \"The function f(x) = (sin x)\/x is shown. It has a global maximum at (0, 1) and then proceeds to oscillate around y = 0 with decreasing amplitude.\"  This function crosses its horizontal asymptote multiple times.   To evaluate and we first consider the graph of over the interval as shown in the following graph.   \"The function f(x) = tan x is shown. It increases from (−π\/2, −∞), passes through the origin, and then increases toward (π\/2, ∞). There are vertical dashed lines marking x = ±π\/2.\"  The graph of has vertical asymptotes at   Since   it follows that   Similarly, since   it follows that   As a result, and are horizontal asymptotes of as shown in the following graph.    \"The function f(x) = tan−1 x is shown. It increases from (−∞, −π\/2), passes through the origin, and then increases toward (∞, π\/2). There are horizontal dashed lines marking y = ±π\/2.\"  This function has two horizontal asymptotes.    "
},
{
  "id": "sec_Ch2Sec6-3-14",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-3-14",
  "type": "Checkpoint",
  "number": "2.6.12",
  "title": "",
  "body": "  Evaluate and Determine the horizontal asymptotes of if any.    Both limits are The line is a horizontal asymptote.     "
},
{
  "id": "fs-id1165042406634",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165042406634",
  "type": "Table",
  "number": "2.6.13",
  "title": "Values of a power function as <span class=\"process-math\">\\(x\\to\\pm\\infty\\)<\/span>",
  "body": " Values of a power function as                                    "
},
{
  "id": "CNX_Calc_Figure_04_06_008",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_008",
  "type": "Figure",
  "number": "2.6.14",
  "title": "",
  "body": "  \"The function f(x) = x3 is graphed. It is apparent that this function rapidly approaches infinity as x approaches infinity.\"  For this function, the functional values approach infinity as  "
},
{
  "id": "sec_Ch2Sec6-4-6",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-4-6",
  "type": "Definition",
  "number": "2.6.15",
  "title": "",
  "body": " (Informal) We say a function has an infinite limit at infinity and write   if becomes arbitrarily large for sufficiently large. We say a function has a negative infinite limit at infinity and write   if and becomes arbitrarily large for sufficiently large. Similarly, we can define infinite limits as  "
},
{
  "id": "eg_1_5_3",
  "level": "2",
  "url": "sec_Ch2Sec6.html#eg_1_5_3",
  "type": "Example",
  "number": "2.6.16",
  "title": "Do not try to add and subtract infinity.",
  "body": "Do not try to add and subtract infinity   Compute the following limit:    In this case we cannot use the arithmetic of limits to write this as because the limits do not exist. We can only use the limit laws when the limits exist. So we should go back and think some more.  When is very large, will be much larger than , so the term will dominate the term. So factor out and rewrite it as Consider what happens to each of the factors as   For large , (this is actually true for any ). In the limit as , becomes arbitrarily large and positive, and must be bigger still, so it follows that   On the other hand, becomes closer and closer to  we can use the arithmetic of limits to write this as   So the product of these two factors will be come larger and larger (and positive) as moves off to infinity. Hence we have   "
},
{
  "id": "sec_Ch2Sec6-5-2",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arbitrarily close arbitrarily large sufficiently large "
},
{
  "id": "sec_Ch2Sec6-5-3",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-5-3",
  "type": "Definition",
  "number": "2.6.17",
  "title": "",
  "body": " (Formal) We say a function has a limit at infinity , if there exists a real number such that for all there exists such that   for all In that case, we write   (see ).  We say a function has a limit at negative infinity if there exists a real number such that for all there exists such that   for all In that case, we write   "
},
{
  "id": "CNX_Calc_Figure_04_06_009",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_009",
  "type": "Figure",
  "number": "2.6.18",
  "title": "",
  "body": "  \"The function f(x) is graphed, and it has a horizontal asymptote at L. L is marked on the y axis, as is L + ॉ and L – ॉ. On the x axis, N is marked as the value of x such that f(x) = L + ॉ.\"  For a function with a limit at infinity, for all   "
},
{
  "id": "fs-id1165042970473",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165042970473",
  "type": "Example",
  "number": "2.6.19",
  "title": "A Finite Limit at Infinity Example.",
  "body": " A Finite Limit at Infinity Example   Use the formal definition of limit at infinity to prove that   Let Let Therefore, for all we have    "
},
{
  "id": "sec_Ch2Sec6-5-7",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-5-7",
  "type": "Checkpoint",
  "number": "2.6.20",
  "title": "",
  "body": "  Use the formal definition of limit at infinity to prove that   Let Let Therefore, for all we have   Therefore,    Let  "
},
{
  "id": "sec_Ch2Sec6-5-9",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-5-9",
  "type": "Definition",
  "number": "2.6.21",
  "title": "",
  "body": " (Formal) We say a function has an infinite limit at infinity and write   if for all there exists an such that   for all (see ).  We say a function has a negative infinite limit at infinity and write   if for all there exists an such that   for all  Similarly we can define limits as  "
},
{
  "id": "CNX_Calc_Figure_04_06_010",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_010",
  "type": "Figure",
  "number": "2.6.22",
  "title": "",
  "body": "  \"The function f(x) is graphed. It continues to increase rapidly after x = N, and f(N) = M.\"  For a function with an infinite limit at infinity, for all   "
},
{
  "id": "fs-id1165042323534",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165042323534",
  "type": "Example",
  "number": "2.6.23",
  "title": "An Infinite Limit at Infinity.",
  "body": " An Infinite Limit at Infinity   Use the formal definition of infinite limit at infinity to prove that    Let Let Then, for all we have   Therefore,   "
},
{
  "id": "sec_Ch2Sec6-5-13",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-5-13",
  "type": "Checkpoint",
  "number": "2.6.24",
  "title": "",
  "body": "  Use the formal definition of infinite limit at infinity to prove that    Let Let Then, for all we have     Let  "
},
{
  "id": "sec_Ch2Sec6-6-2-1",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "end behavior "
},
{
  "id": "CNX_Calc_Figure_04_06_011",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_011",
  "type": "Figure",
  "number": "2.6.25",
  "title": "",
  "body": "  \"The functions x2, x4, and x6 are graphed, and it is apparent that as the exponent grows the functions increase more quickly.\"  For power functions with an even power of   "
},
{
  "id": "CNX_Calc_Figure_04_06_012",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_012",
  "type": "Figure",
  "number": "2.6.26",
  "title": "",
  "body": "  \"The functions x, x3, and x5 are graphed, and it is apparent that as the exponent grows the functions increase more quickly.\"  For power functions with an odd power of  and  "
},
{
  "id": "fs-id1165043219126",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165043219126",
  "type": "Example",
  "number": "2.6.27",
  "title": "Limits at Infinity for Power Functions.",
  "body": " Limits at Infinity for Power Functions   For each function evaluate and         Since the coefficient of is the graph of involves a vertical stretch and reflection of the graph of about the -axis. Therefore, and  Since the coefficient of is the graph of is a vertical stretch of the graph of Therefore, and    "
},
{
  "id": "sec_Ch2Sec6-6-15",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-6-15",
  "type": "Checkpoint",
  "number": "2.6.28",
  "title": "",
  "body": "  Let Find       The coefficient is negative.  "
},
{
  "id": "CNX_Calc_Figure_04_06_013",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_013",
  "type": "Figure",
  "number": "2.6.29",
  "title": "",
  "body": "  \"Both functions f(x) = 5x3 – 3x2 + 4 and g(x) = 5x3 are plotted. Their behavior for large positive and large negative numbers converges.\"  The end behavior of a polynomial is determined by the behavior of the term with the largest exponent.  "
},
{
  "id": "fs-id1165043250976",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165043250976",
  "type": "Table",
  "number": "2.6.30",
  "title": "A polynomial’s end behavior is determined by the term with the largest exponent.",
  "body": " A polynomial's end behavior is determined by the term with the largest exponent.                                        "
},
{
  "id": "fs-id1165042638553",
  "level": "2",
  "url": "sec_Ch2Sec6.html#fs-id1165042638553",
  "type": "Example",
  "number": "2.6.31",
  "title": "Determining End Behavior for Rational Functions.",
  "body": " Determining End Behavior for Rational Functions   For each of the following functions, determine the limits as and Then, use this information to describe the end behavior of the function.  ( Note: The degree of the numerator and the denominator are the same.)  ( Note: The degree of numerator is less than the degree of the denominator.)  ( Note: The degree of numerator is greater than the degree of the denominator.)     The highest power of in the denominator is Therefore, dividing the numerator and denominator by and applying the algebraic limit laws, we see that Since we know that is a horizontal asymptote for this function as shown in the following graph.   \"The function f(x) = (3x + 1)\/(2x + 5) is plotted as is its horizontal asymptote at y = 3\/2.\">   The graph of this rational function approaches a horizontal asymptote as   Since the largest power of appearing in the denominator is divide the numerator and denominator by After doing so and applying algebraic limit laws, we obtain Therefore has a horizontal asymptote of as shown in the following graph.   \"The function f(x) = (3x2 + 2x)\/(4x2 – 5x + 7) is plotted as is its horizontal asymptote at y = 0.\"  The graph of this rational function approaches the horizontal asymptote as   Dividing the numerator and denominator by we have As the denominator approaches As the numerator approaches As the numerator approaches Therefore whereas as shown in the following figure.   \"The function f(x) = (3x2 + 4x)\/(x + 2) is plotted. It appears to have a diagonal asymptote as well as a vertical asymptote at x = −2.\"  As the values As the values     "
},
{
  "id": "sec_Ch2Sec6-7-4",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-7-4",
  "type": "Checkpoint",
  "number": "2.6.35",
  "title": "",
  "body": " Evaluate and use these limits to determine the end behavior of      Divide the numerator and denominator by  "
},
{
  "id": "sec_Ch2Sec6-7-9",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-7-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "oblique asymptote "
},
{
  "id": "CNX_Calc_Figure_04_06_017",
  "level": "2",
  "url": "sec_Ch2Sec6.html#CNX_Calc_Figure_04_06_017",
  "type": "Figure",
  "number": "2.6.36",
  "title": "",
  "body": "  \"The function f(x) = (3x2 + 4x)\/(x + 2) is plotted as is its diagonal asymptote y = 3x – 2.\"  The graph of the rational function approaches the oblique asymptote  "
},
{
  "id": "eg_lim_tricky",
  "level": "2",
  "url": "sec_Ch2Sec6.html#eg_lim_tricky",
  "type": "Example",
  "number": "2.6.37",
  "title": "Be careful of limits involving roots.",
  "body": "Be careful of limits involving roots  Find the limit as of     We use the same trick try to work out what is the biggest term in the numerator and denominator and pull it to one side.  The denominator is dominated by .  The biggest contribution to the numerator comes from the inside the square-root. When we pull outside the square-root it becomes , so the numerator is dominated by   To see this more explicitly rewrite the numerator   Thus the limit as is     "
},
{
  "id": "absolutevalue",
  "level": "2",
  "url": "sec_Ch2Sec6.html#absolutevalue",
  "type": "Figure",
  "number": "2.6.38",
  "title": "",
  "body": " A graph of the absolute value function NEEDS A DESCRIPTION   "
},
{
  "id": "eg_lim_tricky_part2",
  "level": "2",
  "url": "sec_Ch2Sec6.html#eg_lim_tricky_part2",
  "type": "Example",
  "number": "2.6.39",
  "title": "Be careful of limits involving roots — continued.",
  "body": "Be careful of limits involving roots continued  Find the limit as of    We use the same trick try to work out what is the biggest term in the numerator and denominator and pull it to one side. Since we are taking the limit as we should think of as a large negative number.  The denominator is dominated by .  The biggest contribution to the numerator comes from the inside the square-root. When we pull the outside a square-root it becomes (since we are taking the limit as ), so the numerator is dominated by   To see this more explicitly rewrite the numerator   Thus the limit as is    "
},
{
  "id": "limitsatnegativeinf",
  "level": "2",
  "url": "sec_Ch2Sec6.html#limitsatnegativeinf",
  "type": "Figure",
  "number": "2.6.40",
  "title": "",
  "body": " A sketch of the graph of NEEDS DESCRIPTION   "
},
{
  "id": "sec_Ch2Sec6-7-25",
  "level": "2",
  "url": "sec_Ch2Sec6.html#sec_Ch2Sec6-7-25",
  "type": "Checkpoint",
  "number": "2.6.41",
  "title": "",
  "body": "  Evaluate the limits of as approaches and       Divide the numerator and denominator by   "
},
{
  "id": "sec_Ch3Sec1",
  "level": "1",
  "url": "sec_Ch3Sec1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Defining the Derivative (not edited)",
  "body": " Defining the Derivative (not edited)   Learning Objectives   Recognize the meaning of the tangent to a curve at a point.  Calculate the slope of a tangent line.  Identify the derivative as the limit of a difference quotient.  Calculate the derivative of a given function at a point.  Describe the velocity as a rate of change.  Explain the difference between average velocity and instantaneous velocity.  Estimate the derivative from a table of values.   Now that we have both a conceptual understanding of a limit and the practical ability to compute limits, we have established the foundation for our study of calculus, the branch of mathematics in which we compute derivatives and integrals. Most mathematicians and historians agree that calculus was developed independently by the Englishman Isaac Newton  and the German Gottfried Leibniz  whose images appear in . When we credit Newton and Leibniz with developing calculus, we are really referring to the fact that Newton and Leibniz were the first to understand the relationship between the derivative and the integral. Both mathematicians benefited from the work of predecessors, such as Barrow, Fermat, and Cavalieri. The initial relationship between the two mathematicians appears to have been amicable; however, in later years a bitter controversy erupted over whose work took precedence. Although it seems likely that Newton did, indeed, arrive at the ideas behind calculus first, we are indebted to Leibniz for the notation that we commonly use today.    \"Photos of Newton and Leibniz.\"  Newton and Leibniz are credited with developing calculus independently.     Tangent Lines  We begin our study of calculus by revisiting the notion of secant lines and tangent lines. Recall that we used the slope of a secant line to a function at a point to estimate the rate of change, or the rate at which one variable changes in relation to another variable. We can obtain the slope of the secant by choosing a value of near and drawing a line through the points and as shown in . The slope of this line is given by an equation in the form of a difference quotient:   We can also calculate the slope of a secant line to a function at a value by using this equation and replacing with where is a value close to 0. We can then calculate the slope of the line through the points and In this case, we find the secant line has a slope given by the following difference quotient with increment    Let be a function defined on an interval containing If is in then   is a difference quotient .  Also, if is chosen so that is in then   is a difference quotient with increment    View the development of the derivative with this applet.  These two expressions for calculating the slope of a secant line are illustrated in . We will see that each of these two methods for finding the slope of a secant line is of value. Depending on the setting, we can choose one or the other. The primary consideration in our choice usually depends on ease of calculation.    \"This figure consists of two graphs labeled a and b. Figure a shows the Cartesian coordinate plane with 0, a, and x marked on the x-axis. There is a curve labeled y = f(x) with points marked (a, f(a)) and (x, f(x)). There is also a straight line that crosses these two points (a, f(a)) and (x, f(x)). At the bottom of the graph, the equation msec = (f(x) - f(a))\/(x - a) is given. Figure b shows a similar graph, but this time a + h is marked on the x-axis instead of x. Consequently, the curve labeled y = f(x) passes through (a, f(a)) and (a + h, f(a + h)) as does the straight line. At the bottom of the graph, the equation msec = (f(a + h) - f(a))\/h is given.\"  We can calculate the slope of a secant line in either of two ways.   In (a) we see that, as the values of approach the slopes of the secant lines provide better estimates of the rate of change of the function at Furthermore, the secant lines themselves approach the tangent line to the function at which represents the limit of the secant lines. Similarly, (b) shows that as the values of get closer to the secant lines also approach the tangent line. The slope of the tangent line at is the rate of change of the function at as shown in (c).    \"This figure consists of three graphs labeled a, b, and c. Figure a shows the Cartesian coordinate plane with 0, a, x2, and x1 marked in order on the x-axis. There is a curve labeled y = f(x) with points marked (a, f(a)), (x2, f(x2)), and (x1, f(x1)). There are three straight lines: the first crosses (a, f(a)) and (x1, f(x1)); the second crosses (a, f(a)) and (x2, f(x2)); and the third only touches (a, f(a)), making it the tangent. At the bottom of the graph, the equation mtan = limx \\to a (f(x) - f(a))\/(x - a) is given. Figure b shows a similar graph, but this time a + h2 and a + h1 are marked on the x-axis instead of x2 and x1. Consequently, the curve labeled y = f(x) passes through (a, f(a)), (a + h2, f(a + h2)), and (a + h1, f(a + h1)) and the straight lines similarly cross the graph as in Figure a. At the bottom of the graph, the equation mtan = limh \\to 0 (f(a + h) - f(a))\/h is given. Figure c shows only the curve labeled y = f(x) and its tangent at point (a, f(a)).\"  The secant lines approach the tangent line (shown in green) as the second point approaches the first.    You can use this site to explore graphs to see if they have a tangent line at a point.   In we show the graph of and its tangent line at in a series of tighter intervals about As the intervals become narrower, the graph of the function and its tangent line appear to coincide, making the values on the tangent line a good approximation to the values of the function for choices of close to In fact, the graph of itself appears to be locally linear in the immediate vicinity of    \"This figure consists of four graphs labeled a, b, c, and d. Figure a shows the graphs of the square root of x and the equation y = (x + 1)\/2 with the x-axis going from 0 to 4 and the y-axis going from 0 to 2.5. The graphs of these two functions look very close near 1; there is a box around where these graphs look close. Figure b shows a close up of these same two functions in the area of the box from Figure a, specifically x going from 0 to 2 and y going from 0 to 1.4. Figure c is the same graph as Figure b, but this one has a box from 0 to 1.1 in the x coordinate and 0.8 and 1 on the y coordinate. There is an arrow indicating that this is blown up in Figure d. Figure d shows a very close picture of the box from Figure c, and the two functions appear to be touching for almost the entire length of the graph.\"  For values of close to the graph of and its tangent line appear to coincide.   Formally we may define the tangent line to the graph of a function as follows.    Let be a function defined in an open interval containing The tangent line to at is the line passing through the point having slope   provided this limit exists.  Equivalently, we may define the tangent line to at to be the line passing through the point having slope   provided this limit exists.   Just as we have used two different expressions to define the slope of a secant line, we use two different forms to define the slope of the tangent line. In this text we use both forms of the definition. As before, the choice of definition will depend on the setting. Now that we have formally defined a tangent line to a function at a point, we can use this definition to find equations of tangent lines.    Finding a Tangent Line  Find the equation of the line tangent to the graph of at    First find the slope of the tangent line. In this example, use .   Next, find a point on the tangent line. Since the line is tangent to the graph of at it passes through the point We have so the tangent line passes through the point  Using the point-slope equation of the line with the slope and the point we obtain the line Simplifying, we have The graph of and its tangent line at are shown in .    \"This figure consists of the graphs of f(x) = x squared and y = 6x - 9. The graphs of these functions appear to touch at x = 3.\"  The tangent line to at      The Slope of a Tangent Line Revisited   Use to find the slope of the line tangent to the graph of at    The steps are very similar to . See for the definition.   We obtained the same value for the slope of the tangent line by using the other definition, demonstrating that the formulas can be interchanged.     Finding the Equation of a Tangent Line   Find the equation of the line tangent to the graph of at    We can use , but as we have seen, the results are the same if we use .   We now know that the slope of the tangent line is To find the equation of the tangent line, we also need a point on the line. We know that Since the tangent line passes through the point we can use the point-slope equation of a line to find the equation of the tangent line. Thus the tangent line has the equation The graphs of and are shown in .    \"This figure consists of the graphs of f(x) = 1\/x and y = -x\/4 + 1. The part of the graph f(x) = 1\/x in the first quadrant appears to touch the other function’s graph at x = 2.\"  The line is tangent to at       Find the slope of the line tangent to the graph of at       Use either or . Multiply the numerator and the denominator by a conjugate.      The Derivative of a Function at a Point  The type of limit we compute in order to find the slope of the line tangent to a function at a point occurs in many applications across many disciplines. These applications include velocity and acceleration in physics, marginal profit functions in business, and growth rates in biology. This limit occurs so frequently that we give this value a special name: the derivative . The process of finding a derivative is called differentiation .   Let be a function defined in an open interval containing The derivative of the function at denoted by is defined by   provided this limit exists.  Alternatively, we may also define the derivative of at as     Estimating a Derivative   For use a table to estimate using .    Create a table using values of just below and just above                                  After examining the table, we see that a good estimate is        For use a table to estimate using .       Evaluate at     Finding a Derivative   For find by using .    Substitute the given function and value directly into the equation.      Revisiting the Derivative   For find by using .    Using this equation, we can substitute two values of the function into the equation, and we should get the same value as in .   The results are the same whether we use or .      For find       Use either , , or try both. Use either or as a guide.      Velocities and Rates of Change  Now that we can evaluate a derivative, we can use it in velocity applications. Recall that if is the position of an object moving along a coordinate axis, the average velocity of the object over a time interval if or if is given by the difference quotient   As the values of approach the values of approach the value we call the instantaneous velocity at That is, instantaneous velocity at denoted is given by   To better understand the relationship between average velocity and instantaneous velocity, see . In this figure, the slope of the tangent line (shown in red) is the instantaneous velocity of the object at time whose position at time is given by the function The slope of the secant line (shown in green) is the average velocity of the object over the time interval    \"This figure consists of the Cartesian coordinate plane with 0, a, and t1 marked on the t-axis. The function y = s(t) is graphed in the first quadrant along with two lines marked tangent and secant. The tangent line touches y = s(t) at only one point, (a, s(a)). The secant line touches y = s(t) at two points: (a, s(a)) and (t1, s(t1)).\"  The slope of the secant line is the average velocity over the interval The slope of the tangent line is the instantaneous velocity.   We can use to calculate the instantaneous velocity, or we can estimate the velocity of a moving object by using a table of values. We can then confirm the estimate by using .    Estimating Marginal Cost   The cost function for coffee is given by where is the number of thousand items made. Use a table to estimate the marginal cost of producing 1000 items and interpret.    Using , we can estimate the marginal cost at by computing a table of the slopes of the secant line using values of approaching . This is shown in .   Slopes of the secant lines using values of approaching 1                                 From the table we see that the slope of the secant line over the interval is the slope of the secant line over the interval is and so forth. Using this table of values, it appears that a good estimate is  When items are produced, the cost is decreasing at a rate of per thousand items made. So if we produce more items, we can expect costs to drop by .      A rock is dropped from a height of feet. Its height above ground at time seconds later is given by Find its instantaneous velocity second after it is dropped, using .    ft\/s    Follow the earlier examples of the derivative using .    As we have seen throughout this section, the slope of a tangent line to a function and instantaneous velocity are related concepts. Each is calculated by computing a derivative and each measures the instantaneous rate of change of a function, or the rate of change of a function at any point along the function.   The instantaneous rate of change of a function at a value is its derivative    Chapter Opener: Estimating Rate of Change of Velocity     \"The same sports car speeding along a winding road from the beginning of the chapter.\"  (credit: modification of work by Codex41, Flickr)   Reaching a top speed of mph, the Hennessey Venom GT is one of the fastest cars in the world. In tests it went from to mph in seconds, from mph in seconds, from mph in seconds, and from mph in seconds. Use this data to draw a conclusion about the rate of change of velocity (that is, its acceleration ) as it approaches mph. Does the rate at which the car is accelerating appear to be increasing, decreasing, or constant?    First observe that mph = ft\/s, mph ft\/s, mph ft\/s, and mph ft\/s. We can summarize the information in a table.   at different values of                             Now compute the average acceleration of the car in feet per second on intervals of the form as approaches as shown in the following table.   Average acceleration                         The rate at which the car is accelerating is decreasing as its velocity approaches mph ft\/s).     Rate of Change of Temperature   A homeowner sets the thermostat so that the temperature in the house begins to drop from at p.m., reaches a low of during the night, and rises back to by a.m. the next morning. Suppose that the temperature in the house is given by for where is the number of hours past p.m. Find the instantaneous rate of change of the temperature at midnight.    Since midnight is hours past p.m., we want to compute Refer to .   The instantaneous rate of change of the temperature at midnight is per hour.     Rate of Change of Profit   A toy company can sell electronic gaming systems at a price of dollars per gaming system. The cost of manufacturing systems is given by dollars. Find the rate of change of profit when games are produced. Should the toy company increase or decrease production?    The profit earned by producing gaming systems is where is the revenue obtained from the sale of games. Since the company can sell games at per game,   Consequently,   Therefore, evaluating the rate of change of profit gives   Since the rate of change of profit and the company should increase production.      A coffee shop determines that the daily profit on scones obtained by charging dollars per scone is The coffee shop currently charges per scone. Find the rate of change of profit when the price is and decide whether or not the coffee shop should consider raising or lowering its prices on scones.    raise prices    Use for a guide.      Key Concepts   The slope of the tangent line to a curve measures the instantaneous rate of change of a curve. We can calculate it by finding the limit of the difference quotient or the difference quotient with increment  The derivative of a function at a value is found using either of the definitions for the slope of the tangent line.  Velocity is the rate of change of position. As such, the velocity at time is the derivative of the position at time Average velocity is given by  Instantaneous velocity is given by   We may estimate a derivative by using a table of values.     Key Equations   Difference quotient   Difference quotient with increment    Slope of tangent line   Derivative of   at    Average velocity   Instantaneous velocity      "
},
{
  "id": "sec_Ch3Sec1-2-3",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton Leibniz "
},
{
  "id": "CNX_Calc_Figure_03_01_001",
  "level": "2",
  "url": "sec_Ch3Sec1.html#CNX_Calc_Figure_03_01_001",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "  \"Photos of Newton and Leibniz.\"  Newton and Leibniz are credited with developing calculus independently.  "
},
{
  "id": "sec_Ch3Sec1-3-6",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-3-6",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  Let be a function defined on an interval containing If is in then   is a difference quotient .  Also, if is chosen so that is in then   is a difference quotient with increment  "
},
{
  "id": "sec_Ch3Sec1-3-7",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-3-7",
  "type": "Note",
  "number": "3.1.3",
  "title": "",
  "body": " View the development of the derivative with this applet. "
},
{
  "id": "CNX_Calc_Figure_03_01_002",
  "level": "2",
  "url": "sec_Ch3Sec1.html#CNX_Calc_Figure_03_01_002",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": "  \"This figure consists of two graphs labeled a and b. Figure a shows the Cartesian coordinate plane with 0, a, and x marked on the x-axis. There is a curve labeled y = f(x) with points marked (a, f(a)) and (x, f(x)). There is also a straight line that crosses these two points (a, f(a)) and (x, f(x)). At the bottom of the graph, the equation msec = (f(x) - f(a))\/(x - a) is given. Figure b shows a similar graph, but this time a + h is marked on the x-axis instead of x. Consequently, the curve labeled y = f(x) passes through (a, f(a)) and (a + h, f(a + h)) as does the straight line. At the bottom of the graph, the equation msec = (f(a + h) - f(a))\/h is given.\"  We can calculate the slope of a secant line in either of two ways.  "
},
{
  "id": "CNX_Calc_Figure_03_01_003",
  "level": "2",
  "url": "sec_Ch3Sec1.html#CNX_Calc_Figure_03_01_003",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": "  \"This figure consists of three graphs labeled a, b, and c. Figure a shows the Cartesian coordinate plane with 0, a, x2, and x1 marked in order on the x-axis. There is a curve labeled y = f(x) with points marked (a, f(a)), (x2, f(x2)), and (x1, f(x1)). There are three straight lines: the first crosses (a, f(a)) and (x1, f(x1)); the second crosses (a, f(a)) and (x2, f(x2)); and the third only touches (a, f(a)), making it the tangent. At the bottom of the graph, the equation mtan = limx \\to a (f(x) - f(a))\/(x - a) is given. Figure b shows a similar graph, but this time a + h2 and a + h1 are marked on the x-axis instead of x2 and x1. Consequently, the curve labeled y = f(x) passes through (a, f(a)), (a + h2, f(a + h2)), and (a + h1, f(a + h1)) and the straight lines similarly cross the graph as in Figure a. At the bottom of the graph, the equation mtan = limh \\to 0 (f(a + h) - f(a))\/h is given. Figure c shows only the curve labeled y = f(x) and its tangent at point (a, f(a)).\"  The secant lines approach the tangent line (shown in green) as the second point approaches the first.  "
},
{
  "id": "sec_Ch3Sec1-3-12",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-3-12",
  "type": "Note",
  "number": "3.1.6",
  "title": "",
  "body": " You can use this site to explore graphs to see if they have a tangent line at a point.  "
},
{
  "id": "CNX_Calc_Figure_03_01_008",
  "level": "2",
  "url": "sec_Ch3Sec1.html#CNX_Calc_Figure_03_01_008",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": "  \"This figure consists of four graphs labeled a, b, c, and d. Figure a shows the graphs of the square root of x and the equation y = (x + 1)\/2 with the x-axis going from 0 to 4 and the y-axis going from 0 to 2.5. The graphs of these two functions look very close near 1; there is a box around where these graphs look close. Figure b shows a close up of these same two functions in the area of the box from Figure a, specifically x going from 0 to 2 and y going from 0 to 1.4. Figure c is the same graph as Figure b, but this one has a box from 0 to 1.1 in the x coordinate and 0.8 and 1 on the y coordinate. There is an arrow indicating that this is blown up in Figure d. Figure d shows a very close picture of the box from Figure c, and the two functions appear to be touching for almost the entire length of the graph.\"  For values of close to the graph of and its tangent line appear to coincide.  "
},
{
  "id": "sec_Ch3Sec1-3-16",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-3-16",
  "type": "Definition",
  "number": "3.1.8",
  "title": "",
  "body": "  Let be a function defined in an open interval containing The tangent line to at is the line passing through the point having slope   provided this limit exists.  Equivalently, we may define the tangent line to at to be the line passing through the point having slope   provided this limit exists.  "
},
{
  "id": "fs-id1169739298611",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739298611",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  Finding a Tangent Line  Find the equation of the line tangent to the graph of at    First find the slope of the tangent line. In this example, use .   Next, find a point on the tangent line. Since the line is tangent to the graph of at it passes through the point We have so the tangent line passes through the point  Using the point-slope equation of the line with the slope and the point we obtain the line Simplifying, we have The graph of and its tangent line at are shown in .    \"This figure consists of the graphs of f(x) = x squared and y = 6x - 9. The graphs of these functions appear to touch at x = 3.\"  The tangent line to at    "
},
{
  "id": "fs-id1169739223534",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739223534",
  "type": "Example",
  "number": "3.1.11",
  "title": "The Slope of a Tangent Line Revisited.",
  "body": " The Slope of a Tangent Line Revisited   Use to find the slope of the line tangent to the graph of at    The steps are very similar to . See for the definition.   We obtained the same value for the slope of the tangent line by using the other definition, demonstrating that the formulas can be interchanged.   "
},
{
  "id": "fs-id1169738966727",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169738966727",
  "type": "Example",
  "number": "3.1.12",
  "title": "Finding the Equation of a Tangent Line.",
  "body": " Finding the Equation of a Tangent Line   Find the equation of the line tangent to the graph of at    We can use , but as we have seen, the results are the same if we use .   We now know that the slope of the tangent line is To find the equation of the tangent line, we also need a point on the line. We know that Since the tangent line passes through the point we can use the point-slope equation of a line to find the equation of the tangent line. Thus the tangent line has the equation The graphs of and are shown in .    \"This figure consists of the graphs of f(x) = 1\/x and y = -x\/4 + 1. The part of the graph f(x) = 1\/x in the first quadrant appears to touch the other function’s graph at x = 2.\"  The line is tangent to at    "
},
{
  "id": "sec_Ch3Sec1-3-21",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-3-21",
  "type": "Checkpoint",
  "number": "3.1.14",
  "title": "",
  "body": "  Find the slope of the line tangent to the graph of at       Use either or . Multiply the numerator and the denominator by a conjugate.   "
},
{
  "id": "sec_Ch3Sec1-4-2",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative differentiation "
},
{
  "id": "sec_Ch3Sec1-4-3",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-4-3",
  "type": "Definition",
  "number": "3.1.15",
  "title": "",
  "body": " Let be a function defined in an open interval containing The derivative of the function at denoted by is defined by   provided this limit exists.  Alternatively, we may also define the derivative of at as   "
},
{
  "id": "fs-id1169739198956",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739198956",
  "type": "Example",
  "number": "3.1.16",
  "title": "Estimating a Derivative.",
  "body": " Estimating a Derivative   For use a table to estimate using .    Create a table using values of just below and just above                                  After examining the table, we see that a good estimate is   "
},
{
  "id": "sec_Ch3Sec1-4-5",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-4-5",
  "type": "Checkpoint",
  "number": "3.1.18",
  "title": "",
  "body": "    For use a table to estimate using .       Evaluate at   "
},
{
  "id": "fs-id1169739044032",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739044032",
  "type": "Example",
  "number": "3.1.19",
  "title": "Finding a Derivative.",
  "body": " Finding a Derivative   For find by using .    Substitute the given function and value directly into the equation.    "
},
{
  "id": "fs-id1169739093789",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739093789",
  "type": "Example",
  "number": "3.1.20",
  "title": "Revisiting the Derivative.",
  "body": " Revisiting the Derivative   For find by using .    Using this equation, we can substitute two values of the function into the equation, and we should get the same value as in .   The results are the same whether we use or .   "
},
{
  "id": "sec_Ch3Sec1-4-8",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-4-8",
  "type": "Checkpoint",
  "number": "3.1.21",
  "title": "",
  "body": "  For find       Use either , , or try both. Use either or as a guide.   "
},
{
  "id": "sec_Ch3Sec1-5-2",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average velocity "
},
{
  "id": "sec_Ch3Sec1-5-4",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantaneous velocity "
},
{
  "id": "CNX_Calc_Figure_03_01_007",
  "level": "2",
  "url": "sec_Ch3Sec1.html#CNX_Calc_Figure_03_01_007",
  "type": "Figure",
  "number": "3.1.22",
  "title": "",
  "body": "  \"This figure consists of the Cartesian coordinate plane with 0, a, and t1 marked on the t-axis. The function y = s(t) is graphed in the first quadrant along with two lines marked tangent and secant. The tangent line touches y = s(t) at only one point, (a, s(a)). The secant line touches y = s(t) at two points: (a, s(a)) and (t1, s(t1)).\"  The slope of the secant line is the average velocity over the interval The slope of the tangent line is the instantaneous velocity.  "
},
{
  "id": "fs-id1169739179204",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739179204",
  "type": "Example",
  "number": "3.1.23",
  "title": "Estimating Marginal Cost.",
  "body": "  Estimating Marginal Cost   The cost function for coffee is given by where is the number of thousand items made. Use a table to estimate the marginal cost of producing 1000 items and interpret.    Using , we can estimate the marginal cost at by computing a table of the slopes of the secant line using values of approaching . This is shown in .   Slopes of the secant lines using values of approaching 1                                 From the table we see that the slope of the secant line over the interval is the slope of the secant line over the interval is and so forth. Using this table of values, it appears that a good estimate is  When items are produced, the cost is decreasing at a rate of per thousand items made. So if we produce more items, we can expect costs to drop by .   "
},
{
  "id": "sec_Ch3Sec1-5-10",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-5-10",
  "type": "Checkpoint",
  "number": "3.1.25",
  "title": "",
  "body": "  A rock is dropped from a height of feet. Its height above ground at time seconds later is given by Find its instantaneous velocity second after it is dropped, using .    ft\/s    Follow the earlier examples of the derivative using .   "
},
{
  "id": "sec_Ch3Sec1-5-12",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-5-12",
  "type": "Definition",
  "number": "3.1.26",
  "title": "",
  "body": " The instantaneous rate of change of a function at a value is its derivative  "
},
{
  "id": "fs-id1169739204154",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739204154",
  "type": "Example",
  "number": "3.1.27",
  "title": "Chapter Opener: Estimating Rate of Change of Velocity.",
  "body": " Chapter Opener: Estimating Rate of Change of Velocity     \"The same sports car speeding along a winding road from the beginning of the chapter.\"  (credit: modification of work by Codex41, Flickr)   Reaching a top speed of mph, the Hennessey Venom GT is one of the fastest cars in the world. In tests it went from to mph in seconds, from mph in seconds, from mph in seconds, and from mph in seconds. Use this data to draw a conclusion about the rate of change of velocity (that is, its acceleration ) as it approaches mph. Does the rate at which the car is accelerating appear to be increasing, decreasing, or constant?    First observe that mph = ft\/s, mph ft\/s, mph ft\/s, and mph ft\/s. We can summarize the information in a table.   at different values of                             Now compute the average acceleration of the car in feet per second on intervals of the form as approaches as shown in the following table.   Average acceleration                         The rate at which the car is accelerating is decreasing as its velocity approaches mph ft\/s).   "
},
{
  "id": "fs-id1169739187343",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739187343",
  "type": "Example",
  "number": "3.1.31",
  "title": "Rate of Change of Temperature.",
  "body": " Rate of Change of Temperature   A homeowner sets the thermostat so that the temperature in the house begins to drop from at p.m., reaches a low of during the night, and rises back to by a.m. the next morning. Suppose that the temperature in the house is given by for where is the number of hours past p.m. Find the instantaneous rate of change of the temperature at midnight.    Since midnight is hours past p.m., we want to compute Refer to .   The instantaneous rate of change of the temperature at midnight is per hour.   "
},
{
  "id": "fs-id1169739253544",
  "level": "2",
  "url": "sec_Ch3Sec1.html#fs-id1169739253544",
  "type": "Example",
  "number": "3.1.32",
  "title": "Rate of Change of Profit.",
  "body": " Rate of Change of Profit   A toy company can sell electronic gaming systems at a price of dollars per gaming system. The cost of manufacturing systems is given by dollars. Find the rate of change of profit when games are produced. Should the toy company increase or decrease production?    The profit earned by producing gaming systems is where is the revenue obtained from the sale of games. Since the company can sell games at per game,   Consequently,   Therefore, evaluating the rate of change of profit gives   Since the rate of change of profit and the company should increase production.   "
},
{
  "id": "sec_Ch3Sec1-5-16",
  "level": "2",
  "url": "sec_Ch3Sec1.html#sec_Ch3Sec1-5-16",
  "type": "Checkpoint",
  "number": "3.1.33",
  "title": "",
  "body": "  A coffee shop determines that the daily profit on scones obtained by charging dollars per scone is The coffee shop currently charges per scone. Find the rate of change of profit when the price is and decide whether or not the coffee shop should consider raising or lowering its prices on scones.    raise prices    Use for a guide.   "
},
{
  "id": "sec_Ch3Sec2",
  "level": "1",
  "url": "sec_Ch3Sec2.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Derivative as a Function (not edited)",
  "body": " The Derivative as a Function (not edited)   Learning Objectives   Define the derivative function of a given function.  Graph a derivative function from the graph of a given function.  State the connection between derivatives and continuity.  Describe three conditions for when a function does not have a derivative.  Explain the meaning of a higher-order derivative.   As we have seen, the derivative of a function at a given point gives us the rate of change or slope of the tangent line to the function at that point. If we differentiate a position function at a given time, we obtain the velocity at that time. It seems reasonable to conclude that knowing the derivative of the function at every point would produce valuable information about the behavior of the function. However, the process of finding the derivative at even a handful of values using the techniques of the preceding section would quickly become quite tedious. In this section we define the derivative function and learn a process for finding it.    Derivative Functions  The derivative function gives the derivative of a function at each point in the domain of the original function for which the derivative is defined. We can formally define a derivative function as follows.    Let be a function. The derivative function , denoted by is the function whose domain consists of those values of such that the following limit exists:    A function is said to be differentiable at if exists. More generally, a function is said to be differentiable on if it is differentiable at every point in an open set and a differentiable function is one in which exists on its domain. In the next few examples we use to find the derivative of a function.   Finding the Derivative of a Square-Root Function   Find the derivative of    Start directly with the definition of the derivative function. Use .      Finding the Derivative of a Quadratic Function   Find the derivative of the function    Follow the same procedure here, but without having to multiply by the conjugate.       Find the derivative of       Use and follow the example.    We use a variety of different notations to express the derivative of a function. In we showed that if then If we had expressed this function in the form we could have expressed the derivative as or We could have conveyed the same information by writing Thus, for the function each of the following notations represents the derivative of   In place of we may also use Use of the notation (called Leibniz notation) is quite common in engineering and physics. To understand this notation better, recall that the derivative of a function at a point is the limit of the slopes of secant lines as the secant lines approach the tangent line. The slopes of these secant lines are often expressed in the form where is the difference in the values corresponding to the difference in the values, which are expressed as ( ). Thus the derivative, which can be thought of as the instantaneous rate of change of with respect to is expressed as     \"The function y = f(x) is graphed and it shows up as a curve in the first quadrant. The x-axis is marked with 0, a, and a + Δx. The y-axis is marked with 0, f(a), and f(a) + Δy. There is a straight line crossing y = f(x) at (a, f(a)) and (a + Δx, f(a) + Δy). From the point (a, f(a)), a horizontal line is drawn; from the point (a + Δx, f(a) + Δy), a vertical line is drawn. The distance from (a, f(a)) to (a + Δx, f(a)) is denoted Δx; the distance from (a + Δx, f(a) + Δy) to (a + Δx, f(a)) is denoted Δy.\"  The derivative is expressed as     Graphing a Derivative  We have already discussed how to graph a function, so given the equation of a function or the equation of a derivative function, we could graph it. Given both, we would expect to see a correspondence between the graphs of these two functions, since gives the rate of change of a function (or slope of the tangent line to  In we found that for If we graph these functions on the same axes, as in , we can use the graphs to understand the relationship between these two functions. First, we notice that is increasing over its entire domain, which means that the slopes of its tangent lines at all points are positive. Consequently, we expect for all values of in its domain. Furthermore, as increases, the slopes of the tangent lines to are decreasing and we expect to see a corresponding decrease in We also observe that is undefined and that corresponding to a vertical tangent to at    \"The function f(x) = the square root of x is graphed as is its derivative f’(x) = 1\/(2 times the square root of x).\"  The derivative is positive everywhere because the function is increasing.   In we found that for The graphs of these functions are shown in . Observe that is decreasing for For these same values of For values of is increasing and Also, has a horizontal tangent at and    \"The function f(x) = x squared – 2x is graphed as is its derivative f’(x) = 2x − 2.\"  The derivative where the function is decreasing and where is increasing. The derivative is zero where the function has a horizontal tangent.    Sketching a Derivative Using a Function   Use the following graph of to sketch a graph of   \"The function f(x) is roughly sinusoidal, starting at (−4, 3), decreasing to a local minimum at (−2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2).\"     The solution is shown in the following graph. Observe that is increasing and on Also, is decreasing and on and on Also note that has horizontal tangents at and and and   \"Two functions are graphed here: f(x) and f’(x). The function f(x) is the same as the above graph, that is, roughly sinusoidal, starting at (−4, 3), decreasing to a local minimum at (−2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2). The function f’(x) is an downward-facing parabola with vertex near (0.5, 1.75), y-intercept (0, 1.5), and x-intercepts (−1.9, 0) and (3, 0).\"     >  Sketch the graph of On what interval is the graph of above the -axis?       The graph of is positive where is increasing.      Derivatives and Continuity  Now that we can graph a derivative, let’s examine the behavior of the graphs. First, we consider the relationship between differentiability and continuity. We will see that if a function is differentiable at a point, it must be continuous there; however, a function that is continuous at a point need not be differentiable at that point. In fact, a function may be continuous at a point and fail to be differentiable at the point for one of several reasons.    Differentiability Implies Continuity  Let be a function and be in its domain. If is differentiable at then is continuous at    We have that differentiability implies continuity, but now we consider whether continuity implies differentiability. To determine an answer to this question, we examine the function This function is continuous everywhere; however, is undefined. This observation leads us to believe that continuity does not imply differentiability. Let’s explore further. For   This limit does not exist because   See .    \"The function f(x) = the absolute value of x is graphed. It consists of two straight line segments: the first follows the equation y = −x and ends at the origin; the second follows the equation y = x and starts at the origin.\"  The function is continuous at but is not differentiable at   Let’s consider some additional situations in which a continuous function fails to be differentiable. Consider the function   Thus does not exist. A quick look at the graph of clarifies the situation. The function has a vertical tangent line at ( ).    \"The function f(x) = the cube root of x is graphed. It has a vertical tangent at x = 0.\"  The function has a vertical tangent at It is continuous at but is not differentiable at    The function also has a derivative that exhibits interesting behavior at We see that   This limit does not exist, mainly because the slopes of the secant lines are positive if we approach 0 from the right yet the slopes of the secant lines are negative if we approach 0 from the left. That is, and We say that has cusp at . This behavior is displayed below in . Note that the function is approaching a vertical tangent line on each side of .    \"This figure shows the graph of near . On each side of 0, the function is approaching a vertical tangent, making a cusp at \"  The function has a cusp at   In summary:   We observe that if a function is not continuous, it cannot be differentiable, since every differentiable function must be continuous. However, if a function is continuous, it may still fail to be differentiable.  We saw that failed to be differentiable at because the limit of the slopes of the tangent lines on the left and right were not the same. Visually, this resulted in a sharp corner on the graph of the function at From this we conclude that in order to be differentiable at a point, a function must be “smooth” at that point.  As we saw in the example of a function fails to be differentiable at a point where there is a vertical tangent line.  As we saw with  a functions may fail to differentiable at a point where there is a cusp.    A Piecewise Function that is Continuous and Differentiable   A toy company wants to design a track for a toy car that starts out along a parabolic curve and then converts to a straight line ( ). The function that describes the track is to have the form where and are in inches. For the car to move smoothly along the track, the function must be both continuous and differentiable at Find values of and that make both continuous and differentiable.    \"A cart is drawn on a line that curves through (−10, 5) to (10, 0) with y-intercept roughly (0, 2).\"  For the car to move smoothly along the track, the function must be both continuous and differentiable.     For the function to be continuous at Thus, since   and we must have Equivalently, we have  For the function to be differentiable at   must exist. Since is defined using different rules on the right and the left, we must evaluate this limit from the right and the left and then set them equal to each other:   We also have   This gives us Thus and      Find values of and that make both continuous and differentiable at    and    Use as a guide.      Higher-Order Derivatives  The derivative of a function is itself a function, so we can find the derivative of a derivative. For example, the derivative of a position function is the rate of change of position, or velocity. The derivative of velocity is the rate of change of velocity, which is acceleration. The new function obtained by differentiating the derivative is called the second derivative. Furthermore, we can continue to take derivatives to obtain the third derivative, fourth derivative, and so on. Collectively, these are referred to as higher-order derivatives . The notation for the higher-order derivatives of can be expressed in any of the following forms:    It is interesting to note that the notation for may be viewed as an attempt to express more compactly. Analogously,   Finding a Second Derivative   For find    First find   Next, find by taking the derivative of       Find for       We found in a previous checkpoint. Use to find the derivative of     Finding Acceleration   The position of a particle along a coordinate axis at time (in seconds) is given by (in meters). Find the function that describes its acceleration at time    Since and we begin by finding the derivative of   Next,   Thus,      For find       Use as a guide.      Key Concepts   The derivative of a function is the function whose value at is  The graph of a derivative of a function is related to the graph of Where has a tangent line with positive slope, Where has a tangent line with negative slope, Where has a horizontal tangent line,  If a function is differentiable at a point, then it is continuous at that point. A function is not differentiable at a point if it is not continuous at the point, if it has a vertical tangent line at the point, or if the graph has a sharp corner or cusp.  Higher-order derivatives are derivatives of derivatives, from the second derivative to the derivative.     Key Equations   The derivative function      "
},
{
  "id": "sec_Ch3Sec2-3-3",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-3-3",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Let be a function. The derivative function , denoted by is the function whose domain consists of those values of such that the following limit exists:   "
},
{
  "id": "sec_Ch3Sec2-3-4",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiable at differentiable on differentiable function "
},
{
  "id": "fs-id1169737770972",
  "level": "2",
  "url": "sec_Ch3Sec2.html#fs-id1169737770972",
  "type": "Example",
  "number": "3.2.2",
  "title": "Finding the Derivative of a Square-Root Function.",
  "body": " Finding the Derivative of a Square-Root Function   Find the derivative of    Start directly with the definition of the derivative function. Use .    "
},
{
  "id": "fs-id1169737774001",
  "level": "2",
  "url": "sec_Ch3Sec2.html#fs-id1169737774001",
  "type": "Example",
  "number": "3.2.3",
  "title": "Finding the Derivative of a Quadratic Function.",
  "body": " Finding the Derivative of a Quadratic Function   Find the derivative of the function    Follow the same procedure here, but without having to multiply by the conjugate.    "
},
{
  "id": "sec_Ch3Sec2-3-8",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-3-8",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": "  Find the derivative of       Use and follow the example.   "
},
{
  "id": "CNX_Calc_Figure_03_02_001",
  "level": "2",
  "url": "sec_Ch3Sec2.html#CNX_Calc_Figure_03_02_001",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": "  \"The function y = f(x) is graphed and it shows up as a curve in the first quadrant. The x-axis is marked with 0, a, and a + Δx. The y-axis is marked with 0, f(a), and f(a) + Δy. There is a straight line crossing y = f(x) at (a, f(a)) and (a + Δx, f(a) + Δy). From the point (a, f(a)), a horizontal line is drawn; from the point (a + Δx, f(a) + Δy), a vertical line is drawn. The distance from (a, f(a)) to (a + Δx, f(a)) is denoted Δx; the distance from (a + Δx, f(a) + Δy) to (a + Δx, f(a)) is denoted Δy.\"  The derivative is expressed as  "
},
{
  "id": "CNX_Calc_Figure_03_02_002",
  "level": "2",
  "url": "sec_Ch3Sec2.html#CNX_Calc_Figure_03_02_002",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": "  \"The function f(x) = the square root of x is graphed as is its derivative f’(x) = 1\/(2 times the square root of x).\"  The derivative is positive everywhere because the function is increasing.  "
},
{
  "id": "CNX_Calc_Figure_03_02_003",
  "level": "2",
  "url": "sec_Ch3Sec2.html#CNX_Calc_Figure_03_02_003",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": "  \"The function f(x) = x squared – 2x is graphed as is its derivative f’(x) = 2x − 2.\"  The derivative where the function is decreasing and where is increasing. The derivative is zero where the function has a horizontal tangent.  "
},
{
  "id": "fs-id1169737966982",
  "level": "2",
  "url": "sec_Ch3Sec2.html#fs-id1169737966982",
  "type": "Example",
  "number": "3.2.8",
  "title": "Sketching a Derivative Using a Function.",
  "body": " Sketching a Derivative Using a Function   Use the following graph of to sketch a graph of   \"The function f(x) is roughly sinusoidal, starting at (−4, 3), decreasing to a local minimum at (−2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2).\"     The solution is shown in the following graph. Observe that is increasing and on Also, is decreasing and on and on Also note that has horizontal tangents at and and and   \"Two functions are graphed here: f(x) and f’(x). The function f(x) is the same as the above graph, that is, roughly sinusoidal, starting at (−4, 3), decreasing to a local minimum at (−2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2). The function f’(x) is an downward-facing parabola with vertex near (0.5, 1.75), y-intercept (0, 1.5), and x-intercepts (−1.9, 0) and (3, 0).\"    "
},
{
  "id": "sec_Ch3Sec2-4-8",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-4-8",
  "type": "Checkpoint",
  "number": "3.2.9",
  "title": "",
  "body": ">  Sketch the graph of On what interval is the graph of above the -axis?       The graph of is positive where is increasing.   "
},
{
  "id": "sec_Ch3Sec2-5-3",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-5-3",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "Differentiability Implies Continuity.",
  "body": "  Differentiability Implies Continuity  Let be a function and be in its domain. If is differentiable at then is continuous at   "
},
{
  "id": "CNX_Calc_Figure_03_02_006",
  "level": "2",
  "url": "sec_Ch3Sec2.html#CNX_Calc_Figure_03_02_006",
  "type": "Figure",
  "number": "3.2.11",
  "title": "",
  "body": "  \"The function f(x) = the absolute value of x is graphed. It consists of two straight line segments: the first follows the equation y = −x and ends at the origin; the second follows the equation y = x and starts at the origin.\"  The function is continuous at but is not differentiable at  "
},
{
  "id": "CNX_Calc_Figure_03_02_007",
  "level": "2",
  "url": "sec_Ch3Sec2.html#CNX_Calc_Figure_03_02_007",
  "type": "Figure",
  "number": "3.2.12",
  "title": "",
  "body": "  \"The function f(x) = the cube root of x is graphed. It has a vertical tangent at x = 0.\"  The function has a vertical tangent at It is continuous at but is not differentiable at  "
},
{
  "id": "Busi_Calc_Figure_03_02_002",
  "level": "2",
  "url": "sec_Ch3Sec2.html#Busi_Calc_Figure_03_02_002",
  "type": "Figure",
  "number": "3.2.13",
  "title": "",
  "body": "  \"This figure shows the graph of near . On each side of 0, the function is approaching a vertical tangent, making a cusp at \"  The function has a cusp at  "
},
{
  "id": "fs-id1169738218186",
  "level": "2",
  "url": "sec_Ch3Sec2.html#fs-id1169738218186",
  "type": "Example",
  "number": "3.2.14",
  "title": "A Piecewise Function that is Continuous and Differentiable.",
  "body": " A Piecewise Function that is Continuous and Differentiable   A toy company wants to design a track for a toy car that starts out along a parabolic curve and then converts to a straight line ( ). The function that describes the track is to have the form where and are in inches. For the car to move smoothly along the track, the function must be both continuous and differentiable at Find values of and that make both continuous and differentiable.    \"A cart is drawn on a line that curves through (−10, 5) to (10, 0) with y-intercept roughly (0, 2).\"  For the car to move smoothly along the track, the function must be both continuous and differentiable.     For the function to be continuous at Thus, since   and we must have Equivalently, we have  For the function to be differentiable at   must exist. Since is defined using different rules on the right and the left, we must evaluate this limit from the right and the left and then set them equal to each other:   We also have   This gives us Thus and   "
},
{
  "id": "sec_Ch3Sec2-5-21",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-5-21",
  "type": "Checkpoint",
  "number": "3.2.16",
  "title": "",
  "body": "  Find values of and that make both continuous and differentiable at    and    Use as a guide.   "
},
{
  "id": "sec_Ch3Sec2-6-2",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "higher-order derivatives "
},
{
  "id": "fs-id1169738217346",
  "level": "2",
  "url": "sec_Ch3Sec2.html#fs-id1169738217346",
  "type": "Example",
  "number": "3.2.17",
  "title": "Finding a Second Derivative.",
  "body": " Finding a Second Derivative   For find    First find   Next, find by taking the derivative of    "
},
{
  "id": "sec_Ch3Sec2-6-8",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-6-8",
  "type": "Checkpoint",
  "number": "3.2.18",
  "title": "",
  "body": "  Find for       We found in a previous checkpoint. Use to find the derivative of   "
},
{
  "id": "fs-id1169738099443",
  "level": "2",
  "url": "sec_Ch3Sec2.html#fs-id1169738099443",
  "type": "Example",
  "number": "3.2.19",
  "title": "Finding Acceleration.",
  "body": " Finding Acceleration   The position of a particle along a coordinate axis at time (in seconds) is given by (in meters). Find the function that describes its acceleration at time    Since and we begin by finding the derivative of   Next,   Thus,   "
},
{
  "id": "sec_Ch3Sec2-6-10",
  "level": "2",
  "url": "sec_Ch3Sec2.html#sec_Ch3Sec2-6-10",
  "type": "Checkpoint",
  "number": "3.2.20",
  "title": "",
  "body": "  For find       Use as a guide.   "
},
{
  "id": "sec_Ch3Sec3",
  "level": "1",
  "url": "sec_Ch3Sec3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Differentiation Rules (3.3.31-2 Need Chain Rule)",
  "body": " Differentiation Rules (3.3.31-2 Need Chain Rule)   Learning Objectives   State the constant, constant multiple, and power rules.  Apply the sum and difference rules to combine derivatives.  Use the product rule for finding the derivative of a product of functions.  Use the quotient rule for finding the derivative of a quotient of functions.  Extend the power rule to functions with negative exponents.  Combine the differentiation rules to find the derivative of a polynomial or rational function.   Finding derivatives of functions by using the definition of the derivative can be a lengthy and, for certain functions, a rather challenging process. For example, previously we found that by using a process that involved multiplying an expression by a conjugate prior to evaluating a limit. The process that we could use to evaluate using the definition, while similar, is more complicated. In this section, we develop rules for finding derivatives that allow us to bypass this process. We begin with the basics.    The Basic Rules   The functions and where is a positive integer are the building blocks from which all polynomials and rational functions are constructed. To find derivatives of polynomials and rational functions efficiently without resorting to the limit definition of the derivative, we must first develop formulas for differentiating these basic functions.    The Constant Rule  We first apply the limit definition of the derivative to find the derivative of the constant function, For this function, both and so we obtain the following result:   The rule for differentiating constant functions is called the constant rule . It states that the derivative of a constant function is zero; that is, since a constant function is a horizontal line, the slope, or the rate of change, of a constant function is We restate this rule in the following theorem.   The Constant Rule  Let be a constant.  If then  Alternatively, we may express this rule as     Applying the Constant Rule   Find the derivative of    This is just a one-step application of the rule:       Find the derivative of    0    Use the preceding example as a guide.      The Power Rule  We have shown that   At this point, you might see a pattern beginning to develop for derivatives of the form We continue our examination of derivative formulas by differentiating power functions of the form where is a positive integer. We develop formulas for derivatives of this type of function in stages, beginning with positive integer powers. Before stating and proving the general rule for derivatives of functions of this form, we take a look at a specific case, As we go through this derivation, pay special attention to the portion of the expression in boldface, as the technique used in this case is essentially the same as the technique used to prove the general case.   Differentiating   Find       >  Find       Use and follow the procedure outlined in the preceding example.    As we shall see, the procedure for finding the derivative of the general form is very similar. Although it is often unwise to draw general conclusions from specific examples, we note that when we differentiate the power on becomes the coefficient of in the derivative and the power on in the derivative decreases by 1. The following theorem states that the power rule holds for all positive integer powers of We will eventually extend this result to negative integer powers. Later, we will see that this rule may also be extended first to rational powers of and then to arbitrary powers of Be aware, however, that this rule does not apply to functions in which a constant is raised to a variable power, such as   The Power Rule   Let be a positive integer. If then   Alternatively, we may express this rule as    For where is a positive integer, we have  Since  using the Binomial Theorem we see that   Next, divide both sides by :   Thus,   Finally,      Applying the Power Rule   Find the derivative of the function by applying the power rule.    Using the power rule with we obtain       Find the derivative of       Use the power rule with     The Power Rule (General Version)   If is any real number, then for all where the powers and are defined.    The proof of will have to wait until we explore the derivatives of exponential and logarithmic functions.   Differentiate the following powers of .                                                              The Sum, Difference, and Constant Multiple Rules  We find our next differentiation rules by looking at derivatives of sums, differences, and constant multiples of functions. Just as when we work with functions, there are rules that make it easier to find derivatives of functions that we add, subtract, or multiply by a constant. These rules are summarized in the following theorem.   Sum, Difference, and Constant Multiple Rules  Let and be differentiable functions and be a constant. Then each of the following equations holds.  Sum Rule . The derivative of the sum of a function and a function is the same as the sum of the derivative of and the derivative of   that is,   Difference Rule . The derivative of the difference of a function and a function is the same as the difference of the derivative of and the derivative of   that is,   Constant Multiple Rule . The derivative of a constant multiplied by a function is the same as the constant multiplied by the derivative:   that is,    We provide only the proof of the sum rule here. The rest follow in a similar manner.  For differentiable functions and we set Using the limit definition of the derivative we have   By substituting and we obtain   Rearranging and regrouping the terms, we have   We now apply the sum law for limits and the definition of the derivative to obtain     Applying the Constant Multiple Rule   Find the derivative of and compare it to the derivative of    We use the power rule directly:   Since has derivative we see that the derivative of is 3 times the derivative of This relationship is illustrated in .    \"Two graphs are shown. The first graph shows g(x) = 3x2 and f(x) = x squared. The second graph shows g’(x) = 6x and f’(x) = 2x. In the first graph, g(x) increases three times more quickly than f(x). In the second graph, g’(x) increases three times more quickly than f’(x).\"  The derivative of is 3 times the derivative of      Applying Basic Derivative Rules   Find the derivative of    We begin by applying the rule for differentiating the sum of two functions, followed by the rules for differentiating constant multiples of functions and the rule for differentiating powers. To better understand the sequence in which the differentiation rules are applied, we use Leibniz notation throughout the solution:       Find the derivative of       Use the preceding example as a guide.     Finding the Equation of a Tangent Line   Find the equation of the line tangent to the graph of at    To find the equation of the tangent line, we need a point and a slope. To find the point, compute   This gives us the point Since the slope of the tangent line at 1 is we must first find Using the definition of a derivative, we have   so the slope of the tangent line is Using the point-slope formula, we see that the equation of the tangent line is   Putting the equation of the line in slope-intercept form, we obtain       Find the equation of the line tangent to the graph of at Use the point-slope form.       Use the preceding example as a guide.      Derivatives of Exponential Functions  In order to study the derivatives of a wider variety of functions, we state here the derivative of exponential functions. The proof of how these formulas are valid will be given in the   Assume the function is differentiable for all (this is a big assumption we will have to verify at a later time).   Since the limit is over variable , can be factored outside. Again, assuming the derivative exists, we find it is just some multiple of . When , the derivative of is just multiplied by this constant . In other words, the slope of the tangent line to when is the value .  The following theorem provides the value of this limit, and the proof will be given in the appendix.    The constant is the real number that satisfies the limit Further,       The Product Rule  Now that we have examined the basic rules, we can begin looking at some of the more advanced rules. The first one examines the derivative of the product of two functions. Although it might be tempting to assume that the derivative of the product is the product of the derivatives, similar to the sum and difference rules, the product rule does not follow this pattern. To see why we cannot use this pattern, consider the function whose derivative is and not   Product Rule  Let and be differentiable functions. Then   That is,   This means that the derivative of a product of two functions is the derivative of the first function times the second function plus the derivative of the second function times the first function.     Applying the Product Rule to Functions at a Point   For use the product rule to find if and    Since and hence      Applying the Product Rule to Binomials   For find by applying the product rule. Check the result by first finding the product and then differentiating.    If we set and then and Thus,   Simplifying, we have   To check, we see that and, consequently,      Use the product rule to obtain the derivative of       Set and and use the preceding example as a guide.      The Quotient Rule  Having developed and practiced the product rule, we now consider differentiating quotients of functions. As we see in the following theorem, the derivative of the quotient is not the quotient of the derivatives; rather, it is the derivative of the function in the numerator times the function in the denominator minus the derivative of the function in the denominator times the function in the numerator, all divided by the square of the function in the denominator. In order to better grasp why we cannot simply take the quotient of the derivatives, keep in mind that    The Quotient Rule  Let and be differentiable functions. Then   That is,    The proof of the quotient rule is very similar to the proof of the product rule, so it is omitted here. Instead, we apply this new rule for finding derivatives in the next example.   Applying the Quotient Rule   Use the quotient rule to find the derivative of    Let and Thus, and Substituting into the quotient rule, we have   Simplifying, we obtain       Find the derivative of       Apply the quotient rule with and      Using the Power Rule   Find    By applying the power rule with we obtain      Using the Power Rule and the Constant Multiple Rule   Use the power rule and the constant multiple rule to find    It may seem tempting to use the quotient rule to find this derivative, and it would certainly not be incorrect to do so. However, it is far easier to differentiate this function by first rewriting it as       Find the derivative of using the power rule.       Rewrite Use the power rule with      Combining Differentiation Rules  As we have seen throughout the examples in this section, it seldom happens that we are called on to apply just one differentiation rule to find the derivative of a given function. At this point, by combining the differentiation rules, we may find the derivatives of any polynomial or rational function. Later on we will encounter more complex combinations of differentiation rules. A good rule of thumb to use when applying several rules is to apply the rules in reverse of the order in which we would evaluate the function.   Combining Differentiation Rules   For find    Finding this derivative requires the sum rule, the constant multiple rule, and the product rule.      Extending the Product Rule   For express in terms of and their derivatives.    We can think of the function as the product of the function and the function That is, Thus,      Combining Differentiation Rules   Find the derivative of    Use the derivative of the natural exponential function, the quotient rule, and the chain rule.       Find the derivative of       Don’t forget to use the product rule.     Combining the Quotient Rule and the Product Rule   For find    This procedure is typical for finding the derivative of a rational function.       Find       Apply the difference rule and the constant multiple rule.     Determining Where a Function Has a Horizontal Tangent   Determine the values of for which has a horizontal tangent line.    To find the values of for which has a horizontal tangent line, we must solve Since   we must solve Thus we see that the function has horizontal tangent lines at and as shown in the following graph.    \"The graph shows f(x) = x3 – 7x2 + 8x + 1, and the tangent lines are shown as x = 2\/3 and x = 4.\"  This function has horizontal tangent lines at = 2\/3 and = 4.        Find the values of for which the line tangent to the graph of has a tangent line parallel to the line       Solve     Project: Formula One Grandstands  Formula One car races can be very exciting to watch and attract a lot of spectators. Formula One track designers have to ensure sufficient grandstand space is available around the track to accommodate these viewers. However, car racing can be dangerous, and safety considerations are paramount. The grandstands must be placed where spectators will not be in danger should a driver lose control of a car ( ).    \"A photo of a grandstand next to a straightaway of a race track.\"  The grandstand next to a straightaway of the Circuit de Barcelona-Catalunya race track, located where the spectators are not in danger.  ********** Safety is especially a concern on turns. If a driver does not slow down enough before entering the turn, the car may slide off the racetrack. Normally, this just results in a wider turn, which slows the driver down. But if the driver loses control completely, the car may fly off the track entirely, on a path tangent to the curve of the racetrack.  Suppose you are designing a new Formula One track. One section of the track can be modeled by the function ( ). The current plan calls for grandstands to be built along the first straightaway and around a portion of the first curve. The plans call for the front corner of the grandstand to be located at the point We want to determine whether this location puts the spectators in danger if a driver loses control of the car.   \"This figure has two parts labeled a and b. Figure a shows the graph of f(x) = x3 + 3x2 + x. Figure b shows the same graph but this time with two boxes on it. The first box appears along the left-hand side of the graph straddling the x-axis roughly parallel to f(x). The second box appears a little higher, also roughly parallel to f(x), with its front corner located at (-1.9, 2.8). Note that this corner is roughly in line with the direct path of the track before it started to turn.\"  (a) One section of the racetrack can be modeled by the function (b) The front corner of the grandstand is located at  Physicists have determined that drivers are most likely to lose control of their cars as they are coming into a turn, at the point where the slope of the tangent line is 1. Find the coordinates of this point near the turn.  Find the equation of the tangent line to the curve at this point.  To determine whether the spectators are in danger in this scenario, find the -coordinate of the point where the tangent line crosses the line Is this point safely to the right of the grandstand? Or are the spectators in danger?  What if a driver loses control earlier than the physicists project? Suppose a driver loses control at the point What is the slope of the tangent line at this point?  If a driver loses control as described in part 4, are the spectators safe?  Should you proceed with the current design for the grandstand, or should the grandstands be moved?       "
},
{
  "id": "sec_Ch3Sec3-3-3-4",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant rule "
},
{
  "id": "sec_Ch3Sec3-3-3-5",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-3-5",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "The Constant Rule.",
  "body": " The Constant Rule  Let be a constant.  If then  Alternatively, we may express this rule as   "
},
{
  "id": "fs-id1169739274547",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739274547",
  "type": "Example",
  "number": "3.3.2",
  "title": "Applying the Constant Rule.",
  "body": " Applying the Constant Rule   Find the derivative of    This is just a one-step application of the rule:    "
},
{
  "id": "sec_Ch3Sec3-3-3-7",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-3-7",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": "  Find the derivative of    0    Use the preceding example as a guide.   "
},
{
  "id": "fs-id1169738993994",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169738993994",
  "type": "Example",
  "number": "3.3.4",
  "title": "Differentiating <span class=\"process-math\">\\(x^3\\)<\/span>.",
  "body": " Differentiating   Find      "
},
{
  "id": "sec_Ch3Sec3-3-4-6",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-4-6",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "",
  "body": ">  Find       Use and follow the procedure outlined in the preceding example.   "
},
{
  "id": "sec_Ch3Sec3-3-4-7",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power rule "
},
{
  "id": "thm_PowerRule",
  "level": "2",
  "url": "sec_Ch3Sec3.html#thm_PowerRule",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "The Power Rule.",
  "body": " The Power Rule   Let be a positive integer. If then   Alternatively, we may express this rule as    For where is a positive integer, we have  Since  using the Binomial Theorem we see that   Next, divide both sides by :   Thus,   Finally,    "
},
{
  "id": "fs-id1169739190555",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739190555",
  "type": "Example",
  "number": "3.3.7",
  "title": "Applying the Power Rule.",
  "body": " Applying the Power Rule   Find the derivative of the function by applying the power rule.    Using the power rule with we obtain    "
},
{
  "id": "sec_Ch3Sec3-3-4-10",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-4-10",
  "type": "Checkpoint",
  "number": "3.3.8",
  "title": "",
  "body": "  Find the derivative of       Use the power rule with   "
},
{
  "id": "thm-generalpowerrule",
  "level": "2",
  "url": "sec_Ch3Sec3.html#thm-generalpowerrule",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "The Power Rule (General Version).",
  "body": " The Power Rule (General Version)   If is any real number, then for all where the powers and are defined.   "
},
{
  "id": "sec_Ch3Sec3-3-4-13",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-3-4-13",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": " Differentiate the following powers of .                                                          "
},
{
  "id": "sec_Ch3Sec3-4-3",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-4-3",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "Sum, Difference, and Constant Multiple Rules.",
  "body": " Sum, Difference, and Constant Multiple Rules  Let and be differentiable functions and be a constant. Then each of the following equations holds.  Sum Rule . The derivative of the sum of a function and a function is the same as the sum of the derivative of and the derivative of   that is,   Difference Rule . The derivative of the difference of a function and a function is the same as the difference of the derivative of and the derivative of   that is,   Constant Multiple Rule . The derivative of a constant multiplied by a function is the same as the constant multiplied by the derivative:   that is,    We provide only the proof of the sum rule here. The rest follow in a similar manner.  For differentiable functions and we set Using the limit definition of the derivative we have   By substituting and we obtain   Rearranging and regrouping the terms, we have   We now apply the sum law for limits and the definition of the derivative to obtain   "
},
{
  "id": "fs-id1169739269764",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739269764",
  "type": "Example",
  "number": "3.3.12",
  "title": "Applying the Constant Multiple Rule.",
  "body": " Applying the Constant Multiple Rule   Find the derivative of and compare it to the derivative of    We use the power rule directly:   Since has derivative we see that the derivative of is 3 times the derivative of This relationship is illustrated in .    \"Two graphs are shown. The first graph shows g(x) = 3x2 and f(x) = x squared. The second graph shows g’(x) = 6x and f’(x) = 2x. In the first graph, g(x) increases three times more quickly than f(x). In the second graph, g’(x) increases three times more quickly than f’(x).\"  The derivative of is 3 times the derivative of    "
},
{
  "id": "fs-id1169739300387",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739300387",
  "type": "Example",
  "number": "3.3.14",
  "title": "Applying Basic Derivative Rules.",
  "body": " Applying Basic Derivative Rules   Find the derivative of    We begin by applying the rule for differentiating the sum of two functions, followed by the rules for differentiating constant multiples of functions and the rule for differentiating powers. To better understand the sequence in which the differentiation rules are applied, we use Leibniz notation throughout the solution:    "
},
{
  "id": "sec_Ch3Sec3-4-6",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-4-6",
  "type": "Checkpoint",
  "number": "3.3.15",
  "title": "",
  "body": "  Find the derivative of       Use the preceding example as a guide.   "
},
{
  "id": "fs-id1169739301889",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739301889",
  "type": "Example",
  "number": "3.3.16",
  "title": "Finding the Equation of a Tangent Line.",
  "body": " Finding the Equation of a Tangent Line   Find the equation of the line tangent to the graph of at    To find the equation of the tangent line, we need a point and a slope. To find the point, compute   This gives us the point Since the slope of the tangent line at 1 is we must first find Using the definition of a derivative, we have   so the slope of the tangent line is Using the point-slope formula, we see that the equation of the tangent line is   Putting the equation of the line in slope-intercept form, we obtain    "
},
{
  "id": "sec_Ch3Sec3-4-8",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-4-8",
  "type": "Checkpoint",
  "number": "3.3.17",
  "title": "",
  "body": "  Find the equation of the line tangent to the graph of at Use the point-slope form.       Use the preceding example as a guide.   "
},
{
  "id": "thm-eulernumberlimit",
  "level": "2",
  "url": "sec_Ch3Sec3.html#thm-eulernumberlimit",
  "type": "Theorem",
  "number": "3.3.18",
  "title": "",
  "body": "  The constant is the real number that satisfies the limit Further,    "
},
{
  "id": "sec_Ch3Sec3-6-2",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product rule "
},
{
  "id": "sec_Ch3Sec3-6-3",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-6-3",
  "type": "Theorem",
  "number": "3.3.19",
  "title": "Product Rule.",
  "body": " Product Rule  Let and be differentiable functions. Then   That is,   This means that the derivative of a product of two functions is the derivative of the first function times the second function plus the derivative of the second function times the first function.   "
},
{
  "id": "fs-id1169736659557",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169736659557",
  "type": "Example",
  "number": "3.3.20",
  "title": "Applying the Product Rule to Functions at a Point.",
  "body": " Applying the Product Rule to Functions at a Point   For use the product rule to find if and    Since and hence    "
},
{
  "id": "fs-id1169739273812",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739273812",
  "type": "Example",
  "number": "3.3.21",
  "title": "Applying the Product Rule to Binomials.",
  "body": " Applying the Product Rule to Binomials   For find by applying the product rule. Check the result by first finding the product and then differentiating.    If we set and then and Thus,   Simplifying, we have   To check, we see that and, consequently,   "
},
{
  "id": "sec_Ch3Sec3-6-6",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-6-6",
  "type": "Checkpoint",
  "number": "3.3.22",
  "title": "",
  "body": "  Use the product rule to obtain the derivative of       Set and and use the preceding example as a guide.   "
},
{
  "id": "thm_QuotientRule",
  "level": "2",
  "url": "sec_Ch3Sec3.html#thm_QuotientRule",
  "type": "Theorem",
  "number": "3.3.23",
  "title": "The Quotient Rule.",
  "body": " The Quotient Rule  Let and be differentiable functions. Then   That is,   "
},
{
  "id": "sec_Ch3Sec3-7-5",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-7-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient rule "
},
{
  "id": "fs-id1169739305225",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739305225",
  "type": "Example",
  "number": "3.3.24",
  "title": "Applying the Quotient Rule.",
  "body": " Applying the Quotient Rule   Use the quotient rule to find the derivative of    Let and Thus, and Substituting into the quotient rule, we have   Simplifying, we obtain    "
},
{
  "id": "sec_Ch3Sec3-7-7",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-7-7",
  "type": "Checkpoint",
  "number": "3.3.25",
  "title": "",
  "body": "  Find the derivative of       Apply the quotient rule with and   "
},
{
  "id": "fs-id1169736614308",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169736614308",
  "type": "Example",
  "number": "3.3.26",
  "title": "Using the  Power Rule.",
  "body": " Using the Power Rule   Find    By applying the power rule with we obtain    "
},
{
  "id": "fs-id1169739300101",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739300101",
  "type": "Example",
  "number": "3.3.27",
  "title": "Using the  Power Rule and the Constant Multiple Rule.",
  "body": " Using the Power Rule and the Constant Multiple Rule   Use the power rule and the constant multiple rule to find    It may seem tempting to use the quotient rule to find this derivative, and it would certainly not be incorrect to do so. However, it is far easier to differentiate this function by first rewriting it as    "
},
{
  "id": "sec_Ch3Sec3-7-10",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-7-10",
  "type": "Checkpoint",
  "number": "3.3.28",
  "title": "",
  "body": "  Find the derivative of using the power rule.       Rewrite Use the power rule with   "
},
{
  "id": "fs-id1169739347062",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739347062",
  "type": "Example",
  "number": "3.3.29",
  "title": "Combining Differentiation Rules.",
  "body": " Combining Differentiation Rules   For find    Finding this derivative requires the sum rule, the constant multiple rule, and the product rule.    "
},
{
  "id": "fs-id1169739325719",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739325719",
  "type": "Example",
  "number": "3.3.30",
  "title": "Extending the Product Rule.",
  "body": " Extending the Product Rule   For express in terms of and their derivatives.    We can think of the function as the product of the function and the function That is, Thus,    "
},
{
  "id": "fs-id1169737140879",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169737140879",
  "type": "Example",
  "number": "3.3.31",
  "title": "Combining Differentiation Rules.",
  "body": " Combining Differentiation Rules   Find the derivative of    Use the derivative of the natural exponential function, the quotient rule, and the chain rule.    "
},
{
  "id": "sec_Ch3Sec3-8-6",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-8-6",
  "type": "Checkpoint",
  "number": "3.3.32",
  "title": "",
  "body": "  Find the derivative of       Don’t forget to use the product rule.   "
},
{
  "id": "fs-id1169736658392",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169736658392",
  "type": "Example",
  "number": "3.3.33",
  "title": "Combining the Quotient Rule and the Product Rule.",
  "body": " Combining the Quotient Rule and the Product Rule   For find    This procedure is typical for finding the derivative of a rational function.    "
},
{
  "id": "sec_Ch3Sec3-8-8",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-8-8",
  "type": "Checkpoint",
  "number": "3.3.34",
  "title": "",
  "body": "  Find       Apply the difference rule and the constant multiple rule.   "
},
{
  "id": "fs-id1169736589236",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169736589236",
  "type": "Example",
  "number": "3.3.35",
  "title": "Determining Where a Function Has a Horizontal Tangent.",
  "body": " Determining Where a Function Has a Horizontal Tangent   Determine the values of for which has a horizontal tangent line.    To find the values of for which has a horizontal tangent line, we must solve Since   we must solve Thus we see that the function has horizontal tangent lines at and as shown in the following graph.    \"The graph shows f(x) = x3 – 7x2 + 8x + 1, and the tangent lines are shown as x = 2\/3 and x = 4.\"  This function has horizontal tangent lines at = 2\/3 and = 4.    "
},
{
  "id": "sec_Ch3Sec3-8-10",
  "level": "2",
  "url": "sec_Ch3Sec3.html#sec_Ch3Sec3-8-10",
  "type": "Checkpoint",
  "number": "3.3.37",
  "title": "",
  "body": "  Find the values of for which the line tangent to the graph of has a tangent line parallel to the line       Solve   "
},
{
  "id": "fs-id1169739298028",
  "level": "2",
  "url": "sec_Ch3Sec3.html#fs-id1169739298028",
  "type": "Project",
  "number": "3.3.1",
  "title": "Project: Formula One Grandstands.",
  "body": " Project: Formula One Grandstands  Formula One car races can be very exciting to watch and attract a lot of spectators. Formula One track designers have to ensure sufficient grandstand space is available around the track to accommodate these viewers. However, car racing can be dangerous, and safety considerations are paramount. The grandstands must be placed where spectators will not be in danger should a driver lose control of a car ( ).    \"A photo of a grandstand next to a straightaway of a race track.\"  The grandstand next to a straightaway of the Circuit de Barcelona-Catalunya race track, located where the spectators are not in danger.  ********** Safety is especially a concern on turns. If a driver does not slow down enough before entering the turn, the car may slide off the racetrack. Normally, this just results in a wider turn, which slows the driver down. But if the driver loses control completely, the car may fly off the track entirely, on a path tangent to the curve of the racetrack.  Suppose you are designing a new Formula One track. One section of the track can be modeled by the function ( ). The current plan calls for grandstands to be built along the first straightaway and around a portion of the first curve. The plans call for the front corner of the grandstand to be located at the point We want to determine whether this location puts the spectators in danger if a driver loses control of the car.   \"This figure has two parts labeled a and b. Figure a shows the graph of f(x) = x3 + 3x2 + x. Figure b shows the same graph but this time with two boxes on it. The first box appears along the left-hand side of the graph straddling the x-axis roughly parallel to f(x). The second box appears a little higher, also roughly parallel to f(x), with its front corner located at (-1.9, 2.8). Note that this corner is roughly in line with the direct path of the track before it started to turn.\"  (a) One section of the racetrack can be modeled by the function (b) The front corner of the grandstand is located at  Physicists have determined that drivers are most likely to lose control of their cars as they are coming into a turn, at the point where the slope of the tangent line is 1. Find the coordinates of this point near the turn.  Find the equation of the tangent line to the curve at this point.  To determine whether the spectators are in danger in this scenario, find the -coordinate of the point where the tangent line crosses the line Is this point safely to the right of the grandstand? Or are the spectators in danger?  What if a driver loses control earlier than the physicists project? Suppose a driver loses control at the point What is the slope of the tangent line at this point?  If a driver loses control as described in part 4, are the spectators safe?  Should you proceed with the current design for the grandstand, or should the grandstands be moved?   "
},
{
  "id": "sec_Ch3Sec4",
  "level": "1",
  "url": "sec_Ch3Sec4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Derivatives as Rates of Change",
  "body": " Derivatives as Rates of Change   Learning Objectives    Calculate the average rate of change and explain how it differs from the instantaneous rate of change.  Apply rates of change to displacement, velocity, and acceleration of an object moving along a straight line.  Predict the future population from the present value and the population growth rate.  Use derivatives to calculate marginal cost and revenue in a business situation.   In this section, we explore applications of derivatives as tools for modeling rates of change. While it is most natural to think about change over time, derivatives can describe how one quantity changes with respect to any variable. For instance, an economist might examine how the cost of producing steel depends on the number of tons produced, while an engineer might study how a generator’s power output varies with temperature.    Rates of Change  We’ve noted previously that the average rate of change of a function, , over the interval corresponds to the difference quotient of f:   Taking the limit as gives us the definition of the derivative. This leads us to an important interpretation of the derivative.    The instantaneous rate of change of with respect to at is the derivative provided the limit exists.    Thus, instantaneous rates are average rates. Notice that for small values of ,   It is conventional to say ``rate of change'' and omit the word instantaneous. So, unless we specify that it is an average rate of change, it is assumed to be instantaneous.   A Motivating Example for Rates of Change   The area of a circle depends on it diameter according to   As the diameter changes, the area changes as well. How fast is the area increasing when the diameter is meters? In other words, what is the rate at which the area grows with respect to the diameter at that moment?    To answer this question requires the Chain Rule, which we will learn about soon. Suffice it to say, if the diameter is growing then the area must be growing as well. In particular, at the moment the diameter is meters, the area will be growing as fast as the diameter is growing.       Motion along a Line  Let be a function giving the position of an object at time . Then the difference quotient can be interpreted as the average velocity over the interval . That is,   As before, taking the limit as goes to gives us instantaneous velocity, which we see is also the derivative of the position function. This gives us the following definition.    Velocity (or instantaneous velocity) is the derivative of position with respect to time.    Velocity describes not only how fast an object is moving, but also its direction. When an object moves forward along a straight line (so its position is increasing), its velocity is positive; when it moves backwards (so is decreasing), its velocity is negative. On a vertical line, positive velocity indicates upward motion while negative velocity indicates downward motion.  To see the difference between velocity and speed, imagine driving to the store and then returning at mph. The speedometer reads mph both ways; it does not display on the return trip, even though your distance from home is decreasing. This is because the speedometer measures speed, which is the absolute value of velocity. Speed tells how fast you are moving, regardless of direction.   The speed of an object at time is given by .      Insert a graph like Thomas' Figure 3.17   The rate at which an object's velocity changes is the object's acceleration. The acceleration measures how quizckly an objects gains or loses speed.    Acceleration is the derivative of velocity with respect to time.     Comparing Instantaneous Velocity and Average Velocity   A ball is dropped from a height of 64 feet. Its height above ground (in feet) seconds later is given by    \"On the Cartesian coordinate plane, the function s(t) = -16t2 + 64 is graphed. This function starts at (0, 64) and decreases to (0, 2).\"   A graph of the height of the ball with respect to time    What is the instantaneous velocity of the ball when it hits the ground?  What is the average velocity during its fall?     The first thing to do is determine how long it takes the ball to reach the ground. To do this, set Solving we get so it take 2 seconds for the ball to reach the ground.   The instantaneous velocity of the ball as it strikes the ground is Since we obtain  The average velocity of the ball during its fall is      Interpreting the Relationship between and   A particle moves along a coordinate axis in the positive direction to the right. Its position at time is given by Find and and use these values to answer the following questions.   Is the particle moving from left to right or from right to left at time  Is the particle speeding up or slowing down at time     Begin by finding and  and  Evaluating these functions at we obtain and   Because the particle is moving from right to left.  Because and velocity and acceleration are acting in opposite directions. In other words, the particle is being accelerated in the direction opposite the direction in which it is traveling, causing to decrease. The particle is slowing down.      Position and Velocity   The position of a particle moving along a coordinate axis is given by   Find  At what time(s) is the particle at rest?  On what time intervals is the particle moving from left to right? From right to left?  Use the information obtained to sketch the path of the particle along a coordinate axis.      The velocity is the derivative of the position function:  The particle is at rest when so set Factoring the left-hand side of the equation produces Solving, we find that the particle is at rest at and  The particle is moving from left to right when and from right to left when  gives the analysis of the sign of for but it does not represent the axis along which the particle is moving.   \"A number line marked with 0, 2, and 4. Between 0 and 2, there is a plus sign. Above 2, there is a 0. Between 2 and 4 there is a negative sign. Above 4 there is a 0. After 4 there is a plus sign and v(t).\"  The sign of v(t) determines the direction of the particle.  Since on the particle is moving from left to right on these intervals. Since on the particle is moving from right to left on this interval.  Before we can sketch the graph of the particle, we need to know its position at the time it starts moving and at the times that it changes direction We have and This means that the particle begins on the coordinate axis at 4 and changes direction at 0 and 20 on the coordinate axis. The path of the particle is shown on a coordinate axis in .   \"A number line is given and above it a line snakes, starting at t = 0 above 4 on the number line. Then the line at t = 2 is above 24 on the number line. Then the line decreases at t = 4 to be above 20 on the number line, at which point the line reverses direction again and increases indefinitely.\"  The path of the particle can be determined by analyzing v(t).        A particle moves along a coordinate axis. Its position at time is given by Is the particle moving from right to left or from left to right at time    left to right    Find and look at the sign.      Population Change  In addition to analyzing velocity, speed, acceleration, and position, we can use derivatives to analyze various types of populations, including those as diverse as bacteria colonies and cities. We can use a current population, together with a growth rate, to estimate the size of a population in the future. The population growth rate is the rate of change of a population and consequently can be represented by the derivative of the size of the population.    If is the number of entities present in a population, then the population growth rate of is defined to be    Estimating a Population   The population of a city is tripling every 5 years. If its current population is 10,000, what will be its approximate population 2 years from now?    Let be the population (in thousands) years from now. Thus, we know that and based on the information, we anticipate Now estimate the current growth rate, using   By applying to we can estimate the population 2 years from now by writing   thus, in 2 years the population will be 18,000.      The current population of a mosquito colony is known to be 3,000; that is, If estimate the size of the population in 3 days, where is measured in days.    3,300    Use      Changes in Cost and Revenue  In addition to analyzing motion along a line and population growth, derivatives are useful in analyzing changes in cost, revenue, and profit. The concept of a marginal function is common in the fields of business and economics and implies the use of derivatives. The marginal cost is the derivative of the cost function. The marginal revenue is the derivative of the revenue function. The marginal profit is the derivative of the profit function, which is based on the cost function and the revenue function.    If is the cost of producing items, then the marginal cost  is  If is the revenue obtained from selling items, then the marginal revenue is  If is the profit obtained from selling items, then the marginal profit  is defined to be   We can roughly approximate   by choosing an appropriate value for Since represents objects, a reasonable and small value for is 1. Thus, by substituting we get the approximation Consequently, for a given value of can be thought of as the change in cost associated with producing one additional item. In a similar way, approximates the revenue obtained by selling one additional item, and approximates the profit obtained by producing and selling one additional item.   Applying Marginal Revenue   Assume that the number of barbeque dinners that can be sold, can be related to the price charged, by the equation  In this case, the revenue in dollars obtained by selling barbeque dinners is given by   Use the marginal revenue function to estimate the revenue obtained from selling the 101st barbeque dinner. Compare this to the actual revenue obtained from the sale of this dinner.    First, find the marginal revenue function:  Next, use to approximate the revenue obtained from the sale of the 101st dinner. Since the revenue obtained from the sale of the 101st dinner is approximately \\$3.  The actual revenue obtained from the sale of the 101st dinner is   The marginal revenue is a fairly good estimate in this case and has the advantage of being easy to compute.      Suppose that the profit obtained from the sale of fish-fry dinners is given by Use the marginal profit function to estimate the profit from the sale of the 101st fish-fry dinner.    \\$2    Use to approximate       "
},
{
  "id": "def-instantaneousrateofchange",
  "level": "2",
  "url": "sec_Ch3Sec4.html#def-instantaneousrateofchange",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  The instantaneous rate of change of with respect to at is the derivative provided the limit exists.   "
},
{
  "id": "ex-circlearearateofchange",
  "level": "2",
  "url": "sec_Ch3Sec4.html#ex-circlearearateofchange",
  "type": "Example",
  "number": "3.4.2",
  "title": "A Motivating Example for Rates of Change.",
  "body": " A Motivating Example for Rates of Change   The area of a circle depends on it diameter according to   As the diameter changes, the area changes as well. How fast is the area increasing when the diameter is meters? In other words, what is the rate at which the area grows with respect to the diameter at that moment?    To answer this question requires the Chain Rule, which we will learn about soon. Suffice it to say, if the diameter is growing then the area must be growing as well. In particular, at the moment the diameter is meters, the area will be growing as fast as the diameter is growing.   "
},
{
  "id": "sec_Ch3Sec4-4-4",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-4-4",
  "type": "Definition",
  "number": "3.4.3",
  "title": "",
  "body": "  Velocity (or instantaneous velocity) is the derivative of position with respect to time.   "
},
{
  "id": "sec_Ch3Sec4-4-7",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-4-7",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": " The speed of an object at time is given by .  "
},
{
  "id": "ThomasFig3-17",
  "level": "2",
  "url": "sec_Ch3Sec4.html#ThomasFig3-17",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": "  Insert a graph like Thomas' Figure 3.17  "
},
{
  "id": "sec_Ch3Sec4-4-10",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-4-10",
  "type": "Definition",
  "number": "3.4.6",
  "title": "",
  "body": "  Acceleration is the derivative of velocity with respect to time.   "
},
{
  "id": "fs-id1169738906211",
  "level": "2",
  "url": "sec_Ch3Sec4.html#fs-id1169738906211",
  "type": "Example",
  "number": "3.4.7",
  "title": "Comparing Instantaneous Velocity and Average Velocity.",
  "body": " Comparing Instantaneous Velocity and Average Velocity   A ball is dropped from a height of 64 feet. Its height above ground (in feet) seconds later is given by    \"On the Cartesian coordinate plane, the function s(t) = -16t2 + 64 is graphed. This function starts at (0, 64) and decreases to (0, 2).\"   A graph of the height of the ball with respect to time    What is the instantaneous velocity of the ball when it hits the ground?  What is the average velocity during its fall?     The first thing to do is determine how long it takes the ball to reach the ground. To do this, set Solving we get so it take 2 seconds for the ball to reach the ground.   The instantaneous velocity of the ball as it strikes the ground is Since we obtain  The average velocity of the ball during its fall is    "
},
{
  "id": "fs-id1169738904404",
  "level": "2",
  "url": "sec_Ch3Sec4.html#fs-id1169738904404",
  "type": "Example",
  "number": "3.4.9",
  "title": "Interpreting the Relationship between <span class=\"process-math\">\\(v(t)\\)<\/span> and <span class=\"process-math\">\\(a(t)\\)<\/span>.",
  "body": " Interpreting the Relationship between and   A particle moves along a coordinate axis in the positive direction to the right. Its position at time is given by Find and and use these values to answer the following questions.   Is the particle moving from left to right or from right to left at time  Is the particle speeding up or slowing down at time     Begin by finding and  and  Evaluating these functions at we obtain and   Because the particle is moving from right to left.  Because and velocity and acceleration are acting in opposite directions. In other words, the particle is being accelerated in the direction opposite the direction in which it is traveling, causing to decrease. The particle is slowing down.    "
},
{
  "id": "fs-id1169738889577",
  "level": "2",
  "url": "sec_Ch3Sec4.html#fs-id1169738889577",
  "type": "Example",
  "number": "3.4.10",
  "title": "Position and Velocity.",
  "body": " Position and Velocity   The position of a particle moving along a coordinate axis is given by   Find  At what time(s) is the particle at rest?  On what time intervals is the particle moving from left to right? From right to left?  Use the information obtained to sketch the path of the particle along a coordinate axis.      The velocity is the derivative of the position function:  The particle is at rest when so set Factoring the left-hand side of the equation produces Solving, we find that the particle is at rest at and  The particle is moving from left to right when and from right to left when  gives the analysis of the sign of for but it does not represent the axis along which the particle is moving.   \"A number line marked with 0, 2, and 4. Between 0 and 2, there is a plus sign. Above 2, there is a 0. Between 2 and 4 there is a negative sign. Above 4 there is a 0. After 4 there is a plus sign and v(t).\"  The sign of v(t) determines the direction of the particle.  Since on the particle is moving from left to right on these intervals. Since on the particle is moving from right to left on this interval.  Before we can sketch the graph of the particle, we need to know its position at the time it starts moving and at the times that it changes direction We have and This means that the particle begins on the coordinate axis at 4 and changes direction at 0 and 20 on the coordinate axis. The path of the particle is shown on a coordinate axis in .   \"A number line is given and above it a line snakes, starting at t = 0 above 4 on the number line. Then the line at t = 2 is above 24 on the number line. Then the line decreases at t = 4 to be above 20 on the number line, at which point the line reverses direction again and increases indefinitely.\"  The path of the particle can be determined by analyzing v(t).     "
},
{
  "id": "sec_Ch3Sec4-4-14",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-4-14",
  "type": "Checkpoint",
  "number": "3.4.13",
  "title": "",
  "body": "  A particle moves along a coordinate axis. Its position at time is given by Is the particle moving from right to left or from left to right at time    left to right    Find and look at the sign.   "
},
{
  "id": "sec_Ch3Sec4-5-3",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-5-3",
  "type": "Definition",
  "number": "3.4.14",
  "title": "",
  "body": "  If is the number of entities present in a population, then the population growth rate of is defined to be  "
},
{
  "id": "fs-id1169739270775",
  "level": "2",
  "url": "sec_Ch3Sec4.html#fs-id1169739270775",
  "type": "Example",
  "number": "3.4.15",
  "title": "Estimating a Population.",
  "body": " Estimating a Population   The population of a city is tripling every 5 years. If its current population is 10,000, what will be its approximate population 2 years from now?    Let be the population (in thousands) years from now. Thus, we know that and based on the information, we anticipate Now estimate the current growth rate, using   By applying to we can estimate the population 2 years from now by writing   thus, in 2 years the population will be 18,000.   "
},
{
  "id": "sec_Ch3Sec4-5-5",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-5-5",
  "type": "Checkpoint",
  "number": "3.4.16",
  "title": "",
  "body": "  The current population of a mosquito colony is known to be 3,000; that is, If estimate the size of the population in 3 days, where is measured in days.    3,300    Use   "
},
{
  "id": "sec_Ch3Sec4-6-3",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-6-3",
  "type": "Definition",
  "number": "3.4.17",
  "title": "",
  "body": "  If is the cost of producing items, then the marginal cost  is  If is the revenue obtained from selling items, then the marginal revenue is  If is the profit obtained from selling items, then the marginal profit  is defined to be  "
},
{
  "id": "fs-id1169739302508",
  "level": "2",
  "url": "sec_Ch3Sec4.html#fs-id1169739302508",
  "type": "Example",
  "number": "3.4.18",
  "title": "Applying Marginal Revenue.",
  "body": " Applying Marginal Revenue   Assume that the number of barbeque dinners that can be sold, can be related to the price charged, by the equation  In this case, the revenue in dollars obtained by selling barbeque dinners is given by   Use the marginal revenue function to estimate the revenue obtained from selling the 101st barbeque dinner. Compare this to the actual revenue obtained from the sale of this dinner.    First, find the marginal revenue function:  Next, use to approximate the revenue obtained from the sale of the 101st dinner. Since the revenue obtained from the sale of the 101st dinner is approximately \\$3.  The actual revenue obtained from the sale of the 101st dinner is   The marginal revenue is a fairly good estimate in this case and has the advantage of being easy to compute.   "
},
{
  "id": "sec_Ch3Sec4-6-8",
  "level": "2",
  "url": "sec_Ch3Sec4.html#sec_Ch3Sec4-6-8",
  "type": "Checkpoint",
  "number": "3.4.19",
  "title": "",
  "body": "  Suppose that the profit obtained from the sale of fish-fry dinners is given by Use the marginal profit function to estimate the profit from the sale of the 101st fish-fry dinner.    \\$2    Use to approximate   "
},
{
  "id": "sec_Ch3Sec5",
  "level": "1",
  "url": "sec_Ch3Sec5.html",
  "type": "Section",
  "number": "3.5",
  "title": "Derivatives of Trigonometric Functions",
  "body": " Derivatives of Trigonometric Functions   Learning Objectives   Find the derivatives of the sine and cosine function.  Describe how harmonic motion can be modeled by sine and cosine functions.  Find the derivatives of the standard trigonometric functions.  Calculate the higher-order derivatives of the sine and cosine.   One of the most important types of motion in physics is simple harmonic motion, which is associated with such systems as an object with mass oscillating on a spring. Simple harmonic motion can be described by using either sine or cosine functions. In this section we expand our knowledge of derivative formulas to include derivatives of these and other trigonometric functions. We begin with the derivatives of the sine and cosine functions and then use them to obtain formulas for the derivatives of the remaining four trigonometric functions. Being able to calculate the derivatives of the sine and cosine functions will enable us to find the velocity and acceleration of simple harmonic motion.    Derivatives of the Sine and Cosine Functions  We begin our exploration of the derivative for the sine function by using the formula to make a reasonable guess at its derivative. Recall that for a function ,   Consequently, for values of very close to , . We see that by using , By setting and using a graphing utility, we can get a graph of an appoximation to the derivative of ( ).    \"A graph of D(x) between -2 pi and 2 pi. The graph is periodic with period 2 pi and range from -1 to 1. The y intercept is at (0,1) and there are x-intercepts at -3pi\/2, -pi\/2, pi\/2, and 3pi\/2\"   The graph of the function looks a lot like a cosine curve.   Upon inspection, the graph of appears to be very close to the graph of the cosine function. Indeed, we will show that . If we were to follow the same steps to approximate the derivative of the cosine function, we would find that    The Derivatives of and  The derivative of the sine function is the cosine and the derivative of the cosine function is the negative sine.     Because the proofs for and use similar techniques, we provide only the proof the for former. Before beginning, recall two important trigonometric limits from : The graphs of and are shown in     Two graphs side by side. The first is a graph of y=sin(h)\/h ad the second is a graph of y=(cos(h)-1)\/h   These graphs show two important limits needed to establish the derivative formulas for the sine and cosine functions.   We also recall the following trigonometric identity for the sine of the sum of two angles:        Radians or Degrees?  It is important to note that the derivation of the derivatives of and required the limits from , and while proving whether those limits existed, we needed . The measurements in this figure only apply when has radian units. Therefore, the derivative formulas for our trigonometric functions are only valid with radian values of   (To put it another way, we know that when is in radians. But see if this still works when the input is in degrees. Use a calculator to plug in small degree values for and find that the result is not approaching !   shows the relationship between the graph of and its derivative . Notice that at the points where has a horizontal tangent, its derivative takes on the value zero. We also see that where is increasing, and where is decreasing, .    A graph of sine of x and cosine of x on the interval from 0 to 2 pi.   Where has a maximum or a minimum, . That is, where has a horizontal tangent. These points are noted with dots on the graph.    Differentiating a Function Containing   Find the derivative of .    Using the product rule, we have After simplifying, we obtain      Find the derivative of      Use the product rule    Finding the Derivative of a Function Containing   Find the derivative of .    By applying the quotient rule, we have Simplifying, we obtain      Find the derivative of      Use the quotient rule    An Application to Velocity   A particle moves along a coordinate axis in such a way that its position at time is given by for . At what times is the particle at rest?    To determine when the particle is at rest, set . Begin by finding . We obtain so we must solve   The solutions to this equation are and . Thus the particle is at rest at times and .     A particle moves along a coordinate axis. Its position at time is given by for . At what times is the particle at rest?   and .   Determine when the velocity is .     Harmonic Motion  Many physical systems move in a regular, repeating way. One of the simplest examples is a mass attached to a spring. If the mass is pulled away from its resting position and released, it moves back and forth, slowing down as it reaches the ends of its motion and speeding up as it passes through the center. This type of motion is called harmonic motion .  We can describe the position of the mass at time using a sine or cosine function, such as where is the amplitude (the maximum distance from the equilibrium position).  Using derivatives, we can understand how the motion changes over time. The velocity is and the acceleration is These formulas reveal an important feature of harmonic motion. The acceleration satisifes This means the acceleration is always directed opposite the position. When the mass is above the equilibrium position, the acceleration pulls it downward; when it is below, the acceleration pulls it upward. In other words, the spring exerts a restoring force that continually pulls the mass back toward equilibrium.  This connection between position, velocity, and acceleration explains the motion: the mass speeds up as it moves toward the center, slows down as it moves away, and repeats this pattern over time. Because sine and cosine functions naturally capture this behavior—and their derivatives cycle between each other—they provide an ideal mathematical model for harmonic motion.   Interpreting the graph  Suppose the position is given by .    The maximum and minimum values ( ) occur at the endpoints of the motion. At these points, the object momentarily stops so the velocity is zero.  The speed is greatest when , which occurs when the graph crosses , the equilibrium position.  Where the graph is increasing, the velocity is positive (the object is moving upward or forward). Where the graph is decreasing, the velocity is negative.  The steepness of the graph reflects the magnitude of the velocity: steeper means faster motion.      This needs to be created.      Derivatives of Other Trigonometric Functions  Since the remaining four trigonometric functions may be expressed as quotients involving sine, cosine, or both, we can use the quotient rule to find the formulas for their derivatives.   The Derivative of the Tangent Function   Find the derivative of .    Start by expressing as the quotient of and : . Now apply the quotient rule to obtain . Simplifying, we obtain . Recognizing that , by the Pythagorean theorem, we now have . Finally, use the identity to obtain .     Find the derivative of    .   Use the quotient rule.   The derivatives of the remaining trigonometric functions may be obtained by using similar techniques. We provide these formulas in the following theorem.   Derivatives of    The derivatives of the remaining trigonometric functions are as follows.      Finding the Equation of a Tangent Line   Find the equation of a line tangent to the graph of at .    To find an equation of the tangent line, we need a point and a slope at that point. To find the point, compute Thus the tangent line passes through the point . Next, find the slope by finding the derivative of by evaluating it at : Using the point-slope equation of the line, we obtain or equivalently,      Finding the Derivative of Trigonometric Functions   Find the derivative of     To find this derivative, we must use both the sum rule and the product rule. Using the sum rule, we find In the first term, , and by applying the product rule to the second term we obtain Therefore, we have      Find the derivative of    .   Use the formulas.    Find the slope of the line tangent to the graph of at    .   The slope of the tangent line is the derivative of the function..     Higher-Order Derivatives  The higher-order derivatives of and follow a repeating pattern. By following the pattern, we can find any higher-order derivative of and .   Finding Higher-Order Derivatives of   Find the first four derivatives of .    Each step in the chain is straightforward:   In fact, once we recognize the pattern of derivatives, we can find any higher-order derivative by determining the step in the pattern to which it corresponds. For example, every fourth derivative of equals , so for any positive integer ,       For , find .       Take four consecutive derivatives of the cosine function,     Using the Pattern for Higher-Order Derivatives of   Find .    We can see right away that for the 74th derivative of , , so       For , find .             An Application to Acceleration   A particle moves along a coordinate axis in such a way that its position at time is given by . Find and . Compare these values and decide whether the particle is speeding up or slowing down.    First find : Thus, Next, find . Thus, and we have Since and , we see that velocity and acceleration are acting in opposite directions; that is, the object is being accelerated in the direction opposite to the direction in which it is travelling. Consequently, the particle is slowing down.     A block attached to a spring is moving vertically. Its position at time is given by . Find and . Compare these values and decide whether the block is speeding up or slowing down.    and . The block is speeding up.    Find the first and second derivative of when .     "
},
{
  "id": "CNX_Calc_Figure_03_05_001",
  "level": "2",
  "url": "sec_Ch3Sec5.html#CNX_Calc_Figure_03_05_001",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "  \"A graph of D(x) between -2 pi and 2 pi. The graph is periodic with period 2 pi and range from -1 to 1. The y intercept is at (0,1) and there are x-intercepts at -3pi\/2, -pi\/2, pi\/2, and 3pi\/2\"   The graph of the function looks a lot like a cosine curve.  "
},
{
  "id": "subsec-derivs-sine-cosine-6",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-6",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "The Derivatives of <span class=\"process-math\">\\(\\sin{x}\\)<\/span> and <span class=\"process-math\">\\(\\cos{x}\\)<\/span>.",
  "body": " The Derivatives of and  The derivative of the sine function is the cosine and the derivative of the cosine function is the negative sine.     Because the proofs for and use similar techniques, we provide only the proof the for former. Before beginning, recall two important trigonometric limits from : The graphs of and are shown in     Two graphs side by side. The first is a graph of y=sin(h)\/h ad the second is a graph of y=(cos(h)-1)\/h   These graphs show two important limits needed to establish the derivative formulas for the sine and cosine functions.   We also recall the following trigonometric identity for the sine of the sum of two angles:     "
},
{
  "id": "remark-radiansordegrees",
  "level": "2",
  "url": "sec_Ch3Sec5.html#remark-radiansordegrees",
  "type": "Remark",
  "number": "3.5.4",
  "title": "Radians or Degrees?",
  "body": " Radians or Degrees?  It is important to note that the derivation of the derivatives of and required the limits from , and while proving whether those limits existed, we needed . The measurements in this figure only apply when has radian units. Therefore, the derivative formulas for our trigonometric functions are only valid with radian values of   (To put it another way, we know that when is in radians. But see if this still works when the input is in degrees. Use a calculator to plug in small degree values for and find that the result is not approaching !  "
},
{
  "id": "CNX_Calc_Figure_03_05_003",
  "level": "2",
  "url": "sec_Ch3Sec5.html#CNX_Calc_Figure_03_05_003",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": "  A graph of sine of x and cosine of x on the interval from 0 to 2 pi.   Where has a maximum or a minimum, . That is, where has a horizontal tangent. These points are noted with dots on the graph.  "
},
{
  "id": "subsec-derivs-sine-cosine-9",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-9",
  "type": "Example",
  "number": "3.5.6",
  "title": "Differentiating a Function Containing <span class=\"process-math\">\\(\\sin{x}\\)<\/span>.",
  "body": " Differentiating a Function Containing   Find the derivative of .    Using the product rule, we have After simplifying, we obtain    "
},
{
  "id": "subsec-derivs-sine-cosine-10",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-10",
  "type": "Checkpoint",
  "number": "3.5.7",
  "title": "",
  "body": " Find the derivative of      Use the product rule  "
},
{
  "id": "subsec-derivs-sine-cosine-11",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-11",
  "type": "Example",
  "number": "3.5.8",
  "title": "Finding the Derivative of a Function Containing <span class=\"process-math\">\\(\\cos{x}\\)<\/span>.",
  "body": " Finding the Derivative of a Function Containing   Find the derivative of .    By applying the quotient rule, we have Simplifying, we obtain    "
},
{
  "id": "subsec-derivs-sine-cosine-12",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-12",
  "type": "Checkpoint",
  "number": "3.5.9",
  "title": "",
  "body": " Find the derivative of      Use the quotient rule  "
},
{
  "id": "subsec-derivs-sine-cosine-13",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-13",
  "type": "Example",
  "number": "3.5.10",
  "title": "An Application to Velocity.",
  "body": " An Application to Velocity   A particle moves along a coordinate axis in such a way that its position at time is given by for . At what times is the particle at rest?    To determine when the particle is at rest, set . Begin by finding . We obtain so we must solve   The solutions to this equation are and . Thus the particle is at rest at times and .   "
},
{
  "id": "subsec-derivs-sine-cosine-14",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivs-sine-cosine-14",
  "type": "Checkpoint",
  "number": "3.5.11",
  "title": "",
  "body": " A particle moves along a coordinate axis. Its position at time is given by for . At what times is the particle at rest?   and .   Determine when the velocity is .  "
},
{
  "id": "subsec-harmonicmotion-2",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-harmonicmotion-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic motion "
},
{
  "id": "subsec-harmonicmotion-4",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-harmonicmotion-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "restoring force "
},
{
  "id": "subsec-harmonicmotion-6",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-harmonicmotion-6",
  "type": "Example",
  "number": "3.5.12",
  "title": "Interpreting the graph.",
  "body": " Interpreting the graph  Suppose the position is given by .    The maximum and minimum values ( ) occur at the endpoints of the motion. At these points, the object momentarily stops so the velocity is zero.  The speed is greatest when , which occurs when the graph crosses , the equilibrium position.  Where the graph is increasing, the velocity is positive (the object is moving upward or forward). Where the graph is decreasing, the velocity is negative.  The steepness of the graph reflects the magnitude of the velocity: steeper means faster motion.      This needs to be created.   "
},
{
  "id": "subsec-derivatives-other-trig-3",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-3",
  "type": "Example",
  "number": "3.5.14",
  "title": "The Derivative of the Tangent Function.",
  "body": " The Derivative of the Tangent Function   Find the derivative of .    Start by expressing as the quotient of and : . Now apply the quotient rule to obtain . Simplifying, we obtain . Recognizing that , by the Pythagorean theorem, we now have . Finally, use the identity to obtain .   "
},
{
  "id": "subsec-derivatives-other-trig-4",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-4",
  "type": "Checkpoint",
  "number": "3.5.15",
  "title": "",
  "body": " Find the derivative of    .   Use the quotient rule.  "
},
{
  "id": "subsec-derivatives-other-trig-6",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-6",
  "type": "Theorem",
  "number": "3.5.16",
  "title": "Derivatives of <span class=\"process-math\">\\(\\tan{x},\\,\\cot{x},\\,\\sec{x},\\,\\csc{x}\\)<\/span>.",
  "body": " Derivatives of    The derivatives of the remaining trigonometric functions are as follows.    "
},
{
  "id": "subsec-derivatives-other-trig-7",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-7",
  "type": "Example",
  "number": "3.5.17",
  "title": "Finding the Equation of a Tangent Line.",
  "body": " Finding the Equation of a Tangent Line   Find the equation of a line tangent to the graph of at .    To find an equation of the tangent line, we need a point and a slope at that point. To find the point, compute Thus the tangent line passes through the point . Next, find the slope by finding the derivative of by evaluating it at : Using the point-slope equation of the line, we obtain or equivalently,    "
},
{
  "id": "subsec-derivatives-other-trig-8",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-8",
  "type": "Example",
  "number": "3.5.18",
  "title": "Finding the Derivative of Trigonometric Functions.",
  "body": " Finding the Derivative of Trigonometric Functions   Find the derivative of     To find this derivative, we must use both the sum rule and the product rule. Using the sum rule, we find In the first term, , and by applying the product rule to the second term we obtain Therefore, we have    "
},
{
  "id": "subsec-derivatives-other-trig-9",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-9",
  "type": "Checkpoint",
  "number": "3.5.19",
  "title": "",
  "body": " Find the derivative of    .   Use the formulas.  "
},
{
  "id": "subsec-derivatives-other-trig-10",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-derivatives-other-trig-10",
  "type": "Checkpoint",
  "number": "3.5.20",
  "title": "",
  "body": " Find the slope of the line tangent to the graph of at    .   The slope of the tangent line is the derivative of the function..  "
},
{
  "id": "subsec-higher-trig-derivatives-3",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-higher-trig-derivatives-3",
  "type": "Example",
  "number": "3.5.21",
  "title": "Finding Higher-Order Derivatives of <span class=\"process-math\">\\(y=\\sin{x}\\)<\/span>.",
  "body": " Finding Higher-Order Derivatives of   Find the first four derivatives of .    Each step in the chain is straightforward:   In fact, once we recognize the pattern of derivatives, we can find any higher-order derivative by determining the step in the pattern to which it corresponds. For example, every fourth derivative of equals , so for any positive integer ,    "
},
{
  "id": "subsec-higher-trig-derivatives-4",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-higher-trig-derivatives-4",
  "type": "Checkpoint",
  "number": "3.5.22",
  "title": "",
  "body": "  For , find .       Take four consecutive derivatives of the cosine function,   "
},
{
  "id": "subsec-higher-trig-derivatives-5",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-higher-trig-derivatives-5",
  "type": "Example",
  "number": "3.5.23",
  "title": "Using the Pattern for Higher-Order Derivatives of <span class=\"process-math\">\\(y=\\sin{x}\\)<\/span>.",
  "body": " Using the Pattern for Higher-Order Derivatives of   Find .    We can see right away that for the 74th derivative of , , so    "
},
{
  "id": "subsec-higher-trig-derivatives-6",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-higher-trig-derivatives-6",
  "type": "Checkpoint",
  "number": "3.5.24",
  "title": "",
  "body": "  For , find .           "
},
{
  "id": "subsec-higher-trig-derivatives-7",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-higher-trig-derivatives-7",
  "type": "Example",
  "number": "3.5.25",
  "title": "An Application to Acceleration.",
  "body": " An Application to Acceleration   A particle moves along a coordinate axis in such a way that its position at time is given by . Find and . Compare these values and decide whether the particle is speeding up or slowing down.    First find : Thus, Next, find . Thus, and we have Since and , we see that velocity and acceleration are acting in opposite directions; that is, the object is being accelerated in the direction opposite to the direction in which it is travelling. Consequently, the particle is slowing down.   "
},
{
  "id": "subsec-higher-trig-derivatives-8",
  "level": "2",
  "url": "sec_Ch3Sec5.html#subsec-higher-trig-derivatives-8",
  "type": "Checkpoint",
  "number": "3.5.26",
  "title": "",
  "body": " A block attached to a spring is moving vertically. Its position at time is given by . Find and . Compare these values and decide whether the block is speeding up or slowing down.    and . The block is speeding up.    Find the first and second derivative of when .   "
},
{
  "id": "sec_Ch3Sec6",
  "level": "1",
  "url": "sec_Ch3Sec6.html",
  "type": "Section",
  "number": "3.6",
  "title": "The Chain Rule",
  "body": " The Chain Rule   Learning Objectives   State the chain rule for the composition of two functions.  Apply the chain rule together with the power rule.  Apply the chain rule and the product\/quotient rules correctly in combination when both are necessary.  Recognize the chain rule for a composition of three or more functions.  Describe the proof of the chain rule.   We have seen the techniques for differentiating basic functions ( , etc.) as well as sums, differences, products, quotients, and constant multiples of these functions. However, these techniques do not allow us to differentiate compositions of functions, such as or In this section, we study the rule for finding the derivative of the composition of two or more functions.    Deriving the Chain Rule  When we have a function that is a composition of two or more functions, we could use all of the techniques we have already learned to differentiate it. However, using all of those techniques to break down a function into simpler parts that we are able to differentiate can get cumbersome. Instead, we use the chain rule , which states that the derivative of a composite function is the derivative of the outer function evaluated at the inner function times the derivative of the inner function.  To put this rule into context, let’s take a look at an example: We can think of the derivative of this function with respect to as the rate of change of relative to the change in Consequently, we want to know how changes as changes. We can think of this event as a chain reaction: As changes, changes, which leads to a change in This chain reaction gives us hints as to what is involved in computing the derivative of First of all, a change in forcing a change in suggests that somehow the derivative of is involved. In addition, the change in forcing a change in suggests that the derivative of with respect to where is also part of the final derivative.  We can take a more formal look at the derivative of by setting up the limit that would give us the derivative at a specific value in the domain of   This expression does not seem particularly helpful; however, we can modify it by multiplying and dividing by the expression to obtain   From the definition of the derivative, we can see that the second factor is the derivative of at That is,   However, it might be a little more challenging to recognize that the first term is also a derivative. We can see this by letting and observing that as  Thus,   In other words, if then Thus, if we think of as the composition where sin and then the derivative of is the product of the derivative of and the derivative of the function evaluated at the function At this point, we anticipate that for it is quite likely that As we determined above, this is the case for  Now that we have derived a special case of the chain rule, we state the general case and then apply it in a general form to other composite functions. An informal proof is provided at the end of the section.   Chain Rule   Let and be functions. For all in the domain of for which is differentiable at and is differentiable at the derivative of the composite function   is given by   Alternatively, if is a function of and is a function of then       Create Figure 3.27 From Thomas     Watch an animation of the chain rule.    Applying the Chain Rule   To differentiate begin by identifying and  Find and evaluate it at to obtain  Find  Write   Note : When applying the chain rule to the composition of two or more functions, keep in mind that we work our way from the outside function in. It is also useful to remember that the derivative of the composition of two functions can be thought of as having two parts; the derivative of the composition of three functions has three parts; and so on. Also, remember that we never evaluate a derivative at a derivative.     The Chain and Power Rules Combined  We can now apply the chain rule to composite functions, but note that we often need to use it with other rules. For example, to find derivatives of functions of the form we need to use the chain rule combined with the power rule. To do so, we can think of as where Then Thus, This leads us to the derivative of a power function using the chain rule,    A Power Rule for Composition of Functions  For all values of for which the derivative is defined, if   Then     Using the Chain and Power Rules   Find the derivative of    First, rewrite  Applying the power rule with we have   Rewriting back to the original form gives us       Find the derivative of      Use with     Using the Chain and Power Rules with a Trigonometric Function   Find the derivative of .    First recall that so we can rewrite as  Applying the power rule with we obtain  .    Finding the Equation of a Tangent Line   Find the equation of a line tangent to the graph of at    Because we are finding an equation of a line, we need a point. The -coordinate of the point is 2. To find the -coordinate, substitute 2 into Since the point is  For the slope, we need To find first we rewrite and apply the power rule to obtain   By substituting, we have Therefore, the line has equation Rewriting, the equation of the line is      Find the equation of the line tangent to the graph of at       Use the preceding example as a guide.      Combining the Chain Rule with Other Rules  Now that we can combine the chain rule and the power rule, we examine how to combine the chain rule with the other rules we have learned. In particular, we can use it with the formulas for the derivatives of quotient or product rule.   Using the Chain Rule on a General Cosine Function   Find the derivative of    Think of as where Since we have Then we do the following calculation.   Thus, the derivative of is given by    In the following example we apply the rule that we have just derived.   Using the Chain Rule on a Cosine Function   Find the derivative of    Let Then Using the result from the previous example,      Using the Chain Rule on Another Trigonometric Function   Find the derivative of    Apply the chain rule to to obtain   In this problem, so we have Therefore, we obtain       Find the derivative of       Apply the chain rule to first and then use    At this point we provide a list of derivative formulas that may be obtained by applying the chain rule in conjunction with the formulas for derivatives of trigonometric functions. Their derivations are similar to those used in and . For convenience, formulas are also given in Leibniz’s notation, which some students find easier to remember. (We discuss the chain rule using Leibniz’s notation at the end of this section.) It is not absolutely necessary to memorize these as separate formulas as they are all applications of the chain rule to previously learned formulas.  Change next end note to end theorem Using the Chain Rule with Trigonometric Functions  For all values of for which the derivative is defined,     Combining the Chain Rule with the Product Rule   Find the derivative of    First apply the product rule, then apply the chain rule to each term of the product.      Find the derivative of       Start out by applying the quotient rule. Remember to use the chain rule to differentiate the denominator.      Composites of Three or More Functions  We can now combine the chain rule with other rules for differentiating functions, but when we are differentiating the composition of three or more functions, we need to apply the chain rule more than once. If we look at this situation in general terms, we can generate a formula, but we do not need to remember it, as we can simply apply the chain rule multiple times.  In general terms, first we let   Then, applying the chain rule once we obtain   Applying the chain rule again, we obtain    Chain Rule for a Composition of Three Functions  For all values of for which the function is differentiable, if   then   In other words, we are applying the chain rule twice.   Notice that the derivative of the composition of three functions has three parts. (Similarly, the derivative of the composition of four functions has four parts, and so on.) Also, remember, we can always work from the outside in, taking one derivative at a time.   Differentiating a Composite of Three Functions   Find the derivative of    First, rewrite as   Then apply the chain rule several times.      Find the derivative of       Rewrite and use as a guide.     Using the Chain Rule in a Velocity Problem   A particle moves along a coordinate axis. Its position at time is given by What is the velocity of the particle at time    To find the velocity of the particle at time we must differentiate Thus,   Substituting into we obtain      A particle moves along a coordinate axis. Its position at time is given by Find its acceleration at time       Acceleration is the second derivative of position.      At this point, we present a very informal proof of the chain rule, . .  For simplicity’s sake we ignore certain issues: For example, we assume that for in some open interval containing We begin by applying the limit definition of the derivative to the function to obtain   Rewriting, we obtain   Although it is clear that   it is not obvious that   To see that this is true, first recall that since is differentiable at is also continuous at Thus,   Next, make the substitution and and use change of variables in the limit to obtain   Finally,      Using the Chain Rule with Functional Values   Let If and find    Use the chain rule, then substitute.       Given If and find       Follow .      The Chain Rule Using Leibniz’s Notation  As with other derivatives that we have seen, we can express the chain rule using Leibniz’s notation. This notation for the chain rule is used heavily in physics applications.  let and Thus,   and   Consequently,    Chain Rule Using Leibniz’s Notation  If is a function of and is a function of then     Taking a Derivative Using Leibniz’s Notation   Find the derivative of    First, let Thus, Next, find and Using the quotient rule,   and   Finally, we put it all together.   It is important to remember that, when using the Leibniz form of the chain rule, the final answer must be expressed entirely in terms of the original variable given in the problem.      Taking Another Derivative Using Leibniz’s Notation  Find the derivative of    First, let Then Next, find and   Finally, we put it all together.       Use Leibniz’s notation to find the derivative of Make sure that the final answer is expressed entirely in terms of the variable       Let     Trigonometric Derivatives Using Degrees  Recall the discussion in that the formulas for the derivatives of trigonometric functions are only valid with radian measurements. If we graphed a trigonometric function using degrees along the horizontal axis, how would we compute the slopes of tangent lines?  Let where is an angle measured using radians. At , what is the instantaneous rate of change of the function? That is, at , how much would the function be increasing or decreasing with one more degree?  We can convert this angle to degrees by the formula , or . The instantaneous rate of change with each degree is . Using Leibniz notation and noting that is also    So, when the angle is , the sine function will increase by with each extra radian, but will only increase by approximately with each extra degree.   Probably need a picture here.     "
},
{
  "id": "sec_Ch3Sec6-3-2",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chain rule "
},
{
  "id": "thm-chainrule",
  "level": "2",
  "url": "sec_Ch3Sec6.html#thm-chainrule",
  "type": "Theorem",
  "number": "3.6.1",
  "title": "Chain Rule.",
  "body": " Chain Rule   Let and be functions. For all in the domain of for which is differentiable at and is differentiable at the derivative of the composite function   is given by   Alternatively, if is a function of and is a function of then    "
},
{
  "id": "fig-chainRule",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fig-chainRule",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": "  Create Figure 3.27 From Thomas   "
},
{
  "id": "sec_Ch3Sec6-3-17",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-3-17",
  "type": "Exploration",
  "number": "3.6.1",
  "title": "",
  "body": " Watch an animation of the chain rule.  "
},
{
  "id": "fs-id1169736619728",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169736619728",
  "type": "Problem-Solving Strategy",
  "number": "3.6.3",
  "title": "Applying the Chain Rule.",
  "body": " Applying the Chain Rule   To differentiate begin by identifying and  Find and evaluate it at to obtain  Find  Write   Note : When applying the chain rule to the composition of two or more functions, keep in mind that we work our way from the outside function in. It is also useful to remember that the derivative of the composition of two functions can be thought of as having two parts; the derivative of the composition of three functions has three parts; and so on. Also, remember that we never evaluate a derivative at a derivative.  "
},
{
  "id": "sec_Ch3Sec6-4-4",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-4-4",
  "type": "Proposition",
  "number": "3.6.4",
  "title": "A Power Rule for Composition of Functions.",
  "body": " A Power Rule for Composition of Functions  For all values of for which the derivative is defined, if   Then   "
},
{
  "id": "fs-id1169739274312",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739274312",
  "type": "Example",
  "number": "3.6.5",
  "title": "Using the Chain and Power Rules.",
  "body": " Using the Chain and Power Rules   Find the derivative of    First, rewrite  Applying the power rule with we have   Rewriting back to the original form gives us    "
},
{
  "id": "sec_Ch3Sec6-4-6",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-4-6",
  "type": "Checkpoint",
  "number": "3.6.6",
  "title": "",
  "body": "  Find the derivative of      Use with   "
},
{
  "id": "fs-id1169739302258",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739302258",
  "type": "Example",
  "number": "3.6.7",
  "title": "Using the Chain and Power Rules with a Trigonometric Function.",
  "body": " Using the Chain and Power Rules with a Trigonometric Function   Find the derivative of .    First recall that so we can rewrite as  Applying the power rule with we obtain  .  "
},
{
  "id": "fs-id1169739190027",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739190027",
  "type": "Example",
  "number": "3.6.8",
  "title": "Finding the Equation of a Tangent Line.",
  "body": " Finding the Equation of a Tangent Line   Find the equation of a line tangent to the graph of at    Because we are finding an equation of a line, we need a point. The -coordinate of the point is 2. To find the -coordinate, substitute 2 into Since the point is  For the slope, we need To find first we rewrite and apply the power rule to obtain   By substituting, we have Therefore, the line has equation Rewriting, the equation of the line is   "
},
{
  "id": "sec_Ch3Sec6-4-9",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-4-9",
  "type": "Checkpoint",
  "number": "3.6.9",
  "title": "",
  "body": "  Find the equation of the line tangent to the graph of at       Use the preceding example as a guide.   "
},
{
  "id": "fs-id1169736656617",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169736656617",
  "type": "Example",
  "number": "3.6.10",
  "title": "Using the Chain Rule on a General Cosine Function.",
  "body": " Using the Chain Rule on a General Cosine Function   Find the derivative of    Think of as where Since we have Then we do the following calculation.   Thus, the derivative of is given by   "
},
{
  "id": "fs-id1169739301537",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739301537",
  "type": "Example",
  "number": "3.6.11",
  "title": "Using the Chain Rule on a Cosine Function.",
  "body": " Using the Chain Rule on a Cosine Function   Find the derivative of    Let Then Using the result from the previous example,    "
},
{
  "id": "fs-id1169739333921",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739333921",
  "type": "Example",
  "number": "3.6.12",
  "title": "Using the Chain Rule on Another Trigonometric Function.",
  "body": " Using the Chain Rule on Another Trigonometric Function   Find the derivative of    Apply the chain rule to to obtain   In this problem, so we have Therefore, we obtain    "
},
{
  "id": "sec_Ch3Sec6-5-7",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-5-7",
  "type": "Checkpoint",
  "number": "3.6.13",
  "title": "",
  "body": "  Find the derivative of       Apply the chain rule to first and then use   "
},
{
  "id": "sec_Ch3Sec6-5-9",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-5-9",
  "type": "Theorem",
  "number": "3.6.14",
  "title": "Using the Chain Rule with Trigonometric Functions.",
  "body": "Change next end note to end theorem Using the Chain Rule with Trigonometric Functions  For all values of for which the derivative is defined,   "
},
{
  "id": "fs-id1169739298047",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739298047",
  "type": "Example",
  "number": "3.6.15",
  "title": "Combining the Chain Rule with the Product Rule.",
  "body": " Combining the Chain Rule with the Product Rule   Find the derivative of    First apply the product rule, then apply the chain rule to each term of the product.   "
},
{
  "id": "sec_Ch3Sec6-5-11",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-5-11",
  "type": "Checkpoint",
  "number": "3.6.16",
  "title": "",
  "body": "  Find the derivative of       Start out by applying the quotient rule. Remember to use the chain rule to differentiate the denominator.   "
},
{
  "id": "sec_Ch3Sec6-6-9",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-6-9",
  "type": "Proposition",
  "number": "3.6.17",
  "title": "Chain Rule for a Composition of Three Functions.",
  "body": " Chain Rule for a Composition of Three Functions  For all values of for which the function is differentiable, if   then   In other words, we are applying the chain rule twice.  "
},
{
  "id": "fs-id1169736658580",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169736658580",
  "type": "Example",
  "number": "3.6.18",
  "title": "Differentiating a Composite of Three Functions.",
  "body": " Differentiating a Composite of Three Functions   Find the derivative of    First, rewrite as   Then apply the chain rule several times.   "
},
{
  "id": "sec_Ch3Sec6-6-12",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-6-12",
  "type": "Checkpoint",
  "number": "3.6.19",
  "title": "",
  "body": "  Find the derivative of       Rewrite and use as a guide.   "
},
{
  "id": "fs-id1169736593542",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169736593542",
  "type": "Example",
  "number": "3.6.20",
  "title": "Using the Chain Rule in a Velocity Problem.",
  "body": " Using the Chain Rule in a Velocity Problem   A particle moves along a coordinate axis. Its position at time is given by What is the velocity of the particle at time    To find the velocity of the particle at time we must differentiate Thus,   Substituting into we obtain   "
},
{
  "id": "sec_Ch3Sec6-6-14",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-6-14",
  "type": "Checkpoint",
  "number": "3.6.21",
  "title": "",
  "body": "  A particle moves along a coordinate axis. Its position at time is given by Find its acceleration at time       Acceleration is the second derivative of position.   "
},
{
  "id": "sec_Ch3Sec6-6-16",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-6-16",
  "type": "Proof",
  "number": "3.6.4.1",
  "title": "",
  "body": " For simplicity’s sake we ignore certain issues: For example, we assume that for in some open interval containing We begin by applying the limit definition of the derivative to the function to obtain   Rewriting, we obtain   Although it is clear that   it is not obvious that   To see that this is true, first recall that since is differentiable at is also continuous at Thus,   Next, make the substitution and and use change of variables in the limit to obtain   Finally,    "
},
{
  "id": "fs-id1169736613849",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169736613849",
  "type": "Example",
  "number": "3.6.22",
  "title": "Using the Chain Rule with Functional Values.",
  "body": " Using the Chain Rule with Functional Values   Let If and find    Use the chain rule, then substitute.    "
},
{
  "id": "sec_Ch3Sec6-6-18",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-6-18",
  "type": "Checkpoint",
  "number": "3.6.23",
  "title": "",
  "body": "  Given If and find       Follow .   "
},
{
  "id": "sec_Ch3Sec6-7-9",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-7-9",
  "type": "Convention",
  "number": "3.6.24",
  "title": "Chain Rule Using Leibniz’s Notation.",
  "body": " Chain Rule Using Leibniz’s Notation  If is a function of and is a function of then   "
},
{
  "id": "fs-id1169739264200",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169739264200",
  "type": "Example",
  "number": "3.6.25",
  "title": "Taking a Derivative Using Leibniz’s Notation.",
  "body": " Taking a Derivative Using Leibniz’s Notation   Find the derivative of    First, let Thus, Next, find and Using the quotient rule,   and   Finally, we put it all together.   It is important to remember that, when using the Leibniz form of the chain rule, the final answer must be expressed entirely in terms of the original variable given in the problem.   "
},
{
  "id": "fs-id1169736592583",
  "level": "2",
  "url": "sec_Ch3Sec6.html#fs-id1169736592583",
  "type": "Example",
  "number": "3.6.26",
  "title": "",
  "body": "  Taking Another Derivative Using Leibniz’s Notation  Find the derivative of    First, let Then Next, find and   Finally, we put it all together.    "
},
{
  "id": "sec_Ch3Sec6-7-12",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-7-12",
  "type": "Checkpoint",
  "number": "3.6.27",
  "title": "",
  "body": "  Use Leibniz’s notation to find the derivative of Make sure that the final answer is expressed entirely in terms of the variable       Let   "
},
{
  "id": "sec_Ch3Sec6-7-13",
  "level": "2",
  "url": "sec_Ch3Sec6.html#sec_Ch3Sec6-7-13",
  "type": "Example",
  "number": "3.6.28",
  "title": "Trigonometric Derivatives Using Degrees.",
  "body": " Trigonometric Derivatives Using Degrees  Recall the discussion in that the formulas for the derivatives of trigonometric functions are only valid with radian measurements. If we graphed a trigonometric function using degrees along the horizontal axis, how would we compute the slopes of tangent lines?  Let where is an angle measured using radians. At , what is the instantaneous rate of change of the function? That is, at , how much would the function be increasing or decreasing with one more degree?  We can convert this angle to degrees by the formula , or . The instantaneous rate of change with each degree is . Using Leibniz notation and noting that is also    So, when the angle is , the sine function will increase by with each extra radian, but will only increase by approximately with each extra degree.   Probably need a picture here.   "
},
{
  "id": "sec_imp_deriv",
  "level": "1",
  "url": "sec_imp_deriv.html",
  "type": "Section",
  "number": "3.7",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation   Learning Objectives   Find the derivative of a relation that cannot be written as a function of x by using implicit differentiation.  Use implicit differentiation to determine the equation of a tangent line.   In the previous sections we learned to find the derivative, , or , when is given explicitly as a function of . That is, if we know for some function , we can find . For example, given , we can easily find . (Here we explicitly state how depends on . Knowing , we can directly find .)  Sometimes the relationship between and is not explicit; rather, it is implicit . For instance, we might know that . This equality defines a relationship between and ; if we know , we could figure out . Can we still find ? In this case, sure; we solve for to get (hence we now know explicitly) and then differentiate to get .  Sometimes the implicit relationship between and is complicated. Suppose we are given . A graph of this implicit relationship is given in . In this case there is absolutely no way to solve for in terms of elementary functions. The surprising thing is, however, that we can still find via a process known as implicit differentiation . implicit differentiation  derivative implicit    A graph of the implicit relationship    A curve beginning in the second quadrant, forming a gentle corner in the first quadrant, and decreasing into the fourth quadrant.   The curve begins in the second quadrant. From the left, the curve decreases as increases. The curve slowly flattens out, almost becoming horizontal as the curve crosses the -axis near the point . When comes close to 0.75, the curve begins decreasing in the shape of a gentle corner. The curve continues decreasing, becoming steepest around the point , at which it also crosses into the fourth quadrant. When is close to 2, the curve begins to decrease more gently, at around the same rate as the beginning of the curve.         The Method of Implicit Differentiation  Implicit differentiation is a technique based on the that is used to find a derivative when the relationship between the variables is given implicitly rather than explicitly (solved for one variable in terms of the other).  We begin by reviewing the Chain Rule. Let and be functions of . Then .  Suppose now that . We can rewrite the above as .  These equations look strange; the key concept to learn here is that we can find even if we don't exactly know how and relate.  We demonstrate this process in the following example.   Using Implicit Differentiation   Find given that .    We start by taking the derivative of both sides (thus maintaining the equality.) We have: .  The right hand side is easy; it returns .  The left hand side requires more consideration. We take the derivative term-by-term. Using the technique derived from Equation above, we can see that .  We apply the same process to the term. .  Putting this together with the right hand side, we have .  Now solve for . It's important to treat as an algebraically independent variable from and .          Implicit functions are generally harder to deal with than explicit functions. With an explicit function, given an value, we have an explicit formula for computing the corresponding value. With an implicit function, one often has to find and values at the same time that satisfy the equation. It is much easier to demonstrate that a given point satisfies the equation than to actually find such a point.  For instance, we can affirm easily that the point lies on the graph of the implicit function . Plugging in for , we see the left hand side is . Setting , we see the right hand side is also ; the equation is satisfied. The following example finds the equation of the tangent line to this function at this point.   Using implicit differentiation to find a tangent line   Find the equation of the line tangent to the curve of the implicitly defined function at the point .    In we found that .  We find the slope of the tangent line at the point by substituting for and for . Thus at the point , we have the slope as .  Therefore the equation of the tangent line to the implicitly defined function at the point is .  The curve and this tangent line are shown in .   The function and its tangent line at the point    A decreasing curve with a negative tangent line through the negative x-axis   The same curve as , but with a tangent line drawn at . The tangent line is pointing sharply downward.         This suggests a general method for implicit differentiation. For the steps below assume is a function of .     Take the derivative of each term in the equation. Treat the terms like normal. When taking the derivatives of terms, the usual rules apply except that, because of the , we need to multiply each term by .    Get all the terms on one side of the equal sign and put the remaining terms on the other side.    Factor out ; solve for by dividing.     (Practical Note: when working by hand, it may be beneficial to use the symbol instead of , as the latter can be easily confused for or .)   Using Implicit Differentiation   Given the implicitly defined function , find .    We will take the implicit derivatives term by term. The derivative of is .  The second term, , is a little tricky. It requires the as it is the product of two functions of : and . Its derivative is . The first part of this expression requires a because we are taking the derivative of a term. The second part does not require it because we are taking the derivative of .  The derivative of the right hand side is easily found to be . In all, we get: .  Move terms around so that the left side consists only of the terms and the right side consists of all the other terms: .  Factor out from the left side and solve to get .  To confirm the validity of our work, let's find the equation of a tangent line to this function at a point. It is easy to confirm that the point lies on the graph of this function. At this point, . So the equation of the tangent line is . The function and its tangent line are graphed in .   A graph of the implicitly defined function along with its tangent line at the point    A curve with two distinct segments and a tangent line with a positive slope  Two curves are drawn in the -plane. The left curve stretches upwards from the left side of the axis, curving slightly to the left. As approaches -2, the curve begins to widen to the left, creating a bump in the curve. As the curve crosses the axis, the curve moves towards the right, no longer increasing and becoming more horizontal as increases. At the point , a tangent line is drawn, with a moderate positive slope. This point corresponds to the corner at which the curve begins to become horizontal. At this point, the curve passes the vertical line test, but does not at most other points on the graph. The second curve begins to the right of the -axis, as a line stretching upwards from the bottom of the -axis. As approaches 1, the curve also begins to become horizontal as increases. The entire second curve lies in the fourth quadrant.      Notice how our curve looks much different than for functions we have seen. For one, it fails the vertical line test, and so the complete curve is not truly representing as a function of . But when we indicate we are interested in the derivative at , we are indicating that we want the function defined by the small portion of the curve that passes through , and that small portion does pass the vertical line test. Such functions are important in many areas of mathematics, so developing tools to deal with them is also important.     Using Implicit Differentiation   Given the implicitly defined function , find .    Differentiating term by term, we find the most difficulty in the first term. It requires both the and . .  We leave the derivatives of the other terms to the reader. After taking the derivatives of both sides, we have .  We now have to be careful to properly solve for , particularly because of the product on the left. It is best to multiply out the product. Doing this, we get .  From here we can safely move around terms to get the following: .  Then we can solve for to get .  A graph of this implicit function is given in .   A graph of the implicitly defined curve    A curve beginning in the third quadrant passing through the points (0,-1), (0,0), (0,1).   The curve begins in the third quadrant. From there, the curve bends slightly back and increases, crossing above itself. The curve extends to the right, increasing almost linearly as it crosses the -axis at into the fourth quadrant. The curve continues to increase as such until it reaches a point close to . The curve then bends back, increasing towards the top left linearly. It then crosses the origin and passes into the second quadrant. The curve quickly bends towards the right, crossing the -axis at into the first quadrant. From there, the curve continues towards the right while slightly increasing. The curves rises sharply at , before decreasing again.       It is easy to verify that the points , and all lie on the graph. We can find the slopes of the tangent lines at each of these points using our formula for .  At , the slope is .  At , the slope is .  At , the slope is also .  The tangent lines have been added to the graph of the function in .   A graph of the implicitly defined curve and certain tangent lines    A curve beginning in the third quadrant passing through the points (0,-1), (0,0), (0,1), with tangent lines at those points.   The graph in , with tagent lines drawn at , , and . The tangent line at has a positive slope less than 1. The tangent line at has a negative slope, close to -1. The tangent line at has a positive slope, less than 1.         Quite a few famous curves have equations that are given implicitly. We can use implicit differentiation to find the slope at various points on those curves. We investigate two such curves in the next examples.   Finding slopes of tangent lines to a circle   Find the slope of the tangent line to the circle at the point .    Taking derivatives, we get . Solving for gives: .  This is a clever formula. Recall that the slope of the line through the origin and the point on the circle will be . We have found that the slope of the tangent line to the circle at that point is the opposite reciprocal of , namely, . Hence these two lines are always perpendicular.  At the point , we have the tangent line's slope as .  A graph of the circle and its tangent line at is given in , along with a thin dashed line from the origin that is perpendicular to the tangent line. (It turns out that all normal lines to a circle pass through the center of the circle.)   The unit circle with its tangent line at    A circle of radius 1 centered at the origin with a tangent line drawn at a point in the first quadrant.   A circle of radius 1 centered at the origin. A dashed line extends from the origin to a tangent line at the point . At that point a tangent line is drawn with a slight negative slope.                                                                                          Find Slopes of Tangents Lines to Curves Defined Implicitly   Find the slope of at the point .    This is a particularly interesting curve called an astroid . It is the shape traced out by a point on the edge of a circle that is rolling around inside of a larger circle, as shown in .   An astroid, traced out by a point on the smaller circle as it rolls inside the larger circle    A four pointed star with rounded edges, surrounded by a dashed circle.   A dashed circle of radius 20 entirely contains the curve. In each quadrant curves connect the points on the x and y axis which also lie on the circle. This gives the overall curve the appearence of a diamond with sides curved towards the inside. In the third quadrant a smaller circle is drawn which touches both the outer circle and the curve. The point on the circle touching the curve is highlighted blue.       To find the slope of the astroid at the point , we take the derivative implicitly. .  Plugging in and , we get a slope of . The astroid, with its tangent line at , is shown in .   An astroid with a tangent line    A previously described astroid with a tangent line in the first quadrant.   The curve sketched in with a tangent line at . It has a slope of -1.          Applying Implicit Differentiation   In a simple video game, a rocket travels in an elliptical orbit whose path is described by the equation The rocket can fire missiles along lines tangent to its path. The object of the game is to destroy an incoming asteroid traveling along the positive -axis toward If the rocket fires a missile when it is located at where will it intersect the -axis?   To solve this problem, we must determine where the line tangent to the graph of  at intersects the -axis. Begin by finding implicitly. Differentiating, we have   Solving for we have   The slope of the tangent line is The equation of the tangent line is To determine where the line intersects the -axis, solve The solution is The missile intersects the -axis at the point     Find the equation of the line tangent to the hyperbola at the point           Implicit Differentiation and the Second Derivative  We can use implicit differentiation to find higher order derivatives. In theory, this is simple: first find , then take its derivative with respect to . In practice, it is not hard, but it often requires a bit of algebra. We demonstrate this in an example.   Finding the second derivative   Given , find .    We found that in . To find , we apply implicit differentiation to . .  While this is not a particularly simple expression, it is usable. We can see that when and when . In , we will see how this relates to the shape of the graph.  Also, if we remember that we are only considering points on the curve , then we know that . So we can replace the in the expression for to get which is a simpler expression. Recognizing when simplifications like this are possible is not always easy.      "
},
{
  "id": "sec_imp_deriv-2-5",
  "level": "2",
  "url": "sec_imp_deriv.html#sec_imp_deriv-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implicit differentiation "
},
{
  "id": "fig_implicit1",
  "level": "2",
  "url": "sec_imp_deriv.html#fig_implicit1",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " A graph of the implicit relationship    A curve beginning in the second quadrant, forming a gentle corner in the first quadrant, and decreasing into the fourth quadrant.   The curve begins in the second quadrant. From the left, the curve decreases as increases. The curve slowly flattens out, almost becoming horizontal as the curve crosses the -axis near the point . When comes close to 0.75, the curve begins decreasing in the shape of a gentle corner. The curve continues decreasing, becoming steepest around the point , at which it also crosses into the fourth quadrant. When is close to 2, the curve begins to decrease more gently, at around the same rate as the beginning of the curve.      "
},
{
  "id": "ex_implicit1",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit1",
  "type": "Example",
  "number": "3.7.2",
  "title": "Using Implicit Differentiation.",
  "body": " Using Implicit Differentiation   Find given that .    We start by taking the derivative of both sides (thus maintaining the equality.) We have: .  The right hand side is easy; it returns .  The left hand side requires more consideration. We take the derivative term-by-term. Using the technique derived from Equation above, we can see that .  We apply the same process to the term. .  Putting this together with the right hand side, we have .  Now solve for . It's important to treat as an algebraically independent variable from and .         "
},
{
  "id": "ex_implicit2",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit2",
  "type": "Problem-Solving Strategy",
  "number": "3.7.3",
  "title": "Using implicit differentiation to find a tangent line.",
  "body": " Using implicit differentiation to find a tangent line   Find the equation of the line tangent to the curve of the implicitly defined function at the point .    In we found that .  We find the slope of the tangent line at the point by substituting for and for . Thus at the point , we have the slope as .  Therefore the equation of the tangent line to the implicitly defined function at the point is .  The curve and this tangent line are shown in .   The function and its tangent line at the point    A decreasing curve with a negative tangent line through the negative x-axis   The same curve as , but with a tangent line drawn at . The tangent line is pointing sharply downward.        "
},
{
  "id": "ex_implicit3",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit3",
  "type": "Example",
  "number": "3.7.5",
  "title": "Using Implicit Differentiation.",
  "body": " Using Implicit Differentiation   Given the implicitly defined function , find .    We will take the implicit derivatives term by term. The derivative of is .  The second term, , is a little tricky. It requires the as it is the product of two functions of : and . Its derivative is . The first part of this expression requires a because we are taking the derivative of a term. The second part does not require it because we are taking the derivative of .  The derivative of the right hand side is easily found to be . In all, we get: .  Move terms around so that the left side consists only of the terms and the right side consists of all the other terms: .  Factor out from the left side and solve to get .  To confirm the validity of our work, let's find the equation of a tangent line to this function at a point. It is easy to confirm that the point lies on the graph of this function. At this point, . So the equation of the tangent line is . The function and its tangent line are graphed in .   A graph of the implicitly defined function along with its tangent line at the point    A curve with two distinct segments and a tangent line with a positive slope  Two curves are drawn in the -plane. The left curve stretches upwards from the left side of the axis, curving slightly to the left. As approaches -2, the curve begins to widen to the left, creating a bump in the curve. As the curve crosses the axis, the curve moves towards the right, no longer increasing and becoming more horizontal as increases. At the point , a tangent line is drawn, with a moderate positive slope. This point corresponds to the corner at which the curve begins to become horizontal. At this point, the curve passes the vertical line test, but does not at most other points on the graph. The second curve begins to the right of the -axis, as a line stretching upwards from the bottom of the -axis. As approaches 1, the curve also begins to become horizontal as increases. The entire second curve lies in the fourth quadrant.      Notice how our curve looks much different than for functions we have seen. For one, it fails the vertical line test, and so the complete curve is not truly representing as a function of . But when we indicate we are interested in the derivative at , we are indicating that we want the function defined by the small portion of the curve that passes through , and that small portion does pass the vertical line test. Such functions are important in many areas of mathematics, so developing tools to deal with them is also important.   "
},
{
  "id": "ex_implicit5",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit5",
  "type": "Example",
  "number": "3.7.7",
  "title": "Using Implicit Differentiation.",
  "body": " Using Implicit Differentiation   Given the implicitly defined function , find .    Differentiating term by term, we find the most difficulty in the first term. It requires both the and . .  We leave the derivatives of the other terms to the reader. After taking the derivatives of both sides, we have .  We now have to be careful to properly solve for , particularly because of the product on the left. It is best to multiply out the product. Doing this, we get .  From here we can safely move around terms to get the following: .  Then we can solve for to get .  A graph of this implicit function is given in .   A graph of the implicitly defined curve    A curve beginning in the third quadrant passing through the points (0,-1), (0,0), (0,1).   The curve begins in the third quadrant. From there, the curve bends slightly back and increases, crossing above itself. The curve extends to the right, increasing almost linearly as it crosses the -axis at into the fourth quadrant. The curve continues to increase as such until it reaches a point close to . The curve then bends back, increasing towards the top left linearly. It then crosses the origin and passes into the second quadrant. The curve quickly bends towards the right, crossing the -axis at into the first quadrant. From there, the curve continues towards the right while slightly increasing. The curves rises sharply at , before decreasing again.       It is easy to verify that the points , and all lie on the graph. We can find the slopes of the tangent lines at each of these points using our formula for .  At , the slope is .  At , the slope is .  At , the slope is also .  The tangent lines have been added to the graph of the function in .   A graph of the implicitly defined curve and certain tangent lines    A curve beginning in the third quadrant passing through the points (0,-1), (0,0), (0,1), with tangent lines at those points.   The graph in , with tagent lines drawn at , , and . The tangent line at has a positive slope less than 1. The tangent line at has a negative slope, close to -1. The tangent line at has a positive slope, less than 1.        "
},
{
  "id": "ex_implicit7",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit7",
  "type": "Example",
  "number": "3.7.10",
  "title": "Finding slopes of tangent lines to a circle.",
  "body": " Finding slopes of tangent lines to a circle   Find the slope of the tangent line to the circle at the point .    Taking derivatives, we get . Solving for gives: .  This is a clever formula. Recall that the slope of the line through the origin and the point on the circle will be . We have found that the slope of the tangent line to the circle at that point is the opposite reciprocal of , namely, . Hence these two lines are always perpendicular.  At the point , we have the tangent line's slope as .  A graph of the circle and its tangent line at is given in , along with a thin dashed line from the origin that is perpendicular to the tangent line. (It turns out that all normal lines to a circle pass through the center of the circle.)   The unit circle with its tangent line at    A circle of radius 1 centered at the origin with a tangent line drawn at a point in the first quadrant.   A circle of radius 1 centered at the origin. A dashed line extends from the origin to a tangent line at the point . At that point a tangent line is drawn with a slight negative slope.        "
},
{
  "id": "ex_implicit8",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit8",
  "type": "Example",
  "number": "3.7.12",
  "title": "Find Slopes of Tangents Lines to Curves Defined Implicitly.",
  "body": " Find Slopes of Tangents Lines to Curves Defined Implicitly   Find the slope of at the point .    This is a particularly interesting curve called an astroid . It is the shape traced out by a point on the edge of a circle that is rolling around inside of a larger circle, as shown in .   An astroid, traced out by a point on the smaller circle as it rolls inside the larger circle    A four pointed star with rounded edges, surrounded by a dashed circle.   A dashed circle of radius 20 entirely contains the curve. In each quadrant curves connect the points on the x and y axis which also lie on the circle. This gives the overall curve the appearence of a diamond with sides curved towards the inside. In the third quadrant a smaller circle is drawn which touches both the outer circle and the curve. The point on the circle touching the curve is highlighted blue.       To find the slope of the astroid at the point , we take the derivative implicitly. .  Plugging in and , we get a slope of . The astroid, with its tangent line at , is shown in .   An astroid with a tangent line    A previously described astroid with a tangent line in the first quadrant.   The curve sketched in with a tangent line at . It has a slope of -1.        "
},
{
  "id": "fs-id1169737935216",
  "level": "2",
  "url": "sec_imp_deriv.html#fs-id1169737935216",
  "type": "Example",
  "number": "3.7.15",
  "title": "Applying Implicit Differentiation.",
  "body": " Applying Implicit Differentiation   In a simple video game, a rocket travels in an elliptical orbit whose path is described by the equation The rocket can fire missiles along lines tangent to its path. The object of the game is to destroy an incoming asteroid traveling along the positive -axis toward If the rocket fires a missile when it is located at where will it intersect the -axis?   To solve this problem, we must determine where the line tangent to the graph of  at intersects the -axis. Begin by finding implicitly. Differentiating, we have   Solving for we have   The slope of the tangent line is The equation of the tangent line is To determine where the line intersects the -axis, solve The solution is The missile intersects the -axis at the point  "
},
{
  "id": "sec_imp_deriv-3-20",
  "level": "2",
  "url": "sec_imp_deriv.html#sec_imp_deriv-3-20",
  "type": "Checkpoint",
  "number": "3.7.16",
  "title": "",
  "body": "  Find the equation of the line tangent to the hyperbola at the point        "
},
{
  "id": "ex_implicit9",
  "level": "2",
  "url": "sec_imp_deriv.html#ex_implicit9",
  "type": "Example",
  "number": "3.7.17",
  "title": "Finding the second derivative.",
  "body": " Finding the second derivative   Given , find .    We found that in . To find , we apply implicit differentiation to . .  While this is not a particularly simple expression, it is usable. We can see that when and when . In , we will see how this relates to the shape of the graph.  Also, if we remember that we are only considering points on the curve , then we know that . So we can replace the in the expression for to get which is a simpler expression. Recognizing when simplifications like this are possible is not always easy.   "
},
{
  "id": "sec_Ch3Sec8",
  "level": "1",
  "url": "sec_Ch3Sec8.html",
  "type": "Section",
  "number": "3.8",
  "title": "Derivatives of Inverse Functions",
  "body": " Derivatives of Inverse Functions   Learning Objectives   Calculate the derivative of an inverse function.  Recognize the derivatives of the standard inverse trigonometric functions.   In this section we explore the relationship between the derivative of a function and the derivative of its inverse. For functions whose derivatives we already know, we can use this relationship to find derivatives of inverses without having to use the limit definition of the derivative. In particular, we will apply the formula for derivatives of inverse functions to trigonometric functions. This formula may also be used to extend the power rule to rational exponents.    The Derivative of an Inverse Function  We begin by considering a function and its inverse. If is both invertible and differentiable, it seems reasonable that the inverse of is also differentiable. shows the relationship between a function and its inverse Look at the point on the graph of having a tangent line with a slope of This point corresponds to a point on the graph of having a tangent line with a slope of Thus, if is differentiable at then it must be the case that      \"This graph shows a function f(x) and its inverse f−1(x). These functions are symmetric about the line y = x. The tangent line of the function f(x) at the point (f−1(a), a) and the tangent line of the function f−1(x) at (a, f−1(a)) are also symmetric about the line y = x. Specifically, if the slope of one were p\/q, then the slope of the other would be q\/p. Lastly, their derivatives are also symmetric about the line y = x.\"  The tangent lines of a function and its inverse are related; so, too, are the derivatives of these functions.   We may also derive the formula for the derivative of the inverse by first recalling that Then by differentiating both sides of this equation (using the chain rule on the right), we obtain   Solving for we obtain   We summarize this result in the following theorem.    Inverse Function Theorem  Let be a function that is both invertible and differentiable. Let be the inverse of For all satisfying   Alternatively, if is the inverse of then     Applying the Inverse Function Theorem   Use the inverse function theorem to find the derivative of Compare the resulting derivative to that obtained by differentiating the function directly.    The inverse of is Since begin by finding Thus,   Finally,   We can verify that this is the correct derivative by applying the quotient rule to to obtain       Use the inverse function theorem to find the derivative of Compare the result obtained by differentiating directly.       Use the preceding example as a guide.     Applying the Inverse Function Theorem   Use the inverse function theorem to find the derivative of    The function is the inverse of the function Since begin by finding Thus,   Finally,       Find the derivative of by applying the inverse function theorem.       is the inverse of    From the previous example, we see that we can use the inverse function theorem to extend the power rule to exponents of the form where is a positive integer. This extension will ultimately allow us to differentiate where is any rational number.    Extending the Power Rule to Rational Exponents  The power rule may be extended to rational exponents. That is, if is a positive integer, then   Also, if is a positive integer and is an arbitrary integer, then    Proof  The function is the inverse of the function Since begin by finding Thus,   Finally,   To differentiate we must rewrite it as and apply the chain rule. Thus,      Applying the Power Rule to a Rational Power   Find the equation of the line tangent to the graph of at    First find and evaluate it at Since   the slope of the tangent line to the graph at is  Substituting into the original function, we obtain Thus, the tangent line passes through the point Substituting into the point-slope formula for a line, we obtain the tangent line       Find the derivative of       Use the chain rule.      Derivatives of Inverse Trigonometric Functions  We now turn our attention to finding derivatives of inverse trigonometric functions. These derivatives will prove invaluable in the study of integration later in this text. The derivatives of inverse trigonometric functions are quite surprising in that their derivatives are actually algebraic functions. Previously, derivatives of algebraic functions have proven to be algebraic functions and derivatives of trigonometric functions have been shown to be trigonometric functions. Here, for the first time, we see that the derivative of a function need not be of the same type as the original function.   Derivative of the Inverse Sine Function   Use the inverse function theorem to find the derivative of          To see that consider the following argument. Set In this case, where We begin by considering the case where Since is an acute angle, we may construct a right triangle having acute angle a hypotenuse of length and the side opposite angle having length From the Pythagorean theorem, the side adjacent to angle has length This triangle is shown in . Using the triangle, we see that    \"A right triangle with angle \\theta , opposite side x, hypotenuse 1, and adjacent side equal to the square root of the quantity (1 – x2).\"  Using a right triangle having acute angle a hypotenuse of length and the side opposite angle having length we can see that   In the case where we make the observation that and hence   Now if or or and since in either case and we have   Consequently, in all cases,      Applying the Chain Rule to the Inverse Sine Function   Apply the chain rule to the formula derived in to find the derivative of and use this result to find the derivative of    Applying the chain rule to we have   Now let so Substituting into the previous result, we obtain      Use the inverse function theorem to find the derivative of       The inverse of is Use as a guide.    The derivatives of the remaining inverse trigonometric functions may also be found by using the inverse function theorem. These formulas are provided in the following theorem.   Derivatives of Inverse Trigonometric Functions         Recall that two trigonometric functions are called cofunctions if they are related by complementary angles, such as and . Their inverses satisfy similar relationships, for example . Differentiating both sides of this equation with respect to gives , so the derivatives must be negatives of each other. This explains why the formulas for inverse cofunctions differ only by a change in sign, a pattern which also holds for and , as well as and .   Applying Differentiation Formulas to an Inverse Tangent Function   Find the derivative of    Let so Substituting into , we obtain   Simplifying, we have      Applying Differentiation Formulas to an Inverse Sine Function   Find the derivative of    By applying the product rule, we have       Find the derivative of       Use . with     Applying the Inverse Tangent Function   The position of a particle at time is given by for Find the velocity of the particle at time    Begin by differentiating in order to find Thus,   Simplifying, we have   Thus,      Find the equation of the line tangent to the graph of at       is the slope of the tangent line.     "
},
{
  "id": "CNX_Calc_Figure_03_07_001",
  "level": "2",
  "url": "sec_Ch3Sec8.html#CNX_Calc_Figure_03_07_001",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": "  \"This graph shows a function f(x) and its inverse f−1(x). These functions are symmetric about the line y = x. The tangent line of the function f(x) at the point (f−1(a), a) and the tangent line of the function f−1(x) at (a, f−1(a)) are also symmetric about the line y = x. Specifically, if the slope of one were p\/q, then the slope of the other would be q\/p. Lastly, their derivatives are also symmetric about the line y = x.\"  The tangent lines of a function and its inverse are related; so, too, are the derivatives of these functions.  "
},
{
  "id": "sec_Ch3Sec8-3-11",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-3-11",
  "type": "Theorem",
  "number": "3.8.2",
  "title": "Inverse Function Theorem.",
  "body": "  Inverse Function Theorem  Let be a function that is both invertible and differentiable. Let be the inverse of For all satisfying   Alternatively, if is the inverse of then   "
},
{
  "id": "fs-id1169739001941",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169739001941",
  "type": "Example",
  "number": "3.8.3",
  "title": "Applying the Inverse Function Theorem.",
  "body": " Applying the Inverse Function Theorem   Use the inverse function theorem to find the derivative of Compare the resulting derivative to that obtained by differentiating the function directly.    The inverse of is Since begin by finding Thus,   Finally,   We can verify that this is the correct derivative by applying the quotient rule to to obtain    "
},
{
  "id": "sec_Ch3Sec8-3-13",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-3-13",
  "type": "Checkpoint",
  "number": "3.8.4",
  "title": "",
  "body": "  Use the inverse function theorem to find the derivative of Compare the result obtained by differentiating directly.       Use the preceding example as a guide.   "
},
{
  "id": "fs-id1169738977168",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169738977168",
  "type": "Example",
  "number": "3.8.5",
  "title": "Applying the Inverse Function Theorem.",
  "body": " Applying the Inverse Function Theorem   Use the inverse function theorem to find the derivative of    The function is the inverse of the function Since begin by finding Thus,   Finally,    "
},
{
  "id": "sec_Ch3Sec8-3-15",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-3-15",
  "type": "Checkpoint",
  "number": "3.8.6",
  "title": "",
  "body": "  Find the derivative of by applying the inverse function theorem.       is the inverse of   "
},
{
  "id": "sec_Ch3Sec8-3-17",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-3-17",
  "type": "Theorem",
  "number": "3.8.7",
  "title": "Extending the Power Rule to Rational Exponents.",
  "body": "  Extending the Power Rule to Rational Exponents  The power rule may be extended to rational exponents. That is, if is a positive integer, then   Also, if is a positive integer and is an arbitrary integer, then    Proof  The function is the inverse of the function Since begin by finding Thus,   Finally,   To differentiate we must rewrite it as and apply the chain rule. Thus,    "
},
{
  "id": "fs-id1169739298630",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169739298630",
  "type": "Example",
  "number": "3.8.8",
  "title": "Applying the Power Rule to a Rational Power.",
  "body": " Applying the Power Rule to a Rational Power   Find the equation of the line tangent to the graph of at    First find and evaluate it at Since   the slope of the tangent line to the graph at is  Substituting into the original function, we obtain Thus, the tangent line passes through the point Substituting into the point-slope formula for a line, we obtain the tangent line    "
},
{
  "id": "sec_Ch3Sec8-3-19",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-3-19",
  "type": "Checkpoint",
  "number": "3.8.9",
  "title": "",
  "body": "  Find the derivative of       Use the chain rule.   "
},
{
  "id": "fs-id1169739208944",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169739208944",
  "type": "Example",
  "number": "3.8.10",
  "title": "Derivative of the Inverse Sine Function.",
  "body": " Derivative of the Inverse Sine Function   Use the inverse function theorem to find the derivative of          To see that consider the following argument. Set In this case, where We begin by considering the case where Since is an acute angle, we may construct a right triangle having acute angle a hypotenuse of length and the side opposite angle having length From the Pythagorean theorem, the side adjacent to angle has length This triangle is shown in . Using the triangle, we see that    \"A right triangle with angle \\theta , opposite side x, hypotenuse 1, and adjacent side equal to the square root of the quantity (1 – x2).\"  Using a right triangle having acute angle a hypotenuse of length and the side opposite angle having length we can see that   In the case where we make the observation that and hence   Now if or or and since in either case and we have   Consequently, in all cases,    "
},
{
  "id": "fs-id1169736662939",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169736662939",
  "type": "Example",
  "number": "3.8.12",
  "title": "Applying the Chain Rule to the Inverse Sine Function.",
  "body": " Applying the Chain Rule to the Inverse Sine Function   Apply the chain rule to the formula derived in to find the derivative of and use this result to find the derivative of    Applying the chain rule to we have   Now let so Substituting into the previous result, we obtain   "
},
{
  "id": "sec_Ch3Sec8-4-5",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-4-5",
  "type": "Checkpoint",
  "number": "3.8.13",
  "title": "",
  "body": "  Use the inverse function theorem to find the derivative of       The inverse of is Use as a guide.   "
},
{
  "id": "sec_Ch3Sec8-4-7",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-4-7",
  "type": "Theorem",
  "number": "3.8.14",
  "title": "Derivatives of Inverse Trigonometric Functions.",
  "body": " Derivatives of Inverse Trigonometric Functions        "
},
{
  "id": "sec_Ch3Sec8-4-8",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cofunctions "
},
{
  "id": "fs-id1169739282715",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169739282715",
  "type": "Example",
  "number": "3.8.15",
  "title": "Applying Differentiation Formulas to an Inverse Tangent Function.",
  "body": " Applying Differentiation Formulas to an Inverse Tangent Function   Find the derivative of    Let so Substituting into , we obtain   Simplifying, we have    "
},
{
  "id": "fs-id1169739301501",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169739301501",
  "type": "Example",
  "number": "3.8.16",
  "title": "Applying Differentiation Formulas to an Inverse Sine Function.",
  "body": " Applying Differentiation Formulas to an Inverse Sine Function   Find the derivative of    By applying the product rule, we have    "
},
{
  "id": "sec_Ch3Sec8-4-11",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-4-11",
  "type": "Checkpoint",
  "number": "3.8.17",
  "title": "",
  "body": "  Find the derivative of       Use . with   "
},
{
  "id": "fs-id1169736614197",
  "level": "2",
  "url": "sec_Ch3Sec8.html#fs-id1169736614197",
  "type": "Example",
  "number": "3.8.18",
  "title": "Applying the Inverse Tangent Function.",
  "body": " Applying the Inverse Tangent Function   The position of a particle at time is given by for Find the velocity of the particle at time    Begin by differentiating in order to find Thus,   Simplifying, we have   Thus,   "
},
{
  "id": "sec_Ch3Sec8-4-13",
  "level": "2",
  "url": "sec_Ch3Sec8.html#sec_Ch3Sec8-4-13",
  "type": "Checkpoint",
  "number": "3.8.19",
  "title": "",
  "body": "  Find the equation of the line tangent to the graph of at       is the slope of the tangent line.   "
},
{
  "id": "sec_Ch3Sec9",
  "level": "1",
  "url": "sec_Ch3Sec9.html",
  "type": "Section",
  "number": "3.9",
  "title": "Derivatives of Exponential and Logarithmic Functions",
  "body": " Derivatives of Exponential and Logarithmic Functions   Learning Objectives   Find the derivative of exponential functions.  Find the derivative of logarithmic functions.  Use logarithmic differentiation to determine the derivative of a function.  >>>>>>> origin\/production   Derivative of the Exponential Function  Just as when we found the derivatives of other functions, we can find the derivatives of exponential and logarithmic functions using formulas.   We know that  The graph of together with the line are shown in . By , this line is tangent to the graph of at    \"Graph of the function ex along with its tangent at (0, 1), x + 1.\"  The tangent line to at has slope 1.   Now that we have laid out our basic assumptions, we begin our investigation by exploring the derivative of Recall that we have assumed that exists. By applying the limit definition to the derivative we conclude that   Turning to we obtain the following.   We see that on the basis of the assumption that is differentiable at is not only differentiable everywhere, but its derivative is   For Thus, we have (The value of for an arbitrary function of the form will be derived later.)   Derivative of the Natural Exponential Function  Let be the natural exponential function. Then   In general,     Derivative of an Exponential Function    Find the derivative of    Using the derivative formula and the chain rule,      Combining Differentiation Rules   Find the derivative of    Use the derivative of the natural exponential function, the quotient rule, and the chain rule.       Find the derivative of       Don’t forget to use the product rule.     Applying the Natural Exponential Function   A colony of mosquitoes has an initial population of 1000. After days, the population is given by Show that the ratio of the rate of change of the population, to the population, is constant.    First find By using the chain rule, we have Thus, the ratio of the rate of change of the population to the population is given by   The ratio of the rate of change of the population to the population is the constant 0.3.      If describes the mosquito population after days, as in the preceding example, what is the rate of change of after 4 days?    996    Find     Applying the Natural Exponential Function to an Account with Interest Compounded Continuously   If is the future value of an account in dollars with interest compounded continuously after years, what is the rate of change of after 4 years?    First find By using the chain rule, we have Thus, the rate of change of the future value of the account after 4 years is given by       Derivative of the Logarithmic Function  Now that we have the derivative of the natural exponential function, we can use implicit differentiation to find the derivative of its inverse, the natural logarithmic function.   The Derivative of the Natural Logarithmic Function  If and then   More generally, let be a differentiable function. For all values of for which the derivative of is given by    If and then Differentiating both sides of this equation results in the equation   Solving for yields   Finally, we substitute to obtain   We may also derive this result by applying the inverse function theorem, as follows. Since is the inverse of by applying the inverse function theorem we have   Using this result and applying the chain rule to yields     The graph of and its derivative are shown in .    \"Graph of the function ln x along with its derivative 1\/x. The function ln x is increasing on (0, + \\infty ). Its derivative is decreasing but greater than 0 on (0, + \\infty ).\"  is increasing on Its derivative is greater than zero on    Taking a Derivative of a Natural Logarithm   Find the derivative of    Use directly.      Using Properties of Logarithms in a Derivative    Find the derivative of    At first glance, taking this derivative appears rather complicated. However, by using the properties of logarithms prior to finding the derivative, we can make the problem much simpler. Applying properties of logarithms and then differentiating,       Differentiate:       Use a property of logarithms to simplify before taking the derivative.    Now that we can differentiate the natural logarithmic function, we can use this result to find the derivatives of and for   Derivatives of General Exponential and Logarithmic Functions  Let and let be a differentiable function.   If, then More generally, if then for all values of for which   If then More generally, if then    If then It follows that Thus Solving for we have Differentiating and keeping in mind that is a constant, we see that   The derivative in now follows from the chain rule.  If then Using implicit differentiation, again keeping in mind that is constant, it follows that Solving for and substituting we see that   The more general derivative follows from the chain rule.     Applying Derivative Formulas   Find the derivative of    Use the quotient rule and .       Finding the Slope of a Tangent Line  Find the slope of the line tangent to the graph of at    To find the slope, we must evaluate at Using , we see that   By evaluating the derivative at we see that the tangent line has slope       Find the slope for the line tangent to at       Evaluate the derivative at      Logarithmic Differentiation  At this point, we can take derivatives of functions of the form for certain values of as well as functions of the form where and Unfortunately, we still do not know the derivatives of functions such as or These functions require a technique called logarithmic differentiation , which allows us to differentiate any function of the form It can also be used to convert a very complex differentiation problem into a simpler one, such as finding the derivative of We outline this technique in the following problem-solving strategy.   Using Logarithmic Differentiation   To differentiate using logarithmic differentiation, take the natural logarithm of both sides of the equation to obtain  Use properties of logarithms to expand as much as possible.  Differentiate both sides of the equation. On the left we will have  Multiply both sides of the equation by to solve for  Replace by     Using Logarithmic Differentiation   Find the derivative of    Use logarithmic differentiation to find this derivative.      Using Logarithmic Differentiation   Find the derivative of    This problem really makes use of the properties of logarithms and the differentiation rules given in this chapter.     Now we are ready to prove the general version of stated in .   Extending the Power Rule   Find the derivative of where is an arbitrary real number.    The process is the same as in , though with fewer complications.       Use logarithmic differentiation to find the derivative of       Follow the problem solving strategy.      Find the derivative of       Use the result from .     "
},
{
  "id": "CNX_Calc_Figure_03_09_002",
  "level": "2",
  "url": "sec_Ch3Sec9.html#CNX_Calc_Figure_03_09_002",
  "type": "Figure",
  "number": "3.9.1",
  "title": "",
  "body": "  \"Graph of the function ex along with its tangent at (0, 1), x + 1.\"  The tangent line to at has slope 1.  "
},
{
  "id": "sec_Ch3Sec9-3-13",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-3-13",
  "type": "Theorem",
  "number": "3.9.2",
  "title": "Derivative of the Natural Exponential Function.",
  "body": " Derivative of the Natural Exponential Function  Let be the natural exponential function. Then   In general,   "
},
{
  "id": "fs-id1169738223456",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738223456",
  "type": "Example",
  "number": "3.9.3",
  "title": "Derivative of an Exponential Function.",
  "body": " Derivative of an Exponential Function    Find the derivative of    Using the derivative formula and the chain rule,    "
},
{
  "id": "ex-combinediffrules",
  "level": "2",
  "url": "sec_Ch3Sec9.html#ex-combinediffrules",
  "type": "Example",
  "number": "3.9.4",
  "title": "Combining Differentiation Rules.",
  "body": " Combining Differentiation Rules   Find the derivative of    Use the derivative of the natural exponential function, the quotient rule, and the chain rule.    "
},
{
  "id": "sec_Ch3Sec9-3-16",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-3-16",
  "type": "Checkpoint",
  "number": "3.9.5",
  "title": "",
  "body": "  Find the derivative of       Don’t forget to use the product rule.   "
},
{
  "id": "fs-id1169737949367",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169737949367",
  "type": "Example",
  "number": "3.9.6",
  "title": "Applying the Natural Exponential Function.",
  "body": " Applying the Natural Exponential Function   A colony of mosquitoes has an initial population of 1000. After days, the population is given by Show that the ratio of the rate of change of the population, to the population, is constant.    First find By using the chain rule, we have Thus, the ratio of the rate of change of the population to the population is given by   The ratio of the rate of change of the population to the population is the constant 0.3.   "
},
{
  "id": "sec_Ch3Sec9-3-18",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-3-18",
  "type": "Checkpoint",
  "number": "3.9.7",
  "title": "",
  "body": "  If describes the mosquito population after days, as in the preceding example, what is the rate of change of after 4 days?    996    Find   "
},
{
  "id": "sec_Ch3Sec9-3-19",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-3-19",
  "type": "Example",
  "number": "3.9.8",
  "title": "Applying the Natural Exponential Function to an Account with Interest Compounded Continuously.",
  "body": " Applying the Natural Exponential Function to an Account with Interest Compounded Continuously   If is the future value of an account in dollars with interest compounded continuously after years, what is the rate of change of after 4 years?    First find By using the chain rule, we have Thus, the rate of change of the future value of the account after 4 years is given by    "
},
{
  "id": "sec_Ch3Sec9-4-3",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-4-3",
  "type": "Theorem",
  "number": "3.9.9",
  "title": "The Derivative of the Natural Logarithmic Function.",
  "body": " The Derivative of the Natural Logarithmic Function  If and then   More generally, let be a differentiable function. For all values of for which the derivative of is given by    If and then Differentiating both sides of this equation results in the equation   Solving for yields   Finally, we substitute to obtain   We may also derive this result by applying the inverse function theorem, as follows. Since is the inverse of by applying the inverse function theorem we have   Using this result and applying the chain rule to yields    "
},
{
  "id": "CNX_Calc_Figure_03_09_003",
  "level": "2",
  "url": "sec_Ch3Sec9.html#CNX_Calc_Figure_03_09_003",
  "type": "Figure",
  "number": "3.9.10",
  "title": "",
  "body": "  \"Graph of the function ln x along with its derivative 1\/x. The function ln x is increasing on (0, + \\infty ). Its derivative is decreasing but greater than 0 on (0, + \\infty ).\"  is increasing on Its derivative is greater than zero on  "
},
{
  "id": "fs-id1169738211098",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738211098",
  "type": "Example",
  "number": "3.9.11",
  "title": "Taking a Derivative of a Natural Logarithm.",
  "body": " Taking a Derivative of a Natural Logarithm   Find the derivative of    Use directly.    "
},
{
  "id": "fs-id1169738244488",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738244488",
  "type": "Example",
  "number": "3.9.12",
  "title": "Using Properties of Logarithms in a Derivative.",
  "body": " Using Properties of Logarithms in a Derivative    Find the derivative of    At first glance, taking this derivative appears rather complicated. However, by using the properties of logarithms prior to finding the derivative, we can make the problem much simpler. Applying properties of logarithms and then differentiating,    "
},
{
  "id": "sec_Ch3Sec9-4-8",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-4-8",
  "type": "Checkpoint",
  "number": "3.9.13",
  "title": "",
  "body": "  Differentiate:       Use a property of logarithms to simplify before taking the derivative.   "
},
{
  "id": "fs-id1169738238181",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738238181",
  "type": "Theorem",
  "number": "3.9.14",
  "title": "Derivatives of General Exponential and Logarithmic Functions.",
  "body": " Derivatives of General Exponential and Logarithmic Functions  Let and let be a differentiable function.   If, then More generally, if then for all values of for which   If then More generally, if then    If then It follows that Thus Solving for we have Differentiating and keeping in mind that is a constant, we see that   The derivative in now follows from the chain rule.  If then Using implicit differentiation, again keeping in mind that is constant, it follows that Solving for and substituting we see that   The more general derivative follows from the chain rule.   "
},
{
  "id": "fs-id1169737145066",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169737145066",
  "type": "Example",
  "number": "3.9.15",
  "title": "Applying Derivative Formulas.",
  "body": " Applying Derivative Formulas   Find the derivative of    Use the quotient rule and .    "
},
{
  "id": "fs-id1169738219393",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738219393",
  "type": "Example",
  "number": "3.9.16",
  "title": "",
  "body": "  Finding the Slope of a Tangent Line  Find the slope of the line tangent to the graph of at    To find the slope, we must evaluate at Using , we see that   By evaluating the derivative at we see that the tangent line has slope    "
},
{
  "id": "sec_Ch3Sec9-4-13",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-4-13",
  "type": "Checkpoint",
  "number": "3.9.17",
  "title": "",
  "body": "  Find the slope for the line tangent to at       Evaluate the derivative at   "
},
{
  "id": "sec_Ch3Sec9-5-2",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithmic differentiation "
},
{
  "id": "sec_Ch3Sec9-5-3",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-5-3",
  "type": "Problem-Solving Strategy",
  "number": "3.9.18",
  "title": "Using Logarithmic Differentiation.",
  "body": " Using Logarithmic Differentiation   To differentiate using logarithmic differentiation, take the natural logarithm of both sides of the equation to obtain  Use properties of logarithms to expand as much as possible.  Differentiate both sides of the equation. On the left we will have  Multiply both sides of the equation by to solve for  Replace by   "
},
{
  "id": "fs-id1169738238112",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738238112",
  "type": "Example",
  "number": "3.9.19",
  "title": "Using Logarithmic Differentiation.",
  "body": " Using Logarithmic Differentiation   Find the derivative of    Use logarithmic differentiation to find this derivative.    "
},
{
  "id": "fs-id1169738068346",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738068346",
  "type": "Example",
  "number": "3.9.20",
  "title": "Using Logarithmic Differentiation.",
  "body": " Using Logarithmic Differentiation   Find the derivative of    This problem really makes use of the properties of logarithms and the differentiation rules given in this chapter.    "
},
{
  "id": "fs-id1169738228453",
  "level": "2",
  "url": "sec_Ch3Sec9.html#fs-id1169738228453",
  "type": "Example",
  "number": "3.9.21",
  "title": "Extending the Power Rule.",
  "body": " Extending the Power Rule   Find the derivative of where is an arbitrary real number.    The process is the same as in , though with fewer complications.    "
},
{
  "id": "sec_Ch3Sec9-5-8",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-5-8",
  "type": "Checkpoint",
  "number": "3.9.22",
  "title": "",
  "body": "  Use logarithmic differentiation to find the derivative of       Follow the problem solving strategy.   "
},
{
  "id": "sec_Ch3Sec9-5-9",
  "level": "2",
  "url": "sec_Ch3Sec9.html#sec_Ch3Sec9-5-9",
  "type": "Checkpoint",
  "number": "3.9.23",
  "title": "",
  "body": "  Find the derivative of       Use the result from .   "
},
{
  "id": "sec_Ch4Sec1",
  "level": "1",
  "url": "sec_Ch4Sec1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Related Rates",
  "body": " Related Rates   Learning Objectives   Express changing quantities in terms of derivatives.  Find relationships among the derivatives in a given problem.  Use the chain rule to find the rate of change of one quantity that depends on the rate of change of other quantities.   We have seen that for quantities that are changing over time, the rates at which these quantities change are given by derivatives. If two related quantities are changing over time, the rates at which the quantities change are related. For example, if a balloon is being filled with air, both the radius of the balloon and the volume of the balloon are increasing. In this section, we consider several problems in which two or more related quantities are changing and we study how to determine the relationship between the rates of change of these quantities.    Setting up Related-Rates Problems  In many real-world applications, related quantities are changing with respect to time. For example, if we consider the balloon example again, we can say that the rate of change in the volume, , is related to the rate of change in the radius, . In this case, we say that and are related rates because is related to . Here we study several examples of related quantities that are changing with respect to time and we look at how to calculate one rate of change given another rate of change.   Inflating a Balloon   A spherical balloon is being filled with air at the constant rate of ( ). How fast is the radius increasing when the radius is ?    Three balloons labeled with Time 1, Time 2, and Time 3. The volume of each is increasing and the radius of each one is increasing.   As the balloon is being filled with air, both the radius and the volume are increasing with respect to time.     The volume of a sphere of radius centimeters is Since the balloon is being filled with air, both the volume and the radius are functions of time. Therefore, seconds after beginning to fill the balloon with air, the volume of air in the balloon is   Differentiating both sides of this equation with respect to time and applying the chain rule, we see that the rate of change in the volume is related to the rate of change in the radius by the equation The balloon is being filled with air at the constant rate of , so . Therefore, , which implies . When the radius , .     What is the instantaneous rate of change of the radius when ?      Plug into the formula for in .    Before looking at other examples, let's outline the problem-solving strategy we will be using to solve related-rates problems.   Solving a Related-Rates Problem    Assign symbols to all variables involved in the problem. Draw a figure if applicable.   State, in terms of the variables, the information that is given and the rate to be determined.  Find an equation relating the variables introduced in step 1 .  Using the chain rule, differentiate both sides of the equation found in step 3 with respect to the independent variable. This new equation will relate the derivatives.  Substitute all known values into the equation from step 4, then solve for the unknown rate of change.    Note that when solving a related-rates problem, it is crucial not to substitute known values too soon. For example, if the value for a changing quantity is substituted into an equation before both sides of the equation are differentiated, then that quantity will behave as a constant and its derivative will not appear in the new equation found in step 4 . We examine this potential error in the following example.    Examples of the Process  Let’s now implement the strategy just described to solve several related-rates problems. The first example involves a plane flying overhead. The relationship we are studying is between the speed of the plane and the rate at which the distance between the plane and a person on the ground is changing.   An Airplane Flying at a Constant Elevation   An airplane is flying overhead at a constant elevation of ft. A man is viewing the plane from a position ft from the base of a radio tower. The airplane is flying horizontally away from the man. If the plane is flying at the rate of ft\/sec, at what rate is the distance between the man and the plane increasing when the plane passes over the radio tower?      Draw a picture, introducing variables to represent the different quantities involved.    A radio tower which is vertically a distance of 4000 feet from an airplane and horizontally a distance of x from a person. The slant distance from the person to the airplane is labeled s.   An airplane is flying at a constant height of ft. The distance between the person and the airplane and the person and the place on the ground directly below the airplane are changing. We denote those quantities with the variables and , respectively.   As shown, denotes the distance between the man and the position on the ground directly below the airplane. The variable denotes the distance between the man and the plane. Note that both and are functions of time. We do not introduce a variable for the height of the plane because it remains at a constant elevation of ft. Since an object’s height above the ground is measured as the shortest distance between the object and the ground, the line segment of length ft is perpendicular to the line segment of length feet, creating a right triangle.    Since denotes the horizontal distance between the man and the point on the ground below the plane, ⁢ represents the speed of the plane. We are told the speed of the plane is ft\/sec. Therefore, ft\/sec. Since we are asked to find the rate of change in the distance between the man and the plane when the plane is directly above the radio tower, we need to find when ft.    From the figure, we can use the Pythagorean theorem to write an equation relating and : .   Differentiating this equation with respect to time and using the fact that the derivative of a constant is zero, we arrive at the equation .   Find the rate at which the distance between the man and the plane is increasing when the plane is directly over the radio tower. That is, find when ft. Since the speed of the plane is ft\/sec, we know that ft\/sec. We are not given an explicit value for ; however, since we are trying to find when ft, we can use the Pythagorean theorem to determine the distance when and the height is ft. Solving the equation for , we have ft at the time of interest. Using these values, we conclude that is a solution of the equation . Therefore, .  Note: When solving related-rates problems, it is important not to substitute values for the variables too soon. For example,in step 3, we related the variable quantities and by the equation . Since the plane remains at a constant height, it is not necessary to introduce a variable for the height, and we are allowed to use the constant to denote that quantity. However, the other two quantities are changing. If we mistakenly substituted into the equation before differentiating, our equation would have been After differentiating, our equation would become . As a result, we would incorrectly conclude that .        What is the speed of the plane if the distance between the person and the plane is increasing at the rate of ft\/sec?    Set ft\/sec and find .    ft\/sec     Chapter Opener: A Rocket Launch     \"A photo of rocket launching from the ground next to a camera on a tripod\"   (credit: modification of work by Steve Jurvetson, Wikimedia Commons)    A rocket is launched so that it rises vertically. A camera is positioned ft from the launch pad. When the rocket is ft above the launch pad, its velocity is ft\/sec. Find the necessary rate of change of the camera’s angle as a function of time so that it stays focused on the rocket.      Draw a picture introducing variables.    A right triangle with base labeled 5000 ft, height labeled h, and bottom left angle labeled theta. A rocket is in the top right vertex and a camera in the bottom left vertex.   A camera is positioned ft from the launch pad of the rocket. The height of the rocket and the angle of the camera are changing with respect to time. We denote those quantities with the variables and , respectively.   Let denote the height of the rocket above the launch pad and be the angle betwee the camera lens and the ground.    We are trying to find the rate of change in the angle of the camera with respect to time when the rocket is ft off the ground. That is, we need to find when ft. At that time, we know the velocity of the rocket is ft\/sec.    Now we need to find an equation relating the two quantities that are changing with respect to time: and . How can we create such an equation? Using the fact that we have drawn a right triangle, it is natural to think about trigonometric functions. Recall that is the ratio of the length of the opposite side of the triangle to the length of the adjacent side. Thus, we have . This gives us the equation .    Differentiating this equation with respect to time , we obtain .    We want to find when ft. At this time, we know that ft\/sec. We need to determine . Recall that is the ratio of the length of the hypotenuse to the length of the adjacent side. We know the length of the adjacent side is ft. To determine the length of the hypotenuse, we use the Pythagorean theorem, where the length of one leg is ft., the length of the other leg is ft, and the length of the hypotenuse is feet as shown in the following figure.    A right triangle with base 5000, height 1000, hypotenuse c, and the angle across from the height is theta.    We see that and we conclude the hypotenuse is . Therefore, when , we have . Recall from step 4 that the equation relating to our known values is . When ft, we know that ft\/sec and . Substituting these values into the previous equation, we arrive at the equation . Therefore, rad\/sec.        What rate of change is necessary for the elevation angle of the camera if the camera is placed on the ground at a distance of ft from the launch pad and the velocity of the rocket is ft\/sec when the rocket is ft off the ground?    Try    rad\/sec.    In the next example, we consider water draining from a cone-shaped funnel. We compare the rate at which the level of water in the cone is decreasing with the rate at which the volume of water is decreasing.   Water Draining from a Funnel   Water is draining from the bottom of a cone-shaped funnel at the rate of . The height of the funnel is ft and the radius at the top of the funnel is ft. At what rate is the height of the water in the funnel changing when the height of the water is ft?      Draw a picture introducing the variables.    A right circular funnel with maximum radius 1 and height 2. Water is filled up to a maximum radius of r and a heigh of h.   Water is draining from a funnel of height ft and radius ft. The height of the water and the radius of water are changing over time. We denote these quantities with the variables and , respectively.   Let denote the height of the water in the funnel, denote the radius of the water at its surface, and denote the volume of the water.    We need to determine when ft. We know that .    The volume of water in the cone is . From the figure, we see that we have similar triangles. Therefore, the ratio of the sides in the two triangles is the same. Therefore, or . Using this fact, the equation for volume can be simplified to .    Applying the chain rule while differentiating both sides of this equation with respect to time , we obtain .    We want to find when ft. Since water is leaving at the rate of , we know that . Therefore , which implies . It follows that .        At what rate is the height of the water changing when the height of the water is ft?    Use \/   ft\/sec.     "
},
{
  "id": "sec_Ch4Sec1-3-2",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "related rates "
},
{
  "id": "ex-inflatingballoon",
  "level": "2",
  "url": "sec_Ch4Sec1.html#ex-inflatingballoon",
  "type": "Example",
  "number": "4.1.1",
  "title": "Inflating a Balloon.",
  "body": " Inflating a Balloon   A spherical balloon is being filled with air at the constant rate of ( ). How fast is the radius increasing when the radius is ?    Three balloons labeled with Time 1, Time 2, and Time 3. The volume of each is increasing and the radius of each one is increasing.   As the balloon is being filled with air, both the radius and the volume are increasing with respect to time.     The volume of a sphere of radius centimeters is Since the balloon is being filled with air, both the volume and the radius are functions of time. Therefore, seconds after beginning to fill the balloon with air, the volume of air in the balloon is   Differentiating both sides of this equation with respect to time and applying the chain rule, we see that the rate of change in the volume is related to the rate of change in the radius by the equation The balloon is being filled with air at the constant rate of , so . Therefore, , which implies . When the radius , .   "
},
{
  "id": "sec_Ch4Sec1-3-4",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-3-4",
  "type": "Checkpoint",
  "number": "4.1.3",
  "title": "",
  "body": " What is the instantaneous rate of change of the radius when ?      Plug into the formula for in .   "
},
{
  "id": "problem-relatedrates",
  "level": "2",
  "url": "sec_Ch4Sec1.html#problem-relatedrates",
  "type": "Problem-Solving Strategy",
  "number": "4.1.4",
  "title": "Solving a Related-Rates Problem.",
  "body": " Solving a Related-Rates Problem    Assign symbols to all variables involved in the problem. Draw a figure if applicable.   State, in terms of the variables, the information that is given and the rate to be determined.  Find an equation relating the variables introduced in step 1 .  Using the chain rule, differentiate both sides of the equation found in step 3 with respect to the independent variable. This new equation will relate the derivatives.  Substitute all known values into the equation from step 4, then solve for the unknown rate of change.   "
},
{
  "id": "sec_Ch4Sec1-4-3",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-4-3",
  "type": "Example",
  "number": "4.1.5",
  "title": "An Airplane Flying at a Constant Elevation.",
  "body": " An Airplane Flying at a Constant Elevation   An airplane is flying overhead at a constant elevation of ft. A man is viewing the plane from a position ft from the base of a radio tower. The airplane is flying horizontally away from the man. If the plane is flying at the rate of ft\/sec, at what rate is the distance between the man and the plane increasing when the plane passes over the radio tower?      Draw a picture, introducing variables to represent the different quantities involved.    A radio tower which is vertically a distance of 4000 feet from an airplane and horizontally a distance of x from a person. The slant distance from the person to the airplane is labeled s.   An airplane is flying at a constant height of ft. The distance between the person and the airplane and the person and the place on the ground directly below the airplane are changing. We denote those quantities with the variables and , respectively.   As shown, denotes the distance between the man and the position on the ground directly below the airplane. The variable denotes the distance between the man and the plane. Note that both and are functions of time. We do not introduce a variable for the height of the plane because it remains at a constant elevation of ft. Since an object’s height above the ground is measured as the shortest distance between the object and the ground, the line segment of length ft is perpendicular to the line segment of length feet, creating a right triangle.    Since denotes the horizontal distance between the man and the point on the ground below the plane, ⁢ represents the speed of the plane. We are told the speed of the plane is ft\/sec. Therefore, ft\/sec. Since we are asked to find the rate of change in the distance between the man and the plane when the plane is directly above the radio tower, we need to find when ft.    From the figure, we can use the Pythagorean theorem to write an equation relating and : .   Differentiating this equation with respect to time and using the fact that the derivative of a constant is zero, we arrive at the equation .   Find the rate at which the distance between the man and the plane is increasing when the plane is directly over the radio tower. That is, find when ft. Since the speed of the plane is ft\/sec, we know that ft\/sec. We are not given an explicit value for ; however, since we are trying to find when ft, we can use the Pythagorean theorem to determine the distance when and the height is ft. Solving the equation for , we have ft at the time of interest. Using these values, we conclude that is a solution of the equation . Therefore, .  Note: When solving related-rates problems, it is important not to substitute values for the variables too soon. For example,in step 3, we related the variable quantities and by the equation . Since the plane remains at a constant height, it is not necessary to introduce a variable for the height, and we are allowed to use the constant to denote that quantity. However, the other two quantities are changing. If we mistakenly substituted into the equation before differentiating, our equation would have been After differentiating, our equation would become . As a result, we would incorrectly conclude that .     "
},
{
  "id": "sec_Ch4Sec1-4-4",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-4-4",
  "type": "Checkpoint",
  "number": "4.1.7",
  "title": "",
  "body": "  What is the speed of the plane if the distance between the person and the plane is increasing at the rate of ft\/sec?    Set ft\/sec and find .    ft\/sec   "
},
{
  "id": "ex-rocketlaunch",
  "level": "2",
  "url": "sec_Ch4Sec1.html#ex-rocketlaunch",
  "type": "Example",
  "number": "4.1.8",
  "title": "Chapter Opener: A Rocket Launch.",
  "body": " Chapter Opener: A Rocket Launch     \"A photo of rocket launching from the ground next to a camera on a tripod\"   (credit: modification of work by Steve Jurvetson, Wikimedia Commons)    A rocket is launched so that it rises vertically. A camera is positioned ft from the launch pad. When the rocket is ft above the launch pad, its velocity is ft\/sec. Find the necessary rate of change of the camera’s angle as a function of time so that it stays focused on the rocket.      Draw a picture introducing variables.    A right triangle with base labeled 5000 ft, height labeled h, and bottom left angle labeled theta. A rocket is in the top right vertex and a camera in the bottom left vertex.   A camera is positioned ft from the launch pad of the rocket. The height of the rocket and the angle of the camera are changing with respect to time. We denote those quantities with the variables and , respectively.   Let denote the height of the rocket above the launch pad and be the angle betwee the camera lens and the ground.    We are trying to find the rate of change in the angle of the camera with respect to time when the rocket is ft off the ground. That is, we need to find when ft. At that time, we know the velocity of the rocket is ft\/sec.    Now we need to find an equation relating the two quantities that are changing with respect to time: and . How can we create such an equation? Using the fact that we have drawn a right triangle, it is natural to think about trigonometric functions. Recall that is the ratio of the length of the opposite side of the triangle to the length of the adjacent side. Thus, we have . This gives us the equation .    Differentiating this equation with respect to time , we obtain .    We want to find when ft. At this time, we know that ft\/sec. We need to determine . Recall that is the ratio of the length of the hypotenuse to the length of the adjacent side. We know the length of the adjacent side is ft. To determine the length of the hypotenuse, we use the Pythagorean theorem, where the length of one leg is ft., the length of the other leg is ft, and the length of the hypotenuse is feet as shown in the following figure.    A right triangle with base 5000, height 1000, hypotenuse c, and the angle across from the height is theta.    We see that and we conclude the hypotenuse is . Therefore, when , we have . Recall from step 4 that the equation relating to our known values is . When ft, we know that ft\/sec and . Substituting these values into the previous equation, we arrive at the equation . Therefore, rad\/sec.     "
},
{
  "id": "sec_Ch4Sec1-4-6",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-4-6",
  "type": "Checkpoint",
  "number": "4.1.12",
  "title": "",
  "body": "  What rate of change is necessary for the elevation angle of the camera if the camera is placed on the ground at a distance of ft from the launch pad and the velocity of the rocket is ft\/sec when the rocket is ft off the ground?    Try    rad\/sec.   "
},
{
  "id": "sec_Ch4Sec1-4-8",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-4-8",
  "type": "Example",
  "number": "4.1.13",
  "title": "Water Draining from a Funnel.",
  "body": " Water Draining from a Funnel   Water is draining from the bottom of a cone-shaped funnel at the rate of . The height of the funnel is ft and the radius at the top of the funnel is ft. At what rate is the height of the water in the funnel changing when the height of the water is ft?      Draw a picture introducing the variables.    A right circular funnel with maximum radius 1 and height 2. Water is filled up to a maximum radius of r and a heigh of h.   Water is draining from a funnel of height ft and radius ft. The height of the water and the radius of water are changing over time. We denote these quantities with the variables and , respectively.   Let denote the height of the water in the funnel, denote the radius of the water at its surface, and denote the volume of the water.    We need to determine when ft. We know that .    The volume of water in the cone is . From the figure, we see that we have similar triangles. Therefore, the ratio of the sides in the two triangles is the same. Therefore, or . Using this fact, the equation for volume can be simplified to .    Applying the chain rule while differentiating both sides of this equation with respect to time , we obtain .    We want to find when ft. Since water is leaving at the rate of , we know that . Therefore , which implies . It follows that .     "
},
{
  "id": "sec_Ch4Sec1-4-9",
  "level": "2",
  "url": "sec_Ch4Sec1.html#sec_Ch4Sec1-4-9",
  "type": "Checkpoint",
  "number": "4.1.15",
  "title": "",
  "body": "  At what rate is the height of the water changing when the height of the water is ft?    Use \/   ft\/sec.   "
},
{
  "id": "sec_Ch4Sec2",
  "level": "1",
  "url": "sec_Ch4Sec2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Linear Approximations and Differentials ",
  "body": " Linear Approximations and Differentials    Learning Objectives   Describe the linear approximation to a function at a point.  Write the linearization of a given function.  Draw a graph that illustrates the use of differentials to approximate the change in a quantity.  Calculate the relative error and percentage error in using a differential approximation.   We have just seen how derivatives allow us to compare related quantities that are changing over time. In this section, we examine another application of derivatives: the ability to approximate functions locally by linear functions. Linear functions are the easiest functions with which to work, so they provide a useful tool for approximating function values. In addition, the ideas presented in this section are generalized later in the text when we study how to approximate functions by higher-degree polynomials .    Linear Approximation of a Function at a Point  Consider a function that is differentiable at a point Recall that the tangent line to the graph of at is given by the equation   For example, consider the function at Since is differentiable at and we see that Therefore, the tangent line to the graph of at is given by the equation   (a) shows a graph of along with the tangent line to at Note that for near 2, the graph of the tangent line is close to the graph of As a result, we can use the equation of the tangent line to approximate for near 2. For example, if the value of the corresponding point on the tangent line is   The actual value of is given by   Therefore, the tangent line gives us a fairly good approximation of ( (b)). However, note that for values of far from 2, the equation of the tangent line does not give us a good approximation. For example, if the -value of the corresponding point on the tangent line is   whereas the value of the function at is    \"This figure has two parts a and b. In figure a, the line f(x) = 1\/x is shown with its tangent line at x = 2. In figure b, the area near the tangent point is blown up to show how good of an approximation the tangent is near x = 2.\"  (a) The tangent line to at provides a good approximation to for near 2. (b) At the value of on the tangent line to is 0.475. The actual value of is which is approximately 0.47619.   In general, for a differentiable function the equation of the tangent line to at can be used to approximate for near Therefore, we can write   We call the linear function   the linear approximation , or tangent line approximation , of at This function is also known as the linearization of at  To show how useful the linear approximation can be, we look at how to find the linear approximation for at   Linear Approximation of    Find the linear approximation of at and use the approximation to estimate    Since we are looking for the linear approximation at using we know the linear approximation is given by   We need to find and   Therefore, the linear approximation is given by .   Using the linear approximation, we can estimate by writing     \"The function f(x) = the square root of x is shown with its tangent at (9, 3). The tangent appears to be a very good approximation from x = 6 to x = 12.\"  The local linear approximation to at provides an approximation to for near 9.     Analysis  Using a calculator, the value of to four decimal places is 3.0166. The value given by the linear approximation, 3.0167, is very close to the value obtained with a calculator, so it appears that using this linear approximation is a good way to estimate at least for near At the same time, it may seem odd to use a linear approximation when we can just push a few buttons on a calculator to evaluate However, how does the calculator evaluate The calculator uses an approximation! In fact, calculators and computers use approximations all the time to evaluate mathematical expressions; they just use higher-degree approximations.      Find the local linear approximation to at Use it to approximate to five decimal places.    2.00833        Linear Approximation of   Find the linear approximation of at and use it to approximate    First we note that since rad is equivalent to using the linear approximation at seems reasonable. The linear approximation is given by   We see that   Therefore, the linear approximation of at is given by .   To estimate using we must first convert to radians. We have radians, so the estimate for is given by     \"The function f(x) = sin x is shown with its tangent at (pi\/3, square root of 3 \/ 2). The tangent appears to be a very good approximation for x near pi \/ 3.\"  The linear approximation to at provides an approximation to for near       Find the linear approximation for at          Linear approximations may be used in estimating roots and powers. In the next example, we find the linear approximation for at which can be used to estimate roots and powers for real numbers near 1. The same idea can be extended to a function of the form to estimate roots and powers near a different number   Approximating Roots and Powers   Find the linear approximation of at Use this approximation to estimate    The linear approximation at is given by   Because   the linear approximation is given by (a).   We can approximate by evaluating when We conclude that     \"This figure has two parts a and b. In figure a, the line f(x) = (1 + x)3 is shown with its tangent line at (0, 1). In figure b, the area near the tangent point is blown up to show how good of an approximation the tangent is near (0, 1).\"  (a) The linear approximation of at is (b) The actual value of is 1.030301. The linear approximation of at estimates to be 1.03.       Find the linear approximation of at without using the result from the preceding example.              Differentials  We have seen that linear approximations can be used to estimate function values. They can also be used to estimate the amount a function value changes as a result of a small change in the input. To discuss this more formally, we define a related concept: differentials . Differentials provide us with a way of estimating the amount a function changes as a result of a small change in input values.  When we first looked at derivatives, we used the Leibniz notation to represent the derivative of with respect to Although we used the expressions and in this notation, they did not have meaning on their own. Here we see a meaning to the expressions and . Suppose is a differentiable function. Let be an independent variable that can be assigned any nonzero real number, and define the dependent variable by   It is important to notice that is a function of both and The expressions and are called differentials . We can divide both sides of by which yields   This is the familiar expression we have used to denote a derivative. is known as the differential form of .   Computing differentials   For each of the following functions, find and evaluate when and        The key step is calculating the derivative. When we have that, we can obtain directly.   Since we know and therefore When and   Since  This gives us When and        For find          We now connect differentials to linear approximations. Differentials can be used to estimate the change in the value of a function resulting from a small change in input values. Consider a function that is differentiable at point Suppose the input changes by a small amount. We are interested in how much the output changes. If changes from to then the change in is (also denoted and the change in is given by   Instead of calculating the exact change in however, it is often easier to approximate the change in by using a linear approximation. For near  can be approximated by the linear approximation   Therefore, if is small,   That is,   In other words, the actual change in the function if increases from to is approximately the difference between and where is the linear approximation of at By definition of this difference is equal to In summary,   Therefore, we can use the differential to approximate the change in if increases from to We can see this in the following graph.    \"A function y = f(x) is shown along with its tangent line at (a, f(a)). The tangent line is denoted L(x). The x axis is marked with a and a + dx, with a dashed line showing the distance between a and a + dx as dx. The points (a + dx, f(a + dx)) and (a + dx, L(a + dx)) are marked on the curves for y = f(x) and y = L(x), respectively. The distance between f(a) and L(a + dx) is marked as dy = f’(a) dx, and the distance between f(a) and f(a + dx) is marked as Δy = f(a + dx) – f(a).\"  The differential is used to approximate the actual change in if increases from to   We now take a look at how to use differentials to approximate the change in the value of the function that results from a small change in the value of the input. Note the calculation with differentials is much simpler than calculating actual values of functions and the result is very close to what we would obtain with the more exact calculation.   Approximating Change with Differentials   Let Compute and at if    The actual change in if changes from to is given by   The approximate change in is given by Since we have       For find and at if              Calculating the Amount of Error  Any type of measurement is prone to a certain amount of error. In many applications, certain quantities are calculated based on measurements. For example, the area of a circle is calculated by measuring the radius of the circle. An error in the measurement of the radius leads to an error in the computed value of the area. Here we examine this type of error and study how differentials can be used to estimate the error.  Consider a function with an input that is a measured quantity. Suppose the exact value of the measured quantity is but the measured value is We say the measurement error is (or As a result, an error occurs in the calculated quantity This type of error is known as a propagated error and is given by   Since all measurements are prone to some degree of error, we do not know the exact value of a measured quantity, so we cannot calculate the propagated error exactly. However, given an estimate of the accuracy of a measurement, we can use differentials to approximate the propagated error Specifically, if is a differentiable function at the propagated error is   Unfortunately, we do not know the exact value However, we can use the measured value and estimate   In the next example, we look at how differentials can be used to estimate the error in calculating the volume of a box if we assume the measurement of the side length is made with a certain amount of accuracy.   Volume of a Cube   Suppose the side length of a cube is measured to be 5 cm with an accuracy of 0.1 cm.   Use differentials to estimate the error in the computed volume of the cube.  Compute the volume of the cube if the side length is (i) 4.9 cm and (ii) 5.1 cm to compare the estimated error with the actual potential error.      The measurement of the side length is accurate to within cm. Therefore, The volume of a cube is given by which leads to Using the measured side length of 5 cm, we can estimate that Therefore,  If the side length is actually 4.9 cm, then the volume of the cube is If the side length is actually 5.1 cm, then the volume of the cube is Therefore, the actual volume of the cube is between 117.649 and 132.651. Since the side length is measured to be 5 cm, the computed volume is Therefore, the error in the computed volume is That is, We see the estimated error is relatively close to the actual potential error in the computed volume.       Estimate the error in the computed volume of a cube if the side length is measured to be 6 cm with an accuracy of 0.2 cm.    The volume measurement is accurate to within       The measurement error  and the propagated error are absolute errors. We are typically interested in the size of an error relative to the size of the quantity being measured or calculated. Given an absolute error for a particular quantity, we define the relative error as where is the actual value of the quantity. The percentage error is the relative error expressed as a percentage. For example, if we measure the height of a ladder to be 63 in. when the actual height is 62 in., the absolute error is 1 in. but the relative error is or By comparison, if we measure the width of a piece of cardboard to be 8.25 in. when the actual width is 8 in., our absolute error is in., whereas the relative error is or Therefore, the percentage error in the measurement of the cardboard is larger, even though 0.25 in. is less than 1 in.   Relative and Percentage Error   An astronaut using a camera measures the radius of Earth as 4000 mi with an error of mi. Let’s use differentials to estimate the relative and percentage error of using this radius measurement to calculate the volume of Earth, assuming the planet is a perfect sphere.    If the measurement of the radius is accurate to within we have   Since the volume of a sphere is given by we have   Using the measured radius of 4000 mi, we can estimate   To estimate the relative error, consider Since we do not know the exact value of the volume use the measured radius to estimate We obtain Therefore the relative error satisfies   which simplifies to   The relative error is 0.06 and the percentage error is     Using differentials to approximate propagated error   A steel ball bearing is to be manufactured with a diameter of  2  . The manufacturing process has a tolerance of   in the diameter. Given that the density of steel is about  7.85  , estimate the propagated error in the mass of the ball bearing.     The mass of a ball bearing is found using the equation mass = volume density. In this situation the mass function is a product of the radius of the ball bearing, hence it is . The differential of the mass is .  The radius is to be  1  ; the manufacturing tolerance in the radius is   , or   . The propagated error is approximately:   Is this error significant? It certainly depends on the application, but we can get an idea by computing the relative error . The ratio between amount of error to the total mass is , or .  We leave it to the reader to confirm this, but if the diameter of the ball was supposed to be  10  , the same manufacturing tolerance would give a propagated error in mass of   , which corresponds to a percent error of . While the amount of error is much greater ( ), the percent error is much lower.      Determine the percentage error if the radius of Earth is measured to be 3950 mi with an error of mi.    7.6%    Use the fact that to find     "
},
{
  "id": "CNX_Calc_Figure_04_02_001",
  "level": "2",
  "url": "sec_Ch4Sec2.html#CNX_Calc_Figure_04_02_001",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": "  \"This figure has two parts a and b. In figure a, the line f(x) = 1\/x is shown with its tangent line at x = 2. In figure b, the area near the tangent point is blown up to show how good of an approximation the tangent is near x = 2.\"  (a) The tangent line to at provides a good approximation to for near 2. (b) At the value of on the tangent line to is 0.475. The actual value of is which is approximately 0.47619.  "
},
{
  "id": "sec_Ch4Sec2-3-18",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-3-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear approximation tangent line approximation linearization "
},
{
  "id": "fs-id1165043051419",
  "level": "2",
  "url": "sec_Ch4Sec2.html#fs-id1165043051419",
  "type": "Example",
  "number": "4.2.2",
  "title": "Linear Approximation of <span class=\"process-math\">\\(\\sqrt{x}\\)<\/span>.",
  "body": " Linear Approximation of    Find the linear approximation of at and use the approximation to estimate    Since we are looking for the linear approximation at using we know the linear approximation is given by   We need to find and   Therefore, the linear approximation is given by .   Using the linear approximation, we can estimate by writing     \"The function f(x) = the square root of x is shown with its tangent at (9, 3). The tangent appears to be a very good approximation from x = 6 to x = 12.\"  The local linear approximation to at provides an approximation to for near 9.     Analysis  Using a calculator, the value of to four decimal places is 3.0166. The value given by the linear approximation, 3.0167, is very close to the value obtained with a calculator, so it appears that using this linear approximation is a good way to estimate at least for near At the same time, it may seem odd to use a linear approximation when we can just push a few buttons on a calculator to evaluate However, how does the calculator evaluate The calculator uses an approximation! In fact, calculators and computers use approximations all the time to evaluate mathematical expressions; they just use higher-degree approximations.   "
},
{
  "id": "sec_Ch4Sec2-3-21",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-3-21",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "",
  "body": "  Find the local linear approximation to at Use it to approximate to five decimal places.    2.00833      "
},
{
  "id": "sec_Ch4Sec2-3-22",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-3-22",
  "type": "Example",
  "number": "4.2.6",
  "title": "Linear Approximation of <span class=\"process-math\">\\(\\sin x\\)<\/span>.",
  "body": " Linear Approximation of   Find the linear approximation of at and use it to approximate    First we note that since rad is equivalent to using the linear approximation at seems reasonable. The linear approximation is given by   We see that   Therefore, the linear approximation of at is given by .   To estimate using we must first convert to radians. We have radians, so the estimate for is given by     \"The function f(x) = sin x is shown with its tangent at (pi\/3, square root of 3 \/ 2). The tangent appears to be a very good approximation for x near pi \/ 3.\"  The linear approximation to at provides an approximation to for near    "
},
{
  "id": "sec_Ch4Sec2-3-23",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-3-23",
  "type": "Checkpoint",
  "number": "4.2.8",
  "title": "",
  "body": "  Find the linear approximation for at         "
},
{
  "id": "fs-id1165043161464",
  "level": "2",
  "url": "sec_Ch4Sec2.html#fs-id1165043161464",
  "type": "Example",
  "number": "4.2.9",
  "title": "Approximating Roots and Powers.",
  "body": " Approximating Roots and Powers   Find the linear approximation of at Use this approximation to estimate    The linear approximation at is given by   Because   the linear approximation is given by (a).   We can approximate by evaluating when We conclude that     \"This figure has two parts a and b. In figure a, the line f(x) = (1 + x)3 is shown with its tangent line at (0, 1). In figure b, the area near the tangent point is blown up to show how good of an approximation the tangent is near (0, 1).\"  (a) The linear approximation of at is (b) The actual value of is 1.030301. The linear approximation of at estimates to be 1.03.    "
},
{
  "id": "sec_Ch4Sec2-3-26",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-3-26",
  "type": "Checkpoint",
  "number": "4.2.11",
  "title": "",
  "body": "  Find the linear approximation of at without using the result from the preceding example.         "
},
{
  "id": "sec_Ch4Sec2-4-2",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentials "
},
{
  "id": "sec_Ch4Sec2-4-7",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential form "
},
{
  "id": "fs-id1165043166548",
  "level": "2",
  "url": "sec_Ch4Sec2.html#fs-id1165043166548",
  "type": "Example",
  "number": "4.2.12",
  "title": "Computing differentials.",
  "body": " Computing differentials   For each of the following functions, find and evaluate when and        The key step is calculating the derivative. When we have that, we can obtain directly.   Since we know and therefore When and   Since  This gives us When and     "
},
{
  "id": "sec_Ch4Sec2-4-9",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-4-9",
  "type": "Checkpoint",
  "number": "4.2.13",
  "title": "",
  "body": "  For find         "
},
{
  "id": "CNX_Calc_Figure_04_02_005",
  "level": "2",
  "url": "sec_Ch4Sec2.html#CNX_Calc_Figure_04_02_005",
  "type": "Figure",
  "number": "4.2.14",
  "title": "",
  "body": "  \"A function y = f(x) is shown along with its tangent line at (a, f(a)). The tangent line is denoted L(x). The x axis is marked with a and a + dx, with a dashed line showing the distance between a and a + dx as dx. The points (a + dx, f(a + dx)) and (a + dx, L(a + dx)) are marked on the curves for y = f(x) and y = L(x), respectively. The distance between f(a) and L(a + dx) is marked as dy = f’(a) dx, and the distance between f(a) and f(a + dx) is marked as Δy = f(a + dx) – f(a).\"  The differential is used to approximate the actual change in if increases from to  "
},
{
  "id": "fs-id1165043349128",
  "level": "2",
  "url": "sec_Ch4Sec2.html#fs-id1165043349128",
  "type": "Example",
  "number": "4.2.15",
  "title": "Approximating Change with Differentials.",
  "body": " Approximating Change with Differentials   Let Compute and at if    The actual change in if changes from to is given by   The approximate change in is given by Since we have    "
},
{
  "id": "sec_Ch4Sec2-4-24",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-4-24",
  "type": "Checkpoint",
  "number": "4.2.16",
  "title": "",
  "body": "  For find and at if           "
},
{
  "id": "sec_Ch4Sec2-5-3",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "propagated error "
},
{
  "id": "fs-id1165043397423",
  "level": "2",
  "url": "sec_Ch4Sec2.html#fs-id1165043397423",
  "type": "Example",
  "number": "4.2.17",
  "title": "Volume of a Cube.",
  "body": " Volume of a Cube   Suppose the side length of a cube is measured to be 5 cm with an accuracy of 0.1 cm.   Use differentials to estimate the error in the computed volume of the cube.  Compute the volume of the cube if the side length is (i) 4.9 cm and (ii) 5.1 cm to compare the estimated error with the actual potential error.      The measurement of the side length is accurate to within cm. Therefore, The volume of a cube is given by which leads to Using the measured side length of 5 cm, we can estimate that Therefore,  If the side length is actually 4.9 cm, then the volume of the cube is If the side length is actually 5.1 cm, then the volume of the cube is Therefore, the actual volume of the cube is between 117.649 and 132.651. Since the side length is measured to be 5 cm, the computed volume is Therefore, the error in the computed volume is That is, We see the estimated error is relatively close to the actual potential error in the computed volume.    "
},
{
  "id": "sec_Ch4Sec2-5-11",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-5-11",
  "type": "Checkpoint",
  "number": "4.2.18",
  "title": "",
  "body": "  Estimate the error in the computed volume of a cube if the side length is measured to be 6 cm with an accuracy of 0.2 cm.    The volume measurement is accurate to within      "
},
{
  "id": "sec_Ch4Sec2-5-12",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-5-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative error percentage error "
},
{
  "id": "fs-id1165043087612",
  "level": "2",
  "url": "sec_Ch4Sec2.html#fs-id1165043087612",
  "type": "Example",
  "number": "4.2.19",
  "title": "Relative and Percentage Error.",
  "body": " Relative and Percentage Error   An astronaut using a camera measures the radius of Earth as 4000 mi with an error of mi. Let’s use differentials to estimate the relative and percentage error of using this radius measurement to calculate the volume of Earth, assuming the planet is a perfect sphere.    If the measurement of the radius is accurate to within we have   Since the volume of a sphere is given by we have   Using the measured radius of 4000 mi, we can estimate   To estimate the relative error, consider Since we do not know the exact value of the volume use the measured radius to estimate We obtain Therefore the relative error satisfies   which simplifies to   The relative error is 0.06 and the percentage error is   "
},
{
  "id": "ex_diffal4",
  "level": "2",
  "url": "sec_Ch4Sec2.html#ex_diffal4",
  "type": "Example",
  "number": "4.2.20",
  "title": "Using differentials to approximate propagated error.",
  "body": " Using differentials to approximate propagated error   A steel ball bearing is to be manufactured with a diameter of  2  . The manufacturing process has a tolerance of   in the diameter. Given that the density of steel is about  7.85  , estimate the propagated error in the mass of the ball bearing.     The mass of a ball bearing is found using the equation mass = volume density. In this situation the mass function is a product of the radius of the ball bearing, hence it is . The differential of the mass is .  The radius is to be  1  ; the manufacturing tolerance in the radius is   , or   . The propagated error is approximately:   Is this error significant? It certainly depends on the application, but we can get an idea by computing the relative error . The ratio between amount of error to the total mass is , or .  We leave it to the reader to confirm this, but if the diameter of the ball was supposed to be  10  , the same manufacturing tolerance would give a propagated error in mass of   , which corresponds to a percent error of . While the amount of error is much greater ( ), the percent error is much lower.   "
},
{
  "id": "sec_Ch4Sec2-5-15",
  "level": "2",
  "url": "sec_Ch4Sec2.html#sec_Ch4Sec2-5-15",
  "type": "Checkpoint",
  "number": "4.2.21",
  "title": "",
  "body": "  Determine the percentage error if the radius of Earth is measured to be 3950 mi with an error of mi.    7.6%    Use the fact that to find   "
},
{
  "id": "sec_Ch4Sec3",
  "level": "1",
  "url": "sec_Ch4Sec3.html",
  "type": "Section",
  "number": "4.3",
  "title": "Maxima and Minima",
  "body": " Maxima and Minima   Learning Objectives   Define absolute extrema.  Define local extrema.  Explain how to find the critical points of a function over an interval.  Describe how to use critical points to locate absolute extrema over an interval.   Given a particular function, we are often interested in determining the largest and smallest values of the function. This information is important in creating accurate graphs. Finding the maximum and minimum values of a function also has practical significance because we can use this method to solve optimization problems, such as maximizing profit, minimizing the amount of material used in manufacturing an aluminum can, or finding the maximum height a rocket can reach. In this section, we look at how to use derivatives to find the largest and smallest values for a function.    Absolute Extrema  Consider the function over the interval As  Therefore, the function does not have a largest value. However, since for all real numbers and when the function has a smallest value, 1, when We say that 1 is the absolute minimum of and it occurs at We say that does not have an absolute maximum (see the following figure).    \"The function f(x) = x2 + 1 is graphed, and its minimum of 1 is seen to be at x = 0.\"  The given function has an absolute minimum of 1 at The function does not have an absolute maximum.    Let be a function defined over an interval and let We say has an absolute maximum on at if for all We say has an absolute minimum on at if for all If has an absolute maximum on at or an absolute minimum on at we say has an absolute extremum on at   Before proceeding, let’s note two important issues regarding this definition. First, the term absolute here does not refer to absolute value. An absolute extremum may be positive, negative, or zero. Second, if a function has an absolute extremum over an interval at the absolute extremum is The real number is a point in the domain at which the absolute extremum occurs. For example, consider the function over the interval Since   for all real numbers we say has an absolute maximum over at The absolute maximum is It occurs at as shown in (b).  A function may have both an absolute maximum and an absolute minimum, just one extremum, or neither. shows several functions and some of the different possibilities regarding absolute extrema. However, the following theorem, called the Extreme Value Theorem , guarantees that a continuous function over a closed, bounded interval has both an absolute maximum and an absolute minimum.    \"This figure has six parts a, b, c, d, e, and f. In figure a, the line f(x) = x3 is shown, and it is noted that it has no absolute minimum and no absolute maximum. In figure b, the line f(x) = 1\/(x2 + 1) is shown, which is near 0 for most of its length and rises to a bump at (0, 1); it has no absolute minimum, but does have an absolute maximum of 1 at x = 0. In figure c, the line f(x) = cos x is shown, which has absolute minimums of −1 at ±π, ±3π, … and absolute maximums of 1 at 0, ±2π, ±4π, …. In figure d, the piecewise function f(x) = 2 – x2 for 0 ≤ x \\lt 2 and x – 3 for 2 ≤ x ≤ 4 is shown, with absolute maximum of 2 at x = 0 and no absolute minimum. In figure e, the function f(x) = (x – 2)2 is shown on [1, 4], which has absolute maximum of 4 at x = 4 and absolute minimum of 0 at x = 2. In figure f, the function f(x) = x\/(2 − x) is shown on [0, 2), with absolute minimum of 0 at x = 0 and no absolute maximum.\"  Graphs (a), (b), and (c) show several possibilities for absolute extrema for functions with a domain of Graphs (d), (e), and (f) show several possibilities for absolute extrema for functions with a domain that is a bounded interval.     Extreme Value Theorem  If is a continuous function over the closed, bounded interval then there is a point in at which has an absolute maximum over and there is a point in at which has an absolute minimum over   The proof of the extreme value theorem is beyond the scope of this text. Typically, it is proved in a course on real analysis. There are a couple of key points to note about the statement of this theorem. For the extreme value theorem to apply, the function must be continuous over a closed, bounded interval. If the interval is open or the function has even one point of discontinuity, the function may not have an absolute maximum or absolute minimum over For example, consider the functions shown in (d), (e), and (f). All three of these functions are defined over bounded intervals. However, the function in graph (e) is the only one that has both an absolute maximum and an absolute minimum over its domain. The extreme value theorem cannot be applied to the functions in graphs (d) and (f) because neither of these functions is continuous over a closed, bounded interval. Although the function in graph (d) is defined over the closed interval the function is discontinuous at The function has an absolute maximum over but does not have an absolute minimum. The function in graph (f) is continuous over the half-open interval but is not defined at and therefore is not continuous over a closed, bounded interval. The function has an absolute minimum over but does not have an absolute maximum over These two graphs illustrate why a function over a bounded interval may fail to have an absolute maximum and\/or absolute minimum.  Before looking at how to find absolute extrema, let’s examine the related concept of local extrema. This idea is useful in determining where absolute extrema occur.    Local Extrema and Critical Points  Consider the function shown in . The graph can be described as two mountains with a valley in the middle. The absolute maximum value of the function occurs at the higher peak, at However, is also a point of interest. Although is not the largest value of the value is larger than for all near 0. We say has a local maximum at Similarly, the function does not have an absolute minimum, but it does have a local minimum at because is less than for near 1.    \"The function f(x) is shown, which curves upward from quadrant III, slows down in quadrant II, achieves a local maximum on the y-axis, decreases to achieve a local minimum in quadrant I at x = 1, increases to a local maximum at x = 2 that is greater than the other local maximum, and then decreases rapidly through quadrant IV.\"  This function has two local maxima and one local minimum. The local maximum at is also the absolute maximum.     A function has a local maximum at if there exists an open interval containing such that is contained in the domain of and for all A function has a local minimum at if there exists an open interval containing such that is contained in the domain of and for all A function has a local extremum at if has a local maximum at or has a local minimum at   Note that if has an absolute extremum at and is defined over an interval containing then is also considered a local extremum. If an absolute extremum for a function occurs at an endpoint, we do not consider that to be a local extremum, but instead refer to that as an endpoint extremum.    How to identify types of maxima and minima for a fuction with domain .   Given the graph of a function it is sometimes easy to see where a local maximum or local minimum occurs. However, it is not always easy to see, since the interesting features on the graph of a function may not be visible because they occur at a very small scale. Also, we may not have a graph of the function. In these cases, how can we use a formula for a function to determine where these extrema occur?  To answer this question, let’s look at again. The local extrema occur at  and Notice that at and the derivative At the derivative does not exist, since the function has a corner there. In fact, if has a local extremum at a point the derivative must satisfy one of the following conditions: either or is undefined. Such a value is known as a critical point and it is important in finding extreme values for functions.   Let be an interior point in the domain of We say that is a critical point of if or is undefined.   As mentioned earlier, if has a local extremum at a point then must be a critical point of This fact is known as Fermat’s theorem .    Fermat’s Theorem  If has a local extremum at and is differentiable at then   Suppose has a local extremum at and is differentiable at We need to show that To do this, we will show that and and therefore Since has a local extremum at  has a local maximum or local minimum at Suppose has a local maximum at The case in which has a local minimum at can be handled similarly. There then exists an open interval such that for all Since is differentiable at from the definition of the derivative, we know that   Since this limit exists, both one-sided limits also exist and equal Therefore,   and   Since is a local maximum, we see that for near Therefore, for near but we have From we conclude that Similarly, it can be shown that Therefore,    From Fermat’s theorem, we conclude that if has a local extremum at then either or is undefined. In other words, local extrema can only occur at critical points.  Note this theorem does not claim that a function must have a local extremum at a critical point. Rather, it states that critical points are candidates for local extrema. For example, consider the function We have when Therefore, is a critical point. However, is increasing over and thus does not have a local extremum at In , we see several different possibilities for critical points. In some of these cases, the functions have local extrema at critical points, whereas in other cases the functions do not. Note that these graphs do not show all possibilities for the behavior of a function at a critical point.    \"This figure has five parts a, b, c, d, and e. In figure a, a parabola is shown facing down in quadrant I; there is a horizontal tangent line at the local maximum marked f’(c) = 0. In figure b, there is a function drawn with an asymptote at c, meaning that the function increases toward infinity on both sides of c; it is noted that f’(c) is undefined. In figure c, a version of the absolute value graph is shown that has been shifted so that its minimum is in quadrant I with x = c. It is noted that f’(c) is undefined. In figure d, a version of the function f(x) = x3 is shown that has been shifted so that its inflection point is in quadrant I with x = c. Its inflection point at (c, f(c)) has a horizontal line through it, and it is noted that f’(c) = 0. In figure e, a version of the function f(x) = x1\/3 is shown that has been shifted so that its inflection point is in quadrant I with x = c. Its inflection point at (c, f(c)) has a vertical line through it, and it is noted that f’(c) is undefined.\"  (a–e) A function has a critical point at if or is undefined. A function may or may not have a local extremum at a critical point.   Later in this chapter we look at analytical methods for determining whether a function actually has a local extremum at a critical point. For now, let’s turn our attention to finding critical points. We will use graphical observations to determine whether a critical point is associated with a local extremum.   Locating Critical Points   For each of the following functions, find all critical points. Use a graphing utility to determine whether the function has a local extremum at each of the critical points.          The derivative is defined for all real numbers Therefore, we only need to find the values for where Since the critical points are and From the graph of in , we see that has a local maximum at and a local minimum at    \"The function f(x) = (1\/3) x3 – (5\/2) x2 + 4x is graphed. The function has local maximum at x = 1 and local minimum at x = 4.\"  This function has a local maximum and a local minimum.   Using the chain rule, we see the derivative is Therefore, has critical points when and when We conclude that the critical points are From the graph of in , we see that has a local (and absolute) minimum at but does not have a local extremum at or    \"The function f(x) = (x2 − 1)3 is graphed. The function has local minimum at x = 0, and inflection points at x = ±1.\">  This function has three critical points:  and The function has a local (and absolute) minimum at but does not have extrema at the other two critical points.   By the chain rule, we see that the derivative is The derivative is defined everywhere. Therefore, we only need to find values for where Solving we see that which implies Therefore, the critical points are From the graph of in , we see that has an absolute maximum at and an absolute minimum at Hence, has a local maximum at and a local minimum at (Note that if has an absolute extremum over an interval at a point that is not an endpoint of then has a local extremum at    \"The function f(x) = 4x\/(1 + x2) is graphed. The function has local\/absolute maximum at x = 1 and local\/absolute minimum at x = −1.\"  This function has an absolute maximum and an absolute minimum.        Find all critical points for        Calculate     Locating Absolute Extrema  The extreme value theorem states that a continuous function over a closed, bounded interval has an absolute maximum and an absolute minimum. As shown in , one or both of these absolute extrema could occur at an endpoint. If an absolute extremum does not occur at an endpoint, however, it must occur at an interior point, in which case the absolute extremum is a local extremum. Therefore, by , the point at which the local extremum occurs must be a critical point. We summarize this result in the following theorem.   Location of Absolute Extrema  Let be a continuous function over a closed, bounded interval The absolute maximum of over and the absolute minimum of over must occur at endpoints of or at critical points of in   With this idea in mind, let’s examine a procedure for locating absolute extrema.   Locating Absolute Extrema over a Closed Interval  Consider a continuous function defined over the closed interval   Evaluate at the endpoints and  Find all critical points of that lie over the interval and evaluate at those critical points.  Compare all values found in (1) and (2). From , the absolute extrema must occur at endpoints or critical points. Therefore, the largest of these values is the absolute maximum of The smallest of these values is the absolute minimum of    Now let’s look at how to use this strategy to find the absolute maximum and absolute minimum values for continuous functions.   Locating Absolute Extrema   For each of the following functions, find the absolute maximum and absolute minimum over the specified interval and state where those values occur.   over  over      Step 1. Evaluate at the endpoints and  Step 2. Since  is defined for all real numbers Therefore, there are no critical points where the derivative is undefined. It remains to check where Since at and is in the interval  is a candidate for an absolute extremum of over We evaluate and find Step 3. We set up the following table to compare the values found in steps 1 and 2.      Conclusion           Absolute maximum      Absolute minimum    From the table, we find that the absolute maximum of over the interval [1, 3] is and it occurs at The absolute minimum of over the interval [1, 3] is and it occurs at as shown in the following graph.   \"The function f(x) = – x2 + 3x – 2 is graphed from (1, 0) to (3, −2), with its maximum marked at (3\/2, 1\/4).\"  This function has both an absolute maximum and an absolute minimum.   Step 1. Evaluate at the endpoints and  Step 2. The derivative of is given by for The derivative is zero when which implies The derivative is undefined at Therefore, the critical points of are The point is an endpoint, so we already evaluated in step 1. The point is not in the interval of interest, so we need only evaluate We find that Step 3. We compare the values found in steps 1 and 2, in the following table.      Conclusion      Absolute maximum      Absolute minimum         We conclude that the absolute maximum of over the interval [0, 2] is zero, and it occurs at The absolute minimum is -2, and it occurs at as shown in the following graph.   \"The function f(x) = x2 – 3x2\/3 is graphed from (0, 0) to (2, −0.762), with its minimum marked at (1, −2).\"  This function has an absolute maximum at an endpoint of the interval.       Find the absolute maximum and absolute minimum of over the interval    The absolute maximum is and it occurs at The absolute minimum is and it occurs at    Look for critical points. Evaluate at all critical points and at the endpoints.    At this point, we know how to locate absolute extrema for continuous functions over closed intervals.  We will next determine the location and existence of absolute extrema on intervals that are not closed. Let us consider the existence of absolute extrema by analyzing the graph of on the interval (1,5) as shown in . Note that here the interval (1,5) is not closed. We can see that the absolute minimum exists and is . If an absolute maximum existed, it would be at , but is not defined at since it is not included in our given interval. Here, we would say that the absolute maximum of over the interval (1,5) DNE.    \"The figure shows the graph of on the interval from to . There are open circles at the endpoints.\"  The given function has an absolute minimum of -4 at The function does not have an absolute maximum.   A problem-solving strategy has been outlined below for intervals that are not closed.   Locating and Determining the Existence of Absolute Extrema over an Interval that is not Closed  Consider a continuous function defined over an interval that is not closed i.e.,   We would like to evaluate at the endpoints and but they may not be included in the interval. As a result, we may need to take a one sided limit. The proceedure is outlined below:  If the left endpoint is not included in the interval (i.e., the given interval is (a,b]), then evaluate and  If the right endpoint is not included in the interval (i.e., the given interval is [a,b)), then evaluate and  If both the left and right endpoints are not included in the interval (i.e., the given interval is (a,b)), then evaluate and    Find all critical points of that lie over the interval and evaluate at those critical points.  Compare all values found in (1) and (2). We know that the absolute extrema must occur at endpoints or critical points. However, if absolute extrema occurs at an endpoint not included in the interval, we say the absolute maximum or absolute minimum DNE. Therefore, the largest of these values is the absolute maximum of if it occurred at a point included in the interval. The smallest of these values is the absolute minimum of if it occurred at a point included in the interval. Otherwise, the absolute maximum or absolute minimum DNE.     Finding Absolute Extrema Over Various Intervals  Find the absolute maximum and absolute minimum of over the following intervals.   [-7,1]  (-7,1]  [-7,1)     Step 1. Evaluate at the endpoints and  Step 2. Using the product rule, Note that is defined for all real numbers Therefore, there are no critical points where the derivative is undefined. It remains to check where We know that for all real numbers . Thus, at and note that it is in the intervals  is a candidate for an absolute extremum of over the intervals We evaluate and find Step 3. We set up the following tables to compare the values found in steps 1 and 2.   For the interval       Conclusion           Absolute minimum      Absolute maximum    From the table, we find that the absolute maximum of over the interval [-7,1] is and it occurs at The absolute minimum of over the interval [-7, 1] is and it occurs at as shown in the following graph.   \"The function is graphed on the interval [-7,1] with both closed endpoints at x=-7 and x=1.\"   on the interval [-7,1].    For the interval       Conclusion           Absolute minimum      Absolute maximum    From the table, we find that the absolute maximum of over the interval (-7,1] is and it occurs at The absolute minimum of over the interval (-7, 1] is and it occurs at as shown in the following graph.   \"The function is graphed on the interval (-7,1] with an open left endpoint at x=-7 and closed right endpoint at x=1.\"   on the interval (-7,1].    For the interval       Conclusion           Absolute minimum      Absolute maximum DNE    From the table, we find that the absolute maximum of over the interval [-7,1) DNE since is not included in the interval. The absolute minimum of over the interval [-7, 1) is and it occurs at as shown in the following graph.   \"The function is graphed on the interval [-7,1) with a closed left endpoint at x=-7 and open right endpoint at x=1.\"   on the interval [-7,1).        Find the absolute maximum and absolute minimum of over the interval   From , we obtain a critical value at which is included in the interval . The results are summarized in the following table.       Conclusion           Absolute maximum      Absolute minimum DNE       Look for critical points. Evaluate at all critical points and at the endpoints.    In this section, we determined the value and existence of absolute extrema over any given interval. We also defined local extrema and determined that if a function has a local extremum at a point then must be a critical point of However, being a critical point is not a sufficient condition for to have a local extremum at Later in this chapter, we show how to determine whether a function actually has a local extremum at a critical point. First, however, we need to introduce the Mean Value Theorem, which will help as we analyze the behavior of the graph of a function.   "
},
{
  "id": "CNX_Calc_Figure_04_03_001",
  "level": "2",
  "url": "sec_Ch4Sec3.html#CNX_Calc_Figure_04_03_001",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": "  \"The function f(x) = x2 + 1 is graphed, and its minimum of 1 is seen to be at x = 0.\"  The given function has an absolute minimum of 1 at The function does not have an absolute maximum.  "
},
{
  "id": "sec_Ch4Sec3-3-4",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-3-4",
  "type": "Definition",
  "number": "4.3.2",
  "title": "",
  "body": " Let be a function defined over an interval and let We say has an absolute maximum on at if for all We say has an absolute minimum on at if for all If has an absolute maximum on at or an absolute minimum on at we say has an absolute extremum on at  "
},
{
  "id": "sec_Ch4Sec3-3-8",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Extreme Value Theorem "
},
{
  "id": "CNX_Calc_Figure_04_03_002",
  "level": "2",
  "url": "sec_Ch4Sec3.html#CNX_Calc_Figure_04_03_002",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": "  \"This figure has six parts a, b, c, d, e, and f. In figure a, the line f(x) = x3 is shown, and it is noted that it has no absolute minimum and no absolute maximum. In figure b, the line f(x) = 1\/(x2 + 1) is shown, which is near 0 for most of its length and rises to a bump at (0, 1); it has no absolute minimum, but does have an absolute maximum of 1 at x = 0. In figure c, the line f(x) = cos x is shown, which has absolute minimums of −1 at ±π, ±3π, … and absolute maximums of 1 at 0, ±2π, ±4π, …. In figure d, the piecewise function f(x) = 2 – x2 for 0 ≤ x \\lt 2 and x – 3 for 2 ≤ x ≤ 4 is shown, with absolute maximum of 2 at x = 0 and no absolute minimum. In figure e, the function f(x) = (x – 2)2 is shown on [1, 4], which has absolute maximum of 4 at x = 4 and absolute minimum of 0 at x = 2. In figure f, the function f(x) = x\/(2 − x) is shown on [0, 2), with absolute minimum of 0 at x = 0 and no absolute maximum.\"  Graphs (a), (b), and (c) show several possibilities for absolute extrema for functions with a domain of Graphs (d), (e), and (f) show several possibilities for absolute extrema for functions with a domain that is a bounded interval.  "
},
{
  "id": "sec_Ch4Sec3-3-10",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-3-10",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "Extreme Value Theorem.",
  "body": "  Extreme Value Theorem  If is a continuous function over the closed, bounded interval then there is a point in at which has an absolute maximum over and there is a point in at which has an absolute minimum over  "
},
{
  "id": "CNX_Calc_Figure_04_03_003",
  "level": "2",
  "url": "sec_Ch4Sec3.html#CNX_Calc_Figure_04_03_003",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": "  \"The function f(x) is shown, which curves upward from quadrant III, slows down in quadrant II, achieves a local maximum on the y-axis, decreases to achieve a local minimum in quadrant I at x = 1, increases to a local maximum at x = 2 that is greater than the other local maximum, and then decreases rapidly through quadrant IV.\"  This function has two local maxima and one local minimum. The local maximum at is also the absolute maximum.  "
},
{
  "id": "sec_Ch4Sec3-4-4",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-4-4",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": "  A function has a local maximum at if there exists an open interval containing such that is contained in the domain of and for all A function has a local minimum at if there exists an open interval containing such that is contained in the domain of and for all A function has a local extremum at if has a local maximum at or has a local minimum at  "
},
{
  "id": "fig-localextrema",
  "level": "2",
  "url": "sec_Ch4Sec3.html#fig-localextrema",
  "type": "Figure",
  "number": "4.3.7",
  "title": "",
  "body": "  How to identify types of maxima and minima for a fuction with domain .  "
},
{
  "id": "sec_Ch4Sec3-4-9",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-4-9",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": " Let be an interior point in the domain of We say that is a critical point of if or is undefined.  "
},
{
  "id": "sec_Ch4Sec3-4-10",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-4-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fermat’s theorem "
},
{
  "id": "fs-id1165041796868",
  "level": "2",
  "url": "sec_Ch4Sec3.html#fs-id1165041796868",
  "type": "Theorem",
  "number": "4.3.9",
  "title": "Fermat’s Theorem.",
  "body": "  Fermat’s Theorem  If has a local extremum at and is differentiable at then   Suppose has a local extremum at and is differentiable at We need to show that To do this, we will show that and and therefore Since has a local extremum at  has a local maximum or local minimum at Suppose has a local maximum at The case in which has a local minimum at can be handled similarly. There then exists an open interval such that for all Since is differentiable at from the definition of the derivative, we know that   Since this limit exists, both one-sided limits also exist and equal Therefore,   and   Since is a local maximum, we see that for near Therefore, for near but we have From we conclude that Similarly, it can be shown that Therefore,   "
},
{
  "id": "CNX_Calc_Figure_04_03_004",
  "level": "2",
  "url": "sec_Ch4Sec3.html#CNX_Calc_Figure_04_03_004",
  "type": "Figure",
  "number": "4.3.10",
  "title": "",
  "body": "  \"This figure has five parts a, b, c, d, and e. In figure a, a parabola is shown facing down in quadrant I; there is a horizontal tangent line at the local maximum marked f’(c) = 0. In figure b, there is a function drawn with an asymptote at c, meaning that the function increases toward infinity on both sides of c; it is noted that f’(c) is undefined. In figure c, a version of the absolute value graph is shown that has been shifted so that its minimum is in quadrant I with x = c. It is noted that f’(c) is undefined. In figure d, a version of the function f(x) = x3 is shown that has been shifted so that its inflection point is in quadrant I with x = c. Its inflection point at (c, f(c)) has a horizontal line through it, and it is noted that f’(c) = 0. In figure e, a version of the function f(x) = x1\/3 is shown that has been shifted so that its inflection point is in quadrant I with x = c. Its inflection point at (c, f(c)) has a vertical line through it, and it is noted that f’(c) is undefined.\"  (a–e) A function has a critical point at if or is undefined. A function may or may not have a local extremum at a critical point.  "
},
{
  "id": "fs-id1165041979119",
  "level": "2",
  "url": "sec_Ch4Sec3.html#fs-id1165041979119",
  "type": "Example",
  "number": "4.3.11",
  "title": "Locating Critical Points.",
  "body": " Locating Critical Points   For each of the following functions, find all critical points. Use a graphing utility to determine whether the function has a local extremum at each of the critical points.          The derivative is defined for all real numbers Therefore, we only need to find the values for where Since the critical points are and From the graph of in , we see that has a local maximum at and a local minimum at    \"The function f(x) = (1\/3) x3 – (5\/2) x2 + 4x is graphed. The function has local maximum at x = 1 and local minimum at x = 4.\"  This function has a local maximum and a local minimum.   Using the chain rule, we see the derivative is Therefore, has critical points when and when We conclude that the critical points are From the graph of in , we see that has a local (and absolute) minimum at but does not have a local extremum at or    \"The function f(x) = (x2 − 1)3 is graphed. The function has local minimum at x = 0, and inflection points at x = ±1.\">  This function has three critical points:  and The function has a local (and absolute) minimum at but does not have extrema at the other two critical points.   By the chain rule, we see that the derivative is The derivative is defined everywhere. Therefore, we only need to find values for where Solving we see that which implies Therefore, the critical points are From the graph of in , we see that has an absolute maximum at and an absolute minimum at Hence, has a local maximum at and a local minimum at (Note that if has an absolute extremum over an interval at a point that is not an endpoint of then has a local extremum at    \"The function f(x) = 4x\/(1 + x2) is graphed. The function has local\/absolute maximum at x = 1 and local\/absolute minimum at x = −1.\"  This function has an absolute maximum and an absolute minimum.     "
},
{
  "id": "sec_Ch4Sec3-4-17",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-4-17",
  "type": "Checkpoint",
  "number": "4.3.15",
  "title": "",
  "body": "  Find all critical points for        Calculate  "
},
{
  "id": "fs-id1165040757685",
  "level": "2",
  "url": "sec_Ch4Sec3.html#fs-id1165040757685",
  "type": "Theorem",
  "number": "4.3.16",
  "title": "Location of Absolute Extrema.",
  "body": " Location of Absolute Extrema  Let be a continuous function over a closed, bounded interval The absolute maximum of over and the absolute minimum of over must occur at endpoints of or at critical points of in  "
},
{
  "id": "sec_Ch4Sec3-5-5",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-5-5",
  "type": "Problem-Solving Strategy",
  "number": "4.3.17",
  "title": "Locating Absolute Extrema over a Closed Interval.",
  "body": " Locating Absolute Extrema over a Closed Interval  Consider a continuous function defined over the closed interval   Evaluate at the endpoints and  Find all critical points of that lie over the interval and evaluate at those critical points.  Compare all values found in (1) and (2). From , the absolute extrema must occur at endpoints or critical points. Therefore, the largest of these values is the absolute maximum of The smallest of these values is the absolute minimum of   "
},
{
  "id": "fs-id1165042035517",
  "level": "2",
  "url": "sec_Ch4Sec3.html#fs-id1165042035517",
  "type": "Example",
  "number": "4.3.18",
  "title": "Locating Absolute Extrema.",
  "body": " Locating Absolute Extrema   For each of the following functions, find the absolute maximum and absolute minimum over the specified interval and state where those values occur.   over  over      Step 1. Evaluate at the endpoints and  Step 2. Since  is defined for all real numbers Therefore, there are no critical points where the derivative is undefined. It remains to check where Since at and is in the interval  is a candidate for an absolute extremum of over We evaluate and find Step 3. We set up the following table to compare the values found in steps 1 and 2.      Conclusion           Absolute maximum      Absolute minimum    From the table, we find that the absolute maximum of over the interval [1, 3] is and it occurs at The absolute minimum of over the interval [1, 3] is and it occurs at as shown in the following graph.   \"The function f(x) = – x2 + 3x – 2 is graphed from (1, 0) to (3, −2), with its maximum marked at (3\/2, 1\/4).\"  This function has both an absolute maximum and an absolute minimum.   Step 1. Evaluate at the endpoints and  Step 2. The derivative of is given by for The derivative is zero when which implies The derivative is undefined at Therefore, the critical points of are The point is an endpoint, so we already evaluated in step 1. The point is not in the interval of interest, so we need only evaluate We find that Step 3. We compare the values found in steps 1 and 2, in the following table.      Conclusion      Absolute maximum      Absolute minimum         We conclude that the absolute maximum of over the interval [0, 2] is zero, and it occurs at The absolute minimum is -2, and it occurs at as shown in the following graph.   \"The function f(x) = x2 – 3x2\/3 is graphed from (0, 0) to (2, −0.762), with its minimum marked at (1, −2).\"  This function has an absolute maximum at an endpoint of the interval.    "
},
{
  "id": "sec_Ch4Sec3-5-8",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-5-8",
  "type": "Checkpoint",
  "number": "4.3.23",
  "title": "",
  "body": "  Find the absolute maximum and absolute minimum of over the interval    The absolute maximum is and it occurs at The absolute minimum is and it occurs at    Look for critical points. Evaluate at all critical points and at the endpoints.   "
},
{
  "id": "Busi_Calc_Figure_04_03_001",
  "level": "2",
  "url": "sec_Ch4Sec3.html#Busi_Calc_Figure_04_03_001",
  "type": "Figure",
  "number": "4.3.24",
  "title": "",
  "body": "  \"The figure shows the graph of on the interval from to . There are open circles at the endpoints.\"  The given function has an absolute minimum of -4 at The function does not have an absolute maximum.  "
},
{
  "id": "sec_Ch4Sec3-5-13",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-5-13",
  "type": "Problem-Solving Strategy",
  "number": "4.3.25",
  "title": "Locating and Determining the Existence of Absolute Extrema over an Interval that is not Closed.",
  "body": " Locating and Determining the Existence of Absolute Extrema over an Interval that is not Closed  Consider a continuous function defined over an interval that is not closed i.e.,   We would like to evaluate at the endpoints and but they may not be included in the interval. As a result, we may need to take a one sided limit. The proceedure is outlined below:  If the left endpoint is not included in the interval (i.e., the given interval is (a,b]), then evaluate and  If the right endpoint is not included in the interval (i.e., the given interval is [a,b)), then evaluate and  If both the left and right endpoints are not included in the interval (i.e., the given interval is (a,b)), then evaluate and    Find all critical points of that lie over the interval and evaluate at those critical points.  Compare all values found in (1) and (2). We know that the absolute extrema must occur at endpoints or critical points. However, if absolute extrema occurs at an endpoint not included in the interval, we say the absolute maximum or absolute minimum DNE. Therefore, the largest of these values is the absolute maximum of if it occurred at a point included in the interval. The smallest of these values is the absolute minimum of if it occurred at a point included in the interval. Otherwise, the absolute maximum or absolute minimum DNE.   "
},
{
  "id": "sec_Ch4Sec3-5-14",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-5-14",
  "type": "Example",
  "number": "4.3.26",
  "title": "Finding Absolute Extrema Over Various Intervals.",
  "body": " Finding Absolute Extrema Over Various Intervals  Find the absolute maximum and absolute minimum of over the following intervals.   [-7,1]  (-7,1]  [-7,1)     Step 1. Evaluate at the endpoints and  Step 2. Using the product rule, Note that is defined for all real numbers Therefore, there are no critical points where the derivative is undefined. It remains to check where We know that for all real numbers . Thus, at and note that it is in the intervals  is a candidate for an absolute extremum of over the intervals We evaluate and find Step 3. We set up the following tables to compare the values found in steps 1 and 2.   For the interval       Conclusion           Absolute minimum      Absolute maximum    From the table, we find that the absolute maximum of over the interval [-7,1] is and it occurs at The absolute minimum of over the interval [-7, 1] is and it occurs at as shown in the following graph.   \"The function is graphed on the interval [-7,1] with both closed endpoints at x=-7 and x=1.\"   on the interval [-7,1].    For the interval       Conclusion           Absolute minimum      Absolute maximum    From the table, we find that the absolute maximum of over the interval (-7,1] is and it occurs at The absolute minimum of over the interval (-7, 1] is and it occurs at as shown in the following graph.   \"The function is graphed on the interval (-7,1] with an open left endpoint at x=-7 and closed right endpoint at x=1.\"   on the interval (-7,1].    For the interval       Conclusion           Absolute minimum      Absolute maximum DNE    From the table, we find that the absolute maximum of over the interval [-7,1) DNE since is not included in the interval. The absolute minimum of over the interval [-7, 1) is and it occurs at as shown in the following graph.   \"The function is graphed on the interval [-7,1) with a closed left endpoint at x=-7 and open right endpoint at x=1.\"   on the interval [-7,1).      "
},
{
  "id": "sec_Ch4Sec3-5-15",
  "level": "2",
  "url": "sec_Ch4Sec3.html#sec_Ch4Sec3-5-15",
  "type": "Checkpoint",
  "number": "4.3.33",
  "title": "",
  "body": " Find the absolute maximum and absolute minimum of over the interval   From , we obtain a critical value at which is included in the interval . The results are summarized in the following table.       Conclusion           Absolute maximum      Absolute minimum DNE       Look for critical points. Evaluate at all critical points and at the endpoints.   "
},
{
  "id": "sec_Ch4Sec4",
  "level": "1",
  "url": "sec_Ch4Sec4.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Mean Value Theorem",
  "body": " The Mean Value Theorem   Learning Objectives   Explain the meaning of Rolle’s theorem.  Describe the significance of the Mean Value Theorem.  State three important consequences of the Mean Value Theorem.   “Consider the following situation. Two towns are separated by a km long stretch of road. The police in town A observe a car leaving at 1pm. Their colleagues in town B see the car arriving at 2pm. After a quick phone call between the two police stations, the driver is issued a fine for going km\/h at some time between 1pm and 2pm. It is intuitively obvious that, because his average velocity was km\/h, the driver must have been going at least km\/h at some point. From a knowledge of the average velocity of the car, we are able to deduce something about an instantaneous velocity.  In this scenario we are making use of a piece of mathematics called the Mean Value Theorem . It says that, under appropriate hypotheses, the average rate of change of a function over an interval is achieved exactly by the instantaneous rate of change of the function at some (unknown) point .    Rolle's Theorem  Informally, Rolle’s theorem states that if the outputs of a differentiable function are equal at the endpoints of an interval, then there must be an interior point where . illustrates this theorem.    \"Three graphs, each over an interval from a to b where the y-coordinate is the same at both a and b. The first graph increases from a to c and decreases from c to a. The second graph descreases from a to c and increases from c to b. The third graph increases from a to c_1, decreases from c_1 to c_2, and increases from c_2 to b. A horizontal tangent line is drawn at c, c_1, and c_2 for each graph.\"    If a differentiable function satisfies , then its derivative must be zero at some point(s) between and .      Let be a continuous function over the closed interval and differentiable over the open interval such that . There then exists at least one such that .    Let . We consider three cases:   for all .  There exists such that .  There exists such that .   Case 1: If for all , then for all .  Case 2: Since is a continuous function over the closed, bounded interval , by the extreme value theorem, it has an absolute maximum. Also, since there is a point such that , the absolute maximum is greater than . Therefore, the absolute maximum does not occur at either endpoint. As a result, the absolute maximum must occur at an interior point . Because has a maximum at an interior point , and is differentiable at , by Fermat's Theorem ( ), .  Case 3: The case when there exists a point such that is analogous to case 2, with maximum replaced by minimum.    An important point about Rolle’s theorem is that the differentiability of the function is critical. If is not differentiable, even at a single point, the result may not hold. For example, the function is continuous over and , but for any as shown in the following figure.    \"A graph of f(x)=|x|-1 on the interval from x=-1 to x=1.\"    Since is not differentiable at , the conditions of Rolle's Theorem are not satisfied. In fact, the conclusion does not hold here; there is no such that .    Let's now consider functions that satisfy the conditions of Rolle's Theorem and calculate explicitly the points where    Using Rolle's Theorem   For each of the following functions, verify that the function satisfies the criteria stated in Rolle’s theorem and find all values in the given interval where .   over  over .      Since is a polynomial, it is continuous and differentiable everywhere. In addition, . Therefore, satisfies teh criteria of Rolle's Theorem. We conclude that there exists at least one value such that . Since , we see that implies as shown in the following graph.   \"A graph of f(x)=x^2+2x on the interval from x=-2 to x=0 with the tangent line drawn at x=-1.\"    This function is continuous and differentiable over , when .     As in part a, is a polynomial and there is continuous and differentiable everywhere. Also, . That said, satisfies the criteria of Rolle's Theorem. Differentiating, we find that . Therefore, when . Both points are in the interval , and therefore, both points satisfy the conclusions of Rolle's Theorem as shown in the following graph.   \"A graph of f(x)=x^3-4x on the interval from x=-2 to x=2 with the tangent line drawn at x=-1 and x=1.\"    For this polynomial over , at .          Verify that the function defined over the interval satisfies the conditions of Rolle's Theorem. Find all points guaranteed by Rolle's Theorem.    Solve for .    is a polynomial and is thus both continuous and differentiable over any interval. Also, , so satisfies the hypotheses of Rolle's Theorem. Since , then when , or when . Since , the conclusion to Rolle's Theorem is satisfied. .     The Mean Value Theorem and Its Meaning  Rolle’s theorem is a special case of the Mean Value Theorem. In Rolle’s theorem, we consider differentiable functions defined on the closed interval with . The Mean Value Theorem generalizes Rolle’s theorem by considering functions that do not necessarily have equal value at the endpoints. Consequently, we can view the Mean Value Theorem as a slanted version of Rolle’s theorem ( ). The Mean Value Theorem states that if is continuous over the closed interval and differentiable over the open interval , then there exists a point such that the tangent line to the graph of at is parallel to the secant line connecting and .    \"A graph of a function f(x) from a to b. Between a and b are x-values c1 and c2. The secant line connecting the points of the graph of the function at a and b is drawn. Also drawn is the tangent line to the function at c1 and c2. These tangent lines a parallel to the secant line.\"    The Mean Value Theorem says that for a function that meets its conditions, at some point the tangent line has the same slope as the secant line between the ends. For this function, there are two values and such that the tangent line to at and has the same slope as the secant line.      Let be continuous over the closed interval and differentiable over the open interval . Then, there exists at least one point such that .    The proof follows from Rolle’s theorem by introducing an appropriate function that satisfies the criteria of Rolle’s theorem. Consider the line connecting and . Since the slope of that line is and the line passes through the point , the equation of that line can be written as .  Let denote the vertical different between the point and the point on that line. Therefore, .    \"A graph of a function g(x) from a to b. The secant line connecting the points of the graph at a and b is drawn with the equation of the line labeled as described above.\"    The value is the vertical difference between the point and the point on the secant line connecting and .    Since the graph of intersects the secant line when and , we see that . Since is a differentiable function over , is also a differentiable function over . Furthermore, since is continuous over , is also continuous over . Therefore, satisfies the criteria of Rolle’s Theorem. Consequently, there exists a point such that . Since , we see that . Since , we conclude that .     Verifying that the Mean Value Theorem Applies   For over the interval , show that satisfies the hypothesis of the Mean Value Theorem, and therefore there exists at least one value such that is equal to the slope of the line connecting and . Find these values guaranteed by the Mean Value Theorem.    We know that is continuous over and differentiable over . Therefore, satisfies the hypotheses of the Mean Value Theorem, and there must exist at least one value such that is equal to the slope of the line connecting and ( ). To determine the value(s) of are guaranteed, first calculate the derivative of . The derivative . The slope of the line connecting and is given by .  We want to find such that . That is, we want to find such that . Solving this equation for , we obtain . At this point, the slope of the tangent line equals the slope of the line joining the endpoints.    \"A graph of the square root function from 0 to 9. The secant line connects (0,0) to (9,3) and the tangent line to the graph at (9\/4,3\/2) is drawn and is parallel to the secant line.\"    The slope of the tangent line at is the same as the slope of the line segment connecting and .      One application that helps illustrate the Mean Value Theorem involves velocity. For example, suppose we drive a car for h down a straight road with an average velocity of mph. Let and denote the position and velocity of the car, respectively, for h. Assuming that the position functions is differentiable, we can apply the Mean Value Theorem to conclude that, at some time , the speed of the car was exactly .   Mean Value Theorem and Velocity   If a rock is dropped from a height of ft, its position seconds after it is dropped until it hits the ground is given by the function .   Determine how long it takes before the rock hits the ground.  Find the average velocity of the rock for when the rock is released and the rock hits the ground.  Find the time guaranteed by the Mean Value Theorem when the instantaneous velocity of the rock is .      When the rock hits the ground, its position is . Solving the equation for , we find that sec. Since we are only considering , the ball will hit the ground sec after it is dropped.  The instantaneous velocity is given by the derivative of the position function. Therefore, we need to find a time such that . Since is continuous over the interval and differentiable over the interval , by the Mean Value Theorem, there is guaranteed to be a point such that . Taking the derivative of the position function , we find that . Therefore the equation reduces to . Solving this equation for , we have . Therefore, sec after the rock is dropped, the instantaneous velocity equals the average velocity of the rock during its free fall: .   \"A graph of s(t)=-16 t squared + 100 from t=0 to t05\/2. A secant line is drawn connecting the endpoints and the tangent line is drawn at t=5\/4.\"    At time sec, the velocity of the rock is equal to its average velocity from the time it is dropped until it hits the ground.          Suppose a ball is dropped from a height of ft. Its position at time is . Find the time when the instantaneous velocity of the ball equals its average velocity.       Find the time when the ball hits the ground, and then solve .      Corollaries of the Mean Value Theorem  Let’s now look at three corollaries of the Mean Value Theorem. These results have important consequences, which we use in upcoming sections.  At this point, we know the derivative of any constant function is zero. The Mean Value Theorem allows us to conclude that the converse is also true. In particular, if for all in some interval , then 𝑓 is constant over that interval. This result may seem intuitively obvious, but it has important implications that are not obvious, and we discuss them shortly.   Functions with a Derivative of Zero   Let be differentiable over an interval . If for all , then for all .    Since is differentiable over , must be continuous over . Suppose is not constant for all in . Then there exist , where and . Choose the notation so that . Therefore, . Since is a differentiable function, by the Mean Value Theorem, there exists such that . Therefore, there exists such that , which contradicts the assumption that for all .    From it follows that if two functions have the same derivative, they differ by at most a constant.   Functions With Equal Derivatives   If and are differentiable over an interval and for all , then for some constant .    Let . Then for all . By m there is a constant such that for all . Therefore, for all .    This fact is important because it means that for a given function , if there exists a function such that ; then, the only other functions that have a derivative equal to are 𝐹 for some constant . We discuss this result in more detail later in the chapter.  The third corollary of the Mean Value Theorem discusses when a function is increasing and when it is decreasing. Recall that a function is increasing over if whenever , whereas is decreasing over if whenever . Using the Mean Value Theorem, we can show that if the derivative of a function is positive, then the function is increasing; if the derivative is negative, then the function is decreasing ( ). We make use of this fact in the next section, where we show how to use the derivative of a function to locate local maximum and minimum values of the function, and how to determine the shape of the graph.    \"A graph of a function that is increasing when x is less than a, decreases between a and b, and is increasing when x is greater than b. \"    If a function has a positive derivative over some interval , then the function increases over that interval ; if the derivative is negative over some interval , then the function decreases over that interval .     Increasing and Decreasing Functions   Let be continuous over the closed interval and differentiable over the open interval .   If for all , then is an increasing function over .  If for all , then is an decreasing function over .     We will prove i.; the proof of ii. is similar. Suppose is continuous and differentiable over an interval and for all . By way of contradiction, suppose that is not an increasing function on . Then there exist and in such that , but . Since is a differentiable function over , the Mean Value Theorem guarantees that there is some value such that   Now so . Because , it follows that . It follows that the quotient of and is negative. So, for , . However, for all including . This is a contradiction. The assumption that is not an increasing function on is false. Therefore, is increasing throughout .     "
},
{
  "id": "sec_Ch4Sec4-2-4",
  "level": "2",
  "url": "sec_Ch4Sec4.html#sec_Ch4Sec4-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mean Value Theorem "
},
{
  "id": "fig-rollestheorem",
  "level": "2",
  "url": "sec_Ch4Sec4.html#fig-rollestheorem",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "  \"Three graphs, each over an interval from a to b where the y-coordinate is the same at both a and b. The first graph increases from a to c and decreases from c to a. The second graph descreases from a to c and increases from c to b. The third graph increases from a to c_1, decreases from c_1 to c_2, and increases from c_2 to b. A horizontal tangent line is drawn at c, c_1, and c_2 for each graph.\"    If a differentiable function satisfies , then its derivative must be zero at some point(s) between and .   "
},
{
  "id": "thm-rollestheorem",
  "level": "2",
  "url": "sec_Ch4Sec4.html#thm-rollestheorem",
  "type": "Theorem",
  "number": "4.4.2",
  "title": "",
  "body": "  Let be a continuous function over the closed interval and differentiable over the open interval such that . There then exists at least one such that .    Let . We consider three cases:   for all .  There exists such that .  There exists such that .   Case 1: If for all , then for all .  Case 2: Since is a continuous function over the closed, bounded interval , by the extreme value theorem, it has an absolute maximum. Also, since there is a point such that , the absolute maximum is greater than . Therefore, the absolute maximum does not occur at either endpoint. As a result, the absolute maximum must occur at an interior point . Because has a maximum at an interior point , and is differentiable at , by Fermat's Theorem ( ), .  Case 3: The case when there exists a point such that is analogous to case 2, with maximum replaced by minimum.   "
},
{
  "id": "fig-rollestheoremfailure",
  "level": "2",
  "url": "sec_Ch4Sec4.html#fig-rollestheoremfailure",
  "type": "Figure",
  "number": "4.4.3",
  "title": "",
  "body": "  \"A graph of f(x)=|x|-1 on the interval from x=-1 to x=1.\"    Since is not differentiable at , the conditions of Rolle's Theorem are not satisfied. In fact, the conclusion does not hold here; there is no such that .   "
},
{
  "id": "subsec-rollestheorem-8",
  "level": "2",
  "url": "sec_Ch4Sec4.html#subsec-rollestheorem-8",
  "type": "Example",
  "number": "4.4.4",
  "title": "Using Rolle’s Theorem.",
  "body": " Using Rolle's Theorem   For each of the following functions, verify that the function satisfies the criteria stated in Rolle’s theorem and find all values in the given interval where .   over  over .      Since is a polynomial, it is continuous and differentiable everywhere. In addition, . Therefore, satisfies teh criteria of Rolle's Theorem. We conclude that there exists at least one value such that . Since , we see that implies as shown in the following graph.   \"A graph of f(x)=x^2+2x on the interval from x=-2 to x=0 with the tangent line drawn at x=-1.\"    This function is continuous and differentiable over , when .     As in part a, is a polynomial and there is continuous and differentiable everywhere. Also, . That said, satisfies the criteria of Rolle's Theorem. Differentiating, we find that . Therefore, when . Both points are in the interval , and therefore, both points satisfy the conclusions of Rolle's Theorem as shown in the following graph.   \"A graph of f(x)=x^3-4x on the interval from x=-2 to x=2 with the tangent line drawn at x=-1 and x=1.\"    For this polynomial over , at .       "
},
{
  "id": "subsec-rollestheorem-9",
  "level": "2",
  "url": "sec_Ch4Sec4.html#subsec-rollestheorem-9",
  "type": "Checkpoint",
  "number": "4.4.7",
  "title": "",
  "body": "  Verify that the function defined over the interval satisfies the conditions of Rolle's Theorem. Find all points guaranteed by Rolle's Theorem.    Solve for .    is a polynomial and is thus both continuous and differentiable over any interval. Also, , so satisfies the hypotheses of Rolle's Theorem. Since , then when , or when . Since , the conclusion to Rolle's Theorem is satisfied. .  "
},
{
  "id": "fig-meanvaluetheorem",
  "level": "2",
  "url": "sec_Ch4Sec4.html#fig-meanvaluetheorem",
  "type": "Figure",
  "number": "4.4.8",
  "title": "",
  "body": "  \"A graph of a function f(x) from a to b. Between a and b are x-values c1 and c2. The secant line connecting the points of the graph of the function at a and b is drawn. Also drawn is the tangent line to the function at c1 and c2. These tangent lines a parallel to the secant line.\"    The Mean Value Theorem says that for a function that meets its conditions, at some point the tangent line has the same slope as the secant line between the ends. For this function, there are two values and such that the tangent line to at and has the same slope as the secant line.   "
},
{
  "id": "thm-meanvaluetheorem",
  "level": "2",
  "url": "sec_Ch4Sec4.html#thm-meanvaluetheorem",
  "type": "Theorem",
  "number": "4.4.9",
  "title": "",
  "body": "  Let be continuous over the closed interval and differentiable over the open interval . Then, there exists at least one point such that .    The proof follows from Rolle’s theorem by introducing an appropriate function that satisfies the criteria of Rolle’s theorem. Consider the line connecting and . Since the slope of that line is and the line passes through the point , the equation of that line can be written as .  Let denote the vertical different between the point and the point on that line. Therefore, .    \"A graph of a function g(x) from a to b. The secant line connecting the points of the graph at a and b is drawn with the equation of the line labeled as described above.\"    The value is the vertical difference between the point and the point on the secant line connecting and .    Since the graph of intersects the secant line when and , we see that . Since is a differentiable function over , is also a differentiable function over . Furthermore, since is continuous over , is also continuous over . Therefore, satisfies the criteria of Rolle’s Theorem. Consequently, there exists a point such that . Since , we see that . Since , we conclude that .   "
},
{
  "id": "ex-verifyingMTV",
  "level": "2",
  "url": "sec_Ch4Sec4.html#ex-verifyingMTV",
  "type": "Example",
  "number": "4.4.11",
  "title": "Verifying that the Mean Value Theorem Applies.",
  "body": " Verifying that the Mean Value Theorem Applies   For over the interval , show that satisfies the hypothesis of the Mean Value Theorem, and therefore there exists at least one value such that is equal to the slope of the line connecting and . Find these values guaranteed by the Mean Value Theorem.    We know that is continuous over and differentiable over . Therefore, satisfies the hypotheses of the Mean Value Theorem, and there must exist at least one value such that is equal to the slope of the line connecting and ( ). To determine the value(s) of are guaranteed, first calculate the derivative of . The derivative . The slope of the line connecting and is given by .  We want to find such that . That is, we want to find such that . Solving this equation for , we obtain . At this point, the slope of the tangent line equals the slope of the line joining the endpoints.    \"A graph of the square root function from 0 to 9. The secant line connects (0,0) to (9,3) and the tangent line to the graph at (9\/4,3\/2) is drawn and is parallel to the secant line.\"    The slope of the tangent line at is the same as the slope of the line segment connecting and .     "
},
{
  "id": "ex-meanvaluetheoremvelocity",
  "level": "2",
  "url": "sec_Ch4Sec4.html#ex-meanvaluetheoremvelocity",
  "type": "Example",
  "number": "4.4.13",
  "title": "Mean Value Theorem and Velocity.",
  "body": " Mean Value Theorem and Velocity   If a rock is dropped from a height of ft, its position seconds after it is dropped until it hits the ground is given by the function .   Determine how long it takes before the rock hits the ground.  Find the average velocity of the rock for when the rock is released and the rock hits the ground.  Find the time guaranteed by the Mean Value Theorem when the instantaneous velocity of the rock is .      When the rock hits the ground, its position is . Solving the equation for , we find that sec. Since we are only considering , the ball will hit the ground sec after it is dropped.  The instantaneous velocity is given by the derivative of the position function. Therefore, we need to find a time such that . Since is continuous over the interval and differentiable over the interval , by the Mean Value Theorem, there is guaranteed to be a point such that . Taking the derivative of the position function , we find that . Therefore the equation reduces to . Solving this equation for , we have . Therefore, sec after the rock is dropped, the instantaneous velocity equals the average velocity of the rock during its free fall: .   \"A graph of s(t)=-16 t squared + 100 from t=0 to t05\/2. A secant line is drawn connecting the endpoints and the tangent line is drawn at t=5\/4.\"    At time sec, the velocity of the rock is equal to its average velocity from the time it is dropped until it hits the ground.       "
},
{
  "id": "sec-MVTmeaning-8",
  "level": "2",
  "url": "sec_Ch4Sec4.html#sec-MVTmeaning-8",
  "type": "Checkpoint",
  "number": "4.4.15",
  "title": "",
  "body": "  Suppose a ball is dropped from a height of ft. Its position at time is . Find the time when the instantaneous velocity of the ball equals its average velocity.       Find the time when the ball hits the ground, and then solve .   "
},
{
  "id": "cor-constantfunctionderivative",
  "level": "2",
  "url": "sec_Ch4Sec4.html#cor-constantfunctionderivative",
  "type": "Corollary",
  "number": "4.4.16",
  "title": "Functions with a Derivative of Zero.",
  "body": " Functions with a Derivative of Zero   Let be differentiable over an interval . If for all , then for all .    Since is differentiable over , must be continuous over . Suppose is not constant for all in . Then there exist , where and . Choose the notation so that . Therefore, . Since is a differentiable function, by the Mean Value Theorem, there exists such that . Therefore, there exists such that , which contradicts the assumption that for all .   "
},
{
  "id": "cor-constantdifferencederivative",
  "level": "2",
  "url": "sec_Ch4Sec4.html#cor-constantdifferencederivative",
  "type": "Corollary",
  "number": "4.4.17",
  "title": "Functions With Equal Derivatives.",
  "body": " Functions With Equal Derivatives   If and are differentiable over an interval and for all , then for some constant .    Let . Then for all . By m there is a constant such that for all . Therefore, for all .   "
},
{
  "id": "fig-MVTmonotonicity",
  "level": "2",
  "url": "sec_Ch4Sec4.html#fig-MVTmonotonicity",
  "type": "Figure",
  "number": "4.4.18",
  "title": "",
  "body": "  \"A graph of a function that is increasing when x is less than a, decreases between a and b, and is increasing when x is greater than b. \"    If a function has a positive derivative over some interval , then the function increases over that interval ; if the derivative is negative over some interval , then the function decreases over that interval .   "
},
{
  "id": "cor-MVTmonotonicity",
  "level": "2",
  "url": "sec_Ch4Sec4.html#cor-MVTmonotonicity",
  "type": "Corollary",
  "number": "4.4.19",
  "title": "Increasing and Decreasing Functions.",
  "body": " Increasing and Decreasing Functions   Let be continuous over the closed interval and differentiable over the open interval .   If for all , then is an increasing function over .  If for all , then is an decreasing function over .     We will prove i.; the proof of ii. is similar. Suppose is continuous and differentiable over an interval and for all . By way of contradiction, suppose that is not an increasing function on . Then there exist and in such that , but . Since is a differentiable function over , the Mean Value Theorem guarantees that there is some value such that   Now so . Because , it follows that . It follows that the quotient of and is negative. So, for , . However, for all including . This is a contradiction. The assumption that is not an increasing function on is false. Therefore, is increasing throughout .   "
},
{
  "id": "sec_Ch4Sec5",
  "level": "1",
  "url": "sec_Ch4Sec5.html",
  "type": "Section",
  "number": "4.5",
  "title": "The First Derivative Test",
  "body": " The First Derivative Test   Learning Objectives   Explain how the sign of the first derivative affects the shape of a function's graph.  State the first derivative test for critical points.  Explain the relationship between a function and its first derivative.  State the second derivative test for local extrema.   Earlier in this chapter we stated that if a function has a local extremum at a point then must be a critical point of However, a function is not guaranteed to have a local extremum at a critical point. For example, has a critical point at since is zero at but does not have a local extremum at Using the results from the previous section, we are now able to determine whether a critical point of a function actually corresponds to a local extreme value.    The First Derivative Test  Corollary of the Mean Value Theorem showed that if the derivative of a function is positive over an interval then the function is increasing over On the other hand, if the derivative of the function is negative over an interval then the function is decreasing over as shown in the following figure.    \"This figure is broken into four figures labeled a, b, c, and d. Figure a shows a function increasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\gt 0. In other words, f is increasing. Figure b shows a function increasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\gt 0. In other words, f is increasing. Figure c shows a function decreasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\lt 0. In other words, f is decreasing. Figure d shows a function decreasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\lt 0. In other words, f is decreasing.\"  The top two functions, (a) and (b), are increasing over the interval At each point the derivative The bottom two functions, (c) and (d), are decreasing over the interval At each point the derivative    A continuous function has a local maximum at point if and only if switches from increasing to decreasing at point Similarly, has a local minimum at if and only if switches from decreasing to increasing at If is a continuous function over an interval containing and differentiable over except possibly at the only way can switch from increasing to decreasing (or vice versa) at point is if changes sign as increases through If is differentiable at the only way that can change sign as increases through is if Therefore, for a function that is continuous over an interval containing and differentiable over except possibly at the only way can switch from increasing to decreasing (or vice versa) is if or is undefined. Consequently, to locate local extrema for a function we look for points in the domain of such that or is undefined. Recall that such points are called critical points of  Note that need not have a local extrema at a critical point. The critical points are the only candidates for local extrema. In , we show that if a continuous function has a local extremum, it must occur at a critical point, but a function may not have a local extremum at a critical point. We show that if has a local extremum at a critical point, then the sign of switches as increases through that point.    \"A function f(x) is graphed. It starts in the second quadrant and increases to x = a, which is too sharp and hence f'(a) is undefined. In this section f' \\gt 0. Then, f decreases from x = a to x = b (so f' \\lt 0 here), before increasing at x = b. It is noted that f'(b) = 0. While increasing from x = b to x = c, f' \\gt 0. The function has an inversion point at c, and it is marked f'(c) = 0. The function increases some more to d (so f' \\gt 0), which is the global maximum. It is marked that f'(d) = 0. Then the function decreases and it is marked that f' \\gt 0.\"   The function has four critical points: The function has local maxima at and and a local minimum at The function does not have a local extremum at The sign of changes at all local extrema ( , , and ), but the sign of does not change at point    Using , we summarize the main results regarding local extrema.   If a continuous function has a local extremum, it must occur at a critical point  The function has a local extremum at the critical point if and only if the derivative switches sign as increases through  Therefore, to test whether a function has a local extremum at a critical point we must determine the sign of to the left and right of   This result is known as the first derivative test .   First Derivative Test  Suppose that is a continuous function over an interval containing a critical point If is differentiable over except possibly at point then satisfies one of the following descriptions:   If changes sign from positive when to negative when then is a local maximum of  If changes sign from negative when to positive when then is a local minimum of  If has the same sign for and then is neither a local maximum nor a local minimum of    We can summarize the first derivative test as a strategy for locating local extrema.   Using the First Derivative Test  Consider a function that is continuous over an interval   Find all critical points of and divide the interval into smaller intervals using the critical points as endpoints.  Analyze the sign of in each of the subintervals. If is continuous over a given subinterval (which is typically the case), then the sign of in that subinterval does not change and, therefore, can be determined by choosing an arbitrary test point in that subinterval and by evaluating the sign of at that test point. Use the sign analysis to determine whether is increasing or decreasing over that interval.  Use and the results of step to determine whether has a local maximum, a local minimum, or neither at each of the critical points.    Now let’s look at how to use this strategy to locate all local extrema for particular functions.   Using the First Derivative Test to Find Local Extrema   Use the first derivative test to find the location of all local extrema for Use a graphing utility to confirm your results.    Step 1. The derivative is To find the critical points, we need to find where Factoring the polynomial, we conclude that the critical points must satisfy  Therefore, the critical points are Now divide the interval into the smaller intervals  Step 2. Since is a continuous function, to determine the sign of over each subinterval, it suffices to choose a point over each of the intervals and determine the sign of at each of these points. For example, let’s choose as test points.    > Interval  Test Point  Sign of at Test Point  Conclusion       is increasing.       is decreasing.       is increasing.     Step 3. Since switches sign from positive to negative as increases through has a local maximum at Since switches sign from negative to positive as increases through has a local minimum at These analytical results agree with the following graph.   \"The function f(x) = x3 – 3x2 – 9x – 1 is graphed. It has a maximum at x = −1 and a minimum at x = 3. The function is increasing before x = −1, decreasing until x = 3, and then increasing after that.\"  The function has a maximum at and a minimum at       Use the first derivative test to locate all local extrema for    has a local minimum at and a local maximum at    Find all critical points of and determine the signs of over particular intervals determined by the critical points.    Using the First Derivative Test ->  Use the first derivative test to find the location of all local extrema for Use a graphing utility to confirm your results.    Step 1. The derivative is  The derivative when Therefore, at The derivative is undefined at Therefore, we have three critical points:  and Consequently, divide the interval into the smaller intervals and  Step 2: Since is continuous over each subinterval, it suffices to choose a test point in each of the intervals from step and determine the sign of at each of these points. The points are test points for these intervals.    > Interval  Test Point  Sign of at Test Point  Conclusion       is decreasing.       is increasing.       is increasing.       is decreasing.    Step 3: Since is decreasing over the interval and increasing over the interval  has a local minimum at Since is increasing over the interval and the interval  does not have a local extremum at Since is increasing over the interval and decreasing over the interval has a local maximum at The analytical results agree with the following graph.    \"The function f(x) = 5x1\/3 – x5\/3 is graphed. It decreases to its local minimum at x = −1, increases to x = 1, and then decreases after that.\">  The function has a local minimum at and a local maximum at       Use the first derivative test to find all local extrema for    has no local extrema because does not change sign at    The only critical point of is     Using the First Derivative Test With Exponential Functions   Find the critical points of . Identify the open intervals on which is increasing and those on which it is decreasing. Find the function's local and absolute extreme values.    The function is continuous and differentiable for all real numbers, so the critical points occurs only at the zeros of .  Using the Product Rule, we find the derivative. Since is never zero, the first derivative is zero if and only if . The zeros and partition the -axis into the open intervals as follows: . We make a table to organize our work as before.     Interval  Test Point  Sign of at Test Point  Conclusion       is increasing.       is decreasing.       is increasing.     The function is increasing on and decreasing on . Thus there will be a local maximum at (with -value about ) and a local minimum when (with -value about ). The local minimum value is also an absolute minimum because for . There is no absolute maximum. shows the graph.       "
},
{
  "id": "CNX_Calc_Figure_04_05_001",
  "level": "2",
  "url": "sec_Ch4Sec5.html#CNX_Calc_Figure_04_05_001",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": "  \"This figure is broken into four figures labeled a, b, c, and d. Figure a shows a function increasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\gt 0. In other words, f is increasing. Figure b shows a function increasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\gt 0. In other words, f is increasing. Figure c shows a function decreasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\lt 0. In other words, f is decreasing. Figure d shows a function decreasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f' \\lt 0. In other words, f is decreasing.\"  The top two functions, (a) and (b), are increasing over the interval At each point the derivative The bottom two functions, (c) and (d), are decreasing over the interval At each point the derivative   "
},
{
  "id": "CNX_Calc_Figure_04_05_002",
  "level": "2",
  "url": "sec_Ch4Sec5.html#CNX_Calc_Figure_04_05_002",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": "  \"A function f(x) is graphed. It starts in the second quadrant and increases to x = a, which is too sharp and hence f'(a) is undefined. In this section f' \\gt 0. Then, f decreases from x = a to x = b (so f' \\lt 0 here), before increasing at x = b. It is noted that f'(b) = 0. While increasing from x = b to x = c, f' \\gt 0. The function has an inversion point at c, and it is marked f'(c) = 0. The function increases some more to d (so f' \\gt 0), which is the global maximum. It is marked that f'(d) = 0. Then the function decreases and it is marked that f' \\gt 0.\"   The function has four critical points: The function has local maxima at and and a local minimum at The function does not have a local extremum at The sign of changes at all local extrema ( , , and ), but the sign of does not change at point   "
},
{
  "id": "sec_Ch4Sec5-3-9",
  "level": "2",
  "url": "sec_Ch4Sec5.html#sec_Ch4Sec5-3-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first derivative test "
},
{
  "id": "fs-id1165042327970",
  "level": "2",
  "url": "sec_Ch4Sec5.html#fs-id1165042327970",
  "type": "Theorem",
  "number": "4.5.3",
  "title": "First Derivative Test.",
  "body": " First Derivative Test  Suppose that is a continuous function over an interval containing a critical point If is differentiable over except possibly at point then satisfies one of the following descriptions:   If changes sign from positive when to negative when then is a local maximum of  If changes sign from negative when to positive when then is a local minimum of  If has the same sign for and then is neither a local maximum nor a local minimum of   "
},
{
  "id": "sec_Ch4Sec5-3-12",
  "level": "2",
  "url": "sec_Ch4Sec5.html#sec_Ch4Sec5-3-12",
  "type": "Problem-Solving Strategy",
  "number": "4.5.4",
  "title": "Using the First Derivative Test.",
  "body": " Using the First Derivative Test  Consider a function that is continuous over an interval   Find all critical points of and divide the interval into smaller intervals using the critical points as endpoints.  Analyze the sign of in each of the subintervals. If is continuous over a given subinterval (which is typically the case), then the sign of in that subinterval does not change and, therefore, can be determined by choosing an arbitrary test point in that subinterval and by evaluating the sign of at that test point. Use the sign analysis to determine whether is increasing or decreasing over that interval.  Use and the results of step to determine whether has a local maximum, a local minimum, or neither at each of the critical points.   "
},
{
  "id": "fs-id1165043423022",
  "level": "2",
  "url": "sec_Ch4Sec5.html#fs-id1165043423022",
  "type": "Example",
  "number": "4.5.5",
  "title": "Using the First Derivative Test to Find Local Extrema.",
  "body": " Using the First Derivative Test to Find Local Extrema   Use the first derivative test to find the location of all local extrema for Use a graphing utility to confirm your results.    Step 1. The derivative is To find the critical points, we need to find where Factoring the polynomial, we conclude that the critical points must satisfy  Therefore, the critical points are Now divide the interval into the smaller intervals  Step 2. Since is a continuous function, to determine the sign of over each subinterval, it suffices to choose a point over each of the intervals and determine the sign of at each of these points. For example, let’s choose as test points.    > Interval  Test Point  Sign of at Test Point  Conclusion       is increasing.       is decreasing.       is increasing.     Step 3. Since switches sign from positive to negative as increases through has a local maximum at Since switches sign from negative to positive as increases through has a local minimum at These analytical results agree with the following graph.   \"The function f(x) = x3 – 3x2 – 9x – 1 is graphed. It has a maximum at x = −1 and a minimum at x = 3. The function is increasing before x = −1, decreasing until x = 3, and then increasing after that.\"  The function has a maximum at and a minimum at    "
},
{
  "id": "sec_Ch4Sec5-3-15",
  "level": "2",
  "url": "sec_Ch4Sec5.html#sec_Ch4Sec5-3-15",
  "type": "Checkpoint",
  "number": "4.5.8",
  "title": "",
  "body": "  Use the first derivative test to locate all local extrema for    has a local minimum at and a local maximum at    Find all critical points of and determine the signs of over particular intervals determined by the critical points.  "
},
{
  "id": "fs-id1165043312782",
  "level": "2",
  "url": "sec_Ch4Sec5.html#fs-id1165043312782",
  "type": "Example",
  "number": "4.5.9",
  "title": "Using the First Derivative Test.",
  "body": " Using the First Derivative Test ->  Use the first derivative test to find the location of all local extrema for Use a graphing utility to confirm your results.    Step 1. The derivative is  The derivative when Therefore, at The derivative is undefined at Therefore, we have three critical points:  and Consequently, divide the interval into the smaller intervals and  Step 2: Since is continuous over each subinterval, it suffices to choose a test point in each of the intervals from step and determine the sign of at each of these points. The points are test points for these intervals.    > Interval  Test Point  Sign of at Test Point  Conclusion       is decreasing.       is increasing.       is increasing.       is decreasing.    Step 3: Since is decreasing over the interval and increasing over the interval  has a local minimum at Since is increasing over the interval and the interval  does not have a local extremum at Since is increasing over the interval and decreasing over the interval has a local maximum at The analytical results agree with the following graph.    \"The function f(x) = 5x1\/3 – x5\/3 is graphed. It decreases to its local minimum at x = −1, increases to x = 1, and then decreases after that.\">  The function has a local minimum at and a local maximum at    "
},
{
  "id": "sec_Ch4Sec5-3-17",
  "level": "2",
  "url": "sec_Ch4Sec5.html#sec_Ch4Sec5-3-17",
  "type": "Checkpoint",
  "number": "4.5.12",
  "title": "",
  "body": "  Use the first derivative test to find all local extrema for    has no local extrema because does not change sign at    The only critical point of is   "
},
{
  "id": "sec_Ch4Sec5-3-18",
  "level": "2",
  "url": "sec_Ch4Sec5.html#sec_Ch4Sec5-3-18",
  "type": "Example",
  "number": "4.5.13",
  "title": "Using the First Derivative Test With Exponential Functions.",
  "body": " Using the First Derivative Test With Exponential Functions   Find the critical points of . Identify the open intervals on which is increasing and those on which it is decreasing. Find the function's local and absolute extreme values.    The function is continuous and differentiable for all real numbers, so the critical points occurs only at the zeros of .  Using the Product Rule, we find the derivative. Since is never zero, the first derivative is zero if and only if . The zeros and partition the -axis into the open intervals as follows: . We make a table to organize our work as before.     Interval  Test Point  Sign of at Test Point  Conclusion       is increasing.       is decreasing.       is increasing.     The function is increasing on and decreasing on . Thus there will be a local maximum at (with -value about ) and a local minimum when (with -value about ). The local minimum value is also an absolute minimum because for . There is no absolute maximum. shows the graph.     "
},
{
  "id": "sec_Ch4Sec6",
  "level": "1",
  "url": "sec_Ch4Sec6.html",
  "type": "Section",
  "number": "4.6",
  "title": "Concavity and Curve Sketching",
  "body": " Concavity and Curve Sketching   Learning Objectives   Use concavity and inflection points to explain how the sign of the second derivative affects the shape of a function’s graph.  Explain the concavity test for a function over an open interval.  Explain the relationship between a function and its first and second derivatives.  State the second derivative test for local extrema.   In this section, we also see how the second derivative provides information about the shape of a graph by describing whether the graph of a function curves upward or curves downward.    Concavity and Points of Inflection  We now know how to determine where a function is increasing or decreasing. However, there is another issue to consider regarding the shape of the graph of a function. If the graph curves, does it curve upward or curve downward? This notion is called the concavity of the function.  (a) shows a function with a graph that curves upward. As increases, the slope of the tangent line increases. Thus, since the derivative increases as increases, is an increasing function. We say this function is concave up. (b) shows a function that curves downward. As increases, the slope of the tangent line decreases. Since the derivative decreases as increases, is a decreasing function. We say this function is concave down.   Let be a function that is differentiable over an open interval If is increasing over we say is concave up over If is decreasing over we say is concave down over     \"This figure is broken into four figures labeled a, b, c, and d. Figure a shows a function increasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are increasing, but the one taken further to the right is increasing more. It is noted that f' is increasing and f is concave up. Figure b shows a function increasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are increasing, but the one taken further to the right is increasing less. It is noted that f' is decreasing and f is concave down. Figure c shows a function decreasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are decreasing, but the one taken further to the right is decreasing less. It is noted that f' is increasing and f is concave up. Figure d shows a function decreasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are decreasing, but the one taken further to the right is decreasing more. It is noted that f' is decreasing and f is concave down.\"   (a), (c) Since is increasing over the interval we say is concave up over (b), (d) Since is decreasing over the interval we say is concave down over    In general, without having the graph of a function how can we determine its concavity? By definition, a function is concave up if is increasing. From Corollary we know that if is a differentiable function, then is increasing if its derivative Therefore, a function that is twice differentiable is concave up when Similarly, a function is concave down if is decreasing. We know that a differentiable function is decreasing if its derivative Therefore, a twice-differentiable function is concave down when Applying this logic is known as the concavity test .    Test for Concavity  Let be a function that is twice differentiable over an interval   If for all then is concave up over  If for all then is concave down over    We conclude that we can determine the concavity of a function by looking at the second derivative of In addition, we observe that a function can switch concavity ( ). However, a continuous function can switch concavity only at a point if or is undefined. Consequently, to determine the intervals where a function is concave up and concave down, we look for those values of where or is undefined. When we have determined these points, we divide the domain of into smaller intervals and determine the sign of over each of these smaller intervals. If changes sign as we pass through a point then changes concavity. It is important to remember that a function may not change concavity at a point even if or is undefined. If, however, does change concavity at a point and is continuous at we say the point is an inflection point of   If is continuous at and changes concavity at the point is an inflection point of     \"A sinusoidal function is shown that has been shifted into the first quadrant. The function starts decreasing, so f' \\lt 0 and f'' \\gt 0. The function reaches the local minimum and starts increasing, so f' \\gt 0 and f'' \\gt 0. It is noted that the slope is increasing for these two intervals. The function then reaches an inflection point (a, f(a)) and from here the slop is decreasing even though the function continues to increase, so f' \\gt 0 and f'' \\lt 0. The function reaches the maximum and then starts decreasing, so f' \\lt 0 and f'' \\lt 0.\"  Since for the function is concave up over the interval Since for the function is concave down over the interval The point is an inflection point of    Testing for Concavity   For the function determine all intervals where is concave up and all intervals where is concave down. List all inflection points for Use a graphing utility to confirm your results.    To determine concavity, we need to find the second derivative The first derivative is so the second derivative is If the function changes concavity, it occurs either when or is undefined. Since is defined for all real numbers we need only find where Solving the equation we see that is the only place where could change concavity. We now test points over the intervals and to determine the concavity of The points and are test points for these intervals.     Interval  Test Point  Sign of at Test Point  Conclusion       is concave down       is concave up.     We conclude that is concave down over the interval and concave up over the interval Since changes concavity at the point is an inflection point. confirms the analytical results.    \"The function f(x) = x3 – 6x2 + 9x + 30 is graphed. The inflection point (2, 32) is marked, and it is roughly equidistant from the two local extrema.\"  The given function has a point of inflection at where the graph changes concavity.       For find all intervals where is concave up and all intervals where is concave down.    is concave up over the interval and concave down over the interval    Find where   We now summarize, in , the information that the first and second derivatives of a function provide about the graph of and illustrate this information in .   What Derivatives Tell Us about Graphs    Sign of  Sign of  Is increasing or decreasing?  Concavity    Positive  Positive  Increasing  Concave up    Positive  Negative  Increasing  Concave down    Negative  Positive  Decreasing  Concave up    Negative  Negative  Decreasing  Concave down       \"A function is graphed in the first quadrant. It is broken up into four sections, with the breaks coming at the local minimum, inflection point, and local maximum, respectively. The first section is decreasing and concave up; here, f' \\lt 0 and f'' \\gt 0. The second section is increasing and concave up; here, f' \\gt 0 and f'' \\gt 0. The third section is increasing and concave down; here, f' \\gt 0 and f'' \\lt 0. The fourth section is increasing and concave down; here, f' \\lt 0 and f'' \\lt 0.\"  Consider a twice-differentiable function over an open interval If for all the function is increasing over If for all the function is decreasing over If for all the function is concave up. If for all the function is concave down on      The Second Derivative Test For Local Extrema  The first derivative test provides an analytical tool for finding local extrema, but the second derivative can also be used to locate extreme values. Using the second derivative can sometimes be a simpler method than using the first derivative.  We know that if a continuous function has a local extrema, it must occur at a critical point. However, a function need not have a local extrema at a critical point. Here we examine how the second derivative test for local extrema can be used to determine whether a function has a local extremum at a critical point. Let be a twice-differentiable function such that and is continuous over an open interval containing Suppose Since is continuous over  for all ( ). Then, by Corollary  is a decreasing function over Since we conclude that for all if and if Therefore, by the first derivative test, has a local maximum at On the other hand, suppose there exists a point such that but Since is continuous over an open interval containing then for all ( ). Then, by Corollary is an increasing function over Since we conclude that for all  if and if Therefore, by the first derivative test, has a local minimum at    \"A function f(x) is graphed in the first quadrant with a and b marked on the x-axis. The function is vaguely sinusoidal, increasing first to x = a, then decreasing to x = b, and increasing again. At (a, f(a)), the tangent is marked, and it is noted that f'(a) = 0 and f''(a) \\lt 0. At (b, f(b)), the tangent is marked, and it is noted f'(b) = 0 and f''(b) \\gt 0.\"  Consider a twice-differentiable function such that is continuous. Since and there is an interval containing such that for all in  is increasing if and is decreasing if As a result, has a local maximum at Since and there is an interval containing such that for all in  is decreasing if and is increasing if As a result, has a local minimum at     The Second Derivative Test for Local Extrema  Suppose is continuous over an interval containing   If then has a local minimum at  If then has a local maximum at  If then the test is inconclusive.    Note that for case iii. when then may have a local maximum, local minimum, or neither at For example, the functions  and all have critical points at In each case, the second derivative is zero at However, the function has a local minimum at whereas the function has a local maximum at and the function does not have a local extremum at  Let’s now look at how to use the second derivative test for local extrema to determine whether has a local maximum or local minimum at a critical point where   Using the Second Derivative Test For Local Extrema   Use the second derivative to find the location of all local extrema for    To apply the second derivative test for local extrema, we first need to find critical points where The derivative is Therefore, when  To determine whether has a local extrema at any of these points, we need to evaluate the sign of at these points. The second derivative is   In the following table, we evaluate the second derivative at each of the critical points and use the second derivative test for local extrema to determine whether has a local maximum or local minimum at any of these points.       Conclusion      Local maximum      Second derivative test is inconclusive      Local minimum     By the second derivative test for local extrema, we conclude that has a local maximum at and has a local minimum at The second derivative test for local extrema is inconclusive at To determine whether has a local extrema at we apply the first derivative test. To evaluate the sign of for and let and be the two test points. Since and we conclude that is decreasing on both intervals and, therefore, does not have a local extrema at as shown in the following graph.    \"The function f(x) = x5 – 5x3 is graphed. The function increases to (negative square root of 3, 10), then decreases to an inflection point at 0, continues decreasing to (square root of 3, −10), and then increases.\"  The function has a local maximum at and a local minimum at       Consider the function The points satisfy Use the second derivative test for local extrema to determine whether has a local maximum or local minimum at those points.    has a local maximum at and a local minimum at         Curve Sketching  We have been learning how we can understand the behavior of a function based on its first and second derivatives. While we have been treating the properties of a function separately (increasing and decreasing, concave up and concave down, etc.), we combine them here to produce an accurate graph of the function without plotting lots of extraneous points.   Graphing a Function   Identify the domain of and any symmetries of the function.  Identify any vertical asymptotes and the end behavior of the graph.  Find the derivatives and .  Find the critical points and classify any local extrema.  Determine where the curve is increasing and where it is decreasing. (Remember to check each side of any vertical asymptotes.)  Find any inflection points, and determine where the curve is concave up and where it is concave down. (Remember to check each side of any vertical asymptotes.)  Plot the - and - intercepts and any local extrema and inflection points found above. Indicate the location of any asymptotes, and sketch the curve.    Sketch     Reading from :  The function is a polynomial so it is defined everywhere.  Since , it is not even or odd. Nor is it periodic.  The -intercept is , while the -intercepts are given by the solution of Hence the -intercepts are .  Since is a polynomial it does not have any vertical asymptotes.  For very large , both positive and negative, the term in dominates the other term so that and the function has no horizontal asymptotes.    Now compute the derivative :   The critical points are at . Since the function is a polynomial there are no singular points. The critical points split the real line into the intervals , and .  When , and , so .  When , and , so .  When , and , so .  Summarising all this       0 (0,3) 3     negative 0 negative 0 positive   decreasing  horizontal tangent  decreasing minimum increasing    So the point is a local minimum. The point is neither a minimum nor a maximum, even though .     Now examine :   So when . This splits the real line into the intervals and .  When , and so .  When , and and so .  When , and and so .  Thus the function is convex up for , then convex down for , and finally convex up again for . Hence and are inflection points.    Putting all this information together gives us the following sketch.    \"A graph of f(x)=x^4-4x^3 with x-intercepts labeled along with (2,-16) and (3,-27). Brackets below the graph show were it is increasing and decreasing\"       Another Sketching Example       Reading from :  The function is rational so it is defined except where its denominator is zero namely at .  Since , it is odd. Indeed this means that we only need to examine what happens to the function for and we can then infer what happens for using . In practice we will sketch the graph for and then infer the rest from this symmetry.  The -intercept is , while the -intercepts are given by the solution of . So the only -intercept is .  Since is rational, it may have vertical asymptotes where its denominator is zero at . Since the function is odd, we only have to analyse the asymptote at and we can then infer what happens at by symmetry.   We now check for horizontal asymptotes:     Now compute the derivative :   Hence there are no critical points. There are singular points where the denominator is zero, namely . Before we proceed, notice that the numerator is always negative and the denominator is always positive. Hence except at where it is undefined.  The function is decreasing except at .  We already know that at we have a vertical asymptote and that for all . So   Summarising all this     [0,2) 2     negative DNE negative   decreasing vertical asymptote decreasing     Remember we will draw the graph for and then use the odd symmetry to infer the graph for .     Now examine :   So when and does not exist when . This splits the real line into the intervals and . However we only need to consider (because of the odd symmetry).  When , and so .  When , and so .    Putting all this information together gives the following sketch for :    \"A sketch of the graph of f(x)=x\/(x^2-4) when x is positive. To the left of the vertical asymptote at x=2 is a curly bracket showing that f''< 0 and f is convex down and to the right of the vertical asymptote is a curly bracket showing the f''> 0 and f is convex up\".    We can then draw in the graph for using :    A graph fo f(x)=x\/(x^2-4) over the entire domain. An arrow points to the inflection point at (0,0). Curly braces show where the graph is convex up and convex down to the left and right of a vertical asymptote x=2, respectively.    Notice that this means that the concavity changes at , so the point is a point of inflection (as indicated).        Reading from :  First notice that we can rewrite   The function is the cube root of a rational function. The rational function is defined except at , so the domain of is all reals except .  Clearly the function is not periodic, and examining shows the function is neither even nor odd.  To compute horizontal asymptotes we examine the limit of the portion of the function inside the cube-root This means we have That is, the line will be a horizontal asymptote to the graph both for and for .  Our function as , because of the in its denominator. So has as a vertical asymptote.    Now compute . Since we rewrote we can use the chain rule   Notice that the derivative is nowhere equal to zero, so the function has no critical points. However there are two places the derivative is undefined. The terms are undefined at respectively. Hence are singular points. These split the real line into the intervals and .  When , , we have that and and so .  When , , we have that and and so .  When , , we have that and and so .  We should also examine the behaviour of the derivative as and . We already know that is a vertical asymptote of the function, so it is not surprising that the lines tangent to the graph become vertical as we approach 6. The behavior around is less standard, since the lines tangent to the graph become vertical, but is not a vertical asymptote of the function. Indeed the function takes a finite value .  Summarising all this       0 (0,6) 6     negative DNE positive DNE negative   decreasing vertical tangents increasing  vertical asymptote  decreasing        Now look at :   Both of the factors and are even powers and so are positive (though possibly infinite). So the sign of is the same as the sign of the factor . Thus       1     negative 0 positive   concave down  inflection point  concave up          Here is a sketch of the graph .    A graph of f(x) equals the cube root of x squared divided by (x-6) squared. Curly braces below the x-axis show on which intervals the derivative is positive or negative and where f is increasing or decreasing.    It is hard to see the inflection point at , in the above sketch. So here is a blow up of the part of the sketch around .    A zoomed in graph of f(x) equals the cube root of x squared divided by (x-6) squared around x=1 with the inflection point at (1,1 over the cube root of 25) labeled.    And if we zoom in even more we have    A zoomed in graph of f(x) equals the cube root of x squared divided by (x-6) squared around x=1 with the inflection point at (1,1 over the cube root of 25) labeled.       "
},
{
  "id": "sec_Ch4Sec6-3-2",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "concavity "
},
{
  "id": "sec_Ch4Sec6-3-4",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-3-4",
  "type": "Definition",
  "number": "4.6.1",
  "title": "",
  "body": " Let be a function that is differentiable over an open interval If is increasing over we say is concave up over If is decreasing over we say is concave down over  "
},
{
  "id": "CNX_Calc_Figure_04_05_005",
  "level": "2",
  "url": "sec_Ch4Sec6.html#CNX_Calc_Figure_04_05_005",
  "type": "Figure",
  "number": "4.6.2",
  "title": "",
  "body": "  \"This figure is broken into four figures labeled a, b, c, and d. Figure a shows a function increasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are increasing, but the one taken further to the right is increasing more. It is noted that f' is increasing and f is concave up. Figure b shows a function increasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are increasing, but the one taken further to the right is increasing less. It is noted that f' is decreasing and f is concave down. Figure c shows a function decreasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are decreasing, but the one taken further to the right is decreasing less. It is noted that f' is increasing and f is concave up. Figure d shows a function decreasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are decreasing, but the one taken further to the right is decreasing more. It is noted that f' is decreasing and f is concave down.\"   (a), (c) Since is increasing over the interval we say is concave up over (b), (d) Since is decreasing over the interval we say is concave down over   "
},
{
  "id": "sec_Ch4Sec6-3-6",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "concavity test "
},
{
  "id": "sec_Ch4Sec6-3-7",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-3-7",
  "type": "Theorem",
  "number": "4.6.3",
  "title": "Test for Concavity.",
  "body": "  Test for Concavity  Let be a function that is twice differentiable over an interval   If for all then is concave up over  If for all then is concave down over   "
},
{
  "id": "sec_Ch4Sec6-3-9",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-3-9",
  "type": "Definition",
  "number": "4.6.4",
  "title": "",
  "body": " If is continuous at and changes concavity at the point is an inflection point of  "
},
{
  "id": "CNX_Calc_Figure_04_05_006",
  "level": "2",
  "url": "sec_Ch4Sec6.html#CNX_Calc_Figure_04_05_006",
  "type": "Figure",
  "number": "4.6.5",
  "title": "",
  "body": "  \"A sinusoidal function is shown that has been shifted into the first quadrant. The function starts decreasing, so f' \\lt 0 and f'' \\gt 0. The function reaches the local minimum and starts increasing, so f' \\gt 0 and f'' \\gt 0. It is noted that the slope is increasing for these two intervals. The function then reaches an inflection point (a, f(a)) and from here the slop is decreasing even though the function continues to increase, so f' \\gt 0 and f'' \\lt 0. The function reaches the maximum and then starts decreasing, so f' \\lt 0 and f'' \\lt 0.\"  Since for the function is concave up over the interval Since for the function is concave down over the interval The point is an inflection point of  "
},
{
  "id": "fs-id1165042558993",
  "level": "2",
  "url": "sec_Ch4Sec6.html#fs-id1165042558993",
  "type": "Example",
  "number": "4.6.6",
  "title": "Testing for Concavity.",
  "body": " Testing for Concavity   For the function determine all intervals where is concave up and all intervals where is concave down. List all inflection points for Use a graphing utility to confirm your results.    To determine concavity, we need to find the second derivative The first derivative is so the second derivative is If the function changes concavity, it occurs either when or is undefined. Since is defined for all real numbers we need only find where Solving the equation we see that is the only place where could change concavity. We now test points over the intervals and to determine the concavity of The points and are test points for these intervals.     Interval  Test Point  Sign of at Test Point  Conclusion       is concave down       is concave up.     We conclude that is concave down over the interval and concave up over the interval Since changes concavity at the point is an inflection point. confirms the analytical results.    \"The function f(x) = x3 – 6x2 + 9x + 30 is graphed. The inflection point (2, 32) is marked, and it is roughly equidistant from the two local extrema.\"  The given function has a point of inflection at where the graph changes concavity.    "
},
{
  "id": "sec_Ch4Sec6-3-12",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-3-12",
  "type": "Checkpoint",
  "number": "4.6.9",
  "title": "",
  "body": "  For find all intervals where is concave up and all intervals where is concave down.    is concave up over the interval and concave down over the interval    Find where  "
},
{
  "id": "fs-id1165043353366",
  "level": "2",
  "url": "sec_Ch4Sec6.html#fs-id1165043353366",
  "type": "Table",
  "number": "4.6.10",
  "title": "What Derivatives Tell Us about Graphs",
  "body": " What Derivatives Tell Us about Graphs    Sign of  Sign of  Is increasing or decreasing?  Concavity    Positive  Positive  Increasing  Concave up    Positive  Negative  Increasing  Concave down    Negative  Positive  Decreasing  Concave up    Negative  Negative  Decreasing  Concave down    "
},
{
  "id": "CNX_Calc_Figure_04_05_008",
  "level": "2",
  "url": "sec_Ch4Sec6.html#CNX_Calc_Figure_04_05_008",
  "type": "Figure",
  "number": "4.6.11",
  "title": "",
  "body": "  \"A function is graphed in the first quadrant. It is broken up into four sections, with the breaks coming at the local minimum, inflection point, and local maximum, respectively. The first section is decreasing and concave up; here, f' \\lt 0 and f'' \\gt 0. The second section is increasing and concave up; here, f' \\gt 0 and f'' \\gt 0. The third section is increasing and concave down; here, f' \\gt 0 and f'' \\lt 0. The fourth section is increasing and concave down; here, f' \\lt 0 and f'' \\lt 0.\"  Consider a twice-differentiable function over an open interval If for all the function is increasing over If for all the function is decreasing over If for all the function is concave up. If for all the function is concave down on   "
},
{
  "id": "sec_Ch4Sec6-4-3",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivative test for local extrema "
},
{
  "id": "CNX_Calc_Figure_04_05_009",
  "level": "2",
  "url": "sec_Ch4Sec6.html#CNX_Calc_Figure_04_05_009",
  "type": "Figure",
  "number": "4.6.12",
  "title": "",
  "body": "  \"A function f(x) is graphed in the first quadrant with a and b marked on the x-axis. The function is vaguely sinusoidal, increasing first to x = a, then decreasing to x = b, and increasing again. At (a, f(a)), the tangent is marked, and it is noted that f'(a) = 0 and f''(a) \\lt 0. At (b, f(b)), the tangent is marked, and it is noted f'(b) = 0 and f''(b) \\gt 0.\"  Consider a twice-differentiable function such that is continuous. Since and there is an interval containing such that for all in  is increasing if and is decreasing if As a result, has a local maximum at Since and there is an interval containing such that for all in  is decreasing if and is increasing if As a result, has a local minimum at   "
},
{
  "id": "sec_Ch4Sec6-4-5",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-4-5",
  "type": "Theorem",
  "number": "4.6.13",
  "title": "The Second Derivative Test for Local Extrema.",
  "body": " The Second Derivative Test for Local Extrema  Suppose is continuous over an interval containing   If then has a local minimum at  If then has a local maximum at  If then the test is inconclusive.   "
},
{
  "id": "fs-id1165042710827",
  "level": "2",
  "url": "sec_Ch4Sec6.html#fs-id1165042710827",
  "type": "Example",
  "number": "4.6.14",
  "title": "Using the Second Derivative Test For Local Extrema.",
  "body": " Using the Second Derivative Test For Local Extrema   Use the second derivative to find the location of all local extrema for    To apply the second derivative test for local extrema, we first need to find critical points where The derivative is Therefore, when  To determine whether has a local extrema at any of these points, we need to evaluate the sign of at these points. The second derivative is   In the following table, we evaluate the second derivative at each of the critical points and use the second derivative test for local extrema to determine whether has a local maximum or local minimum at any of these points.       Conclusion      Local maximum      Second derivative test is inconclusive      Local minimum     By the second derivative test for local extrema, we conclude that has a local maximum at and has a local minimum at The second derivative test for local extrema is inconclusive at To determine whether has a local extrema at we apply the first derivative test. To evaluate the sign of for and let and be the two test points. Since and we conclude that is decreasing on both intervals and, therefore, does not have a local extrema at as shown in the following graph.    \"The function f(x) = x5 – 5x3 is graphed. The function increases to (negative square root of 3, 10), then decreases to an inflection point at 0, continues decreasing to (square root of 3, −10), and then increases.\"  The function has a local maximum at and a local minimum at    "
},
{
  "id": "sec_Ch4Sec6-4-9",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-4-9",
  "type": "Checkpoint",
  "number": "4.6.17",
  "title": "",
  "body": "  Consider the function The points satisfy Use the second derivative test for local extrema to determine whether has a local maximum or local minimum at those points.    has a local maximum at and a local minimum at     "
},
{
  "id": "sec_Ch4Sec6-5-3",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-5-3",
  "type": "Problem-Solving Strategy",
  "number": "4.6.18",
  "title": "Graphing a Function <span class=\"process-math\">\\(y=f(x)\\)<\/span>.",
  "body": " Graphing a Function   Identify the domain of and any symmetries of the function.  Identify any vertical asymptotes and the end behavior of the graph.  Find the derivatives and .  Find the critical points and classify any local extrema.  Determine where the curve is increasing and where it is decreasing. (Remember to check each side of any vertical asymptotes.)  Find any inflection points, and determine where the curve is concave up and where it is concave down. (Remember to check each side of any vertical asymptotes.)  Plot the - and - intercepts and any local extrema and inflection points found above. Indicate the location of any asymptotes, and sketch the curve.   "
},
{
  "id": "APPsketchB",
  "level": "2",
  "url": "sec_Ch4Sec6.html#APPsketchB",
  "type": "Example",
  "number": "4.6.19",
  "title": "Sketch <span class=\"process-math\">\\(f(x)=x^4-4x^3\\)<\/span>.",
  "body": "Sketch     Reading from :  The function is a polynomial so it is defined everywhere.  Since , it is not even or odd. Nor is it periodic.  The -intercept is , while the -intercepts are given by the solution of Hence the -intercepts are .  Since is a polynomial it does not have any vertical asymptotes.  For very large , both positive and negative, the term in dominates the other term so that and the function has no horizontal asymptotes.    Now compute the derivative :   The critical points are at . Since the function is a polynomial there are no singular points. The critical points split the real line into the intervals , and .  When , and , so .  When , and , so .  When , and , so .  Summarising all this       0 (0,3) 3     negative 0 negative 0 positive   decreasing  horizontal tangent  decreasing minimum increasing    So the point is a local minimum. The point is neither a minimum nor a maximum, even though .     Now examine :   So when . This splits the real line into the intervals and .  When , and so .  When , and and so .  When , and and so .  Thus the function is convex up for , then convex down for , and finally convex up again for . Hence and are inflection points.    Putting all this information together gives us the following sketch.    \"A graph of f(x)=x^4-4x^3 with x-intercepts labeled along with (2,-16) and (3,-27). Brackets below the graph show were it is increasing and decreasing\"     "
},
{
  "id": "sec_Ch4Sec6-5-5",
  "level": "2",
  "url": "sec_Ch4Sec6.html#sec_Ch4Sec6-5-5",
  "type": "Example",
  "number": "4.6.20",
  "title": "Another Sketching Example.",
  "body": " Another Sketching Example  "
},
{
  "id": "eg_3_6_6",
  "level": "2",
  "url": "sec_Ch4Sec6.html#eg_3_6_6",
  "type": "Example",
  "number": "4.6.21",
  "title": "<span class=\"process-math\">\\(f(x) = \\dfrac{x}{x^2-4}\\)<\/span>.",
  "body": "    Reading from :  The function is rational so it is defined except where its denominator is zero namely at .  Since , it is odd. Indeed this means that we only need to examine what happens to the function for and we can then infer what happens for using . In practice we will sketch the graph for and then infer the rest from this symmetry.  The -intercept is , while the -intercepts are given by the solution of . So the only -intercept is .  Since is rational, it may have vertical asymptotes where its denominator is zero at . Since the function is odd, we only have to analyse the asymptote at and we can then infer what happens at by symmetry.   We now check for horizontal asymptotes:     Now compute the derivative :   Hence there are no critical points. There are singular points where the denominator is zero, namely . Before we proceed, notice that the numerator is always negative and the denominator is always positive. Hence except at where it is undefined.  The function is decreasing except at .  We already know that at we have a vertical asymptote and that for all . So   Summarising all this     [0,2) 2     negative DNE negative   decreasing vertical asymptote decreasing     Remember we will draw the graph for and then use the odd symmetry to infer the graph for .     Now examine :   So when and does not exist when . This splits the real line into the intervals and . However we only need to consider (because of the odd symmetry).  When , and so .  When , and so .    Putting all this information together gives the following sketch for :    \"A sketch of the graph of f(x)=x\/(x^2-4) when x is positive. To the left of the vertical asymptote at x=2 is a curly bracket showing that f''< 0 and f is convex down and to the right of the vertical asymptote is a curly bracket showing the f''> 0 and f is convex up\".    We can then draw in the graph for using :    A graph fo f(x)=x\/(x^2-4) over the entire domain. An arrow points to the inflection point at (0,0). Curly braces show where the graph is convex up and convex down to the left and right of a vertical asymptote x=2, respectively.    Notice that this means that the concavity changes at , so the point is a point of inflection (as indicated).   "
},
{
  "id": "APPsketchC",
  "level": "2",
  "url": "sec_Ch4Sec6.html#APPsketchC",
  "type": "Example",
  "number": "4.6.22",
  "title": "<span class=\"process-math\">\\(f(x)=\\root{3}\\of{\\frac{x^2}{(x-6)^2}} \\)<\/span>.",
  "body": "    Reading from :  First notice that we can rewrite   The function is the cube root of a rational function. The rational function is defined except at , so the domain of is all reals except .  Clearly the function is not periodic, and examining shows the function is neither even nor odd.  To compute horizontal asymptotes we examine the limit of the portion of the function inside the cube-root This means we have That is, the line will be a horizontal asymptote to the graph both for and for .  Our function as , because of the in its denominator. So has as a vertical asymptote.    Now compute . Since we rewrote we can use the chain rule   Notice that the derivative is nowhere equal to zero, so the function has no critical points. However there are two places the derivative is undefined. The terms are undefined at respectively. Hence are singular points. These split the real line into the intervals and .  When , , we have that and and so .  When , , we have that and and so .  When , , we have that and and so .  We should also examine the behaviour of the derivative as and . We already know that is a vertical asymptote of the function, so it is not surprising that the lines tangent to the graph become vertical as we approach 6. The behavior around is less standard, since the lines tangent to the graph become vertical, but is not a vertical asymptote of the function. Indeed the function takes a finite value .  Summarising all this       0 (0,6) 6     negative DNE positive DNE negative   decreasing vertical tangents increasing  vertical asymptote  decreasing        Now look at :   Both of the factors and are even powers and so are positive (though possibly infinite). So the sign of is the same as the sign of the factor . Thus       1     negative 0 positive   concave down  inflection point  concave up          Here is a sketch of the graph .    A graph of f(x) equals the cube root of x squared divided by (x-6) squared. Curly braces below the x-axis show on which intervals the derivative is positive or negative and where f is increasing or decreasing.    It is hard to see the inflection point at , in the above sketch. So here is a blow up of the part of the sketch around .    A zoomed in graph of f(x) equals the cube root of x squared divided by (x-6) squared around x=1 with the inflection point at (1,1 over the cube root of 25) labeled.    And if we zoom in even more we have    A zoomed in graph of f(x) equals the cube root of x squared divided by (x-6) squared around x=1 with the inflection point at (1,1 over the cube root of 25) labeled.     "
},
{
  "id": "sec_Ch4Sec7",
  "level": "1",
  "url": "sec_Ch4Sec7.html",
  "type": "Section",
  "number": "4.7",
  "title": "Applied Optimization Problems",
  "body": " Applied Optimization Problems   Learning Objectives   Set up and solve optimization problems in several applied fields.   One common application of calculus is calculating the minimum or maximum value of a function. For example, companies often want to minimize production costs or maximize revenue. In manufacturing, it is often desirable to minimize the amount of material used to package a product with a certain volume. In this section, we show how to set up these types of minimization and maximization problems and solve them by using the tools developed in this chapter.    Solving Optimization Problems over a Closed, Bounded Interval  The basic idea of the optimization problems that follow is the same. We have a particular quantity that we are interested in maximizing or minimizing. However, we also have some auxiliary condition that needs to be satisfied. For example, in , we are interested in maximizing the area of a rectangular garden. Certainly, if we keep making the side lengths of the garden larger, the area will continue to become larger. However, what if we have some restriction on how much fencing we can use for the perimeter? In this case, we cannot make the garden as large as we like. Let's look at how we can maximize the area of a rectangle subject to some constraint on the perimeter.   Maximizing the Area of a Garden   A rectangular garden is to be constructed using a rock wall as one side of the garden and wire fencing for the other three sides ( ). Given ft of wire fencing, determine the dimensions that would create a garden of maximum area. What is the maximum area?    \"A drawing of a garden has x and y written on the vertical and horizontal sides, respectively. There is a rock wall running along the entire bottom horizontal length of the drawing.\"  We want to determine the measurements and that will create a garden with a maximum area using ft of fencing.     Let denote the length of the side of the garden perpendicular to the rock wall and denote the length of the side parallel to the rock wall. Then the area of the garden is   We want to find the maximum possible area subject to the constraint that the total fencing is From , the total amount of fencing used will be Therefore, the constraint equation is   Solving this equation for we have Thus, we can write the area as   Before trying to maximize the area function we need to determine the domain under consideration. To construct a rectangular garden, we certainly need the lengths of both sides to be positive. Therefore, we need and Since if then Therefore, we are trying to determine the maximum value of for over the open interval We do not know that a function necessarily has a maximum value over an open interval. However, we do know that a continuous function has an absolute maximum (and absolute minimum) over a closed interval. Therefore, let's consider the function over the closed interval If the maximum value occurs at an interior point, then we have found the value in the open interval that maximizes the area of the garden. Therefore, we consider the following problem:  Maximize over the interval  As mentioned earlier, since is a continuous function on a closed, bounded interval, by the extreme value theorem, it has a maximum and a minimum. These extreme values occur either at endpoints or critical points. At the endpoints, Since the area is positive for all in the open interval the maximum must occur at a critical point. Differentiating the function we obtain   Therefore, the only critical point is ( ). We conclude that the maximum area must occur when Then we have To maximize the area of the garden, let ft and The area of this garden is    \"The function A(x) = 100x-2x^2 is graphed. At its maximum there is an intersection of two dashed lines and text that reads \"Maximum area is 1250 square feet when x = 25 feet.\"\"  To maximize the area of the garden, we need to find the maximum value of the function      Determine the maximum area if we want to make the same rectangular garden as in , but we have ft of fencing.    The maximum area is    We need to maximize the function over the interval   Now let's look at a general strategy for solving optimization problems similar to .   Solving Optimization Problems   Introduce all variables. If applicable, draw a figure and label all variables.  Determine which quantity is to be maximized or minimized, and for what range of values of the other variables (if this can be determined at this time).  Write a formula for the quantity to be maximized or minimized in terms of the variables. This formula may involve more than one variable.  Write any equations relating the independent variables in the formula from step Use these equations to write the quantity to be maximized or minimized as a function of one variable.  Identify the domain of consideration for the function in step based on the physical problem to be solved.  Locate the maximum or minimum value of the function from step This step typically involves looking for critical points and evaluating a function at endpoints.    Now let's apply this strategy to maximize the volume of an open-top box given a constraint on the amount of material to be used.   Maximizing the Volume of a Box   An open-top box is to be made from a in. by in. piece of cardboard by removing a square from each corner of the box and folding up the flaps on each side. What size square should be cut out of each corner to get a box with the maximum volume?    Step 1: Let be the side length of the square to be removed from each corner ( ). Then, the remaining four flaps can be folded up to form an open-top box. Let be the volume of the resulting box.    \"There are two figures for this figure. The first one is a rectangle with sides 24 in and 36 in, with each corner having a square of side length x taken out of it. In the second picture, there is a box with side lengths x in, 24-2x in, and 36-2x in.\"  A square with side length inches is removed from each corner of the piece of cardboard. The remaining flaps are folded to form an open-top box.   Step 2: We are trying to maximize the volume of a box. Therefore, the problem is to maximize  Step 3: As mentioned in step are trying to maximize the volume of a box. The volume of a box is where are the length, width, and height, respectively.  Step 4: From , we see that the height of the box is inches, the length is inches, and the width is inches. Therefore, the volume of the box is   Step 5: To determine the domain of consideration, let's examine . Certainly, we need Furthermore, the side length of the square cannot be greater than or equal to half the length of the shorter side, in.; otherwise, one of the flaps would be completely cut off. Therefore, we are trying to determine whether there is a maximum volume of the box for over the open interval Since is a continuous function over the closed interval we know will have an absolute maximum over the closed interval. Therefore, we consider over the closed interval and check whether the absolute maximum occurs at an interior point.  Step 6: Since is a continuous function over the closed, bounded interval  must have an absolute maximum (and an absolute minimum). Since at the endpoints and for the maximum must occur at a critical point. The derivative is   To find the critical points, we need to solve the equation   Dividing both sides of this equation by the problem simplifies to solving the equation   Using the quadratic formula, we find that the critical points are   Since is not in the domain of consideration, the only critical point we need to consider is Therefore, the volume is maximized if we let The maximum volume is as shown in the following graph.    \"The function V(x) = 4x3 – 120x2 + 864x is graphed. At its maximum there is an intersection of two dashed lines and text that reads “Maximum volume is approximately 1825 cubic inches when x ≈ 4.7 inches.”\"  Maximizing the volume of the box leads to finding the maximum value of a cubic polynomial.      Watch a video about optimizing the volume of a box.    Suppose the dimensions of the cardboard in are 20 in. by 30 in. Let be the side length of each square and write the volume of the open-top box as a function of Determine the domain of consideration for    The domain is    The volume of the box is    Minimizing Travel Time   An island is due north of its closest point along a straight shoreline. A visitor is staying at a cabin on the shore that is west of that point. The visitor is planning to go from the cabin to the island. Suppose the visitor runs at a rate of and swims at a rate of How far should the visitor run before swimming to minimize the time it takes to reach the island?    Step 1: Let be the distance running and let be the distance swimming ( ). Let be the time it takes to get from the cabin to the island.    \"The cabin is x miles from the shore. From that point on the shore, the island is y miles away. If you were to continue the line from the cabin to the shore (the x miles one) and if you were to draw a line from the island parallel to the shore, then the lines would extend 2 miles from the island and 6 miles from the cabin before intersecting.\"  How can we choose and to minimize the travel time from the cabin to the island?   Step 2: The problem is to minimize  Step 3: To find the time spent traveling from the cabin to the island, add the time spent running and the time spent swimming. Since Distance Rate Time the time spent running is   and the time spent swimming is   Therefore, the total time spent traveling is   Step 4: From , the line segment of miles forms the hypotenuse of a right triangle with legs of length and Therefore, by the Pythagorean theorem, and we obtain Thus, the total time spent traveling is given by the function   Step 5: From , we see that Therefore, is the domain of consideration.  Step 6: Since is a continuous function over a closed, bounded interval, it has a maximum and a minimum. Let's begin by looking for any critical points of over the interval The derivative is   If then   Therefore,   Squaring both sides of this equation, we see that if satisfies this equation, then must satisfy   which implies   We conclude that if is a critical point, then satisfies   Therefore, the possibilities for critical points are   Since is not in the domain, it is not a possibility for a critical point. On the other hand, is in the domain. Since we squared both sides of to arrive at the possible critical points, it remains to verify that satisfies . Since does satisfy that equation, we conclude that is a critical point, and it is the only one. To justify that the time is minimized for this value of we just need to check the values of at the endpoints and and compare them with the value of at the critical point We find that and whereas Therefore, we conclude that has a local minimum at mi.     Suppose the island is mi from shore, and the distance from the cabin to the point on the shore closest to the island is Suppose a visitor swims at the rate of and runs at a rate of Let denote the distance the visitor will run before swimming, and find a function for the time it takes the visitor to get from the cabin to the island.       The time   In business, companies are interested in maximizing revenue . In the following example, we consider a scenario in which a company has collected data on how many cars it is able to lease, depending on the price it charges its customers to rent a car. Let's use these data to determine the price the company should charge to maximize the amount of money it brings in.   Maximizing Revenue   Owners of a car rental company have determined that if they charge customers dollars per day to rent a car, where the number of cars they rent per day can be modeled by the linear function If they charge per day or less, they will rent all their cars. If they charge per day or more, they will not rent any cars. Assuming the owners plan to charge customers between $50 per day and per day to rent a car, how much should they charge to maximize their revenue?    Step 1: Let be the price charged per car per day and let be the number of cars rented per day. Let be the revenue per day.  Step 2: The problem is to maximize  Step 3: The revenue (per day) is equal to the number of cars rented per day times the price charged per car per day—that is,  Step 4: Since the number of cars rented per day is modeled by the linear function the revenue can be represented by the function   Step 5: Since the owners plan to charge between per car per day and per car per day, the problem is to find the maximum revenue for in the closed interval  Step 6: Since is a continuous function over the closed, bounded interval it has an absolute maximum (and an absolute minimum) in that interval. To find the maximum value, look for critical points. The derivative is Therefore, the critical point is When  When  When  Therefore, the absolute maximum occurs at The car rental company should charge per day per car to maximize revenue as shown in the following figure.    \"The function R(p) is graphed. At its maximum there is an intersection of two dashed lines and text that reads \"Maximum revenue is $50,000 per day when the price charged per car is $100 per day.\"\"  To maximize revenue, a car rental company has to balance the price of a rental against the number of cars people will rent at that price.       A car rental company charges its customers dollars per day, where It has found that the number of cars rented per day can be modeled by the linear function How much should the company charge each customer to maximize revenue?    The company should charge per car per day.    where is the number of cars rented and is the price charged per car.    Maximizing the Area of an Inscribed Rectangle   A rectangle is to be inscribed in the ellipse   What should the dimensions of the rectangle be to maximize its area? What is the maximum area?    Step 1: For a rectangle to be inscribed in the ellipse, the sides of the rectangle must be parallel to the axes. Let be the length of the rectangle and be its width. Let be the area of the rectangle.    \"The ellipse x2\/4 + y2 = 1 is drawn with its x intercepts being ±2 and its y intercepts being ±1. There is a rectangle inscribed in the ellipse with length L (in the x-direction) and width W.\">  We want to maximize the area of a rectangle inscribed in an ellipse.   Step 2: The problem is to maximize  Step 3: The area of the rectangle is  Step 4: Let be the corner of the rectangle that lies in the first quadrant, as shown in . We can write length and width Since and we have Therefore, the area is Step 5: From , we see that to inscribe a rectangle in the ellipse, the -coordinate of the corner in the first quadrant must satisfy Therefore, the problem reduces to looking for the maximum value of over the open interval Since will have an absolute maximum (and absolute minimum) over the closed interval we consider over the interval If the absolute maximum occurs at an interior point, then we have found an absolute maximum in the open interval.  Step 6: As mentioned earlier, is a continuous function over the closed, bounded interval Therefore, it has an absolute maximum (and absolute minimum). At the endpoints and  For  Therefore, the maximum must occur at a critical point. Taking the derivative of we obtain   To find critical points, we need to find where We can see that if is a solution of   then must satisfy   Therefore, Thus, are the possible solutions of . Since we are considering over the interval  is a possibility for a critical point, but is not. Therefore, we check whether is a solution of . Since is a solution of , we conclude that is the only critical point of in the interval Therefore, must have an absolute maximum at the critical point To determine the dimensions of the rectangle, we need to find the length and the width If then   Therefore, the dimensions of the rectangle are and The area of this rectangle is     Modify the area function if the rectangle is to be inscribed in the unit circle What is the domain of consideration?    The domain of consideration is    If is the vertex of the square that lies in the first quadrant, then the area of the square is     Solving Optimization Problems when the Interval Is Not Closed or Is Unbounded  In the previous examples, we considered functions on closed, bounded domains. Consequently, by the extreme value theorem, we were guaranteed that the functions had absolute extrema. Let's now consider functions for which the domain is neither closed nor bounded.  Many functions still have at least one absolute extrema, even if the domain is not closed or the domain is unbounded. For example, the function over has an absolute minimum of at Therefore, we can still consider functions over unbounded domains or open intervals and determine whether they have any absolute extrema. In the next example, we try to minimize a function over an unbounded domain. We will see that, although the domain of consideration is the function has an absolute minimum.  In the following example, we look at constructing a box of least surface area with a prescribed volume. It is not difficult to show that for a closed-top box, by symmetry, among all boxes with a specified volume, a cube will have the smallest surface area. Consequently, we consider the modified problem of determining which open-topped box with a specified volume has the smallest surface area.   Minimizing Surface Area   A rectangular box with a square base, an open top, and a volume of in. 3 is to be constructed. What should the dimensions of the box be to minimize the surface area of the box? What is the minimum surface area?    Step 1: Draw a rectangular box and introduce the variable to represent the length of each side of the square base; let represent the height of the box. Let denote the surface area of the open-top box.    \"A box with square base is shown. The base has side length x, and the height is y.\"  We want to minimize the surface area of a square-based box with a given volume.   Step 2: We need to minimize the surface area. Therefore, we need to minimize  Step 3: Since the box has an open top, we need only determine the area of the four vertical sides and the base. The area of each of the four vertical sides is The area of the base is Therefore, the surface area of the box is   Step 4: Since the volume of this box is and the volume is given as the constraint equation is   Solving the constraint equation for we have Therefore, we can write the surface area as a function of only:   Therefore,  Step 5: Since we are requiring that we cannot have Therefore, we need On the other hand, is allowed to have any positive value. Note that as becomes large, the height of the box becomes correspondingly small so that Similarly, as becomes small, the height of the box becomes correspondingly large. We conclude that the domain is the open, unbounded interval Note that, unlike the previous examples, we cannot reduce our problem to looking for an absolute maximum or absolute minimum over a closed, bounded interval. However, in the next step, we discover why this function must have an absolute minimum over the interval  Step 6: Note that as  Also, as  Since is a continuous function that approaches infinity at the ends, it must have an absolute minimum at some This minimum must occur at a critical point of The derivative is   Therefore, when Solving this equation for we obtain so Since this is the only critical point of the absolute minimum must occur at (see ). When  Therefore, the dimensions of the box should be and With these dimensions, the surface area is     \"The function is graphed. At its minimum there is a dashed line and text that reads \"Minimum surface area is 108 times the cube root of 4 square inches when x = 6 times the cube root of 2 inches.\"\"  We can use a graph to determine the dimensions of a box of given the volume and the minimum surface area.      Minimizing Cost  A company must produce a sturdy rectangular container with a square base and a volume of 128 cubic ft. The cost to produce the top and sides of this box is $2 per square foot and the cost to produce the bottom is $6 per square foot. FInd the dimensions of the box that will minimize cost.  Step 1: Draw a rectangular box and introduce the variable to represent the length of each side of the square base; let represent the height of the box. Let denote the cost of producing the box.    \"A box with square base is shown. The base has side length x, and the height is h.\"  We want to minimize the cost to produce a square-based box with a given volume.  --> Step 2: We need to minimize the cost. Therefore, we need to minimize  Step 3: We need to determine the cost of the four vertical sides, the top, and the base. In order to find the cost, we must first find the surface area of the box. The area of each of the four vertical sides is The area of the base and top are both Since the cost to produce the top and sides of this box is $2 per square foot and the cost to produce the bottom is $6 per square foot, then the cost is   Step 4: Since the volume of this box is and the volume is given as cubic ft, the constraint equation is   Solving the constraint equation for we have Therefore, we can write the cost as a function of only:   Step 5: Since we are requiring that we cannot have Therefore, we need On the other hand, is allowed to have any positive value. Note that as becomes large, the height of the box becomes correspondingly small so that Similarly, as becomes small, the height of the box becomes correspondingly large. We conclude that the domain is the open, unbounded interval Note that, unlike the previous examples, we cannot reduce our problem to looking for an absolute maximum or absolute minimum over a closed, bounded interval. However, in the next step, we discover why this function must have an absolute minimum over the interval  Step 6: Note that as  Also, as  Since is a continuous function that approaches infinity at the ends, it must have an absolute minimum at some This minimum must occur at a critical point of The derivative is   Therefore, when Solving this equation for we obtain so Since this is the only critical point of the absolute minimum must occur at (see ). When  feet. Therefore, the dimensions of the box should be feet and feet. With these dimensions, the cost is     \"The function is graphed on the interval and has an absolute minimum at (4,384).\"  has an absolute minimum at (4,384).      Consider the an open-top box, which is to have volume Suppose the cost of the material for the base is and the cost of the material for the sides is and we are trying to minimize the cost of this box. Write the cost as a function of the side lengths of the base. (Let be the side length of the base and be the height of the box.)    dollars    If the cost of one of the sides is the cost of that side is   Finding the best viewing angle   The Statue of Liberty has height m and stands on a m tall pedestal. How far from the statue should an observer stand to maximize the angle subtended by the statue at the observer's eye, which is m above the base of the pedestal?    Obviously if we stand too close then all the observer sees is the pedestal, while if they stand too far then everything is tiny. The best spot for taking a photograph is somewhere in between.  Draw a careful picture And make some healthy use of public domain clip art.     and we can put in the relevant lengths and angles.   The height of the statue is m, and the height of the pedestal (above the eye) is m. The horizontal distance from the statue to the eye is . There are two relevant angles. First is the angle subtended by the statue, while is the angle subtended by the portion of the pedestal above the eye.  Some trigonometry gives us Thus and so   If we allow the viewer to stand at any point in front of the statue, then . Further observe that as or the angle , since and Clearly the largest value of will be strictly positive and so has to be taken for some . (Note the strict inequalities.) This will be a local maximum as well as a global maximum. As is not singular at any , we need only search for critical points.  A careful application of the chain rule shows that the derivative is So a critical point occurs when   Thus the best place to stand approximately m in front or behind the statue. At that point radians or .      "
},
{
  "id": "sec_Ch4Sec7-3-2",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optimization problems "
},
{
  "id": "fs-id1165043431956",
  "level": "2",
  "url": "sec_Ch4Sec7.html#fs-id1165043431956",
  "type": "Example",
  "number": "4.7.1",
  "title": "Maximizing the Area of a Garden.",
  "body": " Maximizing the Area of a Garden   A rectangular garden is to be constructed using a rock wall as one side of the garden and wire fencing for the other three sides ( ). Given ft of wire fencing, determine the dimensions that would create a garden of maximum area. What is the maximum area?    \"A drawing of a garden has x and y written on the vertical and horizontal sides, respectively. There is a rock wall running along the entire bottom horizontal length of the drawing.\"  We want to determine the measurements and that will create a garden with a maximum area using ft of fencing.     Let denote the length of the side of the garden perpendicular to the rock wall and denote the length of the side parallel to the rock wall. Then the area of the garden is   We want to find the maximum possible area subject to the constraint that the total fencing is From , the total amount of fencing used will be Therefore, the constraint equation is   Solving this equation for we have Thus, we can write the area as   Before trying to maximize the area function we need to determine the domain under consideration. To construct a rectangular garden, we certainly need the lengths of both sides to be positive. Therefore, we need and Since if then Therefore, we are trying to determine the maximum value of for over the open interval We do not know that a function necessarily has a maximum value over an open interval. However, we do know that a continuous function has an absolute maximum (and absolute minimum) over a closed interval. Therefore, let's consider the function over the closed interval If the maximum value occurs at an interior point, then we have found the value in the open interval that maximizes the area of the garden. Therefore, we consider the following problem:  Maximize over the interval  As mentioned earlier, since is a continuous function on a closed, bounded interval, by the extreme value theorem, it has a maximum and a minimum. These extreme values occur either at endpoints or critical points. At the endpoints, Since the area is positive for all in the open interval the maximum must occur at a critical point. Differentiating the function we obtain   Therefore, the only critical point is ( ). We conclude that the maximum area must occur when Then we have To maximize the area of the garden, let ft and The area of this garden is    \"The function A(x) = 100x-2x^2 is graphed. At its maximum there is an intersection of two dashed lines and text that reads \"Maximum area is 1250 square feet when x = 25 feet.\"\"  To maximize the area of the garden, we need to find the maximum value of the function    "
},
{
  "id": "sec_Ch4Sec7-3-4",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-4",
  "type": "Checkpoint",
  "number": "4.7.4",
  "title": "",
  "body": " Determine the maximum area if we want to make the same rectangular garden as in , but we have ft of fencing.    The maximum area is    We need to maximize the function over the interval  "
},
{
  "id": "sec_Ch4Sec7-3-6",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-6",
  "type": "Problem-Solving Strategy",
  "number": "4.7.5",
  "title": "Solving Optimization Problems.",
  "body": " Solving Optimization Problems   Introduce all variables. If applicable, draw a figure and label all variables.  Determine which quantity is to be maximized or minimized, and for what range of values of the other variables (if this can be determined at this time).  Write a formula for the quantity to be maximized or minimized in terms of the variables. This formula may involve more than one variable.  Write any equations relating the independent variables in the formula from step Use these equations to write the quantity to be maximized or minimized as a function of one variable.  Identify the domain of consideration for the function in step based on the physical problem to be solved.  Locate the maximum or minimum value of the function from step This step typically involves looking for critical points and evaluating a function at endpoints.   "
},
{
  "id": "fs-id1165043024669",
  "level": "2",
  "url": "sec_Ch4Sec7.html#fs-id1165043024669",
  "type": "Example",
  "number": "4.7.6",
  "title": "Maximizing the Volume of a Box.",
  "body": " Maximizing the Volume of a Box   An open-top box is to be made from a in. by in. piece of cardboard by removing a square from each corner of the box and folding up the flaps on each side. What size square should be cut out of each corner to get a box with the maximum volume?    Step 1: Let be the side length of the square to be removed from each corner ( ). Then, the remaining four flaps can be folded up to form an open-top box. Let be the volume of the resulting box.    \"There are two figures for this figure. The first one is a rectangle with sides 24 in and 36 in, with each corner having a square of side length x taken out of it. In the second picture, there is a box with side lengths x in, 24-2x in, and 36-2x in.\"  A square with side length inches is removed from each corner of the piece of cardboard. The remaining flaps are folded to form an open-top box.   Step 2: We are trying to maximize the volume of a box. Therefore, the problem is to maximize  Step 3: As mentioned in step are trying to maximize the volume of a box. The volume of a box is where are the length, width, and height, respectively.  Step 4: From , we see that the height of the box is inches, the length is inches, and the width is inches. Therefore, the volume of the box is   Step 5: To determine the domain of consideration, let's examine . Certainly, we need Furthermore, the side length of the square cannot be greater than or equal to half the length of the shorter side, in.; otherwise, one of the flaps would be completely cut off. Therefore, we are trying to determine whether there is a maximum volume of the box for over the open interval Since is a continuous function over the closed interval we know will have an absolute maximum over the closed interval. Therefore, we consider over the closed interval and check whether the absolute maximum occurs at an interior point.  Step 6: Since is a continuous function over the closed, bounded interval  must have an absolute maximum (and an absolute minimum). Since at the endpoints and for the maximum must occur at a critical point. The derivative is   To find the critical points, we need to solve the equation   Dividing both sides of this equation by the problem simplifies to solving the equation   Using the quadratic formula, we find that the critical points are   Since is not in the domain of consideration, the only critical point we need to consider is Therefore, the volume is maximized if we let The maximum volume is as shown in the following graph.    \"The function V(x) = 4x3 – 120x2 + 864x is graphed. At its maximum there is an intersection of two dashed lines and text that reads “Maximum volume is approximately 1825 cubic inches when x ≈ 4.7 inches.”\"  Maximizing the volume of the box leads to finding the maximum value of a cubic polynomial.    "
},
{
  "id": "sec_Ch4Sec7-3-9",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-9",
  "type": "Note",
  "number": "4.7.9",
  "title": "",
  "body": " Watch a video about optimizing the volume of a box.  "
},
{
  "id": "sec_Ch4Sec7-3-10",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-10",
  "type": "Checkpoint",
  "number": "4.7.10",
  "title": "",
  "body": " Suppose the dimensions of the cardboard in are 20 in. by 30 in. Let be the side length of each square and write the volume of the open-top box as a function of Determine the domain of consideration for    The domain is    The volume of the box is  "
},
{
  "id": "fs-id1165042350080",
  "level": "2",
  "url": "sec_Ch4Sec7.html#fs-id1165042350080",
  "type": "Example",
  "number": "4.7.11",
  "title": "Minimizing Travel Time.",
  "body": " Minimizing Travel Time   An island is due north of its closest point along a straight shoreline. A visitor is staying at a cabin on the shore that is west of that point. The visitor is planning to go from the cabin to the island. Suppose the visitor runs at a rate of and swims at a rate of How far should the visitor run before swimming to minimize the time it takes to reach the island?    Step 1: Let be the distance running and let be the distance swimming ( ). Let be the time it takes to get from the cabin to the island.    \"The cabin is x miles from the shore. From that point on the shore, the island is y miles away. If you were to continue the line from the cabin to the shore (the x miles one) and if you were to draw a line from the island parallel to the shore, then the lines would extend 2 miles from the island and 6 miles from the cabin before intersecting.\"  How can we choose and to minimize the travel time from the cabin to the island?   Step 2: The problem is to minimize  Step 3: To find the time spent traveling from the cabin to the island, add the time spent running and the time spent swimming. Since Distance Rate Time the time spent running is   and the time spent swimming is   Therefore, the total time spent traveling is   Step 4: From , the line segment of miles forms the hypotenuse of a right triangle with legs of length and Therefore, by the Pythagorean theorem, and we obtain Thus, the total time spent traveling is given by the function   Step 5: From , we see that Therefore, is the domain of consideration.  Step 6: Since is a continuous function over a closed, bounded interval, it has a maximum and a minimum. Let's begin by looking for any critical points of over the interval The derivative is   If then   Therefore,   Squaring both sides of this equation, we see that if satisfies this equation, then must satisfy   which implies   We conclude that if is a critical point, then satisfies   Therefore, the possibilities for critical points are   Since is not in the domain, it is not a possibility for a critical point. On the other hand, is in the domain. Since we squared both sides of to arrive at the possible critical points, it remains to verify that satisfies . Since does satisfy that equation, we conclude that is a critical point, and it is the only one. To justify that the time is minimized for this value of we just need to check the values of at the endpoints and and compare them with the value of at the critical point We find that and whereas Therefore, we conclude that has a local minimum at mi.   "
},
{
  "id": "sec_Ch4Sec7-3-12",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-12",
  "type": "Checkpoint",
  "number": "4.7.13",
  "title": "",
  "body": " Suppose the island is mi from shore, and the distance from the cabin to the point on the shore closest to the island is Suppose a visitor swims at the rate of and runs at a rate of Let denote the distance the visitor will run before swimming, and find a function for the time it takes the visitor to get from the cabin to the island.       The time  "
},
{
  "id": "sec_Ch4Sec7-3-13",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximizing revenue "
},
{
  "id": "fs-id1165043353574",
  "level": "2",
  "url": "sec_Ch4Sec7.html#fs-id1165043353574",
  "type": "Example",
  "number": "4.7.14",
  "title": "Maximizing Revenue.",
  "body": " Maximizing Revenue   Owners of a car rental company have determined that if they charge customers dollars per day to rent a car, where the number of cars they rent per day can be modeled by the linear function If they charge per day or less, they will rent all their cars. If they charge per day or more, they will not rent any cars. Assuming the owners plan to charge customers between $50 per day and per day to rent a car, how much should they charge to maximize their revenue?    Step 1: Let be the price charged per car per day and let be the number of cars rented per day. Let be the revenue per day.  Step 2: The problem is to maximize  Step 3: The revenue (per day) is equal to the number of cars rented per day times the price charged per car per day—that is,  Step 4: Since the number of cars rented per day is modeled by the linear function the revenue can be represented by the function   Step 5: Since the owners plan to charge between per car per day and per car per day, the problem is to find the maximum revenue for in the closed interval  Step 6: Since is a continuous function over the closed, bounded interval it has an absolute maximum (and an absolute minimum) in that interval. To find the maximum value, look for critical points. The derivative is Therefore, the critical point is When  When  When  Therefore, the absolute maximum occurs at The car rental company should charge per day per car to maximize revenue as shown in the following figure.    \"The function R(p) is graphed. At its maximum there is an intersection of two dashed lines and text that reads \"Maximum revenue is $50,000 per day when the price charged per car is $100 per day.\"\"  To maximize revenue, a car rental company has to balance the price of a rental against the number of cars people will rent at that price.    "
},
{
  "id": "sec_Ch4Sec7-3-15",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-15",
  "type": "Checkpoint",
  "number": "4.7.16",
  "title": "",
  "body": " A car rental company charges its customers dollars per day, where It has found that the number of cars rented per day can be modeled by the linear function How much should the company charge each customer to maximize revenue?    The company should charge per car per day.    where is the number of cars rented and is the price charged per car.  "
},
{
  "id": "fs-id1165043350161",
  "level": "2",
  "url": "sec_Ch4Sec7.html#fs-id1165043350161",
  "type": "Example",
  "number": "4.7.17",
  "title": "Maximizing the Area of an Inscribed Rectangle.",
  "body": " Maximizing the Area of an Inscribed Rectangle   A rectangle is to be inscribed in the ellipse   What should the dimensions of the rectangle be to maximize its area? What is the maximum area?    Step 1: For a rectangle to be inscribed in the ellipse, the sides of the rectangle must be parallel to the axes. Let be the length of the rectangle and be its width. Let be the area of the rectangle.    \"The ellipse x2\/4 + y2 = 1 is drawn with its x intercepts being ±2 and its y intercepts being ±1. There is a rectangle inscribed in the ellipse with length L (in the x-direction) and width W.\">  We want to maximize the area of a rectangle inscribed in an ellipse.   Step 2: The problem is to maximize  Step 3: The area of the rectangle is  Step 4: Let be the corner of the rectangle that lies in the first quadrant, as shown in . We can write length and width Since and we have Therefore, the area is Step 5: From , we see that to inscribe a rectangle in the ellipse, the -coordinate of the corner in the first quadrant must satisfy Therefore, the problem reduces to looking for the maximum value of over the open interval Since will have an absolute maximum (and absolute minimum) over the closed interval we consider over the interval If the absolute maximum occurs at an interior point, then we have found an absolute maximum in the open interval.  Step 6: As mentioned earlier, is a continuous function over the closed, bounded interval Therefore, it has an absolute maximum (and absolute minimum). At the endpoints and  For  Therefore, the maximum must occur at a critical point. Taking the derivative of we obtain   To find critical points, we need to find where We can see that if is a solution of   then must satisfy   Therefore, Thus, are the possible solutions of . Since we are considering over the interval  is a possibility for a critical point, but is not. Therefore, we check whether is a solution of . Since is a solution of , we conclude that is the only critical point of in the interval Therefore, must have an absolute maximum at the critical point To determine the dimensions of the rectangle, we need to find the length and the width If then   Therefore, the dimensions of the rectangle are and The area of this rectangle is   "
},
{
  "id": "sec_Ch4Sec7-3-17",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-3-17",
  "type": "Checkpoint",
  "number": "4.7.19",
  "title": "",
  "body": " Modify the area function if the rectangle is to be inscribed in the unit circle What is the domain of consideration?    The domain of consideration is    If is the vertex of the square that lies in the first quadrant, then the area of the square is  "
},
{
  "id": "fs-id1165042327673",
  "level": "2",
  "url": "sec_Ch4Sec7.html#fs-id1165042327673",
  "type": "Example",
  "number": "4.7.20",
  "title": "Minimizing Surface Area.",
  "body": " Minimizing Surface Area   A rectangular box with a square base, an open top, and a volume of in. 3 is to be constructed. What should the dimensions of the box be to minimize the surface area of the box? What is the minimum surface area?    Step 1: Draw a rectangular box and introduce the variable to represent the length of each side of the square base; let represent the height of the box. Let denote the surface area of the open-top box.    \"A box with square base is shown. The base has side length x, and the height is y.\"  We want to minimize the surface area of a square-based box with a given volume.   Step 2: We need to minimize the surface area. Therefore, we need to minimize  Step 3: Since the box has an open top, we need only determine the area of the four vertical sides and the base. The area of each of the four vertical sides is The area of the base is Therefore, the surface area of the box is   Step 4: Since the volume of this box is and the volume is given as the constraint equation is   Solving the constraint equation for we have Therefore, we can write the surface area as a function of only:   Therefore,  Step 5: Since we are requiring that we cannot have Therefore, we need On the other hand, is allowed to have any positive value. Note that as becomes large, the height of the box becomes correspondingly small so that Similarly, as becomes small, the height of the box becomes correspondingly large. We conclude that the domain is the open, unbounded interval Note that, unlike the previous examples, we cannot reduce our problem to looking for an absolute maximum or absolute minimum over a closed, bounded interval. However, in the next step, we discover why this function must have an absolute minimum over the interval  Step 6: Note that as  Also, as  Since is a continuous function that approaches infinity at the ends, it must have an absolute minimum at some This minimum must occur at a critical point of The derivative is   Therefore, when Solving this equation for we obtain so Since this is the only critical point of the absolute minimum must occur at (see ). When  Therefore, the dimensions of the box should be and With these dimensions, the surface area is     \"The function is graphed. At its minimum there is a dashed line and text that reads \"Minimum surface area is 108 times the cube root of 4 square inches when x = 6 times the cube root of 2 inches.\"\"  We can use a graph to determine the dimensions of a box of given the volume and the minimum surface area.    "
},
{
  "id": "sec_Ch4Sec7-4-6",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-4-6",
  "type": "Example",
  "number": "4.7.23",
  "title": "Minimizing Cost.",
  "body": " Minimizing Cost  A company must produce a sturdy rectangular container with a square base and a volume of 128 cubic ft. The cost to produce the top and sides of this box is $2 per square foot and the cost to produce the bottom is $6 per square foot. FInd the dimensions of the box that will minimize cost.  Step 1: Draw a rectangular box and introduce the variable to represent the length of each side of the square base; let represent the height of the box. Let denote the cost of producing the box.    \"A box with square base is shown. The base has side length x, and the height is h.\"  We want to minimize the cost to produce a square-based box with a given volume.  --> Step 2: We need to minimize the cost. Therefore, we need to minimize  Step 3: We need to determine the cost of the four vertical sides, the top, and the base. In order to find the cost, we must first find the surface area of the box. The area of each of the four vertical sides is The area of the base and top are both Since the cost to produce the top and sides of this box is $2 per square foot and the cost to produce the bottom is $6 per square foot, then the cost is   Step 4: Since the volume of this box is and the volume is given as cubic ft, the constraint equation is   Solving the constraint equation for we have Therefore, we can write the cost as a function of only:   Step 5: Since we are requiring that we cannot have Therefore, we need On the other hand, is allowed to have any positive value. Note that as becomes large, the height of the box becomes correspondingly small so that Similarly, as becomes small, the height of the box becomes correspondingly large. We conclude that the domain is the open, unbounded interval Note that, unlike the previous examples, we cannot reduce our problem to looking for an absolute maximum or absolute minimum over a closed, bounded interval. However, in the next step, we discover why this function must have an absolute minimum over the interval  Step 6: Note that as  Also, as  Since is a continuous function that approaches infinity at the ends, it must have an absolute minimum at some This minimum must occur at a critical point of The derivative is   Therefore, when Solving this equation for we obtain so Since this is the only critical point of the absolute minimum must occur at (see ). When  feet. Therefore, the dimensions of the box should be feet and feet. With these dimensions, the cost is     \"The function is graphed on the interval and has an absolute minimum at (4,384).\"  has an absolute minimum at (4,384).    "
},
{
  "id": "sec_Ch4Sec7-4-7",
  "level": "2",
  "url": "sec_Ch4Sec7.html#sec_Ch4Sec7-4-7",
  "type": "Checkpoint",
  "number": "4.7.26",
  "title": "",
  "body": " Consider the an open-top box, which is to have volume Suppose the cost of the material for the base is and the cost of the material for the sides is and we are trying to minimize the cost of this box. Write the cost as a function of the side lengths of the base. (Let be the side length of the base and be the height of the box.)    dollars    If the cost of one of the sides is the cost of that side is  "
},
{
  "id": "APPglobalMaxMinG",
  "level": "2",
  "url": "sec_Ch4Sec7.html#APPglobalMaxMinG",
  "type": "Example",
  "number": "4.7.27",
  "title": "Finding the best viewing angle.",
  "body": "Finding the best viewing angle   The Statue of Liberty has height m and stands on a m tall pedestal. How far from the statue should an observer stand to maximize the angle subtended by the statue at the observer's eye, which is m above the base of the pedestal?    Obviously if we stand too close then all the observer sees is the pedestal, while if they stand too far then everything is tiny. The best spot for taking a photograph is somewhere in between.  Draw a careful picture And make some healthy use of public domain clip art.     and we can put in the relevant lengths and angles.   The height of the statue is m, and the height of the pedestal (above the eye) is m. The horizontal distance from the statue to the eye is . There are two relevant angles. First is the angle subtended by the statue, while is the angle subtended by the portion of the pedestal above the eye.  Some trigonometry gives us Thus and so   If we allow the viewer to stand at any point in front of the statue, then . Further observe that as or the angle , since and Clearly the largest value of will be strictly positive and so has to be taken for some . (Note the strict inequalities.) This will be a local maximum as well as a global maximum. As is not singular at any , we need only search for critical points.  A careful application of the chain rule shows that the derivative is So a critical point occurs when   Thus the best place to stand approximately m in front or behind the statue. At that point radians or .    "
},
{
  "id": "sec_Ch4Sec8",
  "level": "1",
  "url": "sec_Ch4Sec8.html",
  "type": "Section",
  "number": "4.8",
  "title": "L’Hôpital’s Rule",
  "body": " L'Hôpital's Rule   Learning Objectives   Recognize when to apply L’Hôpital’s rule.  Identify indeterminate forms produced by quotients, products, subtractions, and powers, and apply L’Hôpital’s rule in each case.  Describe the relative growth rates of functions.   In this section, we examine a powerful tool for evaluating limits. This tool, known as L’Hôpital’s rule , uses derivatives to calculate limits. With this rule, we will be able to evaluate many limits we have not yet been able to determine. Instead of relying on numerical evidence to conjecture that a limit exists, we will be able to show definitively that a limit exists and to determine its exact value.    Applying L'Hôpital's Rule  L’Hôpital’s rule can be used to evaluate limits involving the quotient of two functions. Consider . If and , then . However, what happens if and ? We call this one of the indeterminate forms , of type . This is considered an indeterminate form because we cannot determine the exact behavior of as without further analysis. We have seen examples of this earlier in the text. For example, consider . For the first of these examples, we can evaluate the limit by factoring the numerator and writing . For we are able to show, using a geometric argument, that . Here we use a different technique for evaluating limits such as these. Not only does this technique provide an easier way to evaluate these limits, but also, and more important, it provides us with a way to evaluate many other limits that we could not calculate previously.  The idea behind L’Hôpital’s rule can be explained using local linear approximations. Consider two differentiable functions and such that and such that . For near , we can write and \/ Therefore, .    \"A graph of f(x) and g(x) intersecting when x=a. The tangent lines to f(x) and g(x) are drawn at x=a.\"   If , then the ratio is approximately equal to the ratio of their linear approximations near .   Since is differentiable at , then is continuous at , and therefore . Similarly, . If we also assume that and are continuous at , then and . Using these ideas, we conclude that . Note that the assumption that and are continuous at and can be loosened. We state L'Hôpital's rule formally for the indeterminate form . Also note that the notation does not mean we are actually dividing zero by zero. Rather, we are using the notation to represent a quotient of limits, each of which is zero.   L'Hôpital's Rule ( Case)   Suppose and are differentiable functions over an open interval containing , except possibly at . If and , then , assuming the limit on the right exists or is or . This result also holds if we are considering one-sided limits, or it and .    We provide a proof of this theorem in the special case when and are all continuous over an open interval containing . In that case, since and and are continuous at , it follows that . Therefore, . Note that L'Hôpital's rule states we can calculate the limit of a quotient by considering the limit of the quotient of the derivatives . It is important to realize that we are not calculating the derivative of the quotient .     Applying L'Hôpital's Rule ( Case)  Evaluate each of the following limits by applying L'Hôpital's rule.           Since the numerator and the denominator , we can apply L'Hôpital's rule to evaluate this limit. We have   As , the numerator and the denominator . Therefore, we can apply L'Hôpital's rule. We obtain   As , the numerator and the denominator . Therefore, we can apply L'Hôpital's rule. We obtain   As , both the numerator and denominator approach zero. Therefore, we can apply L'Hôpital's rule. We obtain . Since the numerator and denominator of this new quotient both approach zero as , we apply L'Hôpital's rule again. In doing so, we see that . Therefore, we conclude that .       Evaluate .       Apply L'Hôpital's rule.    We can also use L'Hôpital's rule to evaluate limits of quotients in which and . Limits of this forms are classified as indeterminate forms of type . Again, note that we are not actually dividing by . Since is not a real number, that is impossible; rather, is used to represent a quotient of limits, each of which is or .   L'Hôpital's Rule ( Case)   Suppose and are differentiable functions over an open interval containing , except possibly at . If and . Then, , assuming the limit on the right exists or is or . This result also holds if the limit is infinite, if or , or the limit is one-sided.     Applying L'Hôpital's Rule ( Case)  Evaluate each of the following limits by applying L'Hôpital's rule.         Since and are first-degree polynomials with positive leading coefficients, and . Therefore, we apply L'Hôpital's rule and obtain . Note that this limit can also be calculated without invoking L’Hôpital’s rule. Earlier in the chapter we showed how to evaluate such a limit by dividing the numerator and denominator by the highest power of in the denominator. In doing so, we saw that . L'Hôpital's rule provides us with an alternative means of evaluating this type of limit.  Here, and . Therefore, we can apply L'Hôpital's rule and obtain . Now as . Therefore, the first term in the denominator is approaching zero and the second term is getting really large. In such a case, anything can happen with the product. Therefore, we cannot make any conclusion yet. To evaluate the limit, we use the definition of to write . Now and , so we apply L'Hôpital's rule again. We find . We conclude that .       Evaluate .       Simplify after applying L'Hôpital's rule.    As mentioned, L'Hôpital's rule is an extremely useful tool for evaluating limits. It is important to remember, however, that to apply L'Hôpital's rule to a quotient , it is essential that the limit of be of the form or . Consider the following example.   When L'Hôpital's Rule Does Not Apply   Consider . Show that the limit cannot be evaluated by applying L’Hôpital’s rule.    Because the limits of the numerator and denominator are not both zero and are not both infinite, we cannot apply L’Hôpital’s rule. If we try to do so, we get and . At which point we woudl conclude erroneously that . However, since and , we actually have . We can conclude that .      Explain why we cannot apply L’Hôpital’s rule to evaluate . Evaluate by other means.    while . .      Other Indeterminate Forms   L’Hôpital’s rule is very useful for evaluating limits involving the indeterminate forms and . However, we can also use L’Hôpital’s rule to help evaluate limits involving other indeterminate forms that arise when evaluating limits. The expressions and are all considered indeterminate forms. These expressions are not real numbers. Rather, they represent forms that arise when trying to evaluate certain limits. Next we realize why these are indeterminate forms and then understand how to use L’Hôpital’s rule in these cases. The key idea is that we must rewrite the indeterminate forms in such a way that we arrive at the indeterminate form or .    Indeterminate Form of Type  Suppose we want to evaluate , where and (or ) as . Since one term in the product is approaching zero but the other term is becoming arbitrarily large (in magnitude), anything can happen to the product. We use the notation to denote the form that arises in this situation. The expression is considered indeterminate because we cannot determine without further analysis the exact behavior of the product as . For example, let be a positive integer and consider . As , and . However, the limit as of varies, depending on . If , then . If , then . If , then . Here we consider another limit involving the indeterminate form and show how to rewrite the function as a quotient to use L'Hôpital's rule.   Indeterminate Form of Type   Evaluate    First, rewrite the function as a quotient to apply L'Hôpital's rule. If we write , we see that as and as . Therefore, we can apply L'Hôpital's rule and obtain We conclude that     \"A graph of y=x ln x on the interval from 0 to 8.\"    Find the limit at of the function         Evaluate .       Rewrite the function as .      Indeterminate Form of Type  Another type of indeterminate form is . Consider the following example. Let be a positive integer and let and . As , and . We are interested in . Depending on whether grows faster, grows faster, or they grow at the same rate, as we see next, anything can happen in this limit. Since and , we write to denote the form of this limit. As with our other indeterminate forms, has no meaning on its own and we must do more analysis to determine the value of the limit. For example, suppose the exponent in the function is , Then . On the other hand, if , then . However, if , then . Therefore, the limit cannot be determined by considering only . Next we see how to rewrite an expression involving the indeterminate form as a fraction to apply L'Hôpital's rule.   Indeterminate Form of Type   Evaluate    By combining the fractions, we can write the function as a quotient. Since the least common denominator is , we have . As , the numerator and the denominator . Therefore, we can apply L’Hôpital’s rule. Taking the derivatives of the numerator and the denominator, we have As , and . Since the denominator is positive as approaches zero from the right, we conclude that . Therefore, .      Evaluate .       Apply L'Hôpital's rule twice.      Other Types of Indeterminate Forms  Another type of indeterminate form that arises when evaluating limits involves exponents. The expressions and are all indeterminate forms. On their own, these expressions are meaningless because we cannot actually evaluate these expressions as we would evaluate an expression involving real numbers. Rather, these expressions represent forms that arise when finding limits. Now we examine how L’Hôpital’s rule can be used to evaluate limits involving these indeterminate forms.  Since L’Hôpital’s rule applies to quotients, we use the natural logarithm function and its properties to reduce a problem evaluating a limit involving exponents to a related problem involving a limit of a quotient. For example, suppose we want to evaluate and we arrive at the indeterminate form . (The indeterminate forms and can be handled similarly.) We proceed as follows. Let . Then, . Therefore, . Since , we know that . Therefore, is of the indeterminate form , and we can use the techniques discussed earlier to rewrite the expression in a form so that we can apply L’Hôpital’s rule. Suppose , where may be or . Then . Since the natural logarithm function is continuous, we conclude that , which gives us .   Indeterminate Form of Type   Evaluate     Let . Then, . We need to evaluate . Applying L’Hôpital’s rule, we obtain . Therefore, . Since the natural logarithm function is continuous, we conclude that , which leads to . Hence, .      Evaluate .           Indeterminate Form of Type   Evaluate .    Let . Therefore, . We now evaluate . Since , and , we have the indeterminate form . To apply L'Hôpital's rule, we need to rewrite as a fraction. We could write or . Let's consider the first option. In this case, applying L’Hôpital’s rule, we would obtain . Unfortunately, we not only have another expression involving the indeterminate form , but the new limit is even more complicated to evaluate than the one with which we started. Instead, we try the second option. By writing , and applying L'Hôpital's rule, we obtain . Using the fact that and , we can rewrite the expression on the right-hand side as . We conclude that . Therefore, and we have . Hence, .      Evaluate .       Compute .       Growth Rates of Functions  Supoose the functions and both approach infinity as . Although the values of both functions become arbitrarily large as the values of become sufficiently large, sometimes one function is growing more quickly than the other. For example, and both approach infinity as . However, as shown in the following table, the values of are growing much faster than the values of .                          Comparing the Growth Rates of and   In fact, or, equivalently, . As a result, we say is growing more rapidly than as . On the other hand, for and , although the values of are always greater than the values of for , each value of is roughly three times the corresponding value of as , as showin the following table. In fact, .                          Comparing the Growth Rates of and   In this case, we say that and are growing at the same rate as .    Let and be two functions that approach infinity as .   grows faster than  as if ; or, equivalently, if . We say that  grows slower than  as .   and  grow at the same rate as if , where is finite and positive.      Next we see how to use L'Hôpital's rule to compare the growth rates of power, exponential, and logarithmic functions.   Comparing the Growth Rates of and    For each of the following pairs of functions, use L'Hôpital's rule to evaluate .   and .  and      Since and , we can use L'Hôpital's rule to evaluate . We obtain . Since and , we can apply L'Hôpital's rule again. Since , we conclude that . Therefore, grows more rapidly than as . (See and ).   \"A graph of f(x) = x squared and g(x) = e to the x on the interval from 0 to 6.\"    An exponential function grows at a faster rate than a power function.                            Growth rates of a power function and an exponential function.    Since and , we can use L'Hôpital's rule to evaluate . We obtain . Thus, grows more rapidly than as (See and ).   \"A graph of f(x) = ln(x) and g(x) = x squared on the interval from -2 to 8.\"    A power function grows at a faster rate than a logarithmic function.                            Growth rates of a power function and a logarithmic function.         Compare the growth rates of and .    grows more rapidly than .    Use L'Hôpital's rule to evaluate .    Using the same ideas as in a., it is not difficult to show that grows more rapidly than for any . In and , we compare with and as .    \"Two graphs. The left one displays y=e^x and y=x^3 on the Cartesian plane. The right graph displays y=e^x and y=x^4 on the Cartesian plane.\"    The exponential function grows faster than for any . (a) A comparison of with . (b) A comparison of with .                                   An exponential function grows at a faster rate than any power function.   Similarly, it is not difficult to that grows more rapidly than for any . In and , we compare with and .    \"Three graphs displayed on the same Cartesian plane. the square root of x, the cube root of x, and the natural log of x\"    The function grows more slowly than for any as .                                   A logarithmic function grows at a slower rate than any root function.   These examples illustrate an important principle: as becomes large, exponential functions eventually outgrow every polynomial function , while logarithmic functions grow more slowly than every root function, . Thus, as , the functions increase in the following order of growth: .   "
},
{
  "id": "sec_Ch4Sec8-2-3",
  "level": "2",
  "url": "sec_Ch4Sec8.html#sec_Ch4Sec8-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "L’Hôpital’s rule "
},
{
  "id": "subsec-applyLHop-2",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indeterminate forms "
},
{
  "id": "CNX_Calc_Figure_04_08_003",
  "level": "2",
  "url": "sec_Ch4Sec8.html#CNX_Calc_Figure_04_08_003",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": "  \"A graph of f(x) and g(x) intersecting when x=a. The tangent lines to f(x) and g(x) are drawn at x=a.\"   If , then the ratio is approximately equal to the ratio of their linear approximations near .  "
},
{
  "id": "thm-LHopital",
  "level": "2",
  "url": "sec_Ch4Sec8.html#thm-LHopital",
  "type": "Theorem",
  "number": "4.8.2",
  "title": "L’Hôpital’s Rule (<span class=\"process-math\">\\(0\/0\\)<\/span> Case).",
  "body": " L'Hôpital's Rule ( Case)   Suppose and are differentiable functions over an open interval containing , except possibly at . If and , then , assuming the limit on the right exists or is or . This result also holds if we are considering one-sided limits, or it and .    We provide a proof of this theorem in the special case when and are all continuous over an open interval containing . In that case, since and and are continuous at , it follows that . Therefore, . Note that L'Hôpital's rule states we can calculate the limit of a quotient by considering the limit of the quotient of the derivatives . It is important to realize that we are not calculating the derivative of the quotient .   "
},
{
  "id": "subsec-applyLHop-7",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-7",
  "type": "Example",
  "number": "4.8.3",
  "title": "Applying L’Hôpital’s Rule (<span class=\"process-math\">\\(0\/0\\)<\/span> Case).",
  "body": " Applying L'Hôpital's Rule ( Case)  Evaluate each of the following limits by applying L'Hôpital's rule.           Since the numerator and the denominator , we can apply L'Hôpital's rule to evaluate this limit. We have   As , the numerator and the denominator . Therefore, we can apply L'Hôpital's rule. We obtain   As , the numerator and the denominator . Therefore, we can apply L'Hôpital's rule. We obtain   As , both the numerator and denominator approach zero. Therefore, we can apply L'Hôpital's rule. We obtain . Since the numerator and denominator of this new quotient both approach zero as , we apply L'Hôpital's rule again. In doing so, we see that . Therefore, we conclude that .    "
},
{
  "id": "subsec-applyLHop-8",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-8",
  "type": "Checkpoint",
  "number": "4.8.4",
  "title": "",
  "body": "  Evaluate .       Apply L'Hôpital's rule.   "
},
{
  "id": "thm-LHopitalinfinite",
  "level": "2",
  "url": "sec_Ch4Sec8.html#thm-LHopitalinfinite",
  "type": "Theorem",
  "number": "4.8.5",
  "title": "L’Hôpital’s Rule (<span class=\"process-math\">\\(\\infty\/\\infty\\)<\/span> Case).",
  "body": " L'Hôpital's Rule ( Case)   Suppose and are differentiable functions over an open interval containing , except possibly at . If and . Then, , assuming the limit on the right exists or is or . This result also holds if the limit is infinite, if or , or the limit is one-sided.   "
},
{
  "id": "subsec-applyLHop-11",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-11",
  "type": "Example",
  "number": "4.8.6",
  "title": "Applying L’Hôpital’s Rule (<span class=\"process-math\">\\(\\infty\/\\infty\\)<\/span> Case).",
  "body": " Applying L'Hôpital's Rule ( Case)  Evaluate each of the following limits by applying L'Hôpital's rule.         Since and are first-degree polynomials with positive leading coefficients, and . Therefore, we apply L'Hôpital's rule and obtain . Note that this limit can also be calculated without invoking L’Hôpital’s rule. Earlier in the chapter we showed how to evaluate such a limit by dividing the numerator and denominator by the highest power of in the denominator. In doing so, we saw that . L'Hôpital's rule provides us with an alternative means of evaluating this type of limit.  Here, and . Therefore, we can apply L'Hôpital's rule and obtain . Now as . Therefore, the first term in the denominator is approaching zero and the second term is getting really large. In such a case, anything can happen with the product. Therefore, we cannot make any conclusion yet. To evaluate the limit, we use the definition of to write . Now and , so we apply L'Hôpital's rule again. We find . We conclude that .    "
},
{
  "id": "subsec-applyLHop-12",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-12",
  "type": "Checkpoint",
  "number": "4.8.7",
  "title": "",
  "body": "  Evaluate .       Simplify after applying L'Hôpital's rule.   "
},
{
  "id": "subsec-applyLHop-14",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-14",
  "type": "Example",
  "number": "4.8.8",
  "title": "When L’Hôpital’s Rule Does Not Apply.",
  "body": " When L'Hôpital's Rule Does Not Apply   Consider . Show that the limit cannot be evaluated by applying L’Hôpital’s rule.    Because the limits of the numerator and denominator are not both zero and are not both infinite, we cannot apply L’Hôpital’s rule. If we try to do so, we get and . At which point we woudl conclude erroneously that . However, since and , we actually have . We can conclude that .   "
},
{
  "id": "subsec-applyLHop-15",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-applyLHop-15",
  "type": "Checkpoint",
  "number": "4.8.9",
  "title": "",
  "body": "  Explain why we cannot apply L’Hôpital’s rule to evaluate . Evaluate by other means.    while . .   "
},
{
  "id": "subsec-otherindeterminateforms-3-3",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-3-3",
  "type": "Example",
  "number": "4.8.10",
  "title": "Indeterminate Form of Type <span class=\"process-math\">\\(0\\cdot \\infty\\)<\/span>.",
  "body": " Indeterminate Form of Type   Evaluate    First, rewrite the function as a quotient to apply L'Hôpital's rule. If we write , we see that as and as . Therefore, we can apply L'Hôpital's rule and obtain We conclude that     \"A graph of y=x ln x on the interval from 0 to 8.\"    Find the limit at of the function      "
},
{
  "id": "subsec-otherindeterminateforms-3-4",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-3-4",
  "type": "Checkpoint",
  "number": "4.8.12",
  "title": "",
  "body": "  Evaluate .       Rewrite the function as .   "
},
{
  "id": "subsec-otherindeterminateforms-4-3",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-4-3",
  "type": "Example",
  "number": "4.8.13",
  "title": "Indeterminate Form of Type <span class=\"process-math\">\\(\\infty-\\infty\\)<\/span>.",
  "body": " Indeterminate Form of Type   Evaluate    By combining the fractions, we can write the function as a quotient. Since the least common denominator is , we have . As , the numerator and the denominator . Therefore, we can apply L’Hôpital’s rule. Taking the derivatives of the numerator and the denominator, we have As , and . Since the denominator is positive as approaches zero from the right, we conclude that . Therefore, .   "
},
{
  "id": "subsec-otherindeterminateforms-4-4",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-4-4",
  "type": "Checkpoint",
  "number": "4.8.14",
  "title": "",
  "body": "  Evaluate .       Apply L'Hôpital's rule twice.   "
},
{
  "id": "subsec-otherindeterminateforms-5-4",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-5-4",
  "type": "Example",
  "number": "4.8.15",
  "title": "Indeterminate Form of Type <span class=\"process-math\">\\(\\infty^0\\)<\/span>.",
  "body": " Indeterminate Form of Type   Evaluate     Let . Then, . We need to evaluate . Applying L’Hôpital’s rule, we obtain . Therefore, . Since the natural logarithm function is continuous, we conclude that , which leads to . Hence, .   "
},
{
  "id": "subsec-otherindeterminateforms-5-5",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-5-5",
  "type": "Checkpoint",
  "number": "4.8.16",
  "title": "",
  "body": "  Evaluate .         "
},
{
  "id": "subsec-otherindeterminateforms-5-6",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-5-6",
  "type": "Example",
  "number": "4.8.17",
  "title": "Indeterminate Form of Type <span class=\"process-math\">\\(0^0\\)<\/span>.",
  "body": " Indeterminate Form of Type   Evaluate .    Let . Therefore, . We now evaluate . Since , and , we have the indeterminate form . To apply L'Hôpital's rule, we need to rewrite as a fraction. We could write or . Let's consider the first option. In this case, applying L’Hôpital’s rule, we would obtain . Unfortunately, we not only have another expression involving the indeterminate form , but the new limit is even more complicated to evaluate than the one with which we started. Instead, we try the second option. By writing , and applying L'Hôpital's rule, we obtain . Using the fact that and , we can rewrite the expression on the right-hand side as . We conclude that . Therefore, and we have . Hence, .   "
},
{
  "id": "subsec-otherindeterminateforms-5-7",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-otherindeterminateforms-5-7",
  "type": "Checkpoint",
  "number": "4.8.18",
  "title": "",
  "body": "  Evaluate .       Compute .   "
},
{
  "id": "subsec-growthrates-3",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-growthrates-3",
  "type": "Table",
  "number": "4.8.19",
  "title": "Comparing the Growth Rates of <span class=\"process-math\">\\(x^2\\)<\/span> and <span class=\"process-math\">\\(x^3\\)<\/span>",
  "body": "                        Comparing the Growth Rates of and  "
},
{
  "id": "subsec-growthrates-5",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-growthrates-5",
  "type": "Table",
  "number": "4.8.20",
  "title": "Comparing the Growth Rates of <span class=\"process-math\">\\(x^2\\)<\/span> and <span class=\"process-math\">\\(3x^2+4x+1\\)<\/span>",
  "body": "                        Comparing the Growth Rates of and  "
},
{
  "id": "subsec-growthrates-7",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-growthrates-7",
  "type": "Definition",
  "number": "4.8.21",
  "title": "",
  "body": "  Let and be two functions that approach infinity as .   grows faster than  as if ; or, equivalently, if . We say that  grows slower than  as .   and  grow at the same rate as if , where is finite and positive.     "
},
{
  "id": "ex-ratesofgrowth",
  "level": "2",
  "url": "sec_Ch4Sec8.html#ex-ratesofgrowth",
  "type": "Example",
  "number": "4.8.22",
  "title": "Comparing the Growth Rates of <span class=\"process-math\">\\(\\ln(x), x^2,\\)<\/span> and <span class=\"process-math\">\\(e^x\\)<\/span>.",
  "body": " Comparing the Growth Rates of and    For each of the following pairs of functions, use L'Hôpital's rule to evaluate .   and .  and      Since and , we can use L'Hôpital's rule to evaluate . We obtain . Since and , we can apply L'Hôpital's rule again. Since , we conclude that . Therefore, grows more rapidly than as . (See and ).   \"A graph of f(x) = x squared and g(x) = e to the x on the interval from 0 to 6.\"    An exponential function grows at a faster rate than a power function.                            Growth rates of a power function and an exponential function.    Since and , we can use L'Hôpital's rule to evaluate . We obtain . Thus, grows more rapidly than as (See and ).   \"A graph of f(x) = ln(x) and g(x) = x squared on the interval from -2 to 8.\"    A power function grows at a faster rate than a logarithmic function.                            Growth rates of a power function and a logarithmic function.      "
},
{
  "id": "subsec-growthrates-10",
  "level": "2",
  "url": "sec_Ch4Sec8.html#subsec-growthrates-10",
  "type": "Checkpoint",
  "number": "4.8.27",
  "title": "",
  "body": "  Compare the growth rates of and .    grows more rapidly than .    Use L'Hôpital's rule to evaluate .   "
},
{
  "id": "fig-exprateofgrowth2",
  "level": "2",
  "url": "sec_Ch4Sec8.html#fig-exprateofgrowth2",
  "type": "Figure",
  "number": "4.8.28",
  "title": "",
  "body": "  \"Two graphs. The left one displays y=e^x and y=x^3 on the Cartesian plane. The right graph displays y=e^x and y=x^4 on the Cartesian plane.\"    The exponential function grows faster than for any . (a) A comparison of with . (b) A comparison of with .   "
},
{
  "id": "tab-exprateofgrowth2",
  "level": "2",
  "url": "sec_Ch4Sec8.html#tab-exprateofgrowth2",
  "type": "Table",
  "number": "4.8.29",
  "title": "An exponential function grows at a faster rate than any power function.",
  "body": "                               An exponential function grows at a faster rate than any power function.  "
},
{
  "id": "fig-lograteofgrowth2",
  "level": "2",
  "url": "sec_Ch4Sec8.html#fig-lograteofgrowth2",
  "type": "Figure",
  "number": "4.8.30",
  "title": "",
  "body": "  \"Three graphs displayed on the same Cartesian plane. the square root of x, the cube root of x, and the natural log of x\"    The function grows more slowly than for any as .   "
},
{
  "id": "tab-lograteofgrowth2",
  "level": "2",
  "url": "sec_Ch4Sec8.html#tab-lograteofgrowth2",
  "type": "Table",
  "number": "4.8.31",
  "title": "A logarithmic function grows at a slower rate than any root function.",
  "body": "                               A logarithmic function grows at a slower rate than any root function.  "
},
{
  "id": "sec_exp_func",
  "level": "1",
  "url": "sec_exp_func.html",
  "type": "Section",
  "number": "5.1",
  "title": "Derivatives of Exponential Functions (check if table headers needed)",
  "body": " Derivatives of Exponential Functions (check if table headers needed)   Now that we understand how derivatives interact with products and quotients, we are able to compute derivatives of  polynomials,  rational functions, and  powers and roots of rational functions.  Notice that all of the above come from knowing Differentiating powers and roots of functions is actually quite a bit easier once one knows the chain rule which we will discuss soon. the derivative of and applying linearity of derivatives and the product rule.  There is still one more rule that we need to complete our toolbox and that is the chain rule. However before we get there, we will add a few functions to our list of things we can differentiate One reason we add these functions is that they interact very nicely with the derivative. Another reason is that they turn up in many real world examples. . The first of these is the exponential function.  Let and set  this is what is known as an exponential function. Let's see what happens when we try to compute the derivative of this function just using the definition of the derivative. Unfortunately we cannot complete this computation because we cannot evaluate the last limit directly. For the moment, let us assume this limit exists and name it It depends only on and is completely independent of . Using this notation (which we will quickly improve upon below), our desired derivative is now Thus the derivative of is multiplied by some constant i.e. the function is nearly unchanged by differentiating. If we can tune so that then the derivative would just be the original function! This turns out to be very useful.  To try finding an that obeys , let us investigate how changes with . Unfortunately (though this fact is not at all obvious) there is no way to write as a finite combination of any of the functions we have examined so far To a bit more be precise, we say that a number is algebraic if we can write as the zero of a polynomial with integer coefficients. When is any positive algebraic number other than , is not algebraic. A number that is not algebraic is called transcendental. The best known example of a transcendental number is (which follows from the Lindemann-Weierstrass Theorem way beyond the scope of this course). . To get started, we'll try to guess , for a few values of , by plugging in some small values of .  Estimates of  Let then . This is not surprising since is constant, and so its derivative must be zero everywhere. Let then . Setting to smaller and smaller numbers gives      0.1 0.01 0.001 0.0001 0.00001 0.000001 0.0000001    0.7177 0.6956 0.6934 0.6932 0.6931 0.6931 0.6931     Similarly when we get      0.1 0.01 0.001 0.0001 0.00001 0.000001 0.0000001    1.1612 1.1047 1.0992 1.0987 1.0986 1.0986 1.0986     and      0.1 0.01 0.001 0.0001 0.00001 0.000001 0.0000001    2.5893 2.3293 2.3052 2.3028 2.3026 2.3026 2.3026     From this example it appears that increases as we increase , and that for some value of between and .   We can learn a lot more about , and, in particular, confirm the guesses that we made in the last example, by making use of logarithms this would be a good time for you to review them.   Whirlwind Review of Logarithms   Before you read much further into this little review on logarithms, you should first go back and take a look at the review of inverse functions in Section .   Logarithmic Functions  We are about to define the logarithm with base . In principle, is allowed to be any strictly positive real number, except . However we shall restrict our attention to , because, in practice, the only 's that are ever used are (a number that we shall define in the next few pages), and, if you are a computer scientist, . So, fix any (if you like, pretend that ). The function   increases as increases (for example if , then since )  obeys (for example is really small) and  obeys (for example is really big).  Consequently, for any , the horizontal straight line crosses the graph of at exactly one point, as illustrated in the figure below.     The coordinate of that intersection point, denoted in the figure, is . So is the power to which you have to raise to get . It is the inverse function of . Of course we are free to rename the dummy variables and . If, for example, we wish to graph our logarithm function, it is natural to rename and , giving   Let . Then the logarithm with base is defined We can also define logarithms with base but doing so is not necessary. To see this, set . Then it is reasonable to define since as required. by    Obviously the power to which we have to raise to get is , so we have both From the exponential properties we have     Can we convert from logarithms in one base to logarithms in another? For example, if our calculator computes logarithms base 10 for us (which it very likely does), can we also use it to compute a logarithm base ? Yes, using How did we get this? Well, let's start with a number and suppose that we want to compute We can rearrange this by exponentiating both sides Now take log base 10 of both sides But recall that , so     Back to that Limit  Recall that we are trying to choose so that We can estimate the correct value of by using our numerical estimate of above. The way to do this is to first rewrite in terms of logarithms. Using this we rewrite as Now set , and notice that as we also have Below is a sketch of against .      Remember that we are trying to find an with . We can do so by recognising that has the following properties.  When , so that . Of course, we should have expected this, because when we have which is just the constant function and .   increases as increases, and hence increases as increases.   tends to as , and hence tends to as .  Hence the graph of passes through , is always increasing as increases and goes off to as goes off to . See Figure . Consequently We are applying the Intermediate Value Theorem here, but we have neglected to verify the hypothesis that is a continuous function. Please forgive us we could do this if we really had to, but it would make a big mess without adding much understanding, if we were to do so here in the text. Better to just trust us on this. there is exactly one value of for which .  The value of for which is given the name . It is called Euler's constant Unfortunately there is another Euler's constant, , which is more properly called the Euler Mascheroni constant. Anyway like many mathematical discoveries, was first found by someone else Napier used the constant in order to compute logarithms but only implicitly. Bernoulli was probably the first to approximate it when examining continuous compound interest. It first appeared explicitly in work of Leibniz, though he denoted it . It was Euler, though, who established the notation we now use and who showed how important the constant is to mathematics. . In Example , we estimated . So if we assume then the above equation becomes This gives us the estimate which is not too bad. In fact Recall factorial, written is the product .   Euler's constant     We will be able to explain this last formula once we develop Taylor polynomials later in the course.  To summarize   The constant is the unique real number that satisfies Further,    We plot in the graph below     And just a reminder of some of its The function is of course the special case of the function with . So it inherits all the usual algebraic properties of . properties                ,     Now consider again the problem of differentiating . We saw above that We can eliminate the term with a little care. Since we know that , we have . This allows us to express Putting things back together gives There is more than one way to get to this result. For example, let , then So if we write then we are really attempting to differentiate the function In order to compute this derivative we need to know how to differentiate where is a constant. We'll hold off on learning this for the moment until we have introduced the chain rule (see Section . Similarly we'd like to know how to differentiate logarithms again this has to wait until we have learned the chain rule.  Notice that the derivatives are either nearly unchanged or actually unchanged by differentiating. It turns out that some of the trigonometric functions also have this property of being nearly unchanged by differentiation. That brings us to the next section.    "
},
{
  "id": "eg_log_est",
  "level": "2",
  "url": "sec_exp_func.html#eg_log_est",
  "type": "Example",
  "number": "5.1.1",
  "title": "Estimates of <span class=\"process-math\">\\(C(a)\\)<\/span>.",
  "body": "Estimates of  Let then . This is not surprising since is constant, and so its derivative must be zero everywhere. Let then . Setting to smaller and smaller numbers gives      0.1 0.01 0.001 0.0001 0.00001 0.000001 0.0000001    0.7177 0.6956 0.6934 0.6932 0.6931 0.6931 0.6931     Similarly when we get      0.1 0.01 0.001 0.0001 0.00001 0.000001 0.0000001    1.1612 1.1047 1.0992 1.0987 1.0986 1.0986 1.0986     and      0.1 0.01 0.001 0.0001 0.00001 0.000001 0.0000001    2.5893 2.3293 2.3052 2.3028 2.3026 2.3026 2.3026     From this example it appears that increases as we increase , and that for some value of between and .  "
},
{
  "id": "def_2_7_1",
  "level": "2",
  "url": "sec_exp_func.html#def_2_7_1",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": " Let . Then the logarithm with base is defined We can also define logarithms with base but doing so is not necessary. To see this, set . Then it is reasonable to define since as required. by   "
},
{
  "id": "fig_CofA2",
  "level": "2",
  "url": "sec_exp_func.html#fig_CofA2",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": "   "
},
{
  "id": "eq_eulerconst",
  "level": "2",
  "url": "sec_exp_func.html#eq_eulerconst",
  "type": "Fact",
  "number": "5.1.4",
  "title": "Euler’s constant.",
  "body": "Euler's constant    "
},
{
  "id": "sec_exp_func-4-9",
  "level": "2",
  "url": "sec_exp_func.html#sec_exp_func-4-9",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": " The constant is the unique real number that satisfies Further,   "
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
