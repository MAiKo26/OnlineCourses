package tn.spring.springboot;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Moniteur")
public class Moniteur implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMoniteur")
    private int idMoniteur ;

    private long numMoniteur ;
    private String nomM ;
    private String prenomM ;
    @Temporal (TemporalType.DATE)
    private Date dateRecru;



    @OneToMany(cascade = CascadeType.ALL, mappedBy = "Moniteur")
    private Set<Cours> cours;


    public int getIdMoniteur() {
        return idMoniteur;
    }

    public void setIdMoniteur(int idMoniteur) {
        this.idMoniteur = idMoniteur;
    }

    public long getNumMoniteur() {
        return numMoniteur;
    }

    public void setNumMoniteur(long numMoniteur) {
        this.numMoniteur = numMoniteur;
    }

    public String getNomM() {
        return nomM;
    }

    public void setNomM(String nomM) {
        this.nomM = nomM;
    }

    public String getPrenomM() {
        return prenomM;
    }

    public void setPrenomM(String prenomM) {
        this.prenomM = prenomM;
    }

    public Date getDateRecru() {
        return dateRecru;
    }

    public void setDateRecru(Date dateRecru) {
        this.dateRecru = dateRecru;
    }
}
