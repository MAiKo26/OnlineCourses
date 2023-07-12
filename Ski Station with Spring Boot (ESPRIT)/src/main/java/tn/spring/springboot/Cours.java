package tn.spring.springboot;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "Cours")
public class Cours implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCours")
    private int idCours ;

    private long numCours ;
    private int niveau ;
    private TypeCours typeCours ;
    private Support support ;
    private float prix ;
    private int creneau ;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "cours")
    private Set<Inscription> inscriptions ;


    @ManyToOne(cascade = CascadeType.ALL)
    Moniteur Moniteur ;




    public int getIdCours() {
        return idCours;
    }

    public void setIdCours(int idCours) {
        this.idCours = idCours;
    }

    public long getNumCours() {
        return numCours;
    }

    public void setNumCours(long numCours) {
        this.numCours = numCours;
    }

    public int getNiveau() {
        return niveau;
    }

    public void setNiveau(int niveau) {
        this.niveau = niveau;
    }

    public TypeCours getTypeCours() {
        return typeCours;
    }

    public void setTypeCours(TypeCours typeCours) {
        this.typeCours = typeCours;
    }

    public Support getSupport() {
        return support;
    }

    public void setSupport(Support support) {
        this.support = support;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public int getCreneau() {
        return creneau;
    }

    public void setCreneau(int creneau) {
        this.creneau = creneau;
    }
}
