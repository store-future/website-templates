import csv

input_file = "contacts.csv"
output_file = "filtered_contacts.csv"

# ✅ Take keywords
keywords = input("\nPress Enter to accept default keyword - *python or hr * \nKeyword Enter keywords (space separated) : ").strip().lower().split()

if not keywords:
    keywords = ["python", "hr"]  # If no keywords, match all rows

with open(input_file, mode='r', newline='', encoding='utf-8') as infile:
    reader = csv.DictReader(infile)
    fieldnames = reader.fieldnames

    filtered_rows = []

    for row in reader:
        # ✅ Combine entire row into one string
        combined_text = " ".join(str(value) for value in row.values()).lower()

        # ✅ Check if ANY keyword exists
        if any(keyword in combined_text for keyword in keywords):
            filtered_rows.append(row)

    print(f"\nFiltered {len(filtered_rows)} rows\n")


with open(output_file, mode='w', newline='', encoding='utf-8') as outfile:
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(filtered_rows)

print(f"Saved to {output_file}\n")