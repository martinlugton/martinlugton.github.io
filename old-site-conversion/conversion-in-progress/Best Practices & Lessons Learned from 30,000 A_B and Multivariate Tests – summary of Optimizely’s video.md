---
title: "Best Practices & Lessons Learned from 30,000 A/B and Multivariate Tests – summary of Optimizely’s video"
permalink: /best-practices-lessons-learned-30000-ab-multivariate-tests-summary-optimizely-video
date: 2014-03-22T11:15:00+00:00
---

# Best Practices & Lessons Learned from 30,000 A/B and Multivariate Tests – summary of Optimizely’s video

Optimizely’s Best Practices & Lessons Learned from 30,000 A/B and Multivariate Tests video is an advert for A/B testing in general, and for Optimizely [Optimizely](https://www.optimizely.com/) as a tool for running and creating tests.

<iframe title="Best Practices & Lessons Learned from 30,000 A/B and Multivariate Tests" width="640" height="480" src="Best%20Practices%20&amp;%20Lessons%20Learned%20from%2030,000%20A_B%20and%20Multivariate%20Tests%20%E2%80%93%20summary%20of%20Optimizely%E2%80%99s%20video%20%E2%80%93%20Martin%20Lugton_files/7xV7dlwMChc.htm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

This video features some useful examples of multivariate tests done during the Obama campaign. Here’s my summary:

1. **Nothing is sacred. Question assumptions**
2. **Explore before you refine**
3. **Less is more**  
   Some content experiments:  
   - One Kings Lane: Removing 2 fields led to an 8.4% increase in signups
   - Clinton Bush Haiti Fund: Removing title field and phone number field saw a 10.9% increase in the $value of each visitor’s donation
   - AVG Australia: Removing links from the checkout process increased the $ value of each visitor by 16.8%
4. **Words matter. Focus on your call to action.**  
   - Donate Now, Please Donate, Why Donate?, Donate and Get a Gift, Contribute: which is better? The status of the individual makes a difference to which of these options is most effective: new people respond best to “Donate and Get a Gift” (+15.2% $ per pageview compared to Donate Now); people who have signed up but never donated responded best to “Please Donate” (+27.8%), and people who have previously donated responded best to “Contribute” (+18.4%)
   - Clinton Bush Haiti Fund’s donate form – changing the confirmation button from “Submit” to “Support Haiti” increased $ per visitor by 15.75%.
5. **Fail Fast**  
   You can get statistically significant results very quickly.
6. **Start Today**

- **Q: How many variations should you test at once?**  
  Tradeoff between breadth of test and speed of reaching statistical significance.  
  A good starting point is to test with 4 variations, then take the top 2 and test them again.
- **Q: What percentage of website traffic should you allocate to a test?**  
  You can control this per experiment.  
  They recommend allocating as much as you can, to reach statistical significance sooner.
- **Q: Can you target specific types of visitors?**  
  You can choose to target all, new, or returning visitors.
- **Q: How do you target paid traffic?**  
  Do this with the targeting interface: trigger by origin location, or match certain query parameters (eg utm_source)
- **Q: How do you test dynamic pages?**  
  Go to interactive mode to make the dynamic stuff happen.  
  OR  
  Tell us when you want to activate optimizely. By default it loads on page load; but you can activate it manually through the API.
- **Q: Does Optimizely work for pages behind logins or paywalls?**  
  Yes, as long as you’ve added the snippet to the page.
- **Q: How do you test big changes to a page, or test a new page against an old one?**  
  If you want to test a big change to a page, or test against an old page, you can make it so that visitors selected for a specific variation are redirected to another URL. (Make sure that the snippet is on both pages)
- **Q: How do you test server-side changes?** i.e. where the variations are reflected on the backend and not just on the front end (eg graphics). Eg price variations.  
  A: Optimizely wants to improve at this. Most people doing this currently set up two different pages, and set up a javascript gate on the front end to pass 50% of visitors to one page, the other 50% go to the other.  
  See [Optimizely Tutorials](https://www.optimizely.com/docs/tutorials) and [Optimizely Developers](http://developers.optimizely.com/javascript/)
- **Q: How soon to pull the plug on a variation when it looks like it’s not performing well?**  
  A: Wait until you get statistical significance. The early days of a test may not be truly representative.