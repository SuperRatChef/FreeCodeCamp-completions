import copy
import random


class Hat:
    def __init__(self,**kwargs):
    #A hat will always be created with at least one ball. The 
    #arguments passed into the hat object upon creation 
    #should be converted to a contents instance variable. 
    #contents should be a list of strings containing one item 
    #for each ball in the hat. 
        self.contents = []
        self.removed = []
        for k, v in kwargs.items():
            k = [k] * v
            self.contents.extend(k)

    def draw(self, balls_drawn):
        if balls_drawn < len(self.contents):
            for n in range(balls_drawn):
                self.removed += [self.contents.pop(random.randrange(len(self.contents)))]             
            return self.removed
        self.removed = copy.copy(self.contents)
        self.contents.clear()
        return self.removed    


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):

    count = 0 

    for _ in range(num_experiments):
        super_hat = copy.deepcopy(hat)
        draw = super_hat.draw(num_balls_drawn) 
        color_count = 0   

        for i in expected_balls.keys():
            if draw.count(i)>= expected_balls[i]:
                color_count +=1 
            if color_count == len(expected_balls):
                count+=1
    probability = count/num_experiments
    return probability


hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={'red':2,'green':1},
                  num_balls_drawn=5,
                  num_experiments=2000)
print(probability)