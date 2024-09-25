class Category:

    def __init__(self, name):
        self.name = name
        self.ledger = []

    def get_balance(self):
        balance = sum(action['amount'] for action in self.ledger )
        return balance

    def check_funds(self, amount):
        if(self.get_balance() - amount >= 0):
            return True
        else:
            return False

    def deposit(self, amount, description = ""):
        self.ledger.append({'amount': amount, 'description': description})



    def withdraw(self, amount, description = ""):
        if self.check_funds(amount):
            self.ledger.append({'amount': -amount, 'description': description})
            return True
        else:
            return False

    def transfer(self, amount, budget):
        if self.check_funds(amount):
            budget.deposit(amount, f'Transfer from {self.name}')
            self.withdraw(amount, f'Transfer to {budget.name}')
            return True
        else:
            return False
    
    def __str__(self):
        pr = f'{self.name:*^30}\n'
        for action in self.ledger:
            pr += f'{action["description"][:23]:<23}{action["amount"]:>7.2f}\n'
        pr += f'Total: {self.get_balance()}'
        return pr

def create_spend_chart(categories):

    bar_chart = "Percentage spent by category\n"

    categories_withdrawals = []
    total_withdrawals = 0
    for category in categories:
        amount_spent = 0
        for action in category.ledger:
            if action['amount'] < 0:
                amount_spent += -action['amount']
                
        total_withdrawals += amount_spent
        categories_withdrawals.append((category.name , amount_spent))
        
    for percentage in range(100, -1, -10):
        bar_chart += f"{percentage:>3}|"
        for category in categories_withdrawals:
            if(percentage <= category[1]/total_withdrawals*100):
                bar_chart += " o "
            else:
                bar_chart += "   "
        bar_chart += " \n"

    bar_chart += "    "+("-"*(3*len(categories_withdrawals)))+"-\n"
    

    longest_word = max([category[0] for category in categories_withdrawals], key=len)

    for i in range(len(longest_word)):
        bar_chart += "    "
        for word in [category[0] for category in categories_withdrawals]:
            try: 
                bar_chart += " "+word[i]+" "
            except:
                bar_chart += "   "
            
        if i == len(longest_word)-1:
            bar_chart += " "
        else:
            bar_chart += " \n"
    print(bar_chart)
    return bar_chart
    

food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
print(food)
create_spend_chart([food, clothing])