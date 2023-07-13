import { Component, OnInit } from '@angular/core';
import { MatchlistService } from '../service/matchlist.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  dates: Date[] = []
  matchList: any;
  activeDate: any;
  leaugeList: any;
  selectedButton: Date | null = null;

  constructor(private matchlistService: MatchlistService, private router: Router) {
    this.generateDates()
    this.activeDate = new Date();
  }

  ngOnInit(): void {
   
  }

  generateDates() {
    const currentDate = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i);
      this.dates.push(date);
    }

  }

  selectDate(date: Date) {
    const selectedDate = date.toISOString().split('T')[0];

    this.matchlistService.getmatchlist().subscribe((res) => {
      console.log(res);

      const matchArray = Object.values(res);
      const filteredMatches = matchArray.filter((match: any) => {
        const matchDate = new Date(match.MatchDate);
        return matchDate.toISOString().split('T')[0] === selectedDate;
      });

      this.matchList = filteredMatches.map((match: any) => ({
        country: match.Country,
        leagueName: match.LeagueName,
        team1: match.Team1Name,
        team2: match.Team2Name,
        matchId: match.MatchId,
        dateTime: this.convertUtcToLocalDateTime(match.KickOffUtc)
      }));
      console.log(this.matchList);

    });
    this.selectedButton = date;
  }

  convertUtcToLocalDateTime(utcDateTime: string): string {
    const date = new Date(utcDateTime);
    const localDateTime = date.toLocaleString();

    return localDateTime;
  }
  
}
