import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatchlistService } from '../service/matchlist.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
interface Match {
  id: string;
  
}
@Component({
  selector: 'app-match-information',
  templateUrl: './match-information.component.html',
  styleUrls: ['./match-information.component.scss']
})
export class MatchInformationComponent implements OnInit{
  
  match: any;
  matchid: any

  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient, private matchlistService: MatchlistService){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.match = param.get('id')
      console.log(this.match);
      this.http.get<any[]>('http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1').subscribe(
      (res: any[]) => {
        // Find the match with the specified matchId
        this.matchid = res.find((x: any) => x.matchId === this.match);
        console.log(this.matchid);
      })
      
    })
    
  }

  
  

  onclick(){
    this.router.navigate(['/matches'])
  }
  
}
