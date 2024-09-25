def add_time(start, duration, day=""):
    weekdays = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ]

    # get hours and minutes for calculation
    start_hours = int(start.split(":")[0])+(12 if start.split(" ")[1]=="PM" else 0)
    start_minutes =  int(start.split(":")[1].split(" ")[0])
    duration_hours = int(duration.split(":")[0])
    duration_minutes = int(duration.split(":")[1])

    # calculate new time and the days after
    total_minutes = start_minutes + duration_minutes
    total_hours = start_hours + duration_hours
    total_hours += total_minutes // 60

    after_minutes = total_minutes % 60
    after_hours = total_hours % 24
    
    days_after = total_hours // 24

    # beatify the output
    
    #print(after_minutes)
    #print(after_hours)

    new_time = f'{(12 if after_hours == 12 or after_hours == 0 else after_hours%12)}:{after_minutes:02}'
    new_time += " PM" if after_hours // 12 > 0 else " AM"
    
    if(day.lower() in weekdays):
        after_day = weekdays[((weekdays.index(day.lower())+1+days_after)%7)-1]
        new_time += f', {after_day.capitalize()}'

    if(days_after == 1):
        new_time += f' (next day)'
    elif(days_after > 1):
        new_time += f' ({days_after} days later)'
    print(new_time)



    return new_time

add_time('3:00 PM', '3:10')
# Returns: 6:10 PM

add_time('11:30 AM', '2:32', 'Monday')
# Returns: 2:02 PM, Monday

add_time('11:43 AM', '00:20')
# Returns: 12:03 PM

add_time('10:10 PM', '3:30')
# Returns: 1:40 AM (next day)

add_time('11:43 PM', '24:20', 'tueSday')
# Returns: 12:03 AM, Thursday (2 days later)

add_time('6:30 PM', '205:12')
# Returns: 7:42 AM (9 days later)

add_time('8:16 PM', '466:02')
# Returns : '6:18 AM (20 days later)'

add_time('2:59 AM', '24:00', 'saturDay')
