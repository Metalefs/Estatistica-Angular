import { Component, OnInit } from '@angular/core';
import { ProjectsService, project } from 'src/app/shared/projects.service';
import { WikiService, WikiSummary } from '../../shared/wiki.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects:project[];
  constructor(private projectsService:ProjectsService, private homeService:WikiService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.projects;

    this.projects.forEach(proj=>{
      this.obterDescricaoWikipedia(proj);
    })
  }

  obterDescricaoWikipedia(project:project){
    return this.homeService.getWikiPage(project.name).subscribe(result => {project.wiki = result;});
  }
}
