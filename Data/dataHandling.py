import pandas as pd 

match_data = pd.read_csv('ICC_Mens_T20_Worldcup.csv')
venue_data = pd.read_csv('2024T20_WorldCup_Venues.csv')

venue_score = match_data.groupby('Venue Stadium')['First Innings Score'].mean().reset_index()
venue_score.columns = ['Venue Stadium', 'avg_score']

final_data = venue_data.merge(venue_score, on='Venue Stadium', how='left')

final_data.to_csv('2024T20_WorldCup_Venues_with_avg_score.csv', index=False)