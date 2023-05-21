import csv

# Read the CSV file
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    rows = list(reader)

# Generate HTML
html = '<ul>\n'
for row in rows:
    title = row[0]
    link = row[1]
    description = row[2]
    version = row[3]

    html += '  <li>\n'
    html += f'    <a href="{link}" target="_blank">{title}</a>\n'
    html += f'    <p>{description}'
    html += f'    <u>הגרסה הנוכחית היא {version}</u></p> \n'
    html += '  </li>\n'

html += '</ul>'

# Write HTML to a file
with open('output.html', 'w') as file:
    file.write(html)
