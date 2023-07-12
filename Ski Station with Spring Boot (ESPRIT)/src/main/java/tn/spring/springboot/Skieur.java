package tn.spring.springboot;


import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Skieur")
public class Skieur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idSkieur")
    private int idSkieur ;

    @Column(name="numero_skieur")
    private long numSkieur ;
    @Column(name="nom_skieur")
    private String nomS ;
    @Column(name="prenom_skieur")
    private String prenomS ;
    @Temporal (TemporalType.DATE)
    private Date dateNaissance;
    @Column(name="ville")
    private String ville ;


    @OneToOne
    private Abonnement Abonn ;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "Skieur")
    private Set<Inscription> inscriptions ;

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Piste> pistes ;



    public int getIdSkieur() {
        return idSkieur;
    }

    public void setIdSkieur(int idSkieur) {
        this.idSkieur = idSkieur;
    }

    public long getNumSkieur() {
        return numSkieur;
    }

    public void setNumSkieur(long numSkieur) {
        this.numSkieur = numSkieur;
    }

    public String getNomS() {
        return nomS;
    }

    public void setNomS(String nomS) {
        this.nomS = nomS;
    }

    public String getPrenomS() {
        return prenomS;
    }

    public void setPrenomS(String prenomS) {
        this.prenomS = prenomS;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }
}
